(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 18038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 98704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 97897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 56786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 41844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 96624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 75281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 57085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 20199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 39569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 30893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 17887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 98735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 68231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 54614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 53750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 79618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 57310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 53329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7346);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11367);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2332);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94408);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 76594)), "/home/runner/work/code-arena/code-arena/src/app/page.tsx"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 88298))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 66653)), "/home/runner/work/code-arena/code-arena/src/app/layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 82718, 23)), "next/dist/client/components/not-found-error"],
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 88298))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      }.children;
const pages = ["/home/runner/work/code-arena/code-arena/src/app/page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 36430:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 96990, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 69868, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 65958, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 933, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 32594, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16787, 23))

/***/ }),

/***/ 85882:
/***/ (() => {



/***/ }),

/***/ 84222:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 58284));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 14045))

/***/ }),

/***/ 58284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

const TypeWriter = ({ text, delay })=>{
    const [displayText, setDisplayText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const timer = setTimeout(()=>{
            if (currentIndex < text.length) {
                setDisplayText((prevText)=>prevText + text[currentIndex]);
                setCurrentIndex((prevIndex)=>prevIndex + 1);
            }
        }, delay);
        return ()=>{
            clearTimeout(timer);
        };
    }, [
        currentIndex,
        delay,
        text
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
        className: "font-mono font-bold text-center",
        children: displayText
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypeWriter);


/***/ }),

/***/ 14045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ LoginForm)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.8.5_react-dom@18.2.0_react@18.2.0/node_modules/antd/lib/button/index.js
var lib_button = __webpack_require__(1994);
var button_default = /*#__PURE__*/__webpack_require__.n(lib_button);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.8.5_react-dom@18.2.0_react@18.2.0/node_modules/antd/lib/checkbox/index.js
var lib_checkbox = __webpack_require__(3545);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.8.5_react-dom@18.2.0_react@18.2.0/node_modules/antd/lib/form/index.js
var lib_form = __webpack_require__(94116);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.8.5_react-dom@18.2.0_react@18.2.0/node_modules/antd/lib/input/index.js
var input = __webpack_require__(72455);
;// CONCATENATED MODULE: ./src/api/account.ts
function login(req) {
    return {
        code: 200,
        msg: "登录成功",
        data: {
            userId: 1,
            username: "admin",
            nickname: "管理员",
            avatar: "",
            roles: [
                "admin"
            ],
            permissions: [
                "*"
            ]
        }
    };
}

// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0/node_modules/next/navigation.js
var navigation = __webpack_require__(28179);
;// CONCATENATED MODULE: ./src/components/login.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







function LoginForm() {
    const router = (0,navigation.useRouter)();
    const onFinish = (values)=>{
        console.log("login req:", values);
        const res = login(values);
        console.log("login res:", res);
        router.push("/home");
    };
    const onFinishFailed = (errorInfo)=>{
        console.log("Failed:", errorInfo);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib_form/* default */.Z, {
        name: "basic",
        labelCol: {
            span: 8
        },
        wrapperCol: {
            span: 16
        },
        style: {
            maxWidth: 600
        },
        initialValues: {
            remember: true
        },
        onFinish: onFinish,
        onFinishFailed: onFinishFailed,
        autoComplete: "off",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                label: "Username",
                name: "username",
                rules: [
                    {
                        required: true,
                        message: "Please input your username!"
                    }
                ],
                children: /*#__PURE__*/ jsx_runtime_.jsx(input/* default */.Z, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                label: "Password",
                name: "password",
                rules: [
                    {
                        required: true,
                        message: "Please input your password!"
                    }
                ],
                children: /*#__PURE__*/ jsx_runtime_.jsx(input/* default */.Z.Password, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                        name: "remember",
                        valuePropName: "checked",
                        wrapperCol: {
                            span: 24
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(lib_checkbox/* default */.Z, {
                            children: "Remember me"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(lib_form/* default */.Z.Item, {
                        wrapperCol: {
                            offset: 24,
                            span: 12
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((button_default()), {
                            type: "primary",
                            htmlType: "submit",
                            children: "Submit"
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 66653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21871);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);


const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            children: children
        })
    });
}


/***/ }),

/***/ 76594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ APP)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(84908);
;// CONCATENATED MODULE: ./src/components/TypeWriter.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/runner/work/code-arena/code-arena/src/components/TypeWriter.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const TypeWriter = (__default__);
;// CONCATENATED MODULE: ./src/components/login.tsx

const login_proxy = (0,module_proxy.createProxy)(String.raw`/home/runner/work/code-arena/code-arena/src/components/login.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: login_esModule, $$typeof: login_$$typeof } = login_proxy;
const login_default_ = login_proxy.default;


/* harmony default export */ const login = (login_default_);
;// CONCATENATED MODULE: ./src/app/page.tsx



function APP() {
    return /*#__PURE__*/ jsx_runtime_.jsx("main", {
        className: "flex min-h-screen flex-col items-center justify-between p-24",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "border-2 border-current p-6 flex flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(login, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(TypeWriter, {
                        text: "Let's go for it!",
                        delay: 100
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 88298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83369);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 21871:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,235], () => (__webpack_exec__(53329)));
module.exports = __webpack_exports__;

})();