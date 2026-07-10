(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime-types.d.ts" />
/// <reference path="../../runtime/base/dev-globals.d.ts" />
/// <reference path="../../runtime/base/dev-protocol.d.ts" />
/// <reference path="../../runtime/base/dev-extensions.ts" />
__turbopack_context__.s([
    "connect",
    ()=>connect,
    "setHooks",
    ()=>setHooks,
    "subscribeToUpdate",
    ()=>subscribeToUpdate
]);
function connect({ addMessageListener, sendMessage, onUpdateError = console.error }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case 'turbopack-connected':
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: 'turbopack-subscribe',
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: 'turbopack-unsubscribe',
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added,
            deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: 'partial',
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: 'added',
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: 'deleted',
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
const CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
"[project]/frontend/src/components/Navbar/style.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "buttonJoin": "style-module__iJorKq__buttonJoin",
  "container": "style-module__iJorKq__container",
  "navBar": "style-module__iJorKq__navBar",
  "navBarOptionContainer": "style-module__iJorKq__navBarOptionContainer",
});
}),
"[project]/frontend/src/config/index.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BASE_URL",
    ()=>BASE_URL,
    "clientServer",
    ()=>clientServer
]);
const { default: axios } = __turbopack_context__.r("[project]/frontend/node_modules/axios/dist/browser/axios.cjs [client] (ecmascript)");
const BASE_URL = "http://localhost:5001";
const clientServer = axios.create({
    baseURL: BASE_URL
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/config/redux/action/authAction/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AcceptConnection",
    ()=>AcceptConnection,
    "addEducation",
    ()=>addEducation,
    "getAboutUser",
    ()=>getAboutUser,
    "getAllUsers",
    ()=>getAllUsers,
    "getConnectionRequest",
    ()=>getConnectionRequest,
    "getMyConnectionRequest",
    ()=>getMyConnectionRequest,
    "googleLogin",
    ()=>googleLogin,
    "loginUser",
    ()=>loginUser,
    "registerUser",
    ()=>registerUser,
    "sendConnectionRequest",
    ()=>sendConnectionRequest,
    "toggleLike",
    ()=>toggleLike
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/config/index.jsx [client] (ecmascript)");
;
;
const googleLogin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("auth/googleLogin", async ({ idToken }, { rejectWithValue })=>{
    try {
        const response = await axios.post("/api/auth/google", {
            idToken
        });
        // adjust base URL / path to match your loginUser action's endpoint
        if (("TURBOPACK compile-time value", "object") !== "undefined" && response.data.token) {
            localStorage.setItem("token", response.data.token);
        }
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || {
            message: "Google login failed"
        });
    }
});
const loginUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("user/login", async (user, thunkAPI)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["clientServer"].post("/login", {
            email: user.email,
            password: user.password
        });
        if (response.data.token) {
            localStorage.setItem("token", response.data.token);
        } else {
            return thunkAPI.rejectWithValue({
                message: "Token not provided"
            });
        }
        return thunkAPI.fulfillWithValue(response.data.token);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});
const registerUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("user/register", async (user, thunkAPI)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["clientServer"].post("/register", {
            username: user.username,
            password: user.password,
            email: user.email,
            name: user.name
        });
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data);
    }
});
const getAboutUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("user/getAboutUser", async (user, thunkAPI)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["clientServer"].get("/get_user_and_profile", {
            params: {
                token: user.token
            }
        });
        return thunkAPI.fulfillWithValue(response.data);
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data);
    }
});
const getAllUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("user/getAllUsers", async (_, thunkAPI)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["clientServer"].get("/user/get_all_users");
        return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});
const getConnectionRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("user/getConnectionRequest", async (user, thunkAPI)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["clientServer"].get("/user/getConnectionRequests", {
            params: {
                token: user.token
            }
        });
        return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
});
const sendConnectionRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("user/sendConnectionRequest", async (user, thunkAPI)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["clientServer"].post("/user/send_connection_request", {
            token: user.token,
            connectionId: user.connectionId
        });
        thunkAPI.dispatch(getConnectionRequest({
            token: user.token
        }));
        return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
});
const getMyConnectionRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("user/getMyConnectionRequest", async (user, thunkAPI)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["clientServer"].get("/user/user_connection_request", {
            params: {
                token: user.token
            }
        });
        return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
});
const AcceptConnection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("user/acceptConnection", async (user, thunkAPI)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["clientServer"].post("/user/accept_connection_request", {
            token: user.token,
            requestId: user.connectionId,
            action_type: user.action
        });
        thunkAPI.dispatch(getConnectionRequest({
            token: user.token
        }));
        thunkAPI.dispatch(getConnectionRequests({
            token: user.token
        }));
        return thunkAPI.fulfillWithValue(response.data);
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data.message);
    }
});
const addEducation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("user/addEducation", async (educationData, thunkAPI)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["clientServer"].post("/add_education", {
            token: localStorage.getItem("token"),
            school: educationData.school,
            degree: educationData.degree,
            fieldOfStudy: educationData.fieldOfStudy,
            startDate: educationData.startDate,
            endDate: educationData.endDate,
            grade: educationData.grade,
            description: educationData.description
        });
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data);
    }
});
const toggleLike = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("post/toggleLike", async ({ token, postId }, thunkAPI)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["clientServer"].post("/toggle_like", {
            token,
            post_id: postId
        });
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data);
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/config/redux/reducer/authReducer/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "emptyMessage",
    ()=>emptyMessage,
    "reset",
    ()=>reset,
    "setTokenIsNotThere",
    ()=>setTokenIsNotThere,
    "setTokenIsThere",
    ()=>setTokenIsThere
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/config/redux/action/authAction/index.js [client] (ecmascript)");
;
;
const initialState = {
    user: undefined,
    isError: false,
    isSuccess: false,
    isLoading: false,
    loggedIn: false,
    message: "",
    isTokenThere: false,
    profileFetched: false,
    connections: [],
    connectionRequests: [],
    all_users: [],
    all_profiles_fetched: false
};
const authSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "auth",
    initialState,
    reducers: {
        reset: ()=>initialState,
        handleLoginUser: (state)=>{
            state.message = "hello";
        },
        emptyMessage: (state)=>{
            state.message = "";
        },
        setTokenIsThere: (state)=>{
            state.isTokenThere = true;
        },
        setTokenIsNotThere: (state)=>{
            state.isTokenThere = false;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["loginUser"].pending, (state)=>{
            state.isLoading = true;
            state.message = "Knocking the door....";
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["loginUser"].fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.loggedIn = true;
            state.message = "login is Successfull";
            state.isError = false;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["loginUser"].rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload?.message || "Login failed";
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["registerUser"].pending, (state)=>{
            state.isLoading = true;
            state.message = "Registering you.....";
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["registerUser"].fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.loggedIn = false;
            state.message = {
                message: "Registration is Successfull, Please login in"
            };
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["registerUser"].rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload?.message || "Registration failed";
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["googleLogin"].pending, (state)=>{
            state.isLoading = true;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["googleLogin"].fulfilled, (state, action)=>{
            state.isLoading = false;
            state.loggedIn = true;
            state.isError = false;
            state.message = action.payload;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["googleLogin"].rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.loggedIn = false;
            state.message = action.payload;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAboutUser"].fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.profileFetched = true;
            state.user = action.payload.profile;
        // state.connections = action.payload.connections
        // state.connectionRequests = action.payload.connectionRequests
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAllUsers"].fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isError = false;
            state.all_profiles_fetched = true;
            state.all_users = action.payload;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getConnectionRequest"].fulfilled, (state, action)=>{
            state.connections = action.payload;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getConnectionRequest"].rejected, (state, action)=>{
            state.message = action.payload;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getMyConnectionRequest"].fulfilled, (state, action)=>{
            state.connectionRequests = action.payload;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getMyConnectionRequest"].rejected, (state, action)=>{
            state.message = action.payload;
        }).addCase(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["addEducation"].fulfilled, (state, action)=>{
            state.message = action.payload.message;
        });
    }
});
const { reset, emptyMessage, setTokenIsThere, setTokenIsNotThere } = authSlice.actions;
const __TURBOPACK__default__export__ = authSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/Navbar/index.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavBarComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Navbar$2f$style$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Navbar/style.module.css [client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-redux/dist/react-redux.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$reducer$2f$authReducer$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/config/redux/reducer/authReducer/index.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function NavBarComponent() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const authState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "NavBarComponent.useSelector[authState]": (state)=>state.auth
    }["NavBarComponent.useSelector[authState]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Navbar$2f$style$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].container,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Navbar$2f$style$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].navBar,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    style: {
                        cursor: "pointer"
                    },
                    onClick: ()=>{
                        router.push("/");
                    },
                    children: "Pro connect"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/Navbar/index.jsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Navbar$2f$style$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].navBarOptionContainer,
                    children: [
                        authState.profileFetched && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "1.2rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Hey, ",
                                            authState.user.userId.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/Navbar/index.jsx",
                                        lineNumber: 29,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        onClick: ()=>{
                                            router.push("/profile");
                                        },
                                        style: {
                                            fontWeight: "bold",
                                            cursor: "pointer"
                                        },
                                        children: "Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Navbar/index.jsx",
                                        lineNumber: 30,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        onClick: ()=>{
                                            localStorage.removeItem("token");
                                            router.push("/login");
                                            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$reducer$2f$authReducer$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["reset"])());
                                        },
                                        style: {
                                            fontWeight: "bold",
                                            cursor: "pointer"
                                        },
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Navbar/index.jsx",
                                        lineNumber: 34,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/Navbar/index.jsx",
                                lineNumber: 28,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Navbar/index.jsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this),
                        !authState.profileFetched && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>{
                                router.push("/login");
                            },
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Navbar$2f$style$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].buttonJoin,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Be a part"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Navbar/index.jsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Navbar/index.jsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/Navbar/index.jsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/Navbar/index.jsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/Navbar/index.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(NavBarComponent, "e+EMObc2/ECw8bJAroUlGNl0KnQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = NavBarComponent;
var _c;
__turbopack_context__.k.register(_c, "NavBarComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/layout/UserLayout/index.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Navbar$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Navbar/index.jsx [client] (ecmascript)");
;
;
;
function UserLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Navbar$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/frontend/src/layout/UserLayout/index.jsx",
                lineNumber: 7,
                columnNumber: 13
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/layout/UserLayout/index.jsx",
        lineNumber: 6,
        columnNumber: 9
    }, this);
}
_c = UserLayout;
const __TURBOPACK__default__export__ = UserLayout;
var _c;
__turbopack_context__.k.register(_c, "UserLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/pages/login/style.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "buttonWithOutline": "style-module__LL_S9a__buttonWithOutline",
  "cardContainer": "style-module__LL_S9a__cardContainer",
  "cardContainer__left": "style-module__LL_S9a__cardContainer__left",
  "cardContainer__right": "style-module__LL_S9a__cardContainer__right",
  "cardleft__heading": "style-module__LL_S9a__cardleft__heading",
  "container": "style-module__LL_S9a__container",
  "divider": "style-module__LL_S9a__divider",
  "dividerLine": "style-module__LL_S9a__dividerLine",
  "dividerText": "style-module__LL_S9a__dividerText",
  "error": "style-module__LL_S9a__error",
  "errorInput": "style-module__LL_S9a__errorInput",
  "fadeIn": "style-module__LL_S9a__fadeIn",
  "googleButton": "style-module__LL_S9a__googleButton",
  "googleButtonWrap": "style-module__LL_S9a__googleButtonWrap",
  "inputContainers": "style-module__LL_S9a__inputContainers",
  "inputField": "style-module__LL_S9a__inputField",
  "inputGroup": "style-module__LL_S9a__inputGroup",
  "inputRow": "style-module__LL_S9a__inputRow",
});
}),
"[project]/frontend/src/pages/login/index.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
// import UserLayout from "@/layout/UserLayout";
// import { useRouter } from "next/router";
// import React, { useEffect } from "react";
// import styles from "./style.module.css";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser, registerUser } from "@/config/redux/action/authAction";
// import { emptyMessage } from "@/config/redux/reducer/authReducer";
// function LoginComponent() {
//   const authState = useSelector((state) => state.auth);
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const [userLoginMethod, setUserLoginMethod] = useState(false);
//   const [email, setEmailAddress] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [name, setName] = useState("");
//   // useEffect(() => {
//   //   if (localStorage.getItem("token")) {
//   //     router.push("/dashboard");
//   //   }
//   // }, []);
//   useEffect(() => {
//     console.log("loggedIn =", authState.loggedIn);
//     if (authState.loggedIn) {
//       console.log("AUTH REDIRECT");
//       router.push("/dashboard");
//     }
//   }, [authState.loggedIn]);
//   useEffect(() => {
//     dispatch(emptyMessage());
//   }, [userLoginMethod, dispatch]);
//   const handleRegister = () => {
//     console.log("registering");
//     dispatch(
//       registerUser({
//         username,
//         name,
//         email,
//         password,
//       }),
//     );
//   };
//   const handleLogin = () => {
//     console.log("login...");
//     dispatch(
//       loginUser({
//         email,
//         password,
//       }),
//     );
//   };
//   return (
//     <UserLayout>
//       <div className={styles.container}>
//         <div className={styles.cardContainer}>
//           <div className={styles.cardContainer__left}>
//             <p className={styles.cardleft__heading}>
//               {userLoginMethod ? "Sign In" : "Sign Up"}
//             </p>
//             <p style={{ color: authState.isError ? "red" : "green" }}>
//               {" "}
//               {authState.message?.message}
//             </p>
//             <div className={styles.inputContainers}>
//               {!userLoginMethod && (
//                 <div className={styles.inputRow}>
//                   <input
//                     onChange={(e) => setUsername(e.target.value)}
//                     className={styles.inputField}
//                     type="text"
//                     placeholder="Username"
//                   />
//                   <input
//                     onChange={(e) => setName(e.target.value)}
//                     className={styles.inputField}
//                     type="text"
//                     placeholder="Name"
//                   />
//                 </div>
//               )}
//               <input
//                 onChange={(e) => setEmailAddress(e.target.value)}
//                 className={styles.inputField}
//                 type="text"
//                 placeholder="Email"
//               />
//               <input
//                 onChange={(e) => setPassword(e.target.value)}
//                 className={styles.inputField}
//                 type="text"
//                 placeholder="Password"
//               />
//               <div
//                 onClick={() => {
//                   if (userLoginMethod) {
//                     handleLogin();
//                   } else {
//                     handleRegister();
//                   }
//                 }}
//                 className={styles.buttonWithOutline}
//               >
//                 <p>{userLoginMethod ? "Sign In" : "Sign Up"}</p>
//               </div>
//             </div>
//           </div>
//           <div className={styles.cardContainer__right}>
//             {userLoginMethod ? (
//               <p>Don't Have an Account?</p>
//             ) : (
//               <p>Already Have an Account</p>
//             )}
//             <div
//               onClick={() => {
//                 setUserLoginMethod(!userLoginMethod);
//               }}
//               style={{ color: "black", textAlign: "center" }}
//               className={styles.buttonWithOutline}
//             >
//               <p>{userLoginMethod ? "Sign Up" : "Sign In"}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </UserLayout>
//   );
// }
// export default LoginComponent;
// import UserLayout from "@/layout/UserLayout";
// import { useRouter } from "next/router";
// import React, { useEffect, useRef, useState } from "react";
// import styles from "./style.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser, registerUser, googleLogin } from "@/config/redux/action/authAction";
// import { emptyMessage } from "@/config/redux/reducer/authReducer";
// // Replace with your actual Google OAuth Client ID
// const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
// function LoginComponent() {
//   const authState = useSelector((state) => state.auth);
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const [userLoginMethod, setUserLoginMethod] = useState(false);
//   const [email, setEmailAddress] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [name, setName] = useState("");
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const googleButtonRef = useRef(null);
//   useEffect(() => {
//     console.log("loggedIn =", authState.loggedIn);
//     if (authState.loggedIn) {
//       console.log("AUTH REDIRECT");
//       router.push("/dashboard");
//     }
//   }, [authState.loggedIn]);
//   useEffect(() => {
//     dispatch(emptyMessage());
//     setErrors({});
//     setTouched({});
//   }, [userLoginMethod, dispatch]);
//   // Load Google Identity Services script and render button
//   useEffect(() => {
//     const scriptId = "google-identity-script";
//     if (document.getElementById(scriptId)) {
//       initializeGoogle();
//       return;
//     }
//     const script = document.createElement("script");
//     script.src = "https://accounts.google.com/gsi/client";
//     script.id = scriptId;
//     script.async = true;
//     script.defer = true;
//     script.onload = initializeGoogle;
//     document.body.appendChild(script);
//     function initializeGoogle() {
//       if (window.google && googleButtonRef.current) {
//         window.google.accounts.id.initialize({
//           client_id: GOOGLE_CLIENT_ID,
//           callback: handleGoogleResponse,
//         });
//         window.google.accounts.id.renderButton(googleButtonRef.current, {
//           theme: "outline",
//           size: "large",
//           width: 300,
//           text: userLoginMethod ? "signin_with" : "signup_with",
//         });
//       }
//     }
//   }, [userLoginMethod]);
//   const handleGoogleResponse = (response) => {
//     // response.credential is the Google ID token — send it to your backend
//     dispatch(googleLogin({ idToken: response.credential }));
//   };
//   const validateField = (field, value) => {
//     switch (field) {
//       case "username":
//         return value.trim() ? "" : "Username is required";
//       case "name":
//         return value.trim() ? "" : "Name is required";
//       case "email":
//         if (!value.trim()) return "Please enter your email.";
//         if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email";
//         return "";
//       case "password":
//         if (!value) return "Please enter your password.";
//         if (value.length < 6) return "Password must be at least 6 characters";
//         return "";
//       default:
//         return "";
//     }
//   };
//   const handleFieldChange = (field, value, setter) => {
//     setter(value);
//     if (touched[field]) {
//       setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
//     }
//   };
//   const handleBlur = (field, value) => {
//     setTouched((prev) => ({ ...prev, [field]: true }));
//     setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
//   };
//   const validateAll = (fields) => {
//     const newErrors = {};
//     const newTouched = {};
//     fields.forEach(({ field, value }) => {
//       newTouched[field] = true;
//       newErrors[field] = validateField(field, value);
//     });
//     setErrors(newErrors);
//     setTouched(newTouched);
//     return Object.values(newErrors).every((err) => !err);
//   };
//   const handleRegister = () => {
//     const isValid = validateAll([
//       { field: "username", value: username },
//       { field: "name", value: name },
//       { field: "email", value: email },
//       { field: "password", value: password },
//     ]);
//     if (!isValid) return;
//     console.log("registering");
//     dispatch(registerUser({ username, name, email, password }));
//   };
//   const handleLogin = () => {
//     const isValid = validateAll([
//       { field: "email", value: email },
//       { field: "password", value: password },
//     ]);
//     if (!isValid) return;
//     console.log("login...");
//     dispatch(loginUser({ email, password }));
//   };
//   const errorStyle = {
//     color: "#d11124",
//     fontSize: "12px",
//     marginTop: "-8px",
//     marginBottom: "8px",
//   };
//   return (
//     <UserLayout>
//       <div className={styles.container}>
//         <div className={styles.cardContainer}>
//           <div className={styles.cardContainer__left}>
//             <p className={styles.cardleft__heading}>
//               {userLoginMethod ? "Sign In" : "Sign Up"}
//             </p>
//             <p style={{ color: authState.isError ? "red" : "green" }}>
//               {" "}
//               {authState.message?.message}
//             </p>
//             <div className={styles.inputContainers}>
//               {!userLoginMethod && (
//                 <div className={styles.inputRow}>
//                   <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
//                     <input
//                       value={username}
//                       onChange={(e) => handleFieldChange("username", e.target.value, setUsername)}
//                       onBlur={(e) => handleBlur("username", e.target.value)}
//                       className={styles.inputField}
//                       type="text"
//                       placeholder="Username *"
//                     />
//                     {errors.username && <span style={errorStyle}>{errors.username}</span>}
//                   </div>
//                   <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
//                     <input
//                       value={name}
//                       onChange={(e) => handleFieldChange("name", e.target.value, setName)}
//                       onBlur={(e) => handleBlur("name", e.target.value)}
//                       className={styles.inputField}
//                       type="text"
//                       placeholder="Name *"
//                     />
//                     {errors.name && <span style={errorStyle}>{errors.name}</span>}
//                   </div>
//                 </div>
//               )}
//               <input
//                 value={email}
//                 onChange={(e) => handleFieldChange("email", e.target.value, setEmailAddress)}
//                 onBlur={(e) => handleBlur("email", e.target.value)}
//                 className={styles.inputField}
//                 type="text"
//                 placeholder="Email *"
//               />
//               {errors.email && <span style={errorStyle}>{errors.email}</span>}
//               <input
//                 value={password}
//                 onChange={(e) => handleFieldChange("password", e.target.value, setPassword)}
//                 onBlur={(e) => handleBlur("password", e.target.value)}
//                 className={styles.inputField}
//                 type="password"
//                 placeholder="Password *"
//               />
//               {errors.password && <span style={errorStyle}>{errors.password}</span>}
//               <div
//                 onClick={() => {
//                   if (userLoginMethod) {
//                     handleLogin();
//                   } else {
//                     handleRegister();
//                   }
//                 }}
//                 className={styles.buttonWithOutline}
//               >
//                 <p>{userLoginMethod ? "Sign In" : "Sign Up"}</p>
//               </div>
//               <div style={{ display: "flex", alignItems: "center", margin: "16px 0" }}>
//                 <div style={{ flex: 1, height: "1px", background: "#ddd" }} />
//                 <span style={{ margin: "0 12px", color: "#666", fontSize: "13px" }}>or</span>
//                 <div style={{ flex: 1, height: "1px", background: "#ddd" }} />
//               </div>
//               <div ref={googleButtonRef} style={{ display: "flex", justifyContent: "center" }} />
//             </div>
//           </div>
//           <div className={styles.cardContainer__right}>
//             {userLoginMethod ? (
//               <p>Don't Have an Account?</p>
//             ) : (
//               <p>Already Have an Account</p>
//             )}
//             <div
//               onClick={() => {
//                 setUserLoginMethod(!userLoginMethod);
//               }}
//               style={{ color: "black", textAlign: "center" }}
//               className={styles.buttonWithOutline}
//             >
//               <p>{userLoginMethod ? "Sign Up" : "Sign In"}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </UserLayout>
//   );
// }
// export default LoginComponent;
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$UserLayout$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/layout/UserLayout/index.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/frontend/src/pages/login/style.module.css [client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-redux/dist/react-redux.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/config/redux/action/authAction/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$reducer$2f$authReducer$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/config/redux/reducer/authReducer/index.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
const GOOGLE_CLIENT_ID = ("TURBOPACK compile-time value", "658382622791-7jf5ef8paethqumkrtf1m2daivs5rg57.apps.googleusercontent.com");
function LoginComponent() {
    _s();
    const authState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "LoginComponent.useSelector[authState]": (state)=>state.auth
    }["LoginComponent.useSelector[authState]"]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const [userLoginMethod, setUserLoginMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [email, setEmailAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [touched, setTouched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({});
    const googleButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Redirect to dashboard once auth succeeds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoginComponent.useEffect": ()=>{
            if (authState.loggedIn) {
                router.push("/dashboard");
            }
        }
    }["LoginComponent.useEffect"], [
        authState.loggedIn
    ]);
    // Reset validation state whenever the user switches between Sign In / Sign Up
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoginComponent.useEffect": ()=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$reducer$2f$authReducer$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["emptyMessage"])());
            setErrors({});
            setTouched({});
        }
    }["LoginComponent.useEffect"], [
        userLoginMethod,
        dispatch
    ]);
    // Load the Google Identity Services script and render the Google button
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoginComponent.useEffect": ()=>{
            const scriptId = "google-identity-script";
            if (document.getElementById(scriptId)) {
                initializeGoogle();
                return;
            }
            const script = document.createElement("script");
            script.src = "https://accounts.google.com/gsi/client";
            script.id = scriptId;
            script.async = true;
            script.defer = true;
            script.onload = initializeGoogle;
            document.body.appendChild(script);
            function initializeGoogle() {
                if (window.google && googleButtonRef.current) {
                    window.google.accounts.id.initialize({
                        client_id: GOOGLE_CLIENT_ID,
                        callback: handleGoogleResponse
                    });
                    window.google.accounts.id.renderButton(googleButtonRef.current, {
                        theme: "outline",
                        size: "large",
                        width: 300,
                        text: userLoginMethod ? "signin_with" : "signup_with"
                    });
                }
            }
        }
    }["LoginComponent.useEffect"], [
        userLoginMethod
    ]);
    const handleGoogleResponse = (response)=>{
        // response.credential is the Google ID token — hand it off to the backend
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["googleLogin"])({
            idToken: response.credential
        }));
    };
    const validateField = (field, value)=>{
        switch(field){
            case "username":
                return value.trim() ? "" : "Username is required";
            case "name":
                return value.trim() ? "" : "Name is required";
            case "email":
                if (!value.trim()) return "Please enter your email.";
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email";
                return "";
            case "password":
                if (!value) return "Please enter your password.";
                if (value.length < 6) return "Password must be at least 6 characters";
                return "";
            default:
                return "";
        }
    };
    const handleFieldChange = (field, value, setter)=>{
        setter(value);
        if (touched[field]) {
            setErrors((prev)=>({
                    ...prev,
                    [field]: validateField(field, value)
                }));
        }
    };
    const handleBlur = (field, value)=>{
        setTouched((prev)=>({
                ...prev,
                [field]: true
            }));
        setErrors((prev)=>({
                ...prev,
                [field]: validateField(field, value)
            }));
    };
    const validateAll = (fields)=>{
        const newErrors = {};
        const newTouched = {};
        fields.forEach(({ field, value })=>{
            newTouched[field] = true;
            newErrors[field] = validateField(field, value);
        });
        setErrors(newErrors);
        setTouched(newTouched);
        return Object.values(newErrors).every((err)=>!err);
    };
    const handleRegister = ()=>{
        const isValid = validateAll([
            {
                field: "username",
                value: username
            },
            {
                field: "name",
                value: name
            },
            {
                field: "email",
                value: email
            },
            {
                field: "password",
                value: password
            }
        ]);
        if (!isValid) return;
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["registerUser"])({
            username,
            name,
            email,
            password
        }));
    };
    const handleLogin = ()=>{
        const isValid = validateAll([
            {
                field: "email",
                value: email
            },
            {
                field: "password",
                value: password
            }
        ]);
        if (!isValid) return;
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["loginUser"])({
            email,
            password
        }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$UserLayout$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].cardContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].cardContainer__left,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].cardleft__heading,
                                children: userLoginMethod ? "Sign In" : "Sign Up"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/pages/login/index.jsx",
                                lineNumber: 566,
                                columnNumber: 13
                            }, this),
                            authState.message?.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: authState.isError ? "#d93025" : "#057642"
                                },
                                children: authState.message.message
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/pages/login/index.jsx",
                                lineNumber: 571,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].inputContainers,
                                children: [
                                    !userLoginMethod && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].inputRow,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    flex: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: username,
                                                        onChange: (e)=>handleFieldChange("username", e.target.value, setUsername),
                                                        onBlur: (e)=>handleBlur("username", e.target.value),
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].inputField} ${errors.username ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].errorInput : ""}`,
                                                        type: "text",
                                                        placeholder: "Username"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/pages/login/index.jsx",
                                                        lineNumber: 580,
                                                        columnNumber: 21
                                                    }, this),
                                                    errors.username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].error,
                                                        children: errors.username
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/pages/login/index.jsx",
                                                        lineNumber: 588,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/pages/login/index.jsx",
                                                lineNumber: 579,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    flex: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: name,
                                                        onChange: (e)=>handleFieldChange("name", e.target.value, setName),
                                                        onBlur: (e)=>handleBlur("name", e.target.value),
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].inputField} ${errors.name ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].errorInput : ""}`,
                                                        type: "text",
                                                        placeholder: "Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/pages/login/index.jsx",
                                                        lineNumber: 591,
                                                        columnNumber: 21
                                                    }, this),
                                                    errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].error,
                                                        children: errors.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/pages/login/index.jsx",
                                                        lineNumber: 599,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/pages/login/index.jsx",
                                                lineNumber: 590,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/pages/login/index.jsx",
                                        lineNumber: 578,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "100%"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: email,
                                                onChange: (e)=>handleFieldChange("email", e.target.value, setEmailAddress),
                                                onBlur: (e)=>handleBlur("email", e.target.value),
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].inputField} ${errors.email ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].errorInput : ""}`,
                                                type: "text",
                                                placeholder: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/pages/login/index.jsx",
                                                lineNumber: 605,
                                                columnNumber: 17
                                            }, this),
                                            errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].error,
                                                children: errors.email
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/pages/login/index.jsx",
                                                lineNumber: 613,
                                                columnNumber: 34
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/pages/login/index.jsx",
                                        lineNumber: 604,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "100%"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: password,
                                                onChange: (e)=>handleFieldChange("password", e.target.value, setPassword),
                                                onBlur: (e)=>handleBlur("password", e.target.value),
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].inputField} ${errors.password ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].errorInput : ""}`,
                                                type: "password",
                                                placeholder: "Password"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/pages/login/index.jsx",
                                                lineNumber: 617,
                                                columnNumber: 17
                                            }, this),
                                            errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].error,
                                                children: errors.password
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/pages/login/index.jsx",
                                                lineNumber: 625,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/pages/login/index.jsx",
                                        lineNumber: 616,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>{
                                            if (userLoginMethod) {
                                                handleLogin();
                                            } else {
                                                handleRegister();
                                            }
                                        },
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].buttonWithOutline,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: userLoginMethod ? "Sign In" : "Sign Up"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/pages/login/index.jsx",
                                            lineNumber: 638,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/pages/login/index.jsx",
                                        lineNumber: 628,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            width: "100%"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1,
                                                    height: "1px",
                                                    background: "#ddd"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/pages/login/index.jsx",
                                                lineNumber: 642,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    margin: "0 12px",
                                                    color: "#666",
                                                    fontSize: "13px"
                                                },
                                                children: "or"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/pages/login/index.jsx",
                                                lineNumber: 643,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1,
                                                    height: "1px",
                                                    background: "#ddd"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/pages/login/index.jsx",
                                                lineNumber: 644,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/pages/login/index.jsx",
                                        lineNumber: 641,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: googleButtonRef,
                                        style: {
                                            display: "flex",
                                            justifyContent: "center"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/pages/login/index.jsx",
                                        lineNumber: 647,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/pages/login/index.jsx",
                                lineNumber: 576,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/pages/login/index.jsx",
                        lineNumber: 565,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].cardContainer__right,
                        children: [
                            userLoginMethod ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Don't Have an Account?"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/pages/login/index.jsx",
                                lineNumber: 653,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Already Have an Account"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/pages/login/index.jsx",
                                lineNumber: 655,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setUserLoginMethod(!userLoginMethod),
                                style: {
                                    color: "black",
                                    textAlign: "center"
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].buttonWithOutline,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: userLoginMethod ? "Sign Up" : "Sign In"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/pages/login/index.jsx",
                                    lineNumber: 662,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/pages/login/index.jsx",
                                lineNumber: 657,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/pages/login/index.jsx",
                        lineNumber: 651,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/pages/login/index.jsx",
                lineNumber: 564,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/pages/login/index.jsx",
            lineNumber: 563,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/pages/login/index.jsx",
        lineNumber: 562,
        columnNumber: 5
    }, this);
}
_s(LoginComponent, "vMr5H4zfHzjgZjgYyVRYjMI8nhk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
_c = LoginComponent;
const __TURBOPACK__default__export__ = LoginComponent;
var _c;
__turbopack_context__.k.register(_c, "LoginComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/frontend/src/pages/login/index.jsx [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/login";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/frontend/src/pages/login/index.jsx [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if (module.hot) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}),
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/frontend/src/pages/login/index.jsx\" }", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/frontend/src/pages/login/index.jsx [client] (ecmascript)\" } [client] (ecmascript)");
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__8773a77b._.js.map