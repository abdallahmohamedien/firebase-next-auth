"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./config/firebase.ts":
/*!****************************!*\
  !*** ./config/firebase.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDFK_r8CLUJrmKt7yKxbUAuUdXdXcjkDbw\",\n    authDomain: \"fir-next-auth-f8f0d.firebaseapp.com\",\n    projectId: \"fir-next-auth-f8f0d\",\n    storageBucket: \"fir-next-auth-f8f0d.appspot.com\",\n    messagingSenderId: \"899925645813\",\n    appId: \"1:899925645813:web:6381782d5b2e28a3d368bc\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvZmlyZWJhc2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdURBQXVEO0FBQ1Y7QUFDTjtBQUd2QyxNQUFNRSxpQkFBaUI7SUFDckJDLFFBQVE7SUFDUkMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsbUJBQW1CO0lBQ25CQyxPQUFPO0FBQ1Q7QUFFQSxNQUFNQyxNQUFNVCwyREFBYUEsQ0FBQ0U7QUFDbkIsTUFBTVEsT0FBT1Qsc0RBQU9BLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXJlYmFzZS1uZXh0LWF1dGgvLi9jb25maWcvZmlyZWJhc2UudHM/YzkyMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnXG5cblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lERktfcjhDTFVKcm1LdDd5S3hiVUF1VWRYZFhjamtEYndcIixcbiAgYXV0aERvbWFpbjogXCJmaXItbmV4dC1hdXRoLWY4ZjBkLmZpcmViYXNlYXBwLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwiZmlyLW5leHQtYXV0aC1mOGYwZFwiLFxuICBzdG9yYWdlQnVja2V0OiBcImZpci1uZXh0LWF1dGgtZjhmMGQuYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiODk5OTI1NjQ1ODEzXCIsXG4gIGFwcElkOiBcIjE6ODk5OTI1NjQ1ODEzOndlYjo2MzgxNzgyZDViMmUyOGEzZDM2OGJjXCJcbn07XG5cbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuZXhwb3J0IGNvbnN0IGF1dGggPSBnZXRBdXRoKCk7Il0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJnZXRBdXRoIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJhcHAiLCJhdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/firebase.ts\n");

/***/ }),

/***/ "./context/AuthContext.tsx":
/*!*********************************!*\
  !*** ./context/AuthContext.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContextProvider\": () => (/* binding */ AuthContextProvider),\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/firebase */ \"./config/firebase.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _config_firebase__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _config_firebase__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\nconst AuthContextProvider = ({ children  })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    console.log(user);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, (user)=>{\n            if (user) {\n                setUser({\n                    uid: user.uid,\n                    email: user.email,\n                    displayName: user.displayName\n                });\n            } else {\n                setUser(null);\n            }\n            setLoading(false);\n        });\n        return ()=>unsubscribe();\n    }, []);\n    const signup = (email, password)=>{\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, email, password);\n    };\n    const login = (email, password)=>{\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, email, password);\n    };\n    const logout = async ()=>{\n        setUser(null);\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__.auth);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            login,\n            signup,\n            logout\n        },\n        children: loading ? null : children\n    }, void 0, false, {\n        fileName: \"/Users/mac/Developer/firebase-next-auth/context/AuthContext.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0U7QUFNaEQ7QUFDbUI7QUFFekMsTUFBTVMsNEJBQWNULG9EQUFhQSxDQUFNLENBQUM7QUFFakMsTUFBTVUsVUFBVSxJQUFNVCxpREFBVUEsQ0FBQ1EsYUFBWTtBQUU3QyxNQUFNRSxzQkFBc0IsQ0FBQyxFQUNsQ0MsU0FBUSxFQUdULEdBQUs7SUFDSixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBLENBQU0sSUFBSTtJQUMxQyxNQUFNLENBQUNZLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUMsSUFBSTtJQUMzQ2MsUUFBUUMsR0FBRyxDQUFDTDtJQUVaWCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTWlCLGNBQWNmLGlFQUFrQkEsQ0FBQ0ksa0RBQUlBLEVBQUUsQ0FBQ0ssT0FBUztZQUNyRCxJQUFJQSxNQUFNO2dCQUNSQyxRQUFRO29CQUNOTSxLQUFLUCxLQUFLTyxHQUFHO29CQUNiQyxPQUFPUixLQUFLUSxLQUFLO29CQUNqQkMsYUFBYVQsS0FBS1MsV0FBVztnQkFDL0I7WUFDRixPQUFPO2dCQUNMUixRQUFRLElBQUk7WUFDZCxDQUFDO1lBQ0RFLFdBQVcsS0FBSztRQUNsQjtRQUVBLE9BQU8sSUFBTUc7SUFDZixHQUFHLEVBQUU7SUFFTCxNQUFNSSxTQUFTLENBQUNGLE9BQWVHLFdBQXFCO1FBQ2xELE9BQU9uQiw2RUFBOEJBLENBQUNHLGtEQUFJQSxFQUFFYSxPQUFPRztJQUNyRDtJQUVBLE1BQU1DLFFBQVEsQ0FBQ0osT0FBZUcsV0FBcUI7UUFDakQsT0FBT2xCLHlFQUEwQkEsQ0FBQ0Usa0RBQUlBLEVBQUVhLE9BQU9HO0lBQ2pEO0lBRUEsTUFBTUUsU0FBUyxVQUFZO1FBQ3pCWixRQUFRLElBQUk7UUFDWixNQUFNUCxzREFBT0EsQ0FBQ0Msa0RBQUlBO0lBQ3BCO0lBRUEscUJBQ0UsOERBQUNDLFlBQVlrQixRQUFRO1FBQUNDLE9BQU87WUFBRWY7WUFBTVk7WUFBT0Y7WUFBUUc7UUFBTztrQkFDeERYLFVBQVUsSUFBSSxHQUFHSCxRQUFROzs7Ozs7QUFHaEMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpcmViYXNlLW5leHQtYXV0aC8uL2NvbnRleHQvQXV0aENvbnRleHQudHN4P2ZkZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgb25BdXRoU3RhdGVDaGFuZ2VkLFxuICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsXG4gIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICBzaWduT3V0LFxufSBmcm9tICdmaXJlYmFzZS9hdXRoJ1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4uL2NvbmZpZy9maXJlYmFzZSdcblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PGFueT4oe30pXG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4gdXNlQ29udGV4dChBdXRoQ29udGV4dClcblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0UHJvdmlkZXIgPSAoe1xuICBjaGlsZHJlbixcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxufSkgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnNvbGUubG9nKHVzZXIpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAodXNlcikgPT4ge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgc2V0VXNlcih7XG4gICAgICAgICAgdWlkOiB1c2VyLnVpZCxcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICBkaXNwbGF5TmFtZTogdXNlci5kaXNwbGF5TmFtZSxcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFVzZXIobnVsbClcbiAgICAgIH1cbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IHNpZ251cCA9IChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpXG4gIH1cblxuICBjb25zdCBsb2dpbiA9IChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZClcbiAgfVxuXG4gIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRVc2VyKG51bGwpXG4gICAgYXdhaXQgc2lnbk91dChhdXRoKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgbG9naW4sIHNpZ251cCwgbG9nb3V0IH19PlxuICAgICAge2xvYWRpbmcgPyBudWxsIDogY2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduT3V0IiwiYXV0aCIsIkF1dGhDb250ZXh0IiwidXNlQXV0aCIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJjb25zb2xlIiwibG9nIiwidW5zdWJzY3JpYmUiLCJ1aWQiLCJlbWFpbCIsImRpc3BsYXlOYW1lIiwic2lnbnVwIiwicGFzc3dvcmQiLCJsb2dpbiIsImxvZ291dCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/AuthContext.tsx\n");

/***/ }),

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__]);\n_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst Login = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { user , login  } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const handleLogin = async (e)=>{\n        e.preventDefault();\n        console.log(user);\n        try {\n            await login(data.email, data.password);\n            router.push(\"/dashboard\");\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"40%\",\n            margin: \"auto\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center my-3 \",\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/Users/mac/Developer/firebase-next-auth/pages/login.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form, {\n                onSubmit: handleLogin,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {\n                        className: \"mb-3\",\n                        controlId: \"formBasicEmail\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, {\n                                children: \"Email address\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Developer/firebase-next-auth/pages/login.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Control, {\n                                onChange: (e)=>setData({\n                                        ...data,\n                                        email: e.target.value\n                                    }),\n                                value: data.email,\n                                required: true,\n                                type: \"email\",\n                                placeholder: \"Enter email\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Developer/firebase-next-auth/pages/login.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Developer/firebase-next-auth/pages/login.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Group, {\n                        className: \"mb-3\",\n                        controlId: \"formBasicPassword\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Label, {\n                                children: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Developer/firebase-next-auth/pages/login.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form.Control, {\n                                onChange: (e)=>setData({\n                                        ...data,\n                                        password: e.target.value\n                                    }),\n                                value: data.password,\n                                required: true,\n                                type: \"password\",\n                                placeholder: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Developer/firebase-next-auth/pages/login.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Developer/firebase-next-auth/pages/login.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        variant: \"primary\",\n                        type: \"submit\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Developer/firebase-next-auth/pages/login.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Developer/firebase-next-auth/pages/login.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/Developer/firebase-next-auth/pages/login.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDQTtBQUNPO0FBQ0U7QUFFaEQsTUFBTU0sUUFBUSxJQUFNO0lBQ2xCLE1BQU1DLFNBQVNQLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVRLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQUdKLDZEQUFPQTtJQUMvQixNQUFNLENBQUNLLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUM7UUFDL0JVLE9BQU87UUFDUEMsVUFBVTtJQUNaO0lBRUEsTUFBTUMsY0FBYyxPQUFPQyxJQUFXO1FBQ3BDQSxFQUFFQyxjQUFjO1FBRWhCQyxRQUFRQyxHQUFHLENBQUNWO1FBQ1osSUFBSTtZQUNGLE1BQU1DLE1BQU1DLEtBQUtFLEtBQUssRUFBRUYsS0FBS0csUUFBUTtZQUNyQ04sT0FBT1ksSUFBSSxDQUFDO1FBQ2QsRUFBRSxPQUFPQyxLQUFLO1lBQ1pILFFBQVFDLEdBQUcsQ0FBQ0U7UUFDZDtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQ0NDLE9BQU87WUFDTEMsT0FBTztZQUNQQyxRQUFRO1FBQ1Y7OzBCQUVBLDhEQUFDQztnQkFBR0MsV0FBVTswQkFBb0I7Ozs7OzswQkFDbEMsOERBQUN0QixpREFBSUE7Z0JBQUN1QixVQUFVYjs7a0NBQ2QsOERBQUNWLHVEQUFVO3dCQUFDc0IsV0FBVTt3QkFBT0csV0FBVTs7MENBQ3JDLDhEQUFDekIsdURBQVU7MENBQUM7Ozs7OzswQ0FDWiw4REFBQ0EseURBQVk7Z0NBQ1g0QixVQUFVLENBQUNqQixJQUNUSixRQUFRO3dDQUNOLEdBQUdELElBQUk7d0NBQ1BFLE9BQU9HLEVBQUVrQixNQUFNLENBQUNDLEtBQUs7b0NBQ3ZCO2dDQUVGQSxPQUFPeEIsS0FBS0UsS0FBSztnQ0FDakJ1QixRQUFRO2dDQUNSQyxNQUFLO2dDQUNMQyxhQUFZOzs7Ozs7Ozs7Ozs7a0NBSWhCLDhEQUFDakMsdURBQVU7d0JBQUNzQixXQUFVO3dCQUFPRyxXQUFVOzswQ0FDckMsOERBQUN6Qix1REFBVTswQ0FBQzs7Ozs7OzBDQUNaLDhEQUFDQSx5REFBWTtnQ0FDWDRCLFVBQVUsQ0FBQ2pCLElBQ1RKLFFBQVE7d0NBQ04sR0FBR0QsSUFBSTt3Q0FDUEcsVUFBVUUsRUFBRWtCLE1BQU0sQ0FBQ0MsS0FBSztvQ0FDMUI7Z0NBRUZBLE9BQU94QixLQUFLRyxRQUFRO2dDQUNwQnNCLFFBQVE7Z0NBQ1JDLE1BQUs7Z0NBQ0xDLGFBQVk7Ozs7Ozs7Ozs7OztrQ0FHaEIsOERBQUNsQyxtREFBTUE7d0JBQUNtQyxTQUFRO3dCQUFVRixNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEQ7QUFFQSxpRUFBZTlCLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXJlYmFzZS1uZXh0LWF1dGgvLi9wYWdlcy9sb2dpbi50c3g/NzI0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uL2NvbnRleHQvQXV0aENvbnRleHQnXG5cbmNvbnN0IExvZ2luID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IHVzZXIsIGxvZ2luIH0gPSB1c2VBdXRoKClcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gIH0pXG5cbiAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAoZTogYW55KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBjb25zb2xlLmxvZyh1c2VyKVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBsb2dpbihkYXRhLmVtYWlsLCBkYXRhLnBhc3N3b3JkKVxuICAgICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6ICc0MCUnLFxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG15LTMgXCI+TG9naW48L2gxPlxuICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZUxvZ2lufT5cbiAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1CYXNpY0VtYWlsXCI+XG4gICAgICAgICAgPEZvcm0uTGFiZWw+RW1haWwgYWRkcmVzczwvRm9ybS5MYWJlbD5cbiAgICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgICBvbkNoYW5nZT17KGU6IGFueSkgPT5cbiAgICAgICAgICAgICAgc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgICAgICBlbWFpbDogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZT17ZGF0YS5lbWFpbH1cbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxuXG4gICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtQmFzaWNQYXNzd29yZFwiPlxuICAgICAgICAgIDxGb3JtLkxhYmVsPlBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogYW55KSA9PlxuICAgICAgICAgICAgICBzZXREYXRhKHtcbiAgICAgICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlPXtkYXRhLnBhc3N3b3JkfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgTG9naW5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW47Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJGb3JtIiwidXNlQXV0aCIsIkxvZ2luIiwicm91dGVyIiwidXNlciIsImxvZ2luIiwiZGF0YSIsInNldERhdGEiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGFuZGxlTG9naW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImVyciIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJtYXJnaW4iLCJoMSIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwiR3JvdXAiLCJjb250cm9sSWQiLCJMYWJlbCIsIkNvbnRyb2wiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwicmVxdWlyZWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.tsx"));
module.exports = __webpack_exports__;

})();