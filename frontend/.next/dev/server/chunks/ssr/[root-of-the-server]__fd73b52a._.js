module.exports = [
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
"[project]/frontend/src/pages/login/style.module.css [ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/frontend/src/pages/login/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$UserLayout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/layout/UserLayout/index.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/frontend/src/pages/login/style.module.css [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__ = __turbopack_context__.i("[externals]/react-redux [external] (react-redux, esm_import, [project]/frontend/node_modules/react-redux)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/config/redux/action/authAction/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$reducer$2f$authReducer$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/config/redux/reducer/authReducer/index.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$UserLayout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$reducer$2f$authReducer$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$UserLayout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$reducer$2f$authReducer$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
const GOOGLE_CLIENT_ID = ("TURBOPACK compile-time value", "658382622791-7jf5ef8paethqumkrtf1m2daivs5rg57.apps.googleusercontent.com");
function LoginComponent() {
    const authState = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__["useSelector"])((state)=>state.auth);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$redux__$5b$external$5d$__$28$react$2d$redux$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$redux$29$__["useDispatch"])();
    const [userLoginMethod, setUserLoginMethod] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [email, setEmailAddress] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({});
    const [touched, setTouched] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({});
    const googleButtonRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    // Redirect to dashboard once auth succeeds
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (authState.loggedIn) {
            router.push("/dashboard");
        }
    }, [
        authState.loggedIn
    ]);
    // Reset validation state whenever the user switches between Sign In / Sign Up
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$reducer$2f$authReducer$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["emptyMessage"])());
        setErrors({});
        setTouched({});
    }, [
        userLoginMethod,
        dispatch
    ]);
    // Load the Google Identity Services script and render the Google button
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
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
    }, [
        userLoginMethod
    ]);
    const handleGoogleResponse = (response)=>{
        // response.credential is the Google ID token — hand it off to the backend
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["googleLogin"])({
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
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["registerUser"])({
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
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$redux$2f$action$2f$authAction$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["loginUser"])({
            email,
            password
        }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$layout$2f$UserLayout$2f$index$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].container,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].cardContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].cardContainer__left,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].cardleft__heading,
                                children: userLoginMethod ? "Sign In" : "Sign Up"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/pages/login/index.jsx",
                                lineNumber: 566,
                                columnNumber: 13
                            }, this),
                            authState.message?.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                style: {
                                    color: authState.isError ? "#d93025" : "#057642"
                                },
                                children: authState.message.message
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/pages/login/index.jsx",
                                lineNumber: 571,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].inputContainers,
                                children: [
                                    !userLoginMethod && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].inputRow,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    flex: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                        value: username,
                                                        onChange: (e)=>handleFieldChange("username", e.target.value, setUsername),
                                                        onBlur: (e)=>handleBlur("username", e.target.value),
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].inputField} ${errors.username ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].errorInput : ""}`,
                                                        type: "text",
                                                        placeholder: "Username"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/pages/login/index.jsx",
                                                        lineNumber: 580,
                                                        columnNumber: 21
                                                    }, this),
                                                    errors.username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].error,
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    flex: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                        value: name,
                                                        onChange: (e)=>handleFieldChange("name", e.target.value, setName),
                                                        onBlur: (e)=>handleBlur("name", e.target.value),
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].inputField} ${errors.name ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].errorInput : ""}`,
                                                        type: "text",
                                                        placeholder: "Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/pages/login/index.jsx",
                                                        lineNumber: 591,
                                                        columnNumber: 21
                                                    }, this),
                                                    errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].error,
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "100%"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                value: email,
                                                onChange: (e)=>handleFieldChange("email", e.target.value, setEmailAddress),
                                                onBlur: (e)=>handleBlur("email", e.target.value),
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].inputField} ${errors.email ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].errorInput : ""}`,
                                                type: "text",
                                                placeholder: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/pages/login/index.jsx",
                                                lineNumber: 605,
                                                columnNumber: 17
                                            }, this),
                                            errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].error,
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "100%"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                value: password,
                                                onChange: (e)=>handleFieldChange("password", e.target.value, setPassword),
                                                onBlur: (e)=>handleBlur("password", e.target.value),
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].inputField} ${errors.password ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].errorInput : ""}`,
                                                type: "password",
                                                placeholder: "Password"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/pages/login/index.jsx",
                                                lineNumber: 617,
                                                columnNumber: 17
                                            }, this),
                                            errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].error,
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        onClick: ()=>{
                                            if (userLoginMethod) {
                                                handleLogin();
                                            } else {
                                                handleRegister();
                                            }
                                        },
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].buttonWithOutline,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            width: "100%"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].cardContainer__right,
                        children: [
                            userLoginMethod ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: "Don't Have an Account?"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/pages/login/index.jsx",
                                lineNumber: 653,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: "Already Have an Account"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/pages/login/index.jsx",
                                lineNumber: 655,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                onClick: ()=>setUserLoginMethod(!userLoginMethod),
                                style: {
                                    color: "black",
                                    textAlign: "center"
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$login$2f$style$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].buttonWithOutline,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
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
const __TURBOPACK__default__export__ = LoginComponent;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fd73b52a._.js.map