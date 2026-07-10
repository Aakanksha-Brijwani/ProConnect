module.exports = [
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
"[project]/frontend/src/components/Navbar/style.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "buttonJoin": "style-module__iJorKq__buttonJoin",
  "container": "style-module__iJorKq__container",
  "navBar": "style-module__iJorKq__navBar",
  "navBarOptionContainer": "style-module__iJorKq__navBarOptionContainer",
});
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
"[project]/frontend/src/pages/view_profile/index.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "activityGrid": "index-module__koB-5G__activityGrid",
  "avatar": "index-module__koB-5G__avatar",
  "backdrop": "index-module__koB-5G__backdrop",
  "btnConnect": "index-module__koB-5G__btnConnect",
  "btnMore": "index-module__koB-5G__btnMore",
  "btnPending": "index-module__koB-5G__btnPending",
  "headline": "index-module__koB-5G__headline",
  "heroActions": "index-module__koB-5G__heroActions",
  "heroBody": "index-module__koB-5G__heroBody",
  "heroCard": "index-module__koB-5G__heroCard",
  "heroInfo": "index-module__koB-5G__heroInfo",
  "mobileNavBar": "index-module__koB-5G__mobileNavBar",
  "page": "index-module__koB-5G__page",
  "postBody": "index-module__koB-5G__postBody",
  "postItem": "index-module__koB-5G__postItem",
  "postThumb": "index-module__koB-5G__postThumb",
  "postThumbEmpty": "index-module__koB-5G__postThumbEmpty",
  "rightPanel": "index-module__koB-5G__rightPanel",
  "sectionCard": "index-module__koB-5G__sectionCard",
  "sectionTitle": "index-module__koB-5G__sectionTitle",
  "sidebar": "index-module__koB-5G__sidebar",
  "username": "index-module__koB-5G__username",
  "workCompany": "index-module__koB-5G__workCompany",
  "workIcon": "index-module__koB-5G__workIcon",
  "workItem": "index-module__koB-5G__workItem",
  "workList": "index-module__koB-5G__workList",
  "workTitle": "index-module__koB-5G__workTitle",
  "workYears": "index-module__koB-5G__workYears",
});
}),
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
"[project]/frontend/src/pages/view_profile/[username].jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>ViewProfilePage,
    "getServerSideProps",
    ()=>getServerSideProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// import { BASE_URL, clientServer } from "@/config";
// import DashboardLayout from "@/layout/DashboardLayout";
// import UserLayout from "@/layout/UserLayout";
// import { useSearchParams } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import styles from "./index.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllPosts } from "@/config/redux/action/postAction";
// import { useRouter } from "next/router";
// import {
//   getConnectionRequest,
//   sendConnectionRequest,
// } from "@/config/redux/action/authAction";
// export default function ViewProfilePage({ userProfile }) {
//   const router = useRouter();
//   const postReducer = useSelector((state) => state.postReducer);
//   const dispatch = useDispatch();
//   const authState = useSelector((state) => state.auth);
//   const [userPosts, setUserPosts] = useState([]);
//   const [isCurrrentUserInConnection, setIsCurrentUserInConnection] =
//     useState(false);
//   const [isConectionNull, setIsConnectionNull] = useState(true);
//   const getUsersPost = async () => {
//     await dispatch(getAllPosts());
//     await dispatch(
//       getConnectionRequest({ token: localStorage.getItem("token") }),
//     );
//   };
//   useEffect(() => {
//     let post = postReducer.posts.filter((post) => {
//       return post.userId.username === router.query.username;
//     });
//     setUserPosts(post);
//   }, [postReducer.posts]);
//   useEffect(() => {
//     console.log(authState.connections, userProfile.userId._id);
//     if (
//       authState.connections.some(
//         (user) => user.connectionId._id === userProfile.userId._id,
//       )
//     ) {
//       setIsCurrentUserInConnection(true);
//       if (
//         authState.connections.find(
//           (user) => user.connectionId._id === userProfile.userId._id,
//         ).status === true
//       ) {
//         setIsConnectionNull(false);
//       }
//     }
//   }, [authState.connections]);
//   // const searchParamers = useSearchParams();
//   // useEffect(() => {
//   //   console.log("From View: View Profile");
//   // });
//   useEffect(() => {
//     getUsersPost();
//   }, []);
//   return (
//     <UserLayout>
//       <DashboardLayout>
//         <div className={styles.container}>
//           <div className={styles.backDropContainer}></div>
//           <img
//             className={styles.profilePicture}
//             src={`${BASE_URL}/${userProfile.userId.profilePicture}`}
//             alt="Profile"
//           />
//         </div>
//         <div className={styles.profileContainer__details}>
//           <h2>{userProfile.userId.name}</h2>
//           <p style={{ color: "grey" }}>@{userProfile.userId.username}</p>
//         </div>
//         <div style={{display: "flex", alignItems: "center", gap: "1.2rem"}}>
//           {isCurrrentUserInConnection ? (
//           <button className={styles.connectedButton}>
//             {isConectionNull ? "Pending" : "Connected"}
//           </button>
//         ) : (
//           <button
//             onClick={() => {
//               dispatch(
//                 sendConnectionRequest({
//                   token: localStorage.getItem("token"),
//                   connectionId: userProfile.userId._id,
//                 }),
//               );
//               dispatch(
//                 getConnectionRequest({
//                   token: localStorage.getItem("token"),
//                 }),
//               );
//             }}
//             className={styles.connectBtn}
//           >
//             Connect
//           </button>
//         )}
//         </div>
//         <div onClick={async()=>{
//           const response = await clientServer.get(`/user/download_resume?id=${userProfile.userId._id}`);
//           window.open(`${BASE_URL}/${response.data.message}`,"_blank")
//         }} style={{cursor:"pointer"}}>
//           <svg style={{width: "1.2em"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
// </svg>
//         </div>
//         <div>
//           <p>{userProfile.bio}</p>
//         </div>
//         <div style={{ flex: "0.2" }}>
//           <h3>Recent Activity</h3>
//           {userPosts.map((post) => {
//             return (
//               <div key={post._id} className={styles.postCard}>
//                 <div className={styles.card}>
//                   <div className={styles.card__profileContainer}>
//                     {post.media !== "" ? (
//                       <img src={`${BASE_URL}/${post.media}`} alt="" />
//                     ) : (
//                       <div
//                         style={{
//                           width: "3.4rem",
//                           height: "3.4rem",
//                         }}
//                       ></div>
//                     )}
//                   </div>
//                   <p>{post.body}</p>
//                 </div>
//               </div>
//             );
//           })}
//           <div className="workHistory">
//             <h2>Work History</h2>
//             <div className={styles.workHistoryContainer}>
//               {userProfile.pastWork.map((work, index) => {
//                 console.log("PROFILE:", userProfile);
//                 return (
//                   <div key={index} className={styles.workHistoryCard}>
//                     <p
//                       style={{
//                         fontWeight: "bold",
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "0.8rem",
//                       }}
//                     >
//                       {work.company} - {work.position}
//                     </p>
//                     <p>{work.years}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </DashboardLayout>
//     </UserLayout>
//   );
// }
// export async function getServerSideProps(context) {
//   console.log("From view");
//   console.log(context.query.username);
//   const request = await clientServer.get(
//     "/user/get_profile_based_on_username",
//     {
//       params: {
//         username: context.query.username,
//       },
//     },
//   );
//   const response = await request.data;
//   console.log(response);
//   return { props: { userProfile: request.data.profile } };
// }
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/config/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$DashboardLayout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/layout/DashboardLayout/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$UserLayout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/layout/UserLayout/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/frontend/src/pages/view_profile/index.module.css [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__ = __turbopack_context__.i("[externals]/react-redux [external] (react-redux, esm_import, [project]/frontend/node_modules/react-redux)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$postAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/config/redux/action/postAction/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/config/redux/action/authAction/index.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$DashboardLayout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$UserLayout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$postAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$DashboardLayout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$UserLayout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$postAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
function ViewProfilePage({ userProfile }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const postReducer = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__["useSelector"])((state)=>state.postReducer);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__["useDispatch"])();
    const authState = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__["useSelector"])((state)=>state.auth);
    const [userPosts, setUserPosts] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [isCurrrentUserInConnection, setIsCurrentUserInConnection] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isConectionNull, setIsConnectionNull] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const getUsersPost = async ()=>{
        await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$postAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getAllPosts"])());
        await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getConnectionRequest"])({
            token: localStorage.getItem("token")
        }));
        await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getMyConnectionRequest"])({
            token: localStorage.getItem("token")
        }));
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        setUserPosts(postReducer.posts.filter((post)=>post.userId.username === router.query.username));
    }, [
        postReducer.posts
    ]);
    //   useEffect(() => {
    //     console.log(authState.connections, userProfile.userId._id)
    // if (authState.connections.some(user => user.connectionId._id === userProfile.userId._id)) {
    //     setIsCurrentUserInConnection(true);
    //       if (
    //         authState.connections.find(user => user.connectionId._id === userProfile.userId._id).status === true) 
    //       {setIsConnectionNull(false);}
    //     }
    //     if (authState.connectionRequests.some(user => user.userId._id === userProfile.userId._id)) {
    //     setIsCurrentUserInConnection(true);
    //       if (
    //         authState.connectionRequests.find(user => user.userId._id === userProfile.userId._id).status === true) 
    //       {setIsConnectionNull(false);}
    //     }
    //   }, [authState.connections, authState.connectionRequests]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        // Reset state first
        setIsCurrentUserInConnection(false);
        setIsConnectionNull(true);
        const sentConnection = authState.connections.find((user)=>user.connectionId._id === userProfile.userId._id);
        if (sentConnection) {
            setIsCurrentUserInConnection(true);
            if (sentConnection.status_accepted === true) {
                setIsConnectionNull(false);
            }
        }
        const receivedConnection = authState.connectionRequests.find((user)=>user.userId._id === userProfile.userId._id);
        if (receivedConnection) {
            setIsCurrentUserInConnection(true);
            if (receivedConnection.status_accepted === true) {
                setIsConnectionNull(false);
            }
        }
    }, [
        authState.connections,
        authState.connectionRequests,
        userProfile.userId._id
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        getUsersPost();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$UserLayout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$DashboardLayout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].page,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].heroCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].backdrop
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                                lineNumber: 309,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].heroBody,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].avatar,
                                        src: `${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["BASE_URL"]}/${userProfile.userId.profilePicture}`,
                                        alt: userProfile.userId.name
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                                        lineNumber: 311,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].heroActions,
                                        children: [
                                            isCurrrentUserInConnection ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].btnPending,
                                                children: isConectionNull ? "Pending" : "Connected"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                                                lineNumber: 320,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].btnConnect,
                                                onClick: ()=>{
                                                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["sendConnectionRequest"])({
                                                        token: localStorage.getItem("token"),
                                                        connectionId: userProfile.userId._id
                                                    }));
                                                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getConnectionRequest"])({
                                                        token: localStorage.getItem("token")
                                                    }));
                                                },
                                                children: "Connect"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                                                lineNumber: 324,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].btnMore,
                                                onClick: async ()=>{
                                                    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["clientServer"].get(`/user/download_resume?id=${userProfile.userId._id}`);
                                                    window.open(`${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["BASE_URL"]}/${response.data.message}`, "_blank");
                                                },
                                                children: "Download resume"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                                                lineNumber: 338,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                                        lineNumber: 318,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].heroInfo,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                                children: userProfile.userId.name
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                                                lineNumber: 352,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].username,
                                                children: [
                                                    "@",
                                                    userProfile.userId.username
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                                                lineNumber: 353,
                                                columnNumber: 17
                                            }, this),
                                            userProfile.bio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].headline,
                                                children: userProfile.bio
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                                                lineNumber: 355,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                                        lineNumber: 351,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                                lineNumber: 310,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                        lineNumber: 308,
                        columnNumber: 11
                    }, this),
                    userPosts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].sectionCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "Recent activity"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                                lineNumber: 364,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].activityGrid,
                                children: userPosts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].postItem,
                                        children: [
                                            post.media ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].postThumb,
                                                src: `${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["BASE_URL"]}/${post.media}`,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                                                lineNumber: 369,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].postThumb} ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].postThumbEmpty}`
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                                                lineNumber: 375,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].postBody,
                                                children: post.body
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                                                lineNumber: 377,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, post._id, true, {
                                        fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                                        lineNumber: 367,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                                lineNumber: 365,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                        lineNumber: 363,
                        columnNumber: 13
                    }, this),
                    userProfile.pastWork.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].sectionCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "Work history"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                                lineNumber: 387,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].workList,
                                children: userProfile.pastWork.map((work, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].workItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].workIcon,
                                                children: "💼"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                                                lineNumber: 391,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].workTitle,
                                                        children: work.position
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                                                        lineNumber: 393,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].workCompany,
                                                        children: work.company
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                                                        lineNumber: 394,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$view_profile$2f$index$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].workYears,
                                                        children: work.years
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                                                        lineNumber: 395,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                                                lineNumber: 392,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                                        lineNumber: 390,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                                lineNumber: 388,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                        lineNumber: 386,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
                lineNumber: 305,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
            lineNumber: 304,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/pages/view_profile/[username].jsx",
        lineNumber: 303,
        columnNumber: 5
    }, this);
}
async function getServerSideProps(context) {
    const request = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["clientServer"].get("/user/get_profile_based_on_username", {
        params: {
            username: context.query.username
        }
    });
    return {
        props: {
            userProfile: request.data.profile
        }
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c53b6590._.js.map