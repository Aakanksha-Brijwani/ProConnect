module.exports = [
"[project]/frontend/src/config/redux/action/postAction/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "createPost",
    ()=>createPost,
    "deletePost",
    ()=>deletePost,
    "getAllComments",
    ()=>getAllComments,
    "getAllPosts",
    ()=>getAllPosts,
    "incrementPostLike",
    ()=>incrementPostLike,
    "postComment",
    ()=>postComment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/config/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__ = __turbopack_context__.i("[externals]/@reduxjs/toolkit [external] (@reduxjs/toolkit, esm_import, [project]/frontend/node_modules/@reduxjs/toolkit)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const getAllPosts = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__["createAsyncThunk"])("post/getAllPosts", async (_, thunkAPI)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["clientServer"].get('/posts');
        return thunkAPI.fulfillWithValue(response.data);
    } catch (err) {
        return thunkAPI.rejectWithValue(Error.response.data);
    }
});
const createPost = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__["createAsyncThunk"])("post/createPost", async (userData, thunkAPI)=>{
    const { file, body } = userData;
    try {
        const formData = new FormData();
        formData.append('token', localStorage.getItem('token'));
        formData.append('body', body);
        formData.append('media', file);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["clientServer"].post("/post", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (response.status === 200) {
            return thunkAPI.fulfillWithValue("Post Uploaded");
        } else {
            return thunkAPI.rejectWithValue("Post not uploaded");
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});
const deletePost = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__["createAsyncThunk"])("post/deletePost", async (post_id, thunkAPI)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["clientServer"].delete("/delete_post", {
            data: {
                token: localStorage.getItem("token"),
                post_id: post_id.post_id
            }
        });
        return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
        return thunkAPI.rejectWithValue("Something went wrong");
    }
});
const incrementPostLike = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__["createAsyncThunk"])("post/incrementLike", async (post, thunkAPI)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["clientServer"].post(`/increment_post_like`, {
            post_id: post.post_id
        });
        return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
});
const getAllComments = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__["createAsyncThunk"])("post/getAllComments", async (postData, thunkAPI)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["clientServer"].get("/get_comments", {
            params: {
                post_id: postData.post_id
            }
        });
        return thunkAPI.fulfillWithValue({
            Comments: response.data,
            post_id: postData.post_id
        });
    } catch (error) {
        return thunkAPI.rejectWithValue("Something went wrong");
    }
});
const postComment = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$reduxjs$2f$toolkit__$5b$external$5d$__$2840$reduxjs$2f$toolkit$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$reduxjs$2f$toolkit$29$__["createAsyncThunk"])("post/postComment", async (commentData, thunkAPI)=>{
    try {
        console.log({
            post_id: commentData.post_id,
            body: commentData.body
        });
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["clientServer"].post("/comment", {
            token: localStorage.getItem("token"),
            post_id: commentData.post_id,
            commentBody: commentData.body
        });
        return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
        return thunkAPI.rejectWithValue("Something went wrong");
    }
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/frontend/src/components/Navbar/style.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "buttonJoin": "style-module__iJorKq__buttonJoin",
  "container": "style-module__iJorKq__container",
  "navBar": "style-module__iJorKq__navBar",
  "navBarOptionContainer": "style-module__iJorKq__navBarOptionContainer",
});
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/frontend/src/components/Navbar/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>NavBarComponent
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Navbar$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Navbar/style.module.css [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__ = __turbopack_context__.i("[externals]/react-redux [external] (react-redux, esm_import, [project]/frontend/node_modules/react-redux)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$reducer$2f$authReducer$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/config/redux/reducer/authReducer/index.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$reducer$2f$authReducer$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$reducer$2f$authReducer$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
function NavBarComponent() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__["useDispatch"])();
    const authState = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__["useSelector"])((state)=>state.auth);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Navbar$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].container,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Navbar$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navBar,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Navbar$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navBarOptionContainer,
                    children: [
                        authState.profileFetched && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "1.2rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Hey, ",
                                            authState.user.userId.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/Navbar/index.jsx",
                                        lineNumber: 29,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        onClick: ()=>{
                                            localStorage.removeItem("token");
                                            router.push("/login");
                                            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$reducer$2f$authReducer$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["reset"])());
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
                        !authState.profileFetched && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            onClick: ()=>{
                                router.push("/login");
                            },
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Navbar$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].buttonJoin,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/frontend/src/layout/UserLayout/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Navbar$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Navbar/index.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Navbar$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Navbar$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
function UserLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Navbar$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
const __TURBOPACK__default__export__ = UserLayout;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/frontend/src/layout/DashboardLayout/index.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "index-module__UbqSCW__active",
  "emptyProfiles": "index-module__UbqSCW__emptyProfiles",
  "feed": "index-module__UbqSCW__feed",
  "logo": "index-module__UbqSCW__logo",
  "mobileNavBar": "index-module__UbqSCW__mobileNavBar",
  "navItem": "index-module__UbqSCW__navItem",
  "panelTitle": "index-module__UbqSCW__panelTitle",
  "profileAvatar": "index-module__UbqSCW__profileAvatar",
  "profileHandle": "index-module__UbqSCW__profileHandle",
  "profileInfo": "index-module__UbqSCW__profileInfo",
  "profileName": "index-module__UbqSCW__profileName",
  "profileRow": "index-module__UbqSCW__profileRow",
  "rightPanel": "index-module__UbqSCW__rightPanel",
  "shell": "index-module__UbqSCW__shell",
  "sidebar": "index-module__UbqSCW__sidebar",
});
}),
"[project]/frontend/src/layout/DashboardLayout/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>DashboardLayout
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// import styles from "./index.module.css";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { setTokenIsThere } from "@/config/redux/reducer/authReducer";
// export default function DashboardLayout({ children }) {
// const authState = useSelector((state) => state.auth);  const router = useRouter();
// const dispatch = useDispatch();
//   // useEffect(() => {
//   //   if (localStorage.getItem("token") == null) {
//   //     router.push("/login");
//   //   }
//   //   setTokenIsThere();
//   // });
//   useEffect(() => {
//   if (localStorage.getItem("token")) {
//     dispatch(setTokenIsThere());
//   } else {
//     router.push("/login");
//   }
// }, [dispatch, router]);
// console.log("All Users:", authState.all_users);
//   return (
//     <div className={styles.container}>
//       <div className={styles.homeContainer}>
//         <div className={styles.homeContainer__leftBar}>
//           <div
//             onClick={() => {
//               router.push("/dashboard");
//             }}
//             className={styles.sideBarOption}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="size-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
//               />
//             </svg>
//             <p>Scroll</p>
//           </div>
//           <div
//             onClick={() => {
//               router.push("/discover");
//             }}
//             className={styles.sideBarOption}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="size-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//               />
//             </svg>
//             <p>Discover</p>
//           </div>
//           <div
//             onClick={() => {
//               router.push("/my_connections");
//             }}
//             className={styles.sideBarOption}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="size-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
//               />
//             </svg>
//             <p>My Connections</p>
//           </div>
//         </div>
//         <div className={styles.homeContainer_feedContainer}>{children}</div>
//         <div className={styles.homeContainer_extraContainer}>
//           <h3>Top Profiles</h3>
//           {authState.all_profiles_fetched &&
//   authState.all_users?.map((profile) => (
//     <div key={profile._id} className={styles.extraContainer_profile}>
//       <img src={profile.userId.profilePicture} alt="" />
//       <p>{profile.userId.name}</p>
//     </div>
//   ))
// }
//         </div>
//       </div>
//     </div>
//   );
// }
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$DashboardLayout$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/frontend/src/layout/DashboardLayout/index.module.css [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__ = __turbopack_context__.i("[externals]/react-redux [external] (react-redux, esm_import, [project]/frontend/node_modules/react-redux)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$reducer$2f$authReducer$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/config/redux/reducer/authReducer/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/config/index.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$reducer$2f$authReducer$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$reducer$2f$authReducer$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
function DashboardLayout({ children }) {
    const authState = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__["useSelector"])((state)=>state.auth);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__["useDispatch"])();
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (localStorage.getItem("token")) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$reducer$2f$authReducer$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["setTokenIsThere"])());
        } else {
            router.push("/login");
        }
    }, [
        dispatch,
        router
    ]);
    const navItems = [
        {
            label: "Scroll",
            path: "/dashboard",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                width: "20",
                height: "20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
                    lineNumber: 144,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
                lineNumber: 143,
                columnNumber: 9
            }, this)
        },
        {
            label: "Discover",
            path: "/discover",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                width: "20",
                height: "20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
                    lineNumber: 153,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
                lineNumber: 152,
                columnNumber: 9
            }, this)
        },
        {
            label: "My connections",
            path: "/my_connections",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                width: "20",
                height: "20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
                    lineNumber: 162,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
                lineNumber: 161,
                columnNumber: 9
            }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$DashboardLayout$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].shell,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("aside", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$DashboardLayout$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].sidebar,
                children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$DashboardLayout$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navItem} ${router.pathname === item.path ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$DashboardLayout$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].active : ""}`,
                        onClick: ()=>router.push(item.path),
                        children: [
                            item.icon,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.path, true, {
                        fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
                        lineNumber: 174,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$DashboardLayout$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].feed,
                children: children
            }, void 0, false, {
                fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("aside", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$DashboardLayout$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].rightPanel,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$DashboardLayout$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].panelTitle,
                        children: "Top profiles"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    authState.all_profiles_fetched && authState.all_users?.length > 0 ? authState.all_users.map((profile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$DashboardLayout$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].profileRow,
                            onClick: ()=>router.push(`/view_profile/${profile.userId.username}`),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$DashboardLayout$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].profileAvatar,
                                    src: `${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["BASE_URL"]}/${profile.userId.profilePicture}`,
                                    alt: profile.userId.name
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$DashboardLayout$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].profileInfo,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$DashboardLayout$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].profileName,
                                            children: profile.userId.name
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
                                            lineNumber: 205,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$DashboardLayout$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].profileHandle,
                                            children: [
                                                "@",
                                                profile.userId.username
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
                                            lineNumber: 206,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
                                    lineNumber: 204,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, profile._id, true, {
                            fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
                            lineNumber: 194,
                            columnNumber: 13
                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$DashboardLayout$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].emptyProfiles,
                        children: "No profiles yet."
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$DashboardLayout$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].mobileNavBar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$DashboardLayout$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].singleNavItemHolder_mobileView,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: 1.5,
                            stroke: "currentColor",
                            width: "20",
                            height: "20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
                            lineNumber: 216,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$DashboardLayout$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].singleNavItemHolder_mobileView,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: 1.5,
                            stroke: "currentColor",
                            width: "20",
                            height: "20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$DashboardLayout$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].singleNavItemHolder_mobileView,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: 1.5,
                            stroke: "currentColor",
                            width: "20",
                            height: "20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
                            lineNumber: 226,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
                        lineNumber: 225,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
                lineNumber: 214,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/layout/DashboardLayout/index.jsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/frontend/src/pages/dashboard/index.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actionBtn": "index-module__yHrjsW__actionBtn",
  "commentBody": "index-module__yHrjsW__commentBody",
  "commentHandle": "index-module__yHrjsW__commentHandle",
  "commentInputRow": "index-module__yHrjsW__commentInputRow",
  "commentName": "index-module__yHrjsW__commentName",
  "commentPostBtn": "index-module__yHrjsW__commentPostBtn",
  "commentRow": "index-module__yHrjsW__commentRow",
  "commentsList": "index-module__yHrjsW__commentsList",
  "composeActions": "index-module__yHrjsW__composeActions",
  "composeAvatar": "index-module__yHrjsW__composeAvatar",
  "composeCard": "index-module__yHrjsW__composeCard",
  "composeInputRow": "index-module__yHrjsW__composeInputRow",
  "composeTextarea": "index-module__yHrjsW__composeTextarea",
  "deleteBtn": "index-module__yHrjsW__deleteBtn",
  "emptyComments": "index-module__yHrjsW__emptyComments",
  "feed": "index-module__yHrjsW__feed",
  "loadingState": "index-module__yHrjsW__loadingState",
  "mediaBtn": "index-module__yHrjsW__mediaBtn",
  "modalClose": "index-module__yHrjsW__modalClose",
  "modalHeader": "index-module__yHrjsW__modalHeader",
  "modalOverlay": "index-module__yHrjsW__modalOverlay",
  "modalPanel": "index-module__yHrjsW__modalPanel",
  "postActions": "index-module__yHrjsW__postActions",
  "postAvatar": "index-module__yHrjsW__postAvatar",
  "postBody": "index-module__yHrjsW__postBody",
  "postBtn": "index-module__yHrjsW__postBtn",
  "postCard": "index-module__yHrjsW__postCard",
  "postHeader": "index-module__yHrjsW__postHeader",
  "postImageWrap": "index-module__yHrjsW__postImageWrap",
  "postMeta": "index-module__yHrjsW__postMeta",
  "postName": "index-module__yHrjsW__postName",
  "postUsername": "index-module__yHrjsW__postUsername",
  "postsContainer": "index-module__yHrjsW__postsContainer",
});
}),
"[project]/frontend/src/pages/dashboard/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// import { getAboutUser } from "@/config/redux/action/authAction";
// import {
//   createPost,
//   deletePost,
//   getAllPosts,
//   incrementPostLike,
//   getAllComments,
//   postComment,
// } from "@/config/redux/action/postAction";
// import UserLayout from "@/layout/UserLayout";
// import { useRouter } from "next/router";
// import React, { use, useDebugValue, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import DashboardLayout from "@/layout/DashboardLayout";
// import { getAllUsers } from "@/config/redux/action/authAction";
// import styles from "./index.module.css";
// import { BASE_URL } from "@/config";
// import { resetPostId } from "@/config/redux/reducer/postReducer";
// export default function Dashboard() {
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const { isTokenThere } = useSelector((state) => state.auth);
//   const authState = useSelector((state) => state.auth);
//   const postState = useSelector((state) => state.postReducer);
//   console.log("AUTH STATE FULL:", authState);
//   const user = authState.user;
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       router.push("/login");
//       return;
//     }
//     dispatch(getAboutUser({ token }));
//     dispatch(getAllPosts());
//     dispatch(getAllUsers());
//   }, [dispatch, isTokenThere]);
//   const [postContent, setPostContent] = useState("");
//   const [fileContent, setFileContent] = useState("");
//   const [commentText, setCommentText] = useState("");
//   const handleUpload = async () => {
//     await dispatch(createPost({ file: fileContent, body: postContent }));
//     setPostContent("");
//     setFileContent("");
//     dispatch(getAllPosts());
//   };
//   if (authState.user) {
//     return (
//       <UserLayout>
//         <DashboardLayout>
//           <div className={styles.scrollComponent}>
//             <div className={styles.wrapper}>
//               <div className={styles.createPostContainer}>
//                 <img
//                   className={styles.userProfile}
//                   src={`${BASE_URL}/${authState.user.userId.profilePicture}`}
//                   alt=""
//                 />
//                 <textarea
//                   onChange={(e) => setPostContent(e.target.value)}
//                   value={postContent}
//                   placeholder="What's in your mind?"
//                   className={styles.textAreaOfContent}
//                   name=""
//                   id=""
//                 ></textarea>
//                 <label htmlFor="fileUpload">
//                   <div onClick={() => {}} className={styles.Fab}>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={1.5}
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M12 4.5v15m7.5-7.5h-15"
//                       />
//                     </svg>
//                   </div>
//                 </label>
//                 <input
//                   onChange={(e) => setFileContent(e.target.files[0])}
//                   type="file"
//                   hidden
//                   id="fileUpload"
//                 />
//                 {postContent.length > 0 && (
//                   <div onClick={handleUpload} className={styles.uploadButton}>
//                     Post
//                   </div>
//                 )}
//               </div>
//               <div className={styles.postsContainer}>
//                 {postState.posts.map((post) => {
//                   return (
//                     <div key={post._id} className={styles.singleCard}>
//                       <div className={styles.singleCard_profileContainer}>
//                         <img
//                           className={styles.userProfile}
//                           src={`${BASE_URL}/${post.userId.profilePicture}`}
//                           alt={post.userId.name}
//                         />
//                         <div>
//                           <div
//                             style={{
//                               display: "flex",
//                               gap: "1.2rem",
//                               justifyContent: "space-between",
//                             }}
//                           >
//                             <p style={{ fontWeight: "bold" }}>
//                               {post.userId.name}{" "}
//                             </p>
//                             {post.userId._id === authState.user.userId._id && (
//                               <div
//                                 onClick={async () => {
//                                   await dispatch(
//                                     deletePost({ post_id: post._id }),
//                                   );
//                                   await dispatch(getAllPosts());
//                                 }}
//                                 style={{ cursor: "pointer" }}
//                               >
//                                 <svg
//                                   style={{ height: "1.4em", color: "red" }}
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   fill="none"
//                                   viewBox="0 0 24 24"
//                                   strokeWidth={1.5}
//                                   stroke="currentColor"
//                                   className="size-6"
//                                 >
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
//                                   />
//                                 </svg>
//                               </div>
//                             )}
//                           </div>
//                           <p style={{ color: "grey" }}>
//                             @{post.userId.username}
//                           </p>
//                           <p style={{ paddingTop: "1.3rem" }}>{post.body}</p>
//                           <div className={styles.singleCard_image}>
//                             <img src={`${BASE_URL}/${post.media}`} alt="" />
//                           </div>
//                           <div className={styles.optionsContainer}>
//                             <div
//                               onClick={async () => {
//                                 await dispatch(
//                                   incrementPostLike({ post_id: post._id }),
//                                 );
//                                 dispatch(getAllPosts());
//                               }}
//                               className={styles.singleOption_optionsContainer}
//                             >
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth={1.5}
//                                 stroke="currentColor"
//                                 className="size-6"
//                               >
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
//                                 />
//                               </svg>
//                               <p>{post.likes}</p>
//                             </div>
//                             <div
//                               onClick={() => {
//                                 dispatch(getAllComments({ post_id: post._id }));
//                               }}
//                               className={styles.singleOption_optionsContainer}
//                             >
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke-width="1.5"
//                                 stroke="currentColor"
//                                 class="size-6"
//                               >
//                                 <path
//                                   stroke-linecap="round"
//                                   stroke-linejoin="round"
//                                   d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
//                                 />
//                               </svg>
//                             </div>
//                             <div
//                               className={styles.singleOption_optionsContainer}
//                             >
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke-width="1.5"
//                                 stroke="currentColor"
//                                 class="size-6"
//                               >
//                                 <path
//                                   stroke-linecap="round"
//                                   stroke-linejoin="round"
//                                   d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
//                                 />
//                               </svg>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//           {postState.postId !== "" && (
//             <div
//               onClick={() => {
//                 dispatch(resetPostId());
//               }}
//               className={styles.commentsContainer}
//             >
//               <div
//                 onClick={(e) => {
//                   e.stopPropagation();
//                 }}
//                 className={styles.allCommentsContainer}
//               >
//                 {postState.comments.length === 0 && <h2>No Comments</h2>}
//                 {postState.comments.length !== 0 && (
//                   <div className={styles.commentsList}>
//                     {postState.comments.map((comment, index) => {
//                       return (
//                         <div className={styles.singleComment} key={comment._id}>
//                           <div
//                             className={styles.singleComment_profileConatiner}
//                           >
//                             {/* <img
//                               src={`${BASE_URL}/${comment.userId.profilePicture}`}
//                               alt=""
//                             /> */}
//                             <div>
//                         <p style={{fontWeight: "bold", fontSize:"1.2rem"}}>{comment.userId.name}</p>
//                         <p>@{comment.userId.username}</p>
//                       </div>
//                           </div>
//                           <p>{comment.body}</p>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 )}
//                 <div className={styles.postCommentContainer}>
//                   <input
//                     type="text"
//                     value={commentText}
//                     onChange={(e) => setCommentText(e.target.value)}
//                     placeholder="Comment"
//                   />
//                   <div
//                     onClick={async () => {
//                       await dispatch(
//                         postComment({
//                           post_id: postState.postId,
//                           body: commentText,
//                         }),
//                       );
//                       await dispatch(
//                         getAllComments({ post_id: postState.postId }),
//                       );
//                     }}
//                     className={styles.postCommentContainer_commentBtn}
//                   >
//                     <p>Comment</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </DashboardLayout>
//       </UserLayout>
//     );
//   } else {
//     return (
//       <UserLayout>
//         <DashboardLayout>
//           <h2>Loading........</h2>
//         </DashboardLayout>
//       </UserLayout>
//     );
//   }
// }
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/config/redux/action/authAction/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$postAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/config/redux/action/postAction/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$UserLayout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/layout/UserLayout/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__ = __turbopack_context__.i("[externals]/react-redux [external] (react-redux, esm_import, [project]/frontend/node_modules/react-redux)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$DashboardLayout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/layout/DashboardLayout/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/frontend/src/pages/dashboard/index.module.css [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/config/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$reducer$2f$postReducer$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/config/redux/reducer/postReducer/index.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$postAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$UserLayout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$DashboardLayout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$postAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$UserLayout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$DashboardLayout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
function Dashboard() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__["useDispatch"])();
    const { isTokenThere } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__["useSelector"])((state)=>state.auth);
    const authState = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__["useSelector"])((state)=>state.auth);
    const postState = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__["useSelector"])((state)=>state.postReducer);
    const [postContent, setPostContent] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [fileContent, setFileContent] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [commentText, setCommentText] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login");
            return;
        }
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getAboutUser"])({
            token
        }));
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$postAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getAllPosts"])());
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getAllUsers"])());
    }, [
        dispatch,
        isTokenThere
    ]);
    const handleUpload = async ()=>{
        await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$postAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["createPost"])({
            file: fileContent,
            body: postContent
        }));
        setPostContent("");
        setFileContent("");
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$postAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getAllPosts"])());
    };
    if (!authState.user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$UserLayout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$DashboardLayout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].loadingState,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: "Loading your feed…"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                        lineNumber: 366,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                    lineNumber: 365,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                lineNumber: 364,
                columnNumber: 19
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
            lineNumber: 364,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$UserLayout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$DashboardLayout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].feed,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].composeCard,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].composeAvatar,
                                    src: `${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["BASE_URL"]}/${authState.user.userId.profilePicture}`,
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                    lineNumber: 379,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].composeInputRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].composeTextarea,
                                            placeholder: "What's on your mind?",
                                            value: postContent,
                                            onChange: (e)=>setPostContent(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                            lineNumber: 385,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].composeActions,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                    htmlFor: "fileUpload",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].mediaBtn,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            strokeWidth: 1.5,
                                                            stroke: "currentColor",
                                                            width: "18",
                                                            height: "18",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                d: "m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                                                lineNumber: 394,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                                            lineNumber: 393,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Photo"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                                    lineNumber: 392,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    id: "fileUpload",
                                                    hidden: true,
                                                    onChange: (e)=>setFileContent(e.target.files[0])
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                                    lineNumber: 398,
                                                    columnNumber: 17
                                                }, this),
                                                postContent.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].postBtn,
                                                    onClick: handleUpload,
                                                    children: "Post"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                                    lineNumber: 405,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                            lineNumber: 391,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                    lineNumber: 384,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                            lineNumber: 378,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].postsContainer,
                            children: postState.posts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].postCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].postHeader,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].postAvatar,
                                                    src: `${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["BASE_URL"]}/${post.userId.profilePicture}`,
                                                    alt: post.userId.name
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                                    lineNumber: 418,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].postMeta,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].postName,
                                                            children: post.userId.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                                            lineNumber: 424,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].postUsername,
                                                            children: [
                                                                "@",
                                                                post.userId.username
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                                            lineNumber: 425,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                                    lineNumber: 423,
                                                    columnNumber: 19
                                                }, this),
                                                post.userId._id === authState.user.userId._id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].deleteBtn,
                                                    "aria-label": "Delete post",
                                                    onClick: async ()=>{
                                                        await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$postAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["deletePost"])({
                                                            post_id: post._id
                                                        }));
                                                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$postAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getAllPosts"])());
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        strokeWidth: 1.5,
                                                        stroke: "currentColor",
                                                        width: "18",
                                                        height: "18",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                                            lineNumber: 437,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                                        lineNumber: 436,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                                    lineNumber: 428,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                            lineNumber: 417,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].postBody,
                                            children: post.body
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                            lineNumber: 443,
                                            columnNumber: 17
                                        }, this),
                                        post.media && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].postImageWrap,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                src: `${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["BASE_URL"]}/${post.media}`,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                                lineNumber: 447,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                            lineNumber: 446,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].postActions,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].actionBtn,
                                                    onClick: async ()=>{
                                                        await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$postAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["incrementPostLike"])({
                                                            post_id: post._id
                                                        }));
                                                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$postAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getAllPosts"])());
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            strokeWidth: 1.5,
                                                            stroke: "currentColor",
                                                            width: "18",
                                                            height: "18",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                d: "M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                                                lineNumber: 460,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                                            lineNumber: 459,
                                                            columnNumber: 21
                                                        }, this),
                                                        post.likes
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                                    lineNumber: 452,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].actionBtn,
                                                    onClick: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$postAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getAllComments"])({
                                                            post_id: post._id
                                                        })),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            strokeWidth: 1.5,
                                                            stroke: "currentColor",
                                                            width: "18",
                                                            height: "18",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                d: "M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                                                lineNumber: 470,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                                            lineNumber: 469,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Comment"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                                    lineNumber: 465,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].actionBtn,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            strokeWidth: 1.5,
                                                            stroke: "currentColor",
                                                            width: "18",
                                                            height: "18",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                d: "M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                                                lineNumber: 477,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                                            lineNumber: 476,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Share"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                                    lineNumber: 475,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                            lineNumber: 451,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, post._id, true, {
                                    fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                    lineNumber: 416,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                            lineNumber: 414,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                    lineNumber: 375,
                    columnNumber: 9
                }, this),
                postState.postId !== "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].modalOverlay,
                    onClick: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$reducer$2f$postReducer$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["resetPostId"])()),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].modalPanel,
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].modalHeader,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        children: "Comments"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                        lineNumber: 498,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].modalClose,
                                        onClick: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$reducer$2f$postReducer$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["resetPostId"])()),
                                        "aria-label": "Close comments",
                                        children: "✕"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                        lineNumber: 499,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                lineNumber: 497,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].commentsList,
                                children: postState.comments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].emptyComments,
                                    children: "No comments yet. Be the first."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                    lineNumber: 508,
                                    columnNumber: 19
                                }, this) : postState.comments.map((comment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].commentRow,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].commentName,
                                                children: [
                                                    comment.userId.name,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].commentHandle,
                                                        children: [
                                                            " @",
                                                            comment.userId.username
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                                        lineNumber: 513,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                                lineNumber: 512,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].commentBody,
                                                children: comment.body
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                                lineNumber: 515,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, comment._id, true, {
                                        fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                        lineNumber: 511,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                lineNumber: 506,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].commentInputRow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Add a comment…",
                                        value: commentText,
                                        onChange: (e)=>setCommentText(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                        lineNumber: 522,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$dashboard$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].commentPostBtn,
                                        onClick: async ()=>{
                                            await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$postAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["postComment"])({
                                                post_id: postState.postId,
                                                body: commentText
                                            }));
                                            await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$postAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getAllComments"])({
                                                post_id: postState.postId
                                            }));
                                            setCommentText("");
                                        },
                                        children: "Comment"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                        lineNumber: 528,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                                lineNumber: 521,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                        lineNumber: 493,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
                    lineNumber: 489,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
            lineNumber: 374,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/pages/dashboard/index.jsx",
        lineNumber: 373,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__be403406._.js.map