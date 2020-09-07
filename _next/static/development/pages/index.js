(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./components/container.ts":
/*!*********************************!*\
  !*** ./components/container.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./utils/index.ts");


function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  max-width: 1280px;\n  margin: 0 auto;\n  position: relative;\n  box-sizing: border-box;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), Object(_utils__WEBPACK_IMPORTED_MODULE_2__["breakpoints"])({
  0: {
    width: "90%",
    padding: "0 12px"
  },
  380: {
    padding: "0 8px"
  },
  520: {
    width: "calc(100% - 32px)"
  },
  790: {
    width: "90%"
  },
  920: {
    width: "80%"
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./components/displayText.tsx":
/*!************************************!*\
  !*** ./components/displayText.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks */ "./hooks/index.ts");



var _this = undefined,
    _jsxFileName = "C:\\Workspace\\Projects\\my-portfolio\\components\\displayText.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: #12141b;\n  text-align: right;\n  font-size: 7rem;\n  white-space: nowrap;\n  font-weight: 900;\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: #fff;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: absolute;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var DisplayText = function DisplayText(_ref) {
  var title = _ref.title,
      style = _ref.style;

  var _useOnScreen = Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["useOnScreen"])(),
      _useOnScreen2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useOnScreen, 2),
      ref = _useOnScreen2[0],
      isOnScreen = _useOnScreen2[1];

  return __jsx(Playgroud, {
    style: style,
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["AnimatePresence"], {
    exitBeforeEnter: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, isOnScreen && __jsx(Display, {
    initial: {
      x: "-120%",
      opacity: 0
    },
    exit: {
      x: "-120%",
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 0.17
    },
    transition: {
      duration: 2.6,
      stiffness: 10,
      ease: "easeOut"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, title)));
};

var Playgroud = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var Display = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].h1)(_templateObject2());
/* harmony default export */ __webpack_exports__["default"] = (DisplayText);

/***/ }),

/***/ "./components/index.ts":
/*!*****************************!*\
  !*** ./components/index.ts ***!
  \*****************************/
/*! exports provided: DisplayText, Nav, Container, SocialMedia, Vstack, Hstack, Center, P, AnimatedP, AnimatedH1, H1, AnimatedH3, H3, AnimatedH4, H4, FrontendDev, Minimalist, Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _displayText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayText */ "./components/displayText.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DisplayText", function() { return _displayText__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./components/nav/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return _nav__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container */ "./components/container.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _container__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _socialMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socialMedia */ "./components/socialMedia/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocialMedia", function() { return _socialMedia__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts */ "./components/layouts/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vstack", function() { return _layouts__WEBPACK_IMPORTED_MODULE_4__["Vstack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hstack", function() { return _layouts__WEBPACK_IMPORTED_MODULE_4__["Hstack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Center", function() { return _layouts__WEBPACK_IMPORTED_MODULE_4__["Center"]; });

/* harmony import */ var _typo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./typo */ "./components/typo.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "P", function() { return _typo__WEBPACK_IMPORTED_MODULE_5__["P"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimatedP", function() { return _typo__WEBPACK_IMPORTED_MODULE_5__["AnimatedP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimatedH1", function() { return _typo__WEBPACK_IMPORTED_MODULE_5__["AnimatedH1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H1", function() { return _typo__WEBPACK_IMPORTED_MODULE_5__["H1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimatedH3", function() { return _typo__WEBPACK_IMPORTED_MODULE_5__["AnimatedH3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H3", function() { return _typo__WEBPACK_IMPORTED_MODULE_5__["H3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimatedH4", function() { return _typo__WEBPACK_IMPORTED_MODULE_5__["AnimatedH4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H4", function() { return _typo__WEBPACK_IMPORTED_MODULE_5__["H4"]; });

/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views */ "./components/views/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FrontendDev", function() { return _views__WEBPACK_IMPORTED_MODULE_6__["FrontendDev"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Minimalist", function() { return _views__WEBPACK_IMPORTED_MODULE_6__["Minimalist"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return _views__WEBPACK_IMPORTED_MODULE_6__["Contact"]; });









/***/ }),

/***/ "./components/layouts/center.ts":
/*!**************************************!*\
  !*** ./components/layouts/center.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    padding-left: ", ";\n    padding-right: ", ";\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    max-width: ", ";\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  box-sizing: content-box;\n  position:relative;\n  margin-left: auto;\n  margin-right: auto;\n  ", "\n  ", "\n  ", "\n "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Center = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (_ref) {
  var maxWidth = _ref.maxWidth;
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2(), maxWidth);
}, function (_ref2) {
  var gutters = _ref2.gutters;
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3(), gutters, gutters);
}, function (_ref3) {
  var intrinsic = _ref3.intrinsic;
  return intrinsic && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4());
});
/* harmony default export */ __webpack_exports__["default"] = (Center);

/***/ }),

/***/ "./components/layouts/h-stack.ts":
/*!***************************************!*\
  !*** ./components/layouts/h-stack.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", ";\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: calc(", "rem / 2 * -1);\n  & > * {\n    margin: calc(", "rem / 2);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var handleAlignement = function handleAlignement(_ref) {
  var justifyContent = _ref.justifyContent,
      alignItems = _ref.alignItems,
      style = _ref.style;
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_objectSpread({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: justifyContent,
    alignItems: alignItems
  }, style));
};

var handleMargins = function handleMargins(_ref2) {
  var space = _ref2.space;
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject(), space, space);
};

var Cluster = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2(), handleAlignement, handleMargins);
/* harmony default export */ __webpack_exports__["default"] = (Cluster);

/***/ }),

/***/ "./components/layouts/index.ts":
/*!*************************************!*\
  !*** ./components/layouts/index.ts ***!
  \*************************************/
/*! exports provided: Vstack, Hstack, Center */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v-stack */ "./components/layouts/v-stack.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vstack", function() { return _v_stack__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _h_stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./h-stack */ "./components/layouts/h-stack.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hstack", function() { return _h_stack__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _center__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./center */ "./components/layouts/center.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Center", function() { return _center__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./components/layouts/v-stack.ts":
/*!***************************************!*\
  !*** ./components/layouts/v-stack.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n          @media only screen and (min-width: ", "px) {\n            ", "\n          }\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      ", "\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  & > * + * {\n    margin-top: ", "rem !important;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var spaceGenerator = function spaceGenerator(_ref) {
  var space = _ref.space;
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject(), space);
};

var handleBreakpoints = function handleBreakpoints(_ref2) {
  var space = _ref2.space;

  if (typeof space === "object") {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2(), Object.keys(space).map(function (objKey, _) {
      //  Wrapp breakpoints
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3(), [objKey], spaceGenerator({
        space: space[objKey]
      }));
    }));
  }

  return spaceGenerator({
    space: space
  });
};

var VStack = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4(), handleBreakpoints);
/* harmony default export */ __webpack_exports__["default"] = (VStack);

/***/ }),

/***/ "./components/nav/animated-logo.tsx":
/*!******************************************!*\
  !*** ./components/nav/animated-logo.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AnimatedLogo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ */ "./components/index.ts");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
var _jsxFileName = "C:\\Workspace\\Projects\\my-portfolio\\components\\nav\\animated-logo.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



function AnimatedLogo() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    layoutId: "logo",
    style: {
      width: 100,
      left: "50%",
      marginLeft: -50,
      top: "calc(50vh - 40px)",
      position: "absolute"
    },
    transition: {
      delay: 1,
      type: "spring"
    },
    initial: {
      x: 8
    },
    animate: {
      x: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_1__["AnimatedH3"], {
    transition: {
      type: "tween",
      duration: 1
    },
    initial: {
      clipPath: "inset(50% 0 50% 0)"
    },
    animate: {
      clipPath: "inset(0% 0 50% 0)"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Ilyass")), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    style: {
      width: 100,
      left: "50%",
      marginLeft: -50,
      position: "absolute",
      top: "calc(50vh - 40.4px)"
    },
    transition: {
      delay: 1,
      type: "spring"
    },
    initial: {
      x: -8
    },
    animate: {
      x: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_1__["AnimatedH3"], {
    transition: {
      type: "tween",
      duration: 1
    },
    initial: {
      clipPath: "inset(50% 0 50% 0)"
    },
    animate: {
      clipPath: "inset(50% 0 0% 0)"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Ilyass")));
}

/***/ }),

/***/ "./components/nav/index.tsx":
/*!**********************************!*\
  !*** ./components/nav/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ */ "./components/index.ts");
/* harmony import */ var _animated_logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animated-logo */ "./components/nav/animated-logo.tsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks */ "./hooks/index.ts");


var _this = undefined,
    _jsxFileName = "C:\\Workspace\\Projects\\my-portfolio\\components\\nav\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 100px;\n  padding-top: 20px;\n  background-image: linear-gradient(\n    180deg,\n    #0a0a0c 0%,\n    rgba(10, 10, 12, 0.282717) 59.38%,\n    rgba(10, 10, 12, 0.183781) 68.75%,\n    rgba(10, 10, 12, 0.107444) 79.17%,\n    rgba(10, 10, 12, 0.03125) 92.71%,\n    rgba(10, 10, 12, 0.0133929) 95.31%,\n    rgba(10, 10, 12, 0) 100%\n  );\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Nav = function Nav() {
  var animate = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useTimeout"])(2000);
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimateSharedLayout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, animate ? __jsx(Wrapper, {
    animate: {
      backgroundImage: gradient(0.65)
    },
    initial: {
      backgroundImage: gradient(0)
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_4__["Hstack"], {
    alignItems: "center",
    justifyContent: "space-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_4__["AnimatedH4"], {
    layoutId: "logo",
    transition: {
      duration: 2,
      ease: [0.6, 0, 0, 1]
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, "Ilyass"), animate && __jsx(___WEBPACK_IMPORTED_MODULE_4__["AnimatedP"], {
    direction: "right",
    transition: {
      delay: 1
    },
    style: {
      fontSize: 16,
      width: 200
    },
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, "Frontend developer / UI UX designer")))) : __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(_animated_logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  })));
};

var Wrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div)(_templateObject());

var gradient = function gradient(value) {
  return "linear-gradient(\n  180deg,\n  rgba(10, 10, 12, ".concat(value, "),\n  rgba(10, 10, 12, 0)");
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/socialMedia/index.tsx":
/*!******************************************!*\
  !*** ./components/socialMedia/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react_use_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-use-clipboard */ "./node_modules/react-use-clipboard/dist/react-use-clipboard.m.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ */ "./components/index.ts");




var _this = undefined,
    _jsxFileName = "C:\\Workspace\\Projects\\my-portfolio\\components\\socialMedia\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 30px;\n  position: absolute;\n  padding: 0 8px;\n  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.67);\n  color: #fff;\n  border-radius: 8px;\n  z-index: 200;\n  bottom: 50px;\n  line-height: 30px;\n  background-color: #000;\n  user-select: none;\n  font-size: 12px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: fixed;\n  bottom: 0px;\n  padding-top: 34px;\n  box-sizing: border-box;\n  height: 80px;\n  z-index: 100;\n  left: 0%;\n  width: 100%;\n  background-image: linear-gradient(\n    0deg,\n    #0a0a0c 0%,\n    rgba(10, 10, 12, 0.282717) 59.38%,\n    rgba(10, 10, 12, 0.183781) 68.75%,\n    rgba(10, 10, 12, 0.107444) 79.17%,\n    rgba(10, 10, 12, 0.03125) 92.71%,\n    rgba(10, 10, 12, 0.0133929) 95.31%,\n    rgba(10, 10, 12, 0) 100%\n  );\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var SocialMedia = function SocialMedia() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState({
    firstClick: false,
    secondClick: false
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      copyState = _React$useState2[0],
      setCopyState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      delayState = _React$useState4[0],
      setDelayState = _React$useState4[1];

  var _useClipboard = Object(react_use_clipboard__WEBPACK_IMPORTED_MODULE_6__["default"])("ilyassbenhakim2@gmail.com"),
      _useClipboard2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useClipboard, 2),
      _ = _useClipboard2[0],
      setCopied = _useClipboard2[1];

  var handleCopy = function handleCopy() {
    if (copyState.firstClick) {
      setCopyState(_objectSpread({}, copyState, {
        secondClick: true
      }));
      setCopied();
    }

    if (!copyState.firstClick) setCopyState(_objectSpread({}, copyState, {
      firstClick: true
    }));
  };

  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    var timeout = setTimeout(function () {
      return setCopyState({
        firstClick: false,
        secondClick: false
      });
    }, 1800);
    return function () {
      return clearTimeout(timeout);
    };
  }, [copyState]);
  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    return setDelayState(true);
  }, []);
  return __jsx(Wrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_7__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_7__["Hstack"], {
    space: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, data.map(function (_ref, key) {
    var src = _ref.src,
        alt = _ref.alt,
        href = _ref.href;
    return __jsx("a", {
      href: href,
      target: "_blanc",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].img, {
      src: src,
      key: key,
      initial: {
        y: 100
      },
      animate: {
        y: 0
      },
      transition: {
        delay: delayState ? 0 : key * 0.1
      },
      whileHover: {
        scale: 1.1
      },
      whileTap: {
        scale: 0.9
      },
      alt: alt,
      draggable: false,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 15
      }
    }));
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["AnimatePresence"], {
    exitBeforeEnter: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, copyState.firstClick && __jsx(CopyIndicator, {
    initial: {
      opacity: 0,
      y: 40,
      x: 40
    },
    animate: {
      opacity: 1,
      y: 30,
      x: 40
    },
    exit: {
      opacity: 0,
      y: 80,
      x: 40
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, copyState.secondClick ? "Email copied !" : "Double click to copy my email")), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].img, {
    src: "/mail.svg",
    onClick: handleCopy,
    initial: {
      y: 100
    },
    style: {
      cursor: "pointer"
    },
    animate: {
      y: 0
    },
    transition: {
      delay: delayState ? 0 : 0.3
    },
    whileHover: {
      scale: 1.1
    },
    whileTap: {
      scale: 0.9
    },
    alt: "Email",
    draggable: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  })))));
};

var data = [{
  src: "/github.svg",
  alt: "Github",
  href: "https://github.com/BenHakimIlyass"
}, {
  src: "/twitter.svg",
  alt: "Twitter",
  href: "https://twitter.com/dinasso1"
}, {
  src: "/linkedIn.svg",
  alt: "LinkedIn",
  href: "https://www.linkedin.com/in/ilyass-ben-hakim-%E2%9A%9B%EF%B8%8F-859480160/"
}];
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
var CopyIndicator = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div)(_templateObject2());
/* harmony default export */ __webpack_exports__["default"] = (SocialMedia);

/***/ }),

/***/ "./components/typo.ts":
/*!****************************!*\
  !*** ./components/typo.ts ***!
  \****************************/
/*! exports provided: P, AnimatedP, AnimatedH1, H1, AnimatedH3, H3, AnimatedH4, H4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedP", function() { return AnimatedP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedH1", function() { return AnimatedH1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1", function() { return H1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedH3", function() { return AnimatedH3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H3", function() { return H3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedH4", function() { return AnimatedH4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H4", function() { return H4; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./utils/index.ts");


function _templateObject14() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 1.6rem;\n  color: #fff;\n  line-height: 2.2rem;\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 36px;\n  color: #fff;\n  line-height: calc(36px + 36px * 0.4);\n  ", "\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 3.4rem;\n  font-weight: 700;\n  color: #fff;\n  line-height: 4rem;\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: #fff;\n  font-size: 1.1rem;\n  ", "\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-align: ", ";\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    -webkit-background-clip: text;\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-image: linear-gradient(", ");\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var gradient = function gradient(_ref) {
  var gradient = _ref.gradient;
  return !!gradient && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject(), gradient);
};

var alignement = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2(), function (_ref2) {
  var direction = _ref2.direction;
  return direction ? direction : "left";
}, gradient);
var Paragraph = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3(), alignement, Object(_utils__WEBPACK_IMPORTED_MODULE_3__["breakpoints"])({
  0: {
    fontSize: "0.8rem",
    lineHeight: "calc(14px + 14px * 0.4)"
  },
  520: {
    fontSize: "1.1rem",
    lineHeight: "calc(18px + 18px * 0.4)"
  }
}));
var Header = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4(), alignement);
var Header3 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5(), alignement, Object(_utils__WEBPACK_IMPORTED_MODULE_3__["breakpoints"])({
  0: {
    fontSize: "1.8rem",
    lineHeight: "calc(1.8rem + 1.8rem * 0.4)"
  },
  520: {
    fontSize: 36,
    lineHeight: "calc(36px + 36px * 0.4)"
  }
}));
var Header4 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6(), alignement);
var P = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject7(), Paragraph);
var AnimatedP = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].p)(_templateObject8(), Paragraph);
var AnimatedH1 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].h1)(_templateObject9(), Header);
var H1 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1(_templateObject10(), Header);
var AnimatedH3 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].h3)(_templateObject11(), Header3);
var H3 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3(_templateObject12(), Header3);
var AnimatedH4 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].h4)(_templateObject13(), Header4);
var H4 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h4(_templateObject14(), Header4);

/***/ }),

/***/ "./components/views/contact/index.tsx":
/*!********************************************!*\
  !*** ./components/views/contact/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ */ "./components/index.ts");


var _this = undefined,
    _jsxFileName = "C:\\Workspace\\Projects\\my-portfolio\\components\\views\\contact\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: white;\n  color: #12141b;\n  height: 40px;\n  border: none;\n  width: fit-content;\n  padding: 0 16px;\n  font-size: 1rem;\n  font-weight: 500;\n  cursor: pointer;\n  border-radius: 4px;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.4s;\n  &:hover {\n    box-shadow: 0px 0px 40px rgba(1, 5, 10, 0.57);\n    transform: translate3d(0, -4px, 0);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  height: 500px;\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Contact = function Contact() {
  return __jsx(___WEBPACK_IMPORTED_MODULE_3__["Center"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(Wrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      maxWidth: 860
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["Vstack"], {
    space: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["H3"], {
    direction: "center",
    style: {
      zIndex: 1
    },
    animate: {
      opacity: 1
    },
    initial: {
      opacity: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 15
    }
  }, "Thank you for your visit. I will be pleased to have an opportunity to work with you."), __jsx(___WEBPACK_IMPORTED_MODULE_3__["P"], {
    direction: "center",
    style: {
      color: "#CFCFCF"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, "I\u2019m always looking for new challenges, so if you want to be in touch with me, feel free to contact me."), __jsx(___WEBPACK_IMPORTED_MODULE_3__["Center"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "/Resume.pdf",
    target: "_blanc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx(Button, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 19
    }
  }, "My resume"))))))));
};

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject2());
/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/views/frontendDev/codeImg.tsx":
/*!**************************************************!*\
  !*** ./components/views/frontendDev/codeImg.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CodedImg; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Workspace\\Projects\\my-portfolio\\components\\views\\frontendDev\\codeImg.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function CodedImg() {
  return __jsx("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 489 376",
    fill: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("g", {
    filter: "url(#filter0_d)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("rect", {
    x: "40",
    y: "40",
    width: "409",
    height: "296",
    rx: "8",
    fill: "url(#pattern0)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  })), __jsx("path", {
    d: "M40.96 23.4896V14.9696H46.636V16.1576H42.304V18.7016H45.928V19.8176H42.304V23.4896H40.96ZM49.2631 23.6096C48.6071 23.6096 48.1111 23.3976 47.7751 22.9736C47.4391 22.5416 47.2711 21.9016 47.2711 21.0536V17.2136H48.5911V20.7896C48.5911 21.9176 48.9911 22.4816 49.7911 22.4816C50.1671 22.4816 50.5231 22.3656 50.8591 22.1336C51.1951 21.9016 51.4551 21.5656 51.6391 21.1256V17.2136H52.9591V21.9296C52.9591 22.0816 52.9831 22.1896 53.0311 22.2536C53.0871 22.3176 53.1831 22.3536 53.3191 22.3616V23.4896C53.1831 23.5136 53.0711 23.5296 52.9831 23.5376C52.8951 23.5456 52.8111 23.5496 52.7311 23.5496C52.4911 23.5496 52.2871 23.4856 52.1191 23.3576C51.9511 23.2216 51.8631 23.0496 51.8551 22.8416L51.8311 22.2176C51.5511 22.6736 51.1871 23.0216 50.7391 23.2616C50.2911 23.4936 49.7991 23.6096 49.2631 23.6096ZM60.2716 23.4896H58.9516V19.9736C58.9516 19.3816 58.8556 18.9536 58.6636 18.6896C58.4796 18.4176 58.2036 18.2816 57.8356 18.2816C57.6436 18.2816 57.4516 18.3176 57.2596 18.3896C57.0676 18.4616 56.8876 18.5656 56.7196 18.7016C56.5516 18.8296 56.3996 18.9856 56.2636 19.1696C56.1356 19.3456 56.0356 19.5416 55.9636 19.7576V23.4896H54.6436V17.2136H55.8436V18.4736C56.0836 18.0496 56.4316 17.7176 56.8876 17.4776C57.3436 17.2296 57.8476 17.1056 58.3996 17.1056C58.7756 17.1056 59.0836 17.1736 59.3236 17.3096C59.5636 17.4456 59.7516 17.6336 59.8876 17.8736C60.0316 18.1056 60.1316 18.3776 60.1876 18.6896C60.2436 18.9936 60.2716 19.3176 60.2716 19.6616V23.4896ZM61.3957 20.3456C61.3957 19.9056 61.4717 19.4896 61.6237 19.0976C61.7757 18.7056 61.9917 18.3616 62.2717 18.0656C62.5597 17.7696 62.9037 17.5376 63.3037 17.3696C63.7037 17.1936 64.1517 17.1056 64.6477 17.1056C65.2957 17.1056 65.8517 17.2496 66.3157 17.5376C66.7877 17.8176 67.1397 18.1936 67.3717 18.6656L66.0877 19.0736C65.9357 18.8096 65.7317 18.6056 65.4757 18.4616C65.2197 18.3096 64.9357 18.2336 64.6237 18.2336C64.3597 18.2336 64.1117 18.2856 63.8797 18.3896C63.6557 18.4936 63.4597 18.6416 63.2917 18.8336C63.1237 19.0176 62.9917 19.2376 62.8957 19.4936C62.7997 19.7496 62.7517 20.0336 62.7517 20.3456C62.7517 20.6496 62.7997 20.9336 62.8957 21.1976C62.9997 21.4536 63.1357 21.6776 63.3037 21.8696C63.4797 22.0616 63.6797 22.2136 63.9037 22.3256C64.1357 22.4296 64.3797 22.4816 64.6357 22.4816C64.7957 22.4816 64.9557 22.4616 65.1157 22.4216C65.2757 22.3736 65.4197 22.3096 65.5477 22.2296C65.6837 22.1496 65.7997 22.0576 65.8957 21.9536C65.9997 21.8496 66.0757 21.7376 66.1237 21.6176L67.4197 22.0016C67.2117 22.4736 66.8637 22.8616 66.3757 23.1656C65.8877 23.4616 65.3117 23.6096 64.6477 23.6096C64.1597 23.6096 63.7157 23.5216 63.3157 23.3456C62.9157 23.1696 62.5717 22.9336 62.2837 22.6376C62.0037 22.3336 61.7837 21.9856 61.6237 21.5936C61.4717 21.2016 61.3957 20.7856 61.3957 20.3456ZM71.9988 23.1656C71.8308 23.2456 71.5988 23.3376 71.3028 23.4416C71.0068 23.5376 70.6908 23.5856 70.3548 23.5856C70.1468 23.5856 69.9508 23.5576 69.7668 23.5016C69.5828 23.4456 69.4188 23.3616 69.2748 23.2496C69.1388 23.1376 69.0308 22.9936 68.9508 22.8176C68.8708 22.6336 68.8308 22.4136 68.8308 22.1576V18.2336H68.0028V17.2136H68.8308V15.1496H70.1508V17.2136H71.5188V18.2336H70.1508V21.7376C70.1668 21.9616 70.2348 22.1256 70.3548 22.2296C70.4828 22.3256 70.6388 22.3736 70.8228 22.3736C71.0068 22.3736 71.1828 22.3416 71.3508 22.2776C71.5188 22.2136 71.6428 22.1616 71.7228 22.1216L71.9988 23.1656ZM72.9131 23.4896V17.2136H74.2331V23.4896H72.9131ZM72.9131 16.1816V14.7296H74.2331V16.1816H72.9131ZM78.6393 23.6096C78.1433 23.6096 77.6953 23.5216 77.2953 23.3456C76.9033 23.1696 76.5673 22.9336 76.2873 22.6376C76.0073 22.3416 75.7913 21.9976 75.6393 21.6056C75.4873 21.2056 75.4113 20.7896 75.4113 20.3576C75.4113 19.9256 75.4873 19.5136 75.6393 19.1216C75.7913 18.7216 76.0073 18.3736 76.2873 18.0776C76.5753 17.7816 76.9153 17.5456 77.3073 17.3696C77.7073 17.1936 78.1513 17.1056 78.6393 17.1056C79.1273 17.1056 79.5673 17.1936 79.9593 17.3696C80.3593 17.5456 80.6993 17.7816 80.9793 18.0776C81.2673 18.3736 81.4873 18.7216 81.6393 19.1216C81.7913 19.5136 81.8673 19.9256 81.8673 20.3576C81.8673 20.7896 81.7913 21.2056 81.6393 21.6056C81.4873 21.9976 81.2673 22.3416 80.9793 22.6376C80.6993 22.9336 80.3593 23.1696 79.9593 23.3456C79.5673 23.5216 79.1273 23.6096 78.6393 23.6096ZM76.7673 20.3696C76.7673 20.6736 76.8153 20.9536 76.9113 21.2096C77.0073 21.4656 77.1393 21.6896 77.3073 21.8816C77.4753 22.0656 77.6713 22.2136 77.8953 22.3256C78.1273 22.4296 78.3753 22.4816 78.6393 22.4816C78.9033 22.4816 79.1473 22.4296 79.3713 22.3256C79.6033 22.2136 79.8033 22.0616 79.9713 21.8696C80.1393 21.6776 80.2713 21.4536 80.3673 21.1976C80.4633 20.9416 80.5113 20.6616 80.5113 20.3576C80.5113 20.0616 80.4633 19.7856 80.3673 19.5296C80.2713 19.2656 80.1393 19.0376 79.9713 18.8456C79.8033 18.6536 79.6033 18.5056 79.3713 18.4016C79.1473 18.2896 78.9033 18.2336 78.6393 18.2336C78.3833 18.2336 78.1393 18.2896 77.9073 18.4016C77.6833 18.5136 77.4873 18.6656 77.3193 18.8576C77.1513 19.0496 77.0153 19.2776 76.9113 19.5416C76.8153 19.7976 76.7673 20.0736 76.7673 20.3696ZM88.6661 23.4896H87.3461V19.9736C87.3461 19.3816 87.2501 18.9536 87.0581 18.6896C86.8741 18.4176 86.5981 18.2816 86.2301 18.2816C86.0381 18.2816 85.8461 18.3176 85.6541 18.3896C85.4621 18.4616 85.2821 18.5656 85.1141 18.7016C84.9461 18.8296 84.7941 18.9856 84.6581 19.1696C84.5301 19.3456 84.4301 19.5416 84.3581 19.7576V23.4896H83.0381V17.2136H84.2381V18.4736C84.4781 18.0496 84.8261 17.7176 85.2821 17.4776C85.7381 17.2296 86.2421 17.1056 86.7941 17.1056C87.1701 17.1056 87.4781 17.1736 87.7181 17.3096C87.9581 17.4456 88.1461 17.6336 88.2821 17.8736C88.4261 18.1056 88.5261 18.3776 88.5821 18.6896C88.6381 18.9936 88.6661 19.3176 88.6661 19.6616V23.4896ZM91.8663 23.6096C91.5623 23.6096 91.2783 23.5616 91.0143 23.4656C90.7583 23.3616 90.5343 23.2216 90.3423 23.0456C90.1583 22.8696 90.0103 22.6616 89.8983 22.4216C89.7943 22.1816 89.7423 21.9216 89.7423 21.6416C89.7423 21.3456 89.8063 21.0776 89.9343 20.8376C90.0623 20.5976 90.2423 20.3896 90.4743 20.2136C90.7143 20.0376 90.9943 19.9016 91.3143 19.8056C91.6423 19.7096 92.0023 19.6616 92.3943 19.6616C92.6903 19.6616 92.9823 19.6896 93.2703 19.7456C93.5583 19.7936 93.8183 19.8616 94.0503 19.9496V19.5176C94.0503 19.0536 93.9183 18.6936 93.6543 18.4376C93.3903 18.1736 93.0103 18.0416 92.5143 18.0416C92.1783 18.0416 91.8463 18.1056 91.5183 18.2336C91.1983 18.3536 90.8663 18.5296 90.5223 18.7616L90.1143 17.9216C90.9223 17.3776 91.7623 17.1056 92.6343 17.1056C93.4983 17.1056 94.1703 17.3256 94.6503 17.7656C95.1303 18.2056 95.3703 18.8376 95.3703 19.6616V21.9296C95.3703 22.2096 95.4863 22.3536 95.7183 22.3616V23.4896C95.5903 23.5136 95.4783 23.5296 95.3823 23.5376C95.2943 23.5456 95.2063 23.5496 95.1183 23.5496C94.8623 23.5496 94.6623 23.4856 94.5183 23.3576C94.3823 23.2296 94.2983 23.0656 94.2663 22.8656L94.2303 22.4696C93.9503 22.8376 93.6023 23.1216 93.1863 23.3216C92.7783 23.5136 92.3383 23.6096 91.8663 23.6096ZM92.2263 22.6376C92.5463 22.6376 92.8463 22.5816 93.1263 22.4696C93.4143 22.3496 93.6383 22.1856 93.7983 21.9776C93.9663 21.8336 94.0503 21.6816 94.0503 21.5216V20.6936C93.8263 20.6056 93.5863 20.5376 93.3303 20.4896C93.0823 20.4416 92.8383 20.4176 92.5983 20.4176C92.1263 20.4176 91.7383 20.5216 91.4343 20.7296C91.1383 20.9296 90.9902 21.1976 90.9902 21.5336C90.9902 21.8456 91.1063 22.1096 91.3383 22.3256C91.5703 22.5336 91.8663 22.6376 92.2263 22.6376ZM96.9837 14.7296H98.3037V21.6776C98.3037 21.9096 98.3637 22.0936 98.4837 22.2296C98.6037 22.3576 98.7717 22.4216 98.9877 22.4216C99.0757 22.4216 99.1757 22.4056 99.2877 22.3736C99.4077 22.3416 99.5197 22.3056 99.6237 22.2656L99.8157 23.2976C99.6237 23.3856 99.3957 23.4536 99.1317 23.5016C98.8677 23.5576 98.6317 23.5856 98.4237 23.5856C97.9677 23.5856 97.6117 23.4616 97.3557 23.2136C97.1077 22.9656 96.9837 22.6136 96.9837 22.1576V14.7296ZM106.735 23.6096C106.231 23.6096 105.787 23.4896 105.403 23.2496C105.019 23.0096 104.715 22.6976 104.491 22.3136V26.0456H103.171V17.2136H104.335V18.3416C104.575 17.9656 104.883 17.6656 105.259 17.4416C105.643 17.2176 106.075 17.1056 106.555 17.1056C106.987 17.1056 107.383 17.1936 107.743 17.3696C108.103 17.5456 108.415 17.7816 108.679 18.0776C108.943 18.3736 109.147 18.7176 109.291 19.1096C109.443 19.5016 109.519 19.9136 109.519 20.3456C109.519 20.8016 109.451 21.2296 109.315 21.6296C109.179 22.0216 108.987 22.3656 108.739 22.6616C108.491 22.9496 108.195 23.1816 107.851 23.3576C107.515 23.5256 107.143 23.6096 106.735 23.6096ZM106.303 22.4816C106.583 22.4816 106.835 22.4216 107.059 22.3016C107.291 22.1816 107.487 22.0216 107.647 21.8216C107.815 21.6216 107.943 21.3936 108.031 21.1376C108.119 20.8816 108.163 20.6176 108.163 20.3456C108.163 20.0576 108.111 19.7856 108.007 19.5296C107.911 19.2736 107.775 19.0496 107.599 18.8576C107.431 18.6656 107.227 18.5136 106.987 18.4016C106.747 18.2896 106.487 18.2336 106.207 18.2336C106.039 18.2336 105.863 18.2656 105.679 18.3296C105.495 18.3936 105.323 18.4816 105.163 18.5936C105.003 18.7056 104.863 18.8376 104.743 18.9896C104.623 19.1336 104.539 19.2936 104.491 19.4696V21.1136C104.571 21.3056 104.675 21.4856 104.803 21.6536C104.931 21.8216 105.071 21.9656 105.223 22.0856C105.383 22.2056 105.555 22.3016 105.739 22.3736C105.923 22.4456 106.111 22.4816 106.303 22.4816ZM114.234 18.3536C113.722 18.3696 113.266 18.4896 112.866 18.7136C112.474 18.9296 112.194 19.2416 112.026 19.6496V23.4896H110.706V17.2136H111.93V18.6176C112.146 18.1856 112.426 17.8416 112.77 17.5856C113.122 17.3216 113.498 17.1776 113.898 17.1536C113.978 17.1536 114.042 17.1536 114.09 17.1536C114.146 17.1536 114.194 17.1576 114.234 17.1656V18.3536ZM117.698 23.6096C117.202 23.6096 116.754 23.5216 116.354 23.3456C115.962 23.1696 115.626 22.9336 115.346 22.6376C115.066 22.3416 114.85 21.9976 114.698 21.6056C114.546 21.2056 114.47 20.7896 114.47 20.3576C114.47 19.9256 114.546 19.5136 114.698 19.1216C114.85 18.7216 115.066 18.3736 115.346 18.0776C115.634 17.7816 115.974 17.5456 116.366 17.3696C116.766 17.1936 117.21 17.1056 117.698 17.1056C118.186 17.1056 118.626 17.1936 119.018 17.3696C119.418 17.5456 119.758 17.7816 120.038 18.0776C120.326 18.3736 120.546 18.7216 120.698 19.1216C120.85 19.5136 120.926 19.9256 120.926 20.3576C120.926 20.7896 120.85 21.2056 120.698 21.6056C120.546 21.9976 120.326 22.3416 120.038 22.6376C119.758 22.9336 119.418 23.1696 119.018 23.3456C118.626 23.5216 118.186 23.6096 117.698 23.6096ZM115.826 20.3696C115.826 20.6736 115.874 20.9536 115.97 21.2096C116.066 21.4656 116.198 21.6896 116.366 21.8816C116.534 22.0656 116.73 22.2136 116.954 22.3256C117.186 22.4296 117.434 22.4816 117.698 22.4816C117.962 22.4816 118.206 22.4296 118.43 22.3256C118.662 22.2136 118.862 22.0616 119.03 21.8696C119.198 21.6776 119.33 21.4536 119.426 21.1976C119.522 20.9416 119.57 20.6616 119.57 20.3576C119.57 20.0616 119.522 19.7856 119.426 19.5296C119.33 19.2656 119.198 19.0376 119.03 18.8456C118.862 18.6536 118.662 18.5056 118.43 18.4016C118.206 18.2896 117.962 18.2336 117.698 18.2336C117.442 18.2336 117.198 18.2896 116.966 18.4016C116.742 18.5136 116.546 18.6656 116.378 18.8576C116.21 19.0496 116.074 19.2776 115.97 19.5416C115.874 19.7976 115.826 20.0736 115.826 20.3696ZM124.581 23.5496C124.157 23.5496 123.769 23.4656 123.417 23.2976C123.065 23.1216 122.761 22.8856 122.505 22.5896C122.257 22.2936 122.061 21.9536 121.917 21.5696C121.781 21.1856 121.713 20.7816 121.713 20.3576C121.713 19.9096 121.785 19.4896 121.929 19.0976C122.073 18.6976 122.273 18.3536 122.529 18.0656C122.785 17.7696 123.089 17.5376 123.441 17.3696C123.801 17.1936 124.197 17.1056 124.629 17.1056C125.133 17.1056 125.573 17.2256 125.949 17.4656C126.333 17.7056 126.649 18.0176 126.897 18.4016V17.2136H128.061V23.3096C128.061 23.7656 127.977 24.1696 127.809 24.5216C127.641 24.8736 127.405 25.1696 127.101 25.4096C126.805 25.6576 126.453 25.8456 126.045 25.9736C125.637 26.1016 125.197 26.1656 124.725 26.1656C124.029 26.1656 123.449 26.0456 122.985 25.8056C122.529 25.5736 122.145 25.2456 121.833 24.8216L122.577 24.1256C122.817 24.4616 123.125 24.7176 123.501 24.8936C123.885 25.0696 124.293 25.1576 124.725 25.1576C124.997 25.1576 125.253 25.1216 125.493 25.0496C125.741 24.9776 125.957 24.8656 126.141 24.7136C126.325 24.5616 126.469 24.3696 126.573 24.1376C126.685 23.9056 126.741 23.6296 126.741 23.3096V22.3496C126.517 22.7336 126.209 23.0296 125.817 23.2376C125.425 23.4456 125.013 23.5496 124.581 23.5496ZM125.013 22.4816C125.213 22.4816 125.405 22.4496 125.589 22.3856C125.773 22.3136 125.941 22.2216 126.093 22.1096C126.253 21.9896 126.389 21.8576 126.501 21.7136C126.613 21.5616 126.693 21.4016 126.741 21.2336V19.5896C126.661 19.3896 126.557 19.2096 126.429 19.0496C126.301 18.8816 126.153 18.7376 125.985 18.6176C125.825 18.4976 125.653 18.4056 125.469 18.3416C125.285 18.2696 125.101 18.2336 124.917 18.2336C124.629 18.2336 124.369 18.2976 124.137 18.4256C123.913 18.5456 123.721 18.7096 123.561 18.9176C123.401 19.1176 123.277 19.3456 123.189 19.6016C123.101 19.8576 123.057 20.1216 123.057 20.3936C123.057 20.6816 123.105 20.9536 123.201 21.2096C123.305 21.4576 123.445 21.6776 123.621 21.8696C123.797 22.0536 124.001 22.2016 124.233 22.3136C124.473 22.4256 124.733 22.4816 125.013 22.4816ZM133.172 18.3536C132.66 18.3696 132.204 18.4896 131.804 18.7136C131.412 18.9296 131.132 19.2416 130.964 19.6496V23.4896H129.644V17.2136H130.868V18.6176C131.084 18.1856 131.364 17.8416 131.708 17.5856C132.06 17.3216 132.436 17.1776 132.836 17.1536C132.916 17.1536 132.98 17.1536 133.028 17.1536C133.084 17.1536 133.132 17.1576 133.172 17.1656V18.3536ZM135.718 23.6096C135.414 23.6096 135.13 23.5616 134.866 23.4656C134.61 23.3616 134.386 23.2216 134.194 23.0456C134.01 22.8696 133.862 22.6616 133.75 22.4216C133.646 22.1816 133.594 21.9216 133.594 21.6416C133.594 21.3456 133.658 21.0776 133.786 20.8376C133.914 20.5976 134.094 20.3896 134.326 20.2136C134.566 20.0376 134.846 19.9016 135.166 19.8056C135.494 19.7096 135.854 19.6616 136.246 19.6616C136.542 19.6616 136.834 19.6896 137.122 19.7456C137.41 19.7936 137.67 19.8616 137.902 19.9496V19.5176C137.902 19.0536 137.77 18.6936 137.506 18.4376C137.242 18.1736 136.862 18.0416 136.366 18.0416C136.03 18.0416 135.698 18.1056 135.37 18.2336C135.05 18.3536 134.718 18.5296 134.374 18.7616L133.966 17.9216C134.774 17.3776 135.614 17.1056 136.486 17.1056C137.35 17.1056 138.022 17.3256 138.502 17.7656C138.982 18.2056 139.222 18.8376 139.222 19.6616V21.9296C139.222 22.2096 139.338 22.3536 139.57 22.3616V23.4896C139.442 23.5136 139.33 23.5296 139.234 23.5376C139.146 23.5456 139.058 23.5496 138.97 23.5496C138.714 23.5496 138.514 23.4856 138.37 23.3576C138.234 23.2296 138.15 23.0656 138.118 22.8656L138.082 22.4696C137.802 22.8376 137.454 23.1216 137.038 23.3216C136.63 23.5136 136.19 23.6096 135.718 23.6096ZM136.078 22.6376C136.398 22.6376 136.698 22.5816 136.978 22.4696C137.266 22.3496 137.49 22.1856 137.65 21.9776C137.818 21.8336 137.902 21.6816 137.902 21.5216V20.6936C137.678 20.6056 137.438 20.5376 137.182 20.4896C136.934 20.4416 136.69 20.4176 136.45 20.4176C135.978 20.4176 135.59 20.5216 135.286 20.7296C134.99 20.9296 134.842 21.1976 134.842 21.5336C134.842 21.8456 134.958 22.1096 135.19 22.3256C135.422 22.5336 135.718 22.6376 136.078 22.6376ZM150.423 23.4896H149.103V19.9736C149.103 19.3896 149.007 18.9616 148.815 18.6896C148.623 18.4176 148.343 18.2816 147.975 18.2816C147.599 18.2816 147.255 18.4216 146.943 18.7016C146.639 18.9736 146.419 19.3296 146.283 19.7696V23.4896H144.963V19.9736C144.963 19.3816 144.867 18.9536 144.675 18.6896C144.483 18.4176 144.207 18.2816 143.847 18.2816C143.471 18.2816 143.127 18.4176 142.815 18.6896C142.503 18.9616 142.279 19.3176 142.143 19.7576V23.4896H140.823V17.2136H142.023V18.4736C142.271 18.0336 142.595 17.6976 142.995 17.4656C143.403 17.2256 143.867 17.1056 144.387 17.1056C144.907 17.1056 145.315 17.2416 145.611 17.5136C145.915 17.7856 146.103 18.1256 146.175 18.5336C146.439 18.0696 146.771 17.7176 147.171 17.4776C147.571 17.2296 148.027 17.1056 148.539 17.1056C148.907 17.1056 149.211 17.1776 149.451 17.3216C149.699 17.4576 149.895 17.6416 150.039 17.8736C150.183 18.1056 150.283 18.3776 150.339 18.6896C150.395 18.9936 150.423 19.3176 150.423 19.6616V23.4896ZM161.544 23.4896H160.224V19.9736C160.224 19.3896 160.128 18.9616 159.936 18.6896C159.744 18.4176 159.464 18.2816 159.096 18.2816C158.72 18.2816 158.376 18.4216 158.064 18.7016C157.76 18.9736 157.54 19.3296 157.404 19.7696V23.4896H156.084V19.9736C156.084 19.3816 155.988 18.9536 155.796 18.6896C155.604 18.4176 155.328 18.2816 154.968 18.2816C154.592 18.2816 154.248 18.4176 153.936 18.6896C153.624 18.9616 153.4 19.3176 153.264 19.7576V23.4896H151.944V17.2136H153.144V18.4736C153.392 18.0336 153.716 17.6976 154.116 17.4656C154.524 17.2256 154.988 17.1056 155.508 17.1056C156.028 17.1056 156.436 17.2416 156.732 17.5136C157.036 17.7856 157.224 18.1256 157.296 18.5336C157.56 18.0696 157.892 17.7176 158.292 17.4776C158.692 17.2296 159.148 17.1056 159.66 17.1056C160.028 17.1056 160.332 17.1776 160.572 17.3216C160.82 17.4576 161.016 17.6416 161.16 17.8736C161.304 18.1056 161.404 18.3776 161.46 18.6896C161.516 18.9936 161.544 19.3176 161.544 19.6616V23.4896ZM163.065 23.4896V17.2136H164.385V23.4896H163.065ZM163.065 16.1816V14.7296H164.385V16.1816H163.065ZM171.6 23.4896H170.28V19.9736C170.28 19.3816 170.184 18.9536 169.992 18.6896C169.808 18.4176 169.532 18.2816 169.164 18.2816C168.972 18.2816 168.78 18.3176 168.588 18.3896C168.396 18.4616 168.216 18.5656 168.048 18.7016C167.88 18.8296 167.728 18.9856 167.592 19.1696C167.464 19.3456 167.364 19.5416 167.292 19.7576V23.4896H165.972V17.2136H167.172V18.4736C167.412 18.0496 167.76 17.7176 168.216 17.4776C168.672 17.2296 169.176 17.1056 169.728 17.1056C170.104 17.1056 170.412 17.1736 170.652 17.3096C170.892 17.4456 171.08 17.6336 171.216 17.8736C171.36 18.1056 171.46 18.3776 171.516 18.6896C171.572 18.9936 171.6 19.3176 171.6 19.6616V23.4896ZM175.616 23.5496C175.192 23.5496 174.804 23.4656 174.452 23.2976C174.1 23.1216 173.796 22.8856 173.54 22.5896C173.292 22.2936 173.096 21.9536 172.952 21.5696C172.816 21.1856 172.748 20.7816 172.748 20.3576C172.748 19.9096 172.82 19.4896 172.964 19.0976C173.108 18.6976 173.308 18.3536 173.564 18.0656C173.82 17.7696 174.124 17.5376 174.476 17.3696C174.836 17.1936 175.232 17.1056 175.664 17.1056C176.168 17.1056 176.608 17.2256 176.984 17.4656C177.368 17.7056 177.684 18.0176 177.932 18.4016V17.2136H179.096V23.3096C179.096 23.7656 179.012 24.1696 178.844 24.5216C178.676 24.8736 178.44 25.1696 178.136 25.4096C177.84 25.6576 177.488 25.8456 177.08 25.9736C176.672 26.1016 176.232 26.1656 175.76 26.1656C175.064 26.1656 174.484 26.0456 174.02 25.8056C173.564 25.5736 173.18 25.2456 172.868 24.8216L173.612 24.1256C173.852 24.4616 174.16 24.7176 174.536 24.8936C174.92 25.0696 175.328 25.1576 175.76 25.1576C176.032 25.1576 176.288 25.1216 176.528 25.0496C176.776 24.9776 176.992 24.8656 177.176 24.7136C177.36 24.5616 177.504 24.3696 177.608 24.1376C177.72 23.9056 177.776 23.6296 177.776 23.3096V22.3496C177.552 22.7336 177.244 23.0296 176.852 23.2376C176.46 23.4456 176.048 23.5496 175.616 23.5496ZM176.048 22.4816C176.248 22.4816 176.44 22.4496 176.624 22.3856C176.808 22.3136 176.976 22.2216 177.128 22.1096C177.288 21.9896 177.424 21.8576 177.536 21.7136C177.648 21.5616 177.728 21.4016 177.776 21.2336V19.5896C177.696 19.3896 177.592 19.2096 177.464 19.0496C177.336 18.8816 177.188 18.7376 177.02 18.6176C176.86 18.4976 176.688 18.4056 176.504 18.3416C176.32 18.2696 176.136 18.2336 175.952 18.2336C175.664 18.2336 175.404 18.2976 175.172 18.4256C174.948 18.5456 174.756 18.7096 174.596 18.9176C174.436 19.1176 174.312 19.3456 174.224 19.6016C174.136 19.8576 174.092 20.1216 174.092 20.3936C174.092 20.6816 174.14 20.9536 174.236 21.2096C174.34 21.4576 174.48 21.6776 174.656 21.8696C174.832 22.0536 175.036 22.2016 175.268 22.3136C175.508 22.4256 175.768 22.4816 176.048 22.4816Z",
    fill: "#F0F4F8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("filter", {
    id: "filter0_d",
    x: "0",
    y: "0",
    width: "489",
    height: "376",
    filterUnits: "userSpaceOnUse",
    "color-interpolation-filters": "sRGB",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx("feColorMatrix", {
    "in": "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), __jsx("feOffset", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "20",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }), __jsx("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0.0034375 0 0 0 0 0.0204688 0 0 0 0 0.0375 0 0 0 0.57 0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }), __jsx("feBlend", {
    mode: "normal",
    "in": "SourceGraphic",
    in2: "effect1_dropShadow",
    result: "shape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  })), __jsx("pattern", {
    id: "pattern0",
    patternContentUnits: "objectBoundingBox",
    width: "1",
    height: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("use", {
    href: "#image0",
    transform: "translate(0 -0.000338508) scale(0.00198413 0.00274158)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  })), __jsx("image", {
    id: "image0",
    width: "504",
    height: "365",
    href: "data:image/png;base64,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",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./components/views/frontendDev/hooksImg.tsx":
/*!***************************************************!*\
  !*** ./components/views/frontendDev/hooksImg.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HooksImg; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Workspace\\Projects\\my-portfolio\\components\\views\\frontendDev\\hooksImg.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function HooksImg() {
  return __jsx("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 489 157",
    fill: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("g", {
    filter: "url(#filter001_d)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("rect", {
    x: "40",
    y: "40",
    width: "409",
    height: "77",
    rx: "8",
    fill: "url(#pattern001)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  })), __jsx("path", {
    d: "M49.0776 14.48V23H47.7216V19.244H43.4256V23H42.0816V14.48H43.4256V18.044H47.7216V14.48H49.0776ZM53.5695 23.12C53.0735 23.12 52.6255 23.032 52.2255 22.856C51.8335 22.68 51.4975 22.444 51.2175 22.148C50.9375 21.852 50.7215 21.508 50.5695 21.116C50.4175 20.716 50.3415 20.3 50.3415 19.868C50.3415 19.436 50.4175 19.024 50.5695 18.632C50.7215 18.232 50.9375 17.884 51.2175 17.588C51.5055 17.292 51.8455 17.056 52.2375 16.88C52.6375 16.704 53.0815 16.616 53.5695 16.616C54.0575 16.616 54.4975 16.704 54.8895 16.88C55.2895 17.056 55.6295 17.292 55.9095 17.588C56.1975 17.884 56.4175 18.232 56.5695 18.632C56.7215 19.024 56.7975 19.436 56.7975 19.868C56.7975 20.3 56.7215 20.716 56.5695 21.116C56.4175 21.508 56.1975 21.852 55.9095 22.148C55.6295 22.444 55.2895 22.68 54.8895 22.856C54.4975 23.032 54.0575 23.12 53.5695 23.12ZM51.6975 19.88C51.6975 20.184 51.7455 20.464 51.8415 20.72C51.9375 20.976 52.0695 21.2 52.2375 21.392C52.4055 21.576 52.6015 21.724 52.8255 21.836C53.0575 21.94 53.3055 21.992 53.5695 21.992C53.8335 21.992 54.0775 21.94 54.3015 21.836C54.5335 21.724 54.7335 21.572 54.9015 21.38C55.0695 21.188 55.2015 20.964 55.2975 20.708C55.3935 20.452 55.4415 20.172 55.4415 19.868C55.4415 19.572 55.3935 19.296 55.2975 19.04C55.2015 18.776 55.0695 18.548 54.9015 18.356C54.7335 18.164 54.5335 18.016 54.3015 17.912C54.0775 17.8 53.8335 17.744 53.5695 17.744C53.3135 17.744 53.0695 17.8 52.8375 17.912C52.6135 18.024 52.4175 18.176 52.2495 18.368C52.0815 18.56 51.9455 18.788 51.8415 19.052C51.7455 19.308 51.6975 19.584 51.6975 19.88ZM60.7883 23.12C60.2923 23.12 59.8443 23.032 59.4443 22.856C59.0523 22.68 58.7163 22.444 58.4363 22.148C58.1563 21.852 57.9403 21.508 57.7883 21.116C57.6363 20.716 57.5603 20.3 57.5603 19.868C57.5603 19.436 57.6363 19.024 57.7883 18.632C57.9403 18.232 58.1563 17.884 58.4363 17.588C58.7243 17.292 59.0643 17.056 59.4563 16.88C59.8563 16.704 60.3003 16.616 60.7883 16.616C61.2763 16.616 61.7163 16.704 62.1083 16.88C62.5083 17.056 62.8483 17.292 63.1283 17.588C63.4163 17.884 63.6363 18.232 63.7883 18.632C63.9403 19.024 64.0163 19.436 64.0163 19.868C64.0163 20.3 63.9403 20.716 63.7883 21.116C63.6363 21.508 63.4163 21.852 63.1283 22.148C62.8483 22.444 62.5083 22.68 62.1083 22.856C61.7163 23.032 61.2763 23.12 60.7883 23.12ZM58.9163 19.88C58.9163 20.184 58.9643 20.464 59.0603 20.72C59.1563 20.976 59.2883 21.2 59.4563 21.392C59.6243 21.576 59.8203 21.724 60.0443 21.836C60.2763 21.94 60.5243 21.992 60.7883 21.992C61.0523 21.992 61.2963 21.94 61.5203 21.836C61.7523 21.724 61.9523 21.572 62.1203 21.38C62.2883 21.188 62.4203 20.964 62.5163 20.708C62.6123 20.452 62.6603 20.172 62.6603 19.868C62.6603 19.572 62.6123 19.296 62.5163 19.04C62.4203 18.776 62.2883 18.548 62.1203 18.356C61.9523 18.164 61.7523 18.016 61.5203 17.912C61.2963 17.8 61.0523 17.744 60.7883 17.744C60.5323 17.744 60.2883 17.8 60.0563 17.912C59.8323 18.024 59.6363 18.176 59.4683 18.368C59.3003 18.56 59.1643 18.788 59.0603 19.052C58.9643 19.308 58.9163 19.584 58.9163 19.88ZM69.555 23L67.551 20.108L66.507 21.092V23H65.187V14.24H66.507V19.796L69.387 16.736H70.827L68.391 19.364L70.959 23H69.555ZM74.0412 23.12C73.5372 23.12 73.0332 23.04 72.5292 22.88C72.0332 22.712 71.6052 22.476 71.2452 22.172L71.7732 21.332C72.1492 21.604 72.5212 21.812 72.8892 21.956C73.2572 22.092 73.6332 22.16 74.0172 22.16C74.4092 22.16 74.7172 22.084 74.9412 21.932C75.1732 21.78 75.2892 21.564 75.2892 21.284C75.2892 21.02 75.1612 20.828 74.9052 20.708C74.6492 20.588 74.2492 20.456 73.7052 20.312C73.3132 20.208 72.9772 20.108 72.6972 20.012C72.4172 19.916 72.1892 19.804 72.0132 19.676C71.8372 19.548 71.7092 19.4 71.6292 19.232C71.5492 19.064 71.5092 18.86 71.5092 18.62C71.5092 18.3 71.5692 18.016 71.6892 17.768C71.8172 17.52 71.9892 17.312 72.2052 17.144C72.4292 16.968 72.6892 16.836 72.9852 16.748C73.2812 16.66 73.6012 16.616 73.9452 16.616C74.4172 16.616 74.8572 16.688 75.2652 16.832C75.6732 16.976 76.0372 17.184 76.3572 17.456L75.7932 18.248C75.2092 17.784 74.5892 17.552 73.9332 17.552C73.5972 17.552 73.3132 17.624 73.0812 17.768C72.8572 17.904 72.7452 18.124 72.7452 18.428C72.7452 18.556 72.7692 18.664 72.8172 18.752C72.8652 18.84 72.9412 18.916 73.0452 18.98C73.1572 19.044 73.2972 19.104 73.4652 19.16C73.6412 19.208 73.8572 19.264 74.1132 19.328C74.5372 19.432 74.9012 19.536 75.2052 19.64C75.5172 19.744 75.7732 19.868 75.9732 20.012C76.1732 20.148 76.3212 20.312 76.4172 20.504C76.5132 20.688 76.5612 20.912 76.5612 21.176C76.5612 21.776 76.3332 22.252 75.8772 22.604C75.4292 22.948 74.8172 23.12 74.0412 23.12Z",
    fill: "#F0F4F8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("filter", {
    id: "filter001_d",
    x: "0",
    y: "0",
    width: "489",
    height: "157",
    filterUnits: "userSpaceOnUse",
    "color-interpolation-filters": "sRGB",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("feFlood", {
    "flood-opacity": "0",
    result: "BackgroundImageFix",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx("feColorMatrix", {
    "in": "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), __jsx("feOffset", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }), __jsx("feGaussianBlur", {
    stdDeviation: "20",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }), __jsx("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0.0034375 0 0 0 0 0.0204688 0 0 0 0 0.0375 0 0 0 0.57 0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }), __jsx("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }), __jsx("feBlend", {
    mode: "normal",
    "in": "SourceGraphic",
    in2: "effect1_dropShadow",
    result: "shape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  })), __jsx("pattern", {
    id: "pattern001",
    patternContentUnits: "objectBoundingBox",
    width: "1",
    height: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("use", {
    href: "#image001",
    transform: "translate(0 -0.00482988) scale(0.00206612 0.0109746)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  })), __jsx("image", {
    id: "image001",
    width: "484",
    height: "92",
    href: "data:image/png;base64,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",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./components/views/frontendDev/imgs.tsx":
/*!***********************************************!*\
  !*** ./components/views/frontendDev/imgs.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _codeImg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./codeImg */ "./components/views/frontendDev/codeImg.tsx");
/* harmony import */ var _hooksImg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooksImg */ "./components/views/frontendDev/hooksImg.tsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks */ "./hooks/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils */ "./utils/index.ts");



var _this = undefined,
    _jsxFileName = "C:\\Workspace\\Projects\\my-portfolio\\components\\views\\frontendDev\\imgs.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0 auto !important;\n  z-index: 99 !important;\n  text-align: center;\n  width: 100%;\n  max-width: 517px;\n  height: 500px;\n  height: fit-content;\n  min-height: 400px;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var motions = function motions(delay) {
  return {
    animate: {
      y: 0,
      opacity: 1
    },
    initial: {
      y: 100,
      opacity: 0
    },
    exit: {
      y: 100,
      opacity: 0
    },
    transition: {
      delay: delay,
      ease: "easeOut",
      type: "spring"
    }
  };
};

var Imgs = function Imgs(_ref) {
  var delay = _ref.delay;
  var sectionDidMount = Object(_hooks__WEBPACK_IMPORTED_MODULE_7__["useTimeout"])(100);
  return __jsx(Wrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, motions(sectionDidMount ? 0.2 : delay + 0.2), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx(_hooksImg__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  })), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, motions(sectionDidMount ? 0.4 : delay + 0.4), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), __jsx(_codeImg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })));
};

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), Object(_utils__WEBPACK_IMPORTED_MODULE_8__["breakpoints"])({
  920: {
    minWidth: 400
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (Imgs);

/***/ }),

/***/ "./components/views/frontendDev/index.tsx":
/*!************************************************!*\
  !*** ./components/views/frontendDev/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ */ "./components/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils */ "./utils/index.ts");
/* harmony import */ var _imgs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imgs */ "./components/views/frontendDev/imgs.tsx");


var _this = undefined,
    _jsxFileName = "C:\\Workspace\\Projects\\my-portfolio\\components\\views\\frontendDev\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  min-height: 400px;\n  height: fit-content;\n  position: relative;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var FrontendDev = function FrontendDev() {
  return __jsx(Wrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["Vstack"], {
    space: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(Cluster, {
    space: 2,
    alignItems: "center",
    justifyContent: "space-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx(TextBoundary, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["Vstack"], {
    space: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["AnimatedH3"], {
    style: {
      zIndex: 1
    },
    animate: {
      opacity: 1
    },
    initial: {
      opacity: 0
    },
    transition: {
      delay: 1
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, "I make clean code for legit online products."), __jsx(___WEBPACK_IMPORTED_MODULE_3__["AnimatedP"], {
    style: {
      zIndex: 1
    },
    animate: {
      opacity: 1
    },
    initial: {
      opacity: 0
    },
    transition: {
      delay: 1
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, "I'm always working on my skillset, so I can be able to build such a perfect interactive web application, in which every component serves a reason."))), __jsx(_imgs__WEBPACK_IMPORTED_MODULE_5__["default"], {
    delay: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 14
    }
  })), __jsx(___WEBPACK_IMPORTED_MODULE_3__["Vstack"], {
    space: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["Vstack"], {
    space: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["H4"], {
    style: {
      fontWeight: 700
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, "Experiences"), __jsx(___WEBPACK_IMPORTED_MODULE_3__["P"], {
    style: {
      color: "#CFCFCF"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, "First, I started by writing/learning some javascript in React JS, there were lots of things that just took me quite a while to figure out, such as state/props concept, one-way data flow, managing global state, reusable components..."), __jsx(___WEBPACK_IMPORTED_MODULE_3__["P"], {
    style: {
      color: "#CFCFCF"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, "But an 8-9 months later, I found myself falling in love with react hooks, redux, Next JS, styled-components, typescript, optimization concepts."), __jsx(___WEBPACK_IMPORTED_MODULE_3__["P"], {
    style: {
      color: "#CFCFCF"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, "After that, I joined my friends, on a real project", " ", __jsx("a", {
    href: "gfree.co",
    target: "_blanc",
    style: {
      color: "white"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, "Gluten free community"), ", and this was the first experience that allowed me to discover a lot of new concepts."))))), __jsx(___WEBPACK_IMPORTED_MODULE_3__["DisplayText"], {
    style: {
      top: 140,
      left: "30%",
      zIndex: 0
    },
    title: "Frontend developer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }));
};

var TextBoundary = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), Object(_utils__WEBPACK_IMPORTED_MODULE_4__["breakpoints"])({
  920: {
    maxWidth: 500
  }
}));
var Cluster = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(___WEBPACK_IMPORTED_MODULE_3__["Hstack"])(_templateObject2(), Object(_utils__WEBPACK_IMPORTED_MODULE_4__["breakpoints"])({
  0: {
    flexWrap: "wrap"
  },
  920: {
    flexWrap: "nowrap"
  }
}));
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3());
/* harmony default export */ __webpack_exports__["default"] = (FrontendDev);

/***/ }),

/***/ "./components/views/index.ts":
/*!***********************************!*\
  !*** ./components/views/index.ts ***!
  \***********************************/
/*! exports provided: FrontendDev, Minimalist, Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _frontendDev__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frontendDev */ "./components/views/frontendDev/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FrontendDev", function() { return _frontendDev__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _minimalist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./minimalist */ "./components/views/minimalist/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Minimalist", function() { return _minimalist__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./components/views/contact/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return _contact__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./components/views/minimalist/icons/bell.tsx":
/*!****************************************************!*\
  !*** ./components/views/minimalist/icons/bell.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../hooks */ "./hooks/index.ts");



var _this = undefined,
    _jsxFileName = "C:\\Workspace\\Projects\\my-portfolio\\components\\views\\minimalist\\icons\\bell.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var soundEffect = [{
  x1: "66.3957",
  y1: "52.082",
  x2: "73.4427",
  y2: "53.9704"
}, {
  x1: "66.1681",
  y1: "45.3944",
  x2: "73.2152",
  y2: "43.5063"
}, {
  x1: "63.4534",
  y1: "57.4547",
  x2: "68.612",
  y2: "62.6136"
}];

var Bell = function Bell() {
  var _useHover = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useHover"])(),
      _useHover2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useHover, 2),
      events = _useHover2[0],
      isHovered = _useHover2[1];

  return __jsx("svg", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, events, {
    width: "200",
    height: "200",
    viewBox: "0 0 86 70",
    fill: "none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }), soundEffect.map(function (_ref, key) {
    var x1 = _ref.x1,
        x2 = _ref.x2,
        y1 = _ref.y1,
        y2 = _ref.y2;
    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].line, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: isHovered ? 1 : 0
      },
      transition: {
        delay: key * 0.05
      },
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2,
      stroke: "#FFC398",
      strokeWidth: "3",
      strokeLinecap: "round",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }
    });
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].path, {
    initial: {
      d: "M43 52C43 58.0751 38.0751 63 32 63C25.9249 63 21 58.0751 21 52C21 46.338 25.2778 41.6751 30.7778 41.0671C31.1791 41.0228 31.5869 41 32 41C38.0751 41 43 45.9249 43 52Z"
    },
    animate: {
      d: isHovered ? "M52 52C52 58.0751 47.0751 63 41 63C34.9249 63 30 58.0751 30 52C30 46.338 34.2778 41.6751 39.7778 41.0671C40.1791 41.0228 40.5869 41 41 41C47.0751 41 52 45.9249 52 52Z" : "M43 52C43 58.0751 38.0751 63 32 63C25.9249 63 21 58.0751 21 52C21 46.338 25.2778 41.6751 30.7778 41.0671C31.1791 41.0228 31.5869 41 32 41C38.0751 41 43 45.9249 43 52Z"
    },
    fill: "#FF7E18",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].path, {
    initial: {
      rotate: 0
    },
    animate: {
      rotate: isHovered ? 6 : 0
    },
    d: "M34.5386 7C22.1122 7 12.0386 17.0736 12.0386 29.5V45C12.0386 45 7.54004 46 8.03858 50C8.47584 53.5083 12.0386 54 12.0386 54H57.0386C57.0386 54 60.6669 53.3451 61.0386 50C61.5078 45.7766 57.0386 45 57.0386 45V29.5C57.0386 17.0736 46.965 7 34.5386 7Z",
    fill: "#FFD2BD",
    fillOpacity: "0.6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M30.9814 15.6533C26.5768 16.3633 24.9927 18.1078 23.1595 21.6664",
    stroke: "white",
    strokeOpacity: "0.62",
    strokeWidth: "5",
    strokeLinecap: "round",
    strokeLinejoin: "bevel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Bell);

/***/ }),

/***/ "./components/views/minimalist/icons/camera.tsx":
/*!******************************************************!*\
  !*** ./components/views/minimalist/icons/camera.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../hooks */ "./hooks/index.ts");



var _this = undefined,
    _jsxFileName = "C:\\Workspace\\Projects\\my-portfolio\\components\\views\\minimalist\\icons\\camera.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Camera = function Camera() {
  var _useHover = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useHover"])(),
      _useHover2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useHover, 2),
      events = _useHover2[0],
      isHovered = _useHover2[1];

  return __jsx("svg", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, events, {
    width: "200",
    height: "200",
    viewBox: "0 0 86 70",
    fill: "none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].path, {
    initial: {
      rotate: 0
    },
    transition: {
      delay: 0.2
    },
    animate: {
      rotate: isHovered ? -16 : 0
    },
    d: "M21 38.988V31.8047C21 30.1212 22.0541 28.6179 23.6368 28.0442L58.428 15.4323C59.9787 14.8702 61.7154 15.3176 62.8015 16.5589L63.5103 17.3689C64.1483 18.0981 64.5 19.034 64.5 20.0029V47.9971C64.5 48.966 64.1483 49.9019 63.5103 50.6311L62.6733 51.5876C61.6521 52.7547 60.0483 53.2264 58.5578 52.7979L23.8948 42.8322C22.1807 42.3395 21 40.7714 21 38.988Z",
    fill: "#3B83FE",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].path, {
    initial: {
      rotate: 0
    },
    animate: {
      rotate: isHovered ? -16 : 0
    },
    d: "M6 20C6 15.5817 9.58172 12 14 12H43C47.4183 12 51 15.5817 51 20V49C51 53.4183 47.4183 57 43 57H14C9.58172 57 6 53.4183 6 49V20Z",
    fill: "#E9EFFF",
    fillOpacity: "0.8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].circle, {
    animate: {
      opacity: isHovered ? 1 : 0
    },
    initial: {
      opacity: 0
    },
    cx: "40",
    cy: "17",
    r: "2",
    fill: "#E34242",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].path, {
    transition: {
      delay: 0.1
    },
    initial: {
      rotate: 0
    },
    animate: {
      rotate: isHovered ? -16 : 0
    },
    d: "M25 22H15",
    stroke: "white",
    strokeOpacity: "0.62",
    strokeWidth: "5",
    strokeLinecap: "round",
    strokeLinejoin: "bevel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Camera);

/***/ }),

/***/ "./components/views/minimalist/icons/cloud.tsx":
/*!*****************************************************!*\
  !*** ./components/views/minimalist/icons/cloud.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../hooks */ "./hooks/index.ts");



var _this = undefined,
    _jsxFileName = "C:\\Workspace\\Projects\\my-portfolio\\components\\views\\minimalist\\icons\\cloud.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var drops = ["M19.0645 60L19 63", "M31.0645 55L31 58", "M50.0645 60L50 63", "M41.0645 62L41 65"];

var Cloud = function Cloud() {
  var _useHover = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useHover"])(),
      _useHover2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useHover, 2),
      events = _useHover2[0],
      isHovered = _useHover2[1];

  return __jsx("svg", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, events, {
    width: "200",
    height: "200",
    viewBox: "0 0 86 70",
    fill: "none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].circle, {
    cx: "47",
    initial: {
      cy: 27,
      opacity: 1
    },
    animate: {
      opacity: isHovered ? 0 : 1,
      cy: isHovered ? 63 : 27,
      scale: isHovered ? 0.6 : 1
    },
    r: "19",
    fill: "#FF7D18",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].path, {
    initial: {
      fill: "#FFD2BD"
    },
    animate: {
      fill: isHovered ? "#dadada" : "#FFD2BD"
    },
    d: "M5 39.5C5 51.9264 15.0736 62 27.5 62H51C51 62 64 61.5 64 49C63.0174 34.9705 49.7294 36 49.7294 36C48.0482 25.2358 38.7359 17 27.5 17C15.0736 17 5 27.0736 5 39.5Z",
    fill: "#FFF2EC",
    fillOpacity: "0.6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M15.0645 43C16.1347 47.3312 18.0037 48.7663 21.7011 50.3003",
    stroke: "white",
    strokeOpacity: "0.62",
    strokeWidth: "5",
    strokeLinecap: "round",
    strokeLinejoin: "bevel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), drops.map(function (d, key) {
    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].path, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: isHovered ? 1 : 0
      },
      transition: {
        delay: key * 0.05
      },
      d: d,
      stroke: "#81C3F3",
      strokeOpacity: "0.62",
      strokeWidth: "5",
      strokeLinecap: "round",
      strokeLinejoin: "bevel",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Cloud);

/***/ }),

/***/ "./components/views/minimalist/icons/index.ts":
/*!****************************************************!*\
  !*** ./components/views/minimalist/icons/index.ts ***!
  \****************************************************/
/*! exports provided: Wallet, Camera, Bell, Cloud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wallet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wallet */ "./components/views/minimalist/icons/wallet.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Wallet", function() { return _wallet__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera */ "./components/views/minimalist/icons/camera.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _camera__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _bell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bell */ "./components/views/minimalist/icons/bell.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bell", function() { return _bell__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _cloud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cloud */ "./components/views/minimalist/icons/cloud.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cloud", function() { return _cloud__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./components/views/minimalist/icons/wallet.tsx":
/*!******************************************************!*\
  !*** ./components/views/minimalist/icons/wallet.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../hooks */ "./hooks/index.ts");



var _this = undefined,
    _jsxFileName = "C:\\Workspace\\Projects\\my-portfolio\\components\\views\\minimalist\\icons\\wallet.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Wallet = function Wallet() {
  var _useHover = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useHover"])(),
      _useHover2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useHover, 2),
      events = _useHover2[0],
      isHovered = _useHover2[1];

  return __jsx("svg", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, events, {
    width: "220",
    height: "200",
    viewBox: "0 0 86 40",
    fill: "none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].path, {
    initial: {
      rotate: 0
    },
    animate: {
      rotate: isHovered ? -18 : 0,
      y: isHovered ? -10 : 0
    },
    d: "M6 15.0912C6 10.6225 9.18013 7 13.103 7H42.897C46.8199 7 50 10.6225 50 15.0911V26.9089C50 31.3775 46.8199 35 42.897 35H13.103C9.18012 35 6 31.3775 6 26.9089V15.0912Z",
    fill: "#FF58EE",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].path, {
    initial: {
      rotate: 0
    },
    animate: {
      rotate: isHovered ? -18 : 0,
      y: isHovered ? -5 : 0
    },
    d: "M6 15.0912C6 10.6225 9.18013 7 13.103 7H42.897C46.8199 7 50 10.6225 50 15.0911V26.9089C50 31.3775 46.8199 35 42.897 35H13.103C9.18012 35 6 31.3775 6 26.9089V15.0912Z",
    fill: "#D458FF",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].path, {
    initial: {
      rotate: 0
    },
    animate: {
      rotate: isHovered ? -18 : 0
    },
    d: "M6 15.0912C6 10.6225 9.18013 7 13.103 7H42.897C46.8199 7 50 10.6225 50 15.0911V26.9089C50 31.3775 46.8199 35 42.897 35H13.103C9.18012 35 6 31.3775 6 26.9089V15.0912Z",
    fill: "#AA58FF",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx("rect", {
    y: "0.576172",
    width: "56",
    height: "41",
    rx: "8",
    fill: "#E4CAFF",
    fillOpacity: "0.6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx("circle", {
    cx: "44",
    cy: "21.5762",
    r: "6",
    fill: "white",
    fillOpacity: "0.62",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Wallet);

/***/ }),

/***/ "./components/views/minimalist/imgs.tsx":
/*!**********************************************!*\
  !*** ./components/views/minimalist/imgs.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ */ "./components/index.ts");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons */ "./components/views/minimalist/icons/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils */ "./utils/index.ts");



var _this = undefined,
    _jsxFileName = "C:\\Workspace\\Projects\\my-portfolio\\components\\views\\minimalist\\imgs.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 130px;\n  height: 130px;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0px 0px 40px rgba(1, 5, 10, 0.57);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0 auto !important;\n  text-align: center;\n  width: 100%;\n  min-height: 500px;\n  max-width: 517px;\n  padding-bottom: 40px;\n  z-index: 99;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var motions = function motions(delay) {
  return {
    animate: {
      y: 60,
      opacity: 1
    },
    initial: {
      y: 100,
      opacity: 0
    },
    transition: {
      delay: delay,
      ease: "easeOut",
      type: "spring"
    }
  };
};

var Imgs = function Imgs(_ref) {
  var delay = _ref.delay;
  return __jsx(Wrapper, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, motions(delay + 0.2), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }
  }), __jsx(___WEBPACK_IMPORTED_MODULE_5__["Vstack"], {
    space: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_5__["P"], {
    direction: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, "Hover on the icons"), __jsx(___WEBPACK_IMPORTED_MODULE_5__["Vstack"], {
    space: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_5__["Hstack"], {
    alignItems: "center",
    space: 4,
    justifyContent: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(IconHolder, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_6__["Bell"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  })), __jsx(IconHolder, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_6__["Camera"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }))), __jsx(___WEBPACK_IMPORTED_MODULE_5__["Hstack"], {
    alignItems: "center",
    space: 4,
    justifyContent: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(IconHolder, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_6__["Wallet"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  })), __jsx(IconHolder, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx(_icons__WEBPACK_IMPORTED_MODULE_6__["Cloud"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }))))));
};

var Wrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div)(_templateObject(), Object(_utils__WEBPACK_IMPORTED_MODULE_7__["breakpoints"])({
  920: {
    minWidth: 400
  }
}));
var IconHolder = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());
/* harmony default export */ __webpack_exports__["default"] = (Imgs);

/***/ }),

/***/ "./components/views/minimalist/index.tsx":
/*!***********************************************!*\
  !*** ./components/views/minimalist/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ */ "./components/index.ts");
/* harmony import */ var _imgs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs */ "./components/views/minimalist/imgs.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils */ "./utils/index.ts");


var _this = undefined,
    _jsxFileName = "C:\\Workspace\\Projects\\my-portfolio\\components\\views\\minimalist\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  min-height: 400px;\n  height: fit-content;\n  position: relative;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Minimalist = function Minimalist() {
  return __jsx(Wrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["Vstack"], {
    space: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(Cluster, {
    space: 2,
    alignItems: "center",
    justifyContent: "space-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx(TextBoundary, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["Vstack"], {
    space: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["AnimatedH3"], {
    style: {
      zIndex: 1
    },
    animate: {
      opacity: 1
    },
    initial: {
      opacity: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, "I design minimalist digital prototypes, for a clean UI UX products."), __jsx(___WEBPACK_IMPORTED_MODULE_3__["AnimatedP"], {
    style: {
      zIndex: 1
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, "By respecting the UI/UX rules, everyone can make his own perfect product."))), __jsx(_imgs__WEBPACK_IMPORTED_MODULE_4__["default"], {
    delay: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  })), __jsx(___WEBPACK_IMPORTED_MODULE_3__["Vstack"], {
    space: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["Vstack"], {
    space: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__["H4"], {
    style: {
      fontWeight: 700
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, "Experiences"), __jsx(___WEBPACK_IMPORTED_MODULE_3__["P"], {
    style: {
      color: "#CFCFCF"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, "In 2016 I was trying to learn image/video editing, and that was the first step of my design career.", " "), __jsx(___WEBPACK_IMPORTED_MODULE_3__["P"], {
    style: {
      color: "#CFCFCF"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, "After a while, a friend of mine told me that Adobe XD and Figma are the best free tools for web design, and here my real web design journey has started."))))), __jsx(___WEBPACK_IMPORTED_MODULE_3__["DisplayText"], {
    style: {
      top: 140,
      left: "20%",
      zIndex: 0
    },
    title: "Minimalist design system",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }));
};

var TextBoundary = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), Object(_utils__WEBPACK_IMPORTED_MODULE_5__["breakpoints"])({
  920: {
    maxWidth: 500
  }
}));
var Cluster = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(___WEBPACK_IMPORTED_MODULE_3__["Hstack"])(_templateObject2(), Object(_utils__WEBPACK_IMPORTED_MODULE_5__["breakpoints"])({
  0: {
    flexWrap: "wrap"
  },
  920: {
    flexWrap: "nowrap"
  }
}));
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3());
/* harmony default export */ __webpack_exports__["default"] = (Minimalist);

/***/ }),

/***/ "./globalStyles/index.ts":
/*!*******************************!*\
  !*** ./globalStyles/index.ts ***!
  \*******************************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nbody{\n  margin:0;\n  background-color:#12141B;\n  overflow-x:hidden;\n  height:fit-content;\n}\nbody::-webkit-scrollbar {\n  width: 10px;\n}\n \nbody::-webkit-scrollbar-track {\n  box-shadow:0px 0px 40px rgba(1, 5, 10, 0.57);\n}\n \nbody::-webkit-scrollbar-thumb {\n  background-color: #fff;\n  outline: 1px solid transparent;\n}\nbody::-webkit-scrollbar-track {\n    background: #141623;\n}\nh1,h2,h3,h4,h5,h6,p{\n  margin:0;\n}\n* {\n  ::selection{\n    background-color:#4C4E58;\n  }\n  font-family: 'Raleway', sans-serif;\n}\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());

/***/ }),

/***/ "./hooks/index.ts":
/*!************************!*\
  !*** ./hooks/index.ts ***!
  \************************/
/*! exports provided: useTimeout, useScroll, useHover, useOnScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useTimeout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useTimeout */ "./hooks/useTimeout.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTimeout", function() { return _useTimeout__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _useScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useScroll */ "./hooks/useScroll.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScroll", function() { return _useScroll__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _useHover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useHover */ "./hooks/useHover.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHover", function() { return _useHover__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _useOnScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useOnScreen */ "./hooks/useOnScreen.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOnScreen", function() { return _useOnScreen__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./hooks/useHover.ts":
/*!***************************!*\
  !*** ./hooks/useHover.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (initialState) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(!!initialState),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      isHovered = _React$useState2[0],
      hover = _React$useState2[1];

  var handleHover = function handleHover() {
    return {
      onMouseEnter: function onMouseEnter() {
        return hover(true);
      },
      onMouseLeave: function onMouseLeave() {
        return hover(false);
      }
    };
  };

  return [handleHover(), isHovered];
});

/***/ }),

/***/ "./hooks/useOnScreen.ts":
/*!******************************!*\
  !*** ./hooks/useOnScreen.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var useOnScreen = function useOnScreen() {
  var rootMargin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "0px";
  var domRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      isOnScreen = _React$useState2[0],
      setOnScreen = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    var observer = new IntersectionObserver(function (_ref) {
      var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 1),
          entry = _ref2[0];

      setOnScreen(entry.isIntersecting);
    }, {
      rootMargin: rootMargin
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return function () {
      observer.unobserve(domRef.current);
    };
  }, []);
  return [domRef, isOnScreen];
};

/* harmony default export */ __webpack_exports__["default"] = (useOnScreen);

/***/ }),

/***/ "./hooks/useScroll.ts":
/*!****************************!*\
  !*** ./hooks/useScroll.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// A hook for tracking vertical scroll
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var min = _ref.min,
      max = _ref.max;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      scroll = _React$useState2[0],
      setScroll = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      isScrolling = _React$useState4[0],
      setScrolling = _React$useState4[1]; // check if the screen scroll match the min and max


  var isOnScreen = function isOnScreen() {
    return typeof max === "number" && typeof min === "number" && scroll >= min && scroll < max;
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    var handleScroll = function handleScroll(e) {
      return setScroll(e.target.documentElement.scrollTop);
    };

    window.addEventListener("scroll", handleScroll); // cleanup function

    return function () {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    setScrolling(true);
    var timeout = setTimeout(function () {
      return setScrolling(false);
    }, 100);
    return function () {
      return clearTimeout(timeout);
    };
  }, [scroll]);
  return {
    scroll: scroll,
    isOnScreen: isOnScreen(),
    isScrolling: isScrolling
  };
});

/***/ }),

/***/ "./hooks/useTimeout.ts":
/*!*****************************!*\
  !*** ./hooks/useTimeout.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      state = _React$useState2[0],
      set = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    // if the props given is a number, the hook will return a state
    // which will be updated after the delay given
    if (typeof props === "number") {
      var timeout = setTimeout(function () {
        return set(true);
      }, props);
      return function () {
        return clearTimeout(timeout);
      };
    } // if the props given is an object then we will run
    // the execute property after the delay property


    if (typeof props === "object") {
      var execute = props.execute,
          delay = props.delay;

      var _timeout = setTimeout(execute, delay);

      return function () {
        return clearTimeout(_timeout);
      };
    }
  }, [props]);
  if (typeof props === "number") return state;
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/copy-to-clipboard/index.js":
/*!*************************************************!*\
  !*** ./node_modules/copy-to-clipboard/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var deselectCurrent = __webpack_require__(/*! toggle-selection */ "./node_modules/toggle-selection/index.js");

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ "./node_modules/framer-motion/dist/framer-motion.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/framer-motion/dist/framer-motion.es.js ***!
  \*************************************************************/
/*! exports provided: AnimateLayoutFeature, AnimatePresence, AnimateSharedLayout, AnimationControls, AnimationFeature, DragControls, DragFeature, ExitFeature, GesturesFeature, MotionConfig, MotionConfigContext, MotionContext, MotionValue, PresenceContext, ReducedMotion, VisualElementAnimationControls, addScaleCorrection, animationControls, createMotionComponent, isValidMotionProp, m, motion, motionValue, resolveMotionValue, transform, useAnimatedState, useAnimation, useCycle, useDomEvent, useDragControls, useElementScroll, useExternalRef, useGestures, useInvertedScale, useIsPresent, useMotionTemplate, useMotionValue, usePanGesture, usePresence, useReducedMotion, useSpring, useTapGesture, useTransform, useViewportScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateLayoutFeature", function() { return AnimateLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatePresence", function() { return AnimatePresence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateSharedLayout", function() { return AnimateSharedLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationControls", function() { return AnimationControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationFeature", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragControls", function() { return DragControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragFeature", function() { return Drag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExitFeature", function() { return Exit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GesturesFeature", function() { return Gestures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionConfig", function() { return MotionConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionConfigContext", function() { return MotionConfigContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionContext", function() { return MotionContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionValue", function() { return MotionValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresenceContext", function() { return PresenceContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReducedMotion", function() { return ReducedMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualElementAnimationControls", function() { return VisualElementAnimationControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addScaleCorrection", function() { return addScaleCorrection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationControls", function() { return animationControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMotionComponent", function() { return createMotionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidMotionProp", function() { return isValidMotionProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "motion", function() { return motion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "motionValue", function() { return motionValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveMotionValue", function() { return resolveMotionValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAnimatedState", function() { return useAnimatedState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAnimation", function() { return useAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCycle", function() { return useCycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDomEvent", function() { return useDomEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDragControls", function() { return useDragControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useElementScroll", function() { return useElementScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useExternalRef", function() { return useExternalRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGestures", function() { return useGestures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInvertedScale", function() { return useInvertedScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsPresent", function() { return useIsPresent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMotionTemplate", function() { return useMotionTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMotionValue", function() { return useMotionValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePanGesture", function() { return usePanGesture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePresence", function() { return usePresence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducedMotion", function() { return useReducedMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSpring", function() { return useSpring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTapGesture", function() { return useTapGesture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransform", function() { return useTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useViewportScroll", function() { return useViewportScroll; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/framesync.es.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/popmotion.es.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/style-value-types.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);








var isRefObject = function (ref) {
    return typeof ref === "object" && ref.hasOwnProperty("current");
};

/**
 * A generic subscription manager.
 */
var SubscriptionManager = /** @class */ (function () {
    function SubscriptionManager() {
        this.subscriptions = new Set();
    }
    SubscriptionManager.prototype.add = function (handler) {
        var _this = this;
        this.subscriptions.add(handler);
        return function () { return void _this.subscriptions.delete(handler); };
    };
    SubscriptionManager.prototype.notify = function (
    /**
     * Using ...args would be preferable but it's array creation and this
     * might be fired every frame.
     */
    a, b, c) {
        var e_1, _a;
        if (!this.subscriptions.size)
            return;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var handler = _c.value;
                handler(a, b, c);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    SubscriptionManager.prototype.clear = function () {
        this.subscriptions.clear();
    };
    return SubscriptionManager;
}());

var isFloat = function (value) {
    return !isNaN(parseFloat(value));
};
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */
var MotionValue = /** @class */ (function () {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */
    function MotionValue(init) {
        var _this = this;
        /**
         * Duration, in milliseconds, since last updating frame.
         *
         * @internal
         */
        this.timeDelta = 0;
        /**
         * Timestamp of the last time this `MotionValue` was updated.
         *
         * @internal
         */
        this.lastUpdated = 0;
        /**
         * Functions to notify when the `MotionValue` updates.
         *
         * @internal
         */
        this.updateSubscribers = new SubscriptionManager();
        /**
         * Functions to notify when the `MotionValue` updates and `render` is set to `true`.
         *
         * @internal
         */
        this.renderSubscribers = new SubscriptionManager();
        /**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */
        this.canTrackVelocity = false;
        this.updateAndNotify = function (v, render) {
            if (render === void 0) { render = true; }
            _this.prev = _this.current;
            _this.current = v;
            if (_this.prev !== _this.current) {
                _this.updateSubscribers.notify(_this.current);
            }
            if (render) {
                _this.renderSubscribers.notify(_this.current);
            }
            // Update timestamp
            var _a = Object(framesync__WEBPACK_IMPORTED_MODULE_1__["getFrameData"])(), delta = _a.delta, timestamp = _a.timestamp;
            if (_this.lastUpdated !== timestamp) {
                _this.timeDelta = delta;
                _this.lastUpdated = timestamp;
                framesync__WEBPACK_IMPORTED_MODULE_1__["default"].postRender(_this.scheduleVelocityCheck);
            }
        };
        /**
         * Schedule a velocity check for the next frame.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.scheduleVelocityCheck = function () { return framesync__WEBPACK_IMPORTED_MODULE_1__["default"].postRender(_this.velocityCheck); };
        /**
         * Updates `prev` with `current` if the value hasn't been updated this frame.
         * This ensures velocity calculations return `0`.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.velocityCheck = function (_a) {
            var timestamp = _a.timestamp;
            if (timestamp !== _this.lastUpdated) {
                _this.prev = _this.current;
            }
        };
        this.set(init, false);
        this.canTrackVelocity = isFloat(this.current);
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * @library
     *
     * ```jsx
     * function MyComponent() {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.onChange(updateOpacity)
     *     const unsubscribeY = y.onChange(updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <Frame x={x} />
     * }
     * ```
     *
     * @motion
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.onChange(updateOpacity)
     *     const unsubscribeY = y.onChange(updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @internalremarks
     *
     * We could look into a `useOnChange` hook if the above lifecycle management proves confusing.
     *
     * ```jsx
     * useOnChange(x, () => {})
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @public
     */
    MotionValue.prototype.onChange = function (subscription) {
        return this.updateSubscribers.add(subscription);
    };
    MotionValue.prototype.clearListeners = function () {
        this.updateSubscribers.clear();
    };
    /**
     * Adds a function that will be notified when the `MotionValue` requests a render.
     *
     * @param subscriber - A function that's provided the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @internal
     */
    MotionValue.prototype.onRenderRequest = function (subscription) {
        // Render immediately
        subscription(this.get());
        return this.renderSubscribers.add(subscription);
    };
    /**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */
    MotionValue.prototype.attach = function (passiveEffect) {
        this.passiveEffect = passiveEffect;
    };
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */
    MotionValue.prototype.set = function (v, render) {
        if (render === void 0) { render = true; }
        if (!render || !this.passiveEffect) {
            this.updateAndNotify(v, render);
        }
        else {
            this.passiveEffect(v, this.updateAndNotify);
        }
    };
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
    MotionValue.prototype.get = function () {
        return this.current;
    };
    /**
     * @public
     */
    MotionValue.prototype.getPrevious = function () {
        return this.prev;
    };
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
    MotionValue.prototype.getVelocity = function () {
        // This could be isFloat(this.prev) && isFloat(this.current), but that would be wasteful
        return this.canTrackVelocity
            ? // These casts could be avoided if parseFloat would be typed better
                Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["velocityPerSecond"])(parseFloat(this.current) -
                    parseFloat(this.prev), this.timeDelta)
            : 0;
    };
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     *
     * @internal
     */
    MotionValue.prototype.start = function (animation) {
        var _this = this;
        this.stop();
        return new Promise(function (resolve) {
            _this.stopAnimation = animation(resolve);
        }).then(function () { return _this.clearAnimation(); });
    };
    /**
     * Stop the currently active animation.
     *
     * @public
     */
    MotionValue.prototype.stop = function () {
        if (this.stopAnimation)
            this.stopAnimation();
        this.clearAnimation();
    };
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
    MotionValue.prototype.isAnimating = function () {
        return !!this.stopAnimation;
    };
    MotionValue.prototype.clearAnimation = function () {
        this.stopAnimation = null;
    };
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
    MotionValue.prototype.destroy = function () {
        this.updateSubscribers.clear();
        this.renderSubscribers.clear();
        this.stop();
    };
    return MotionValue;
}());
/**
 * @internal
 */
function motionValue(init) {
    return new MotionValue(init);
}

/**
 * VisualElement is an abstract class that provides a generic animation-optimised interface to the
 * underlying renderer.
 *
 * Currently many features interact directly with HTMLVisualElement/SVGVisualElement
 * but the idea is we can create, for instance, a ThreeVisualElement that extends
 * VisualElement and we can quickly offer all the same features.
 */
var VisualElement = /** @class */ (function () {
    function VisualElement(parent, ref) {
        var _this = this;
        // An iterable list of current children
        this.children = new Set();
        // The latest resolved MotionValues
        this.latest = {};
        // A map of MotionValues used to animate this element
        this.values = new Map();
        // Unsubscription callbacks for each MotionValue
        this.valueSubscriptions = new Map();
        // A configuration for this VisualElement, each derived class can extend this.
        this.config = {};
        // A pre-bound call to the user-provided `onUpdate` callback. This won't
        // be called more than once per frame.
        this.update = function () { return _this.config.onUpdate(_this.latest); };
        // Pre-bound version of render
        this.triggerRender = function () { return _this.render(); };
        this.scheduleRender = function () { return framesync__WEBPACK_IMPORTED_MODULE_1__["default"].render(_this.triggerRender, false, true); };
        // This function gets passed to the rendered component's `ref` prop
        // and is used to mount/unmount the VisualElement
        this.ref = function (element) {
            element ? _this.mount(element) : _this.unmount();
            if (!_this.externalRef)
                return;
            if (typeof _this.externalRef === "function") {
                _this.externalRef(element);
            }
            else if (isRefObject(_this.externalRef)) {
                _this.externalRef.current = element;
            }
        };
        // Create a relationship with the provided parent.
        this.parent = parent;
        this.rootParent = parent ? parent.rootParent : this;
        this.treePath = parent ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(parent.treePath, [parent]) : [];
        // Calculate the depth of this node in the VisualElement graph
        this.depth = parent ? parent.depth + 1 : 0;
        // A reference to any externally-defined React ref. This might live better
        // outside the VisualElement and be handled in a hook.
        this.externalRef = ref;
    }
    VisualElement.prototype.subscribe = function (child) {
        var _this = this;
        this.children.add(child);
        return function () { return _this.children.delete(child); };
    };
    // Check whether this element has a MotionValue of the provided key
    VisualElement.prototype.hasValue = function (key) {
        return this.values.has(key);
    };
    // Add a MotionValue
    VisualElement.prototype.addValue = function (key, value) {
        if (this.hasValue(key))
            this.removeValue(key);
        this.values.set(key, value);
        this.latest[key] = value.get();
        if (this.element)
            this.subscribeToValue(key, value);
    };
    // Remove a MotionValue
    VisualElement.prototype.removeValue = function (key) {
        var unsubscribe = this.valueSubscriptions.get(key);
        unsubscribe && unsubscribe();
        this.values.delete(key);
        delete this.latest[key];
        this.valueSubscriptions.delete(key);
    };
    VisualElement.prototype.getValue = function (key, defaultValue) {
        var value = this.values.get(key);
        if (value === undefined && defaultValue !== undefined) {
            value = new MotionValue(defaultValue);
            this.addValue(key, value);
        }
        return value;
    };
    // Iterate over all MotionValues
    VisualElement.prototype.forEachValue = function (callback) {
        this.values.forEach(callback);
    };
    // Get the underlying rendered instance of this VisualElement. For instance in
    // HTMLVisualElement this will be a HTMLElement.
    VisualElement.prototype.getInstance = function () {
        return this.element;
    };
    VisualElement.prototype.updateConfig = function (config) {
        if (config === void 0) { config = {}; }
        this.config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, config);
    };
    // Set a single `latest` value
    VisualElement.prototype.setSingleStaticValue = function (key, value) {
        this.latest[key] = value;
    };
    // Statically set values to `latest` without needing a MotionValue
    VisualElement.prototype.setStaticValues = function (values, value) {
        if (typeof values === "string") {
            this.setSingleStaticValue(values, value);
        }
        else {
            for (var key in values) {
                this.setSingleStaticValue(key, values[key]);
            }
        }
    };
    VisualElement.prototype.scheduleUpdateLayoutDelta = function () {
        framesync__WEBPACK_IMPORTED_MODULE_1__["default"].update(this.rootParent.updateLayoutDelta, false, true);
    };
    // Subscribe to changes in a MotionValue
    VisualElement.prototype.subscribeToValue = function (key, value) {
        var _this = this;
        var onChange = function (latest) {
            _this.setSingleStaticValue(key, latest);
            _this.latest[key] = latest;
            _this.config.onUpdate && framesync__WEBPACK_IMPORTED_MODULE_1__["default"].update(_this.update, false, true);
        };
        var unsubscribeOnChange = value.onChange(onChange);
        var unsubscribeOnRender = value.onRenderRequest(this.scheduleRender);
        this.valueSubscriptions.set(key, function () {
            unsubscribeOnChange();
            unsubscribeOnRender();
        });
    };
    // Mount the VisualElement with the actual DOM element
    VisualElement.prototype.mount = function (element) {
        var _this = this;
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(!!element, "No ref found. Ensure components created with motion.custom forward refs using React.forwardRef");
        if (this.parent) {
            this.removeFromParent = this.parent.subscribe(this);
        }
        /**
         * Save the element to this.element as a semantic API, this.current to the VisualElement
         * is compatible with existing RefObject APIs.
         */
        this.element = this.current = element;
        // Subscribe to any pre-existing MotionValues
        this.forEachValue(function (value, key) { return _this.subscribeToValue(key, value); });
    };
    // Unmount the VisualElement and cancel any scheduled updates
    VisualElement.prototype.unmount = function () {
        var _this = this;
        this.forEachValue(function (_, key) { return _this.removeValue(key); });
        framesync__WEBPACK_IMPORTED_MODULE_1__["cancelSync"].update(this.update);
        framesync__WEBPACK_IMPORTED_MODULE_1__["cancelSync"].render(this.render);
        this.removeFromParent && this.removeFromParent();
    };
    return VisualElement;
}());

function noop(any) {
    return any;
}

/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */
function convertBoundingBoxToAxisBox(_a) {
    var top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
    return {
        x: { min: left, max: right },
        y: { min: top, max: bottom },
    };
}
function convertAxisBoxToBoundingBox(_a) {
    var x = _a.x, y = _a.y;
    return {
        top: y.min,
        bottom: y.max,
        left: x.min,
        right: x.max,
    };
}
/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */
function transformBoundingBox(_a, transformPoint) {
    var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
    if (transformPoint === void 0) { transformPoint = noop; }
    var topLeft = transformPoint({ x: left, y: top });
    var bottomRight = transformPoint({ x: right, y: bottom });
    return {
        top: topLeft.y,
        left: topLeft.x,
        bottom: bottomRight.y,
        right: bottomRight.x,
    };
}
/**
 * Create an empty axis box of zero size
 */
function axisBox() {
    return { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } };
}
function copyAxisBox(box) {
    return {
        x: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, box.x),
        y: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, box.y),
    };
}
/**
 * Create an empty box delta
 */
var zeroDelta = {
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0,
};
function delta() {
    return {
        x: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, zeroDelta),
        y: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, zeroDelta),
    };
}

/**
 * ValueType for "auto"
 */
var auto = {
    test: function (v) { return v === "auto"; },
    parse: function (v) { return v; },
};
/**
 * ValueType for ints
 */
var int = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, style_value_types__WEBPACK_IMPORTED_MODULE_4__["number"]), { transform: Math.round });
/**
 * A map of default value types for common values
 */
var defaultValueTypes = {
    // Color props
    color: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    backgroundColor: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    outlineColor: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    fill: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    stroke: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    // Border props
    borderColor: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    borderTopColor: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    borderRightColor: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    borderBottomColor: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    borderLeftColor: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    borderWidth: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    borderTopWidth: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    borderRightWidth: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    borderBottomWidth: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    borderLeftWidth: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    borderRadius: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    radius: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    borderTopLeftRadius: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    borderTopRightRadius: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    borderBottomRightRadius: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    borderBottomLeftRadius: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    // Positioning props
    width: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    maxWidth: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    height: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    maxHeight: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    size: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    top: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    right: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    bottom: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    left: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    // Spacing props
    padding: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    paddingTop: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    paddingRight: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    paddingBottom: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    paddingLeft: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    margin: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    marginTop: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    marginRight: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    marginBottom: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    marginLeft: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    // Transform props
    rotate: style_value_types__WEBPACK_IMPORTED_MODULE_4__["degrees"],
    rotateX: style_value_types__WEBPACK_IMPORTED_MODULE_4__["degrees"],
    rotateY: style_value_types__WEBPACK_IMPORTED_MODULE_4__["degrees"],
    rotateZ: style_value_types__WEBPACK_IMPORTED_MODULE_4__["degrees"],
    scale: style_value_types__WEBPACK_IMPORTED_MODULE_4__["scale"],
    scaleX: style_value_types__WEBPACK_IMPORTED_MODULE_4__["scale"],
    scaleY: style_value_types__WEBPACK_IMPORTED_MODULE_4__["scale"],
    scaleZ: style_value_types__WEBPACK_IMPORTED_MODULE_4__["scale"],
    skew: style_value_types__WEBPACK_IMPORTED_MODULE_4__["degrees"],
    skewX: style_value_types__WEBPACK_IMPORTED_MODULE_4__["degrees"],
    skewY: style_value_types__WEBPACK_IMPORTED_MODULE_4__["degrees"],
    distance: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    translateX: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    translateY: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    translateZ: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    x: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    y: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    z: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    perspective: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    transformPerspective: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    opacity: style_value_types__WEBPACK_IMPORTED_MODULE_4__["alpha"],
    originX: style_value_types__WEBPACK_IMPORTED_MODULE_4__["progressPercentage"],
    originY: style_value_types__WEBPACK_IMPORTED_MODULE_4__["progressPercentage"],
    originZ: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    // Misc
    zIndex: int,
    // SVG
    fillOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_4__["alpha"],
    strokeOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_4__["alpha"],
    numOctaves: int,
};
/**
 * A list of value types commonly used for dimensions
 */
var dimensionValueTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_4__["number"], style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"], style_value_types__WEBPACK_IMPORTED_MODULE_4__["percent"], style_value_types__WEBPACK_IMPORTED_MODULE_4__["degrees"], style_value_types__WEBPACK_IMPORTED_MODULE_4__["vw"], style_value_types__WEBPACK_IMPORTED_MODULE_4__["vh"], auto];
/**
 * Tests a provided value against a ValueType
 */
var testValueType = function (v) { return function (type) { return type.test(v); }; };
/**
 * Tests a dimensional value against the list of dimension ValueTypes
 */
var findDimensionValueType = function (v) {
    return dimensionValueTypes.find(testValueType(v));
};
/**
 * A list of all ValueTypes
 */
var valueTypes = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(dimensionValueTypes, [style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"], style_value_types__WEBPACK_IMPORTED_MODULE_4__["complex"]]);
/**
 * Tests a value against the list of ValueTypes
 */
var findValueType = function (v) { return valueTypes.find(testValueType(v)); };
/**
 * Gets the default ValueType for the provided value key
 */
var getDefaultValueType = function (key) { return defaultValueTypes[key]; };
/**
 * Provided a value and a ValueType, returns the value as that value type.
 */
var getValueAsType = function (value, type) {
    return type && typeof value === "number"
        ? type.transform(value)
        : value;
};

/**
 * A list of all transformable axes. We'll use this list to generated a version
 * of each axes for each transform.
 */
var transformAxes = ["", "X", "Y", "Z"];
/**
 * An ordered array of each transformable value. By default, transform values
 * will be sorted to this order.
 */
var order = ["perspective", "translate", "scale", "rotate", "skew"];
/**
 * Used to store the keys of all transforms that will distorted a measured bounding box.
 */
var boxDistortingKeys = new Set();
/**
 * Generate a list of every possible transform key.
 */
var transformProps = ["transformPerspective", "x", "y", "z"];
order.forEach(function (operationKey) {
    var isDistorting = new Set(["rotate", "skew"]).has(operationKey);
    transformAxes.forEach(function (axesKey) {
        var key = operationKey + axesKey;
        transformProps.push(key);
        isDistorting && boxDistortingKeys.add(key);
    });
});
/**
 * A function to use with Array.sort to sort transform keys by their default order.
 */
function sortTransformProps(a, b) {
    return transformProps.indexOf(a) - transformProps.indexOf(b);
}
/**
 * A quick lookup for transform props.
 */
var transformPropSet = new Set(transformProps);
function isTransformProp(key) {
    return transformPropSet.has(key);
}
/**
 * A quick lookup for transform origin props
 */
var transformOriginProps = new Set(["originX", "originY", "originZ"]);
function isTransformOriginProp(key) {
    return transformOriginProps.has(key);
}

var translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
};
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */
function buildTransform(transform, transformKeys, transformTemplate, transformIsDefault, enableHardwareAcceleration, allowTransformNone) {
    if (enableHardwareAcceleration === void 0) { enableHardwareAcceleration = true; }
    if (allowTransformNone === void 0) { allowTransformNone = true; }
    // The transform string we're going to build into.
    var transformString = "";
    // Transform keys into their default order - this will determine the output order.
    transformKeys.sort(sortTransformProps);
    // Track whether the defined transform has a defined z so we don't add a
    // second to enable hardware acceleration
    var transformHasZ = false;
    // Loop over each transform and build them into transformString
    var numTransformKeys = transformKeys.length;
    for (var i = 0; i < numTransformKeys; i++) {
        var key = transformKeys[i];
        transformString += (translateAlias[key] || key) + "(" + transform[key] + ") ";
        if (key === "z")
            transformHasZ = true;
    }
    if (!transformHasZ && enableHardwareAcceleration) {
        transformString += "translateZ(0)";
    }
    else {
        transformString = transformString.trim();
    }
    // If we have a custom `transform` template, pass our transform values and
    // generated transformString to that before returning
    if (transformTemplate) {
        transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    }
    else if (allowTransformNone && transformIsDefault) {
        transformString = "none";
    }
    return transformString;
}
/**
 * Build a transformOrigin style. Uses the same defaults as the browser for
 * undefined origins.
 */
function buildTransformOrigin(_a) {
    var _b = _a.originX, originX = _b === void 0 ? "50%" : _b, _c = _a.originY, originY = _c === void 0 ? "50%" : _c, _d = _a.originZ, originZ = _d === void 0 ? 0 : _d;
    return originX + " " + originY + " " + originZ;
}
/**
 * Build a transform style that takes a calculated delta between the element's current
 * space on screen and projects it into the desired space.
 */
function buildLayoutProjectionTransform(_a, treeScale) {
    var x = _a.x, y = _a.y;
    /**
     * The translations we use to calculate are always relative to the viewport coordinate space.
     * But when we apply scales, we also scale the coordinate space of an element and its children.
     * For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
     * to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
     */
    var xTranslate = x.translate / treeScale.x;
    var yTranslate = y.translate / treeScale.y;
    return "translate3d(" + xTranslate + "px, " + yTranslate + "px, 0) scale(" + x.scale + ", " + y.scale + ")";
}
/**
 * Take the calculated delta origin and apply it as a transform string.
 */
function buildLayoutProjectionTransformOrigin(_a) {
    var x = _a.x, y = _a.y;
    return x.origin * 100 + "% " + y.origin * 100 + "% 0";
}
/**
 * Build a transform string only from the properties that distort bounding box measurements
 * (rotate and skew)
 */
function buildBoxDistortingTransforms(transform, transformKeys) {
    var transformString = "";
    transformKeys.sort(sortTransformProps);
    var numTransformKeys = transformKeys.length;
    for (var i = 0; i < numTransformKeys; i++) {
        var key = transformKeys[i];
        if (boxDistortingKeys.has(key)) {
            transformString += key + "(" + transform[key] + ") ";
        }
    }
    return transformString;
}

/**
 * Returns true if the provided key is a CSS variable
 */
function isCSSVariable(key) {
    return key.startsWith("--");
}

function pixelsToPercent(pixels, axis) {
    return (pixels / (axis.max - axis.min)) * 100;
}
/**
 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
 * borderRadius in both states. If we animate between the two in pixels that will trigger
 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
 */
function correctBorderRadius(latest, viewportBox) {
    /**
     * If latest is a string, we either presume it's already a percentage, in which case it'll
     * already be stretched appropriately, or it's another value type which we don't support.
     */
    if (typeof latest !== "number")
        return latest;
    /**
     * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
     * pixel value as a percentage of each axis
     */
    var x = pixelsToPercent(latest, viewportBox.x);
    var y = pixelsToPercent(latest, viewportBox.y);
    return x + "% " + y + "%";
}
function correctBoxShadow(latest, _viewportBox, delta, treeScale) {
    // GC Warning - this creates a function and object every frame
    var shadow = style_value_types__WEBPACK_IMPORTED_MODULE_4__["complex"].parse(latest);
    var template = style_value_types__WEBPACK_IMPORTED_MODULE_4__["complex"].createTransformer(latest);
    // Calculate the overall context scale
    var xScale = delta.x.scale * treeScale.x;
    var yScale = delta.y.scale * treeScale.y;
    // Scale x/y
    shadow[1] /= xScale;
    shadow[2] /= yScale;
    /**
     * Ideally we'd correct x and y scales individually, but because blur and
     * spread apply to both we have to take a scale average and apply that instead.
     * We could potentially improve the outcome of this by incorporating the ratio between
     * the two scales.
     */
    var averageScale = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(xScale, yScale, 0.5);
    // Blur
    if (typeof shadow[3] === "number")
        shadow[3] /= averageScale;
    // Spread
    if (typeof shadow[4] === "number")
        shadow[4] /= averageScale;
    return template(shadow);
}
var borderCorrectionDefinition = {
    process: correctBorderRadius,
};
var valueScaleCorrection = {
    borderRadius: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, borderCorrectionDefinition), { applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
        ] }),
    borderTopLeftRadius: borderCorrectionDefinition,
    borderTopRightRadius: borderCorrectionDefinition,
    borderBottomLeftRadius: borderCorrectionDefinition,
    borderBottomRightRadius: borderCorrectionDefinition,
    boxShadow: {
        process: correctBoxShadow,
    },
};
/**
 * @internal
 */
function addScaleCorrection(correctors) {
    for (var key in correctors) {
        valueScaleCorrection[key] = correctors[key];
    }
}

/**
 * Build style and CSS variables
 *
 * This function converts a Motion style prop:
 *
 * { x: 100, width: 100, originX: 0.5 }
 *
 * Into an object with default value types applied and default
 * transform order set:
 *
 * {
 *   transform: 'translateX(100px) translateZ(0)`,
 *   width: '100px',
 *   transformOrigin: '50% 50%'
 * }
 *
 * Styles are saved to `style` and CSS vars to `vars`.
 *
 * This function works with mutative data structures.
 */
function buildHTMLStyles(latest, style, vars, transform, transformOrigin, transformKeys, _a, isLayoutProjectionEnabled, delta, deltaFinal, treeScale, targetBox) {
    var enableHardwareAcceleration = _a.enableHardwareAcceleration, transformTemplate = _a.transformTemplate, allowTransformNone = _a.allowTransformNone;
    // Empty the transformKeys array. As we're throwing out refs to its items
    // this might not be as cheap as suspected. Maybe using the array as a buffer
    // with a manual incrementation would be better.
    transformKeys.length = 0;
    // Track whether we encounter any transform or transformOrigin values.
    var hasTransform = false;
    var hasTransformOrigin = false;
    // Does the calculated transform essentially equal "none"?
    var transformIsNone = true;
    /**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable. Transforms and transform origins are kept seperately
     * for further processing
     */
    for (var key in latest) {
        var value = latest[key];
        // Convert the value to its default value type, ie 0 -> "0px"
        var valueType = getDefaultValueType(key);
        var valueAsType = getValueAsType(value, valueType);
        if (isTransformProp(key)) {
            // If this is a transform, flag and enable further transform processing
            hasTransform = true;
            transform[key] = valueAsType;
            transformKeys.push(key);
            if (!transformIsNone)
                continue;
            // If all the transform keys we've so far encountered are their default value
            // then check to see if this one isn't
            var defaultValue = valueType.default !== undefined ? valueType.default : 0;
            if (value !== defaultValue)
                transformIsNone = false;
        }
        else if (isTransformOriginProp(key)) {
            // If this is a transform origin, flag and enable further transform-origin processing
            transformOrigin[key] = valueAsType;
            hasTransformOrigin = true;
        }
        else if (key !== "transform" || typeof value !== "function") {
            // Handle all remaining values. Decide which map to save to depending
            // on whether this is a CSS variable
            var bucket = isCSSVariable(key) ? vars : style;
            // If we need to perform scale correction, and we have a handler for this
            // value type (ie borderRadius), perform it
            if (isLayoutProjectionEnabled && valueScaleCorrection[key]) {
                var corrected = valueScaleCorrection[key].process(value, targetBox, delta, treeScale);
                /**
                 * Scale-correctable values can define a number of other values to break
                 * down into. For instance borderRadius needs applying to borderBottomLeftRadius etc
                 */
                var applyTo = valueScaleCorrection[key].applyTo;
                if (applyTo) {
                    var num = applyTo.length;
                    for (var i = 0; i < num; i++) {
                        bucket[applyTo[i]] = corrected;
                    }
                }
                else {
                    bucket[key] = corrected;
                }
            }
            else {
                bucket[key] = valueAsType;
            }
        }
    }
    /**
     * Build transform and transformOrigin. If we're performing layout projection these need
     * to be based off the deltaFinal data. Any user-set origins will have been pre-baked
     * into the deltaFinal.
     */
    if (isLayoutProjectionEnabled) {
        style.transform = buildLayoutProjectionTransform(deltaFinal, treeScale);
        /**
         * If we have transform styles, build only those that distort bounding boxes (rotate/skew)
         * as translations and scales will already have been used to calculate deltaFinal.
         */
        if (hasTransform) {
            style.transform +=
                " " + buildBoxDistortingTransforms(transform, transformKeys);
            style.transform = style.transform.trim();
        }
        if (transformTemplate) {
            style.transform = transformTemplate(transform, style.transform);
        }
        style.transformOrigin = buildLayoutProjectionTransformOrigin(deltaFinal);
    }
    else {
        if (hasTransform) {
            style.transform = buildTransform(transform, transformKeys, transformTemplate, transformIsNone, enableHardwareAcceleration, allowTransformNone);
        }
        if (hasTransformOrigin) {
            style.transformOrigin = buildTransformOrigin(transformOrigin);
        }
    }
}

/**
 * Reset an axis to the provided origin box.
 *
 * This is a mutative operation.
 */
function resetAxis(axis, originAxis) {
    axis.min = originAxis.min;
    axis.max = originAxis.max;
}
/**
 * Reset a box to the provided origin box.
 *
 * This is a mutative operation.
 */
function resetBox(box, originBox) {
    resetAxis(box.x, originBox.x);
    resetAxis(box.y, originBox.y);
}
/**
 * Scales a point based on a factor and an originPoint
 */
function scalePoint(point, scale, originPoint) {
    var distanceFromOrigin = point - originPoint;
    var scaled = scale * distanceFromOrigin;
    return originPoint + scaled;
}
/**
 * Applies a translate/scale delta to a point
 */
function applyPointDelta(point, translate, scale, originPoint, boxScale) {
    if (boxScale !== undefined) {
        point = scalePoint(point, boxScale, originPoint);
    }
    return scalePoint(point, scale, originPoint) + translate;
}
/**
 * Applies a translate/scale delta to an axis
 */
function applyAxisDelta(axis, translate, scale, originPoint, boxScale) {
    if (translate === void 0) { translate = 0; }
    if (scale === void 0) { scale = 1; }
    axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Applies a translate/scale delta to a box
 */
function applyBoxDelta(box, _a) {
    var x = _a.x, y = _a.y;
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */
function applyAxisTransforms(final, axis, transforms, _a) {
    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
    // Copy the current axis to the final axis before mutation
    final.min = axis.min;
    final.max = axis.max;
    var axisOrigin = transforms[originKey] !== undefined ? transforms[originKey] : 0.5;
    var originPoint = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(axis.min, axis.max, axisOrigin);
    // Apply the axis delta to the final axis
    applyAxisDelta(final, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
/**
 * Apply a transform to a box from the latest resolved motion values.
 */
function applyBoxTransforms(finalBox, box, transforms) {
    applyAxisTransforms(finalBox.x, box.x, transforms, xKeys);
    applyAxisTransforms(finalBox.y, box.y, transforms, yKeys);
}
/**
 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
 */
function removePointDelta(point, translate, scale, originPoint, boxScale) {
    point -= translate;
    point = scalePoint(point, 1 / scale, originPoint);
    if (boxScale !== undefined) {
        point = scalePoint(point, 1 / boxScale, originPoint);
    }
    return point;
}
/**
 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
 */
function removeAxisDelta(axis, translate, scale, origin, boxScale) {
    if (translate === void 0) { translate = 0; }
    if (scale === void 0) { scale = 1; }
    if (origin === void 0) { origin = 0.5; }
    var originPoint = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(axis.min, axis.max, origin) - translate;
    axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeAxisTransforms(axis, transforms, _a) {
    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
    removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale);
}
/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeBoxTransforms(box, transforms) {
    removeAxisTransforms(box.x, transforms, xKeys);
    removeAxisTransforms(box.y, transforms, yKeys);
}
/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within HTMLVisualElement.updateLayoutDelta
 */
function applyTreeDeltas(box, treePath) {
    var treeLength = treePath.length;
    for (var i = 0; i < treeLength; i++) {
        applyBoxDelta(box, treePath[i].delta);
    }
}

var clampProgress = function (v) { return Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["clamp"])(0, 1, v); };
/**
 * Returns true if the provided value is within maxDistance of the provided target
 */
function isNear(value, target, maxDistance) {
    if (target === void 0) { target = 0; }
    if (maxDistance === void 0) { maxDistance = 0.01; }
    return Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["distance"])(value, target) < maxDistance;
}
/**
 * Calculate the translate needed to be applied to source to get target
 */
function calcTranslate(source, target, origin) {
    var sourcePoint = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(source.min, source.max, origin);
    var targetPoint = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(target.min, target.max, origin);
    return targetPoint - sourcePoint;
}
/**
 * Calculate a transform origin relative to the source axis, between 0-1, that results
 * in an asthetically pleasing scale/transform needed to project from source to target.
 */
function calcOrigin(source, target) {
    var origin = 0.5;
    var sourceLength = source.max - source.min;
    var targetLength = target.max - target.min;
    if (targetLength > sourceLength) {
        origin = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["progress"])(target.min, target.max - sourceLength, source.min);
    }
    else if (sourceLength > targetLength) {
        origin = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["progress"])(source.min, source.max - targetLength, target.min);
    }
    return clampProgress(origin);
}
/**
 * Update the AxisDelta with a transform that projects source into target.
 *
 * The transform `origin` is optional. If not provided, it'll be automatically
 * calculated based on the relative positions of the two bounding boxes.
 */
function updateAxisDelta(delta, source, target, origin) {
    var sourceLength = source.max - source.min;
    var targetLength = target.max - target.min;
    delta.origin = origin === undefined ? calcOrigin(source, target) : origin;
    delta.originPoint = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(source.min, source.max, delta.origin);
    delta.scale = targetLength / sourceLength;
    if (isNear(delta.scale, 1, 0.0001))
        delta.scale = 1;
    delta.translate = calcTranslate(source, target, delta.origin);
    if (isNear(delta.translate))
        delta.translate = 0;
}
/**
 * Update the BoxDelta with a transform that projects the source into the target.
 *
 * The transform `origin` is optional. If not provided, it'll be automatically
 * calculated based on the relative positions of the two bounding boxes.
 */
function updateBoxDelta(delta, source, target, origin) {
    updateAxisDelta(delta.x, source.x, target.x, origin);
    updateAxisDelta(delta.y, source.y, target.y, origin);
}
/**
 * Update the treeScale by incorporating the parent's latest scale into its treeScale.
 */
function updateTreeScale(treeScale, parentTreeScale, parentDelta) {
    treeScale.x = parentTreeScale.x * parentDelta.x.scale;
    treeScale.y = parentTreeScale.y * parentDelta.y.scale;
}

// Call a handler once for each axis
function eachAxis(handler) {
    return [handler("x"), handler("y")];
}

/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */
var secondsToMilliseconds = function (seconds) { return seconds * 1000; };

var easingDefinitionToFunction = function (definition) {
    if (Array.isArray(definition)) {
        // If cubic bezier definition, create bezier curve
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(definition.length === 4, "Cubic bezier arrays must contain four numerical values.");
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(definition, 4), x1 = _a[0], y1 = _a[1], x2 = _a[2], y2 = _a[3];
        return Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["cubicBezier"])(x1, y1, x2, y2);
    }
    else if (typeof definition === "string") {
        // Else lookup from table
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(popmotion__WEBPACK_IMPORTED_MODULE_2__[definition] !== undefined, "Invalid easing type '" + definition + "'");
        return popmotion__WEBPACK_IMPORTED_MODULE_2__[definition];
    }
    return definition;
};
var isEasingArray = function (ease) {
    return Array.isArray(ease) && typeof ease[0] !== "number";
};

/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */
var isAnimatable = function (key, value) {
    // If the list of keys tat might be non-animatable grows, replace with Set
    if (key === "zIndex")
        return false;
    // If it's a number or a keyframes array, we can animate it. We might at some point
    // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
    // but for now lets leave it like this for performance reasons
    if (typeof value === "number" || Array.isArray(value))
        return true;
    if (typeof value === "string" && // It's animatable if we have a string
        style_value_types__WEBPACK_IMPORTED_MODULE_4__["complex"].test(value) && // And it contains numbers and/or colors
        !value.startsWith("url(") // Unless it starts with "url("
    ) {
        return true;
    }
    return false;
};

var isKeyframesTarget = function (v) {
    return Array.isArray(v);
};

var underDampedSpring = function () { return ({
    type: "spring",
    stiffness: 500,
    damping: 25,
    restDelta: 0.5,
    restSpeed: 10,
}); };
var overDampedSpring = function (to) { return ({
    type: "spring",
    stiffness: 550,
    damping: to === 0 ? 100 : 30,
    restDelta: 0.01,
    restSpeed: 10,
}); };
var linearTween = function () { return ({
    type: "keyframes",
    ease: "linear",
    duration: 0.3,
}); };
var keyframes = function (values) { return ({
    type: "keyframes",
    duration: 0.8,
    values: values,
}); };
var defaultTransitions = {
    x: underDampedSpring,
    y: underDampedSpring,
    z: underDampedSpring,
    rotate: underDampedSpring,
    rotateX: underDampedSpring,
    rotateY: underDampedSpring,
    rotateZ: underDampedSpring,
    scaleX: overDampedSpring,
    scaleY: overDampedSpring,
    scale: overDampedSpring,
    opacity: linearTween,
    backgroundColor: linearTween,
    color: linearTween,
    default: overDampedSpring,
};
var getDefaultTransition = function (valueKey, to) {
    var transitionFactory;
    if (isKeyframesTarget(to)) {
        transitionFactory = keyframes;
    }
    else {
        transitionFactory =
            defaultTransitions[valueKey] || defaultTransitions.default;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ to: to }, transitionFactory(to));
};

/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */
function isTransitionDefined(_a) {
    var when = _a.when, delay = _a.delay, delayChildren = _a.delayChildren, staggerChildren = _a.staggerChildren, staggerDirection = _a.staggerDirection, repeat = _a.repeat, repeatType = _a.repeatType, repeatDelay = _a.repeatDelay, from = _a.from, transition = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
    return !!Object.keys(transition).length;
}
/**
 * Convert Framer Motion's Transition type into Popmotion-compatible options.
 */
function convertTransitionToAnimationOptions(_a) {
    var yoyo = _a.yoyo, loop = _a.loop, flip = _a.flip, ease = _a.ease, transition = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["yoyo", "loop", "flip", "ease"]);
    var options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transition);
    /**
     * Convert any existing durations from seconds to milliseconds
     */
    if (transition.duration)
        options["duration"] = secondsToMilliseconds(transition.duration);
    if (transition.repeatDelay)
        options.repeatDelay = secondsToMilliseconds(transition.repeatDelay);
    /**
     * Map easing names to Popmotion's easing functions
     */
    if (ease) {
        options["ease"] = isEasingArray(ease)
            ? ease.map(easingDefinitionToFunction)
            : easingDefinitionToFunction(ease);
    }
    /**
     * Support legacy transition API
     */
    if (transition.type === "tween")
        options.type = "keyframes";
    if (yoyo) {
        options.repeatType = "reverse";
    }
    else if (loop) {
        options.repeatType = "loop";
    }
    else if (flip) {
        options.repeatType = "mirror";
    }
    options.repeat = loop || yoyo || flip || transition.repeat;
    /**
     * TODO: Popmotion 9 has the ability to automatically detect whether to use
     * a keyframes or spring animation, but does so by detecting velocity and other spring options.
     * It'd be good to introduce a similar thing here.
     */
    if (transition.type !== "spring")
        options.type = "keyframes";
    return options;
}
/**
 * Get the delay for a value by checking Transition with decreasing specificity.
 */
function getDelayFromTransition(transition, key) {
    var _a, _b, _c, _d, _e;
    return ((_e = (_d = (_b = (_a = transition[key]) === null || _a === void 0 ? void 0 : _a.delay) !== null && _b !== void 0 ? _b : (_c = transition["default"]) === null || _c === void 0 ? void 0 : _c.delay) !== null && _d !== void 0 ? _d : transition.delay) !== null && _e !== void 0 ? _e : 0);
}
function hydrateKeyframes(options) {
    if (Array.isArray(options.to) && options.to[0] === null) {
        options.to = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(options.to);
        options.to[0] = options.from;
    }
    return options;
}
function getPopmotionAnimationOptions(transition, options, key) {
    hydrateKeyframes(options);
    /**
     * Get a default transition if none is determined to be defined.
     */
    if (!isTransitionDefined(transition)) {
        transition = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transition), getDefaultTransition(key, options.to));
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), convertTransitionToAnimationOptions(transition));
}
/**
 *
 */
function getAnimation(key, value, target, transition, onComplete) {
    var origin = value.get();
    var valueTransition = transition[key] || transition["default"] || transition;
    var isOriginAnimatable = isAnimatable(key, value.get());
    var isTargetAnimatable = isAnimatable(key, target);
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["warning"])(isOriginAnimatable === isTargetAnimatable, "You are trying to animate " + key + " from \"" + origin + "\" to \"" + target + "\". " + origin + " is not an animatable value - to enable this animation set " + origin + " to a value animatable to " + target + " via the `style` property.");
    function start() {
        var options = {
            from: origin,
            to: target,
            velocity: value.getVelocity(),
            onComplete: onComplete,
            onUpdate: function (v) { return value.set(v); },
        };
        return valueTransition.type === "inertia" ||
            valueTransition.type === "decay"
            ? Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["inertia"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), valueTransition))
            : Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["animate"])(getPopmotionAnimationOptions(valueTransition, options, key));
    }
    function set() {
        value.set(target);
        onComplete();
        return { stop: function () { } };
    }
    return !isOriginAnimatable ||
        !isTargetAnimatable ||
        valueTransition.type === false
        ? set
        : start;
}
/**
 * Start animation on a MotionValue. This function is an interface between
 * Framer Motion and Popmotion
 *
 * @internal
 */
function startAnimation(key, value, target, transition) {
    if (transition === void 0) { transition = {}; }
    return value.start(function (onComplete) {
        var delayTimer;
        var controls;
        var animation = getAnimation(key, value, target, transition, onComplete);
        var delay = getDelayFromTransition(transition, key);
        var start = function () { return (controls = animation()); };
        if (delay) {
            delayTimer = setTimeout(start, secondsToMilliseconds(delay));
        }
        else {
            start();
        }
        return function () {
            clearTimeout(delayTimer);
            controls === null || controls === void 0 ? void 0 : controls.stop();
        };
    });
}

/**
 * Measure and return the element bounding box.
 *
 * We convert the box into an AxisBox2D to make it easier to work with each axis
 * individually and programmatically.
 *
 * This function optionally accepts a transformPagePoint function which allows us to compensate
 * for, for instance, measuring the element within a scaled plane like a Framer devivce preview component.
 */
function getBoundingBox(element, transformPagePoint) {
    var box = element.getBoundingClientRect();
    return convertBoundingBoxToAxisBox(transformBoundingBox(box, transformPagePoint));
}

/**
 * A VisualElement for HTMLElements
 */
var HTMLVisualElement = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HTMLVisualElement, _super);
    function HTMLVisualElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         *
         */
        _this.defaultConfig = {
            enableHardwareAcceleration: true,
            allowTransformNone: true,
        };
        /**
         * A mutable record of styles we want to apply directly to the rendered Element
         * every frame. We use a mutable data structure to reduce GC during animations.
         */
        _this.style = {};
        /**
         * A record of styles we only want to apply via React. This gets set in useMotionValues
         * and applied in the render function. I'd prefer this to live somewhere else to decouple
         * VisualElement from React but works for now.
         */
        _this.reactStyle = {};
        /**
         * A mutable record of CSS variables we want to apply directly to the rendered Element
         * every frame. We use a mutable data structure to reduce GC during animations.
         */
        _this.vars = {};
        /**
         * A mutable record of transforms we want to apply directly to the rendered Element
         * every frame. We use a mutable data structure to reduce GC during animations.
         */
        _this.transform = {};
        /**
         * A mutable record of transform origins we want to apply directly to the rendered Element
         * every frame. We use a mutable data structure to reduce GC during animations.
         */
        _this.transformOrigin = {};
        /**
         * A mutable record of transform keys we want to apply to the rendered Element. We order
         * this to order transforms in the desired order. We use a mutable data structure to reduce GC during animations.
         */
        _this.transformKeys = [];
        _this.config = _this.defaultConfig;
        /**
         * ========================================
         * Layout
         * ========================================
         */
        _this.isLayoutProjectionEnabled = false;
        /**
         * A set of layout update event handlers. These are only called once all layouts have been read,
         * making it safe to perform DOM write operations.
         */
        _this.layoutUpdateListeners = new SubscriptionManager();
        _this.layoutMeasureListeners = new SubscriptionManager();
        _this.viewportBoxUpdateListeners = new SubscriptionManager();
        /**
         * Keep track of whether the viewport box has been updated since the last render.
         * If it has, we want to fire the onViewportBoxUpdate listener.
         */
        _this.hasViewportBoxUpdated = false;
        /**
         * The visual target we want to project our component into on a given frame
         * before applying transforms defined in `animate` or `style`.
         *
         * This is considered mutable to avoid object creation on each frame.
         */
        _this.targetBoxFinal = axisBox();
        /**
         * The overall scale of the local coordinate system as transformed by all parents
         * of this component. We use this for scale correction on our calculated layouts
         * and scale-affected values like `boxShadow`.
         *
         * This is considered mutable to avoid object creation on each frame.
         */
        _this.treeScale = { x: 1, y: 1 };
        /**
         * The delta between the boxCorrected and the desired
         * targetBox (before user-set transforms are applied). The calculated output will be
         * handed to the renderer and used as part of the style correction calculations, for
         * instance calculating how to display the desired border-radius correctly.
         *
         * This is considered mutable to avoid object creation on each frame.
         */
        _this.delta = delta();
        /**
         * The delta between the boxCorrected and the desired targetBoxFinal. The calculated
         * output will be handed to the renderer and used to project the boxCorrected into
         * the targetBoxFinal.
         *
         * This is considered mutable to avoid object creation on each frame.
         */
        _this.deltaFinal = delta();
        /**
         *
         */
        _this.stopLayoutAxisAnimation = {
            x: function () { },
            y: function () { },
        };
        _this.isTargetBoxLocked = false;
        /**
         *
         */
        _this.axisProgress = {
            x: motionValue(0),
            y: motionValue(0),
        };
        _this.updateLayoutDelta = function () {
            _this.isLayoutProjectionEnabled && _this.box && _this.updateLayoutDeltas();
            /**
             * Ensure all children layouts are also updated.
             *
             * This uses a pre-bound function executor rather than a lamda to avoid creating a new function
             * multiple times per frame (source of mid-animation GC)
             */
            _this.children.forEach(fireUpdateLayoutDelta);
        };
        return _this;
    }
    /**
     * When a value is removed, we want to make sure it's removed from all rendered data structures.
     */
    HTMLVisualElement.prototype.removeValue = function (key) {
        _super.prototype.removeValue.call(this, key);
        delete this.vars[key];
        delete this.style[key];
    };
    /**
     * Empty the mutable data structures by re-creating them. We can do this every React render
     * as the comparative workload to the rest of the render is very low and this is also when
     * we want to reflect values that might have been removed by the render.
     */
    HTMLVisualElement.prototype.clean = function () {
        this.style = {};
        this.vars = {};
        this.transform = {};
    };
    HTMLVisualElement.prototype.updateConfig = function (config) {
        if (config === void 0) { config = {}; }
        this.config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.defaultConfig), config);
    };
    /**
     * Read a value directly from the HTMLElement style.
     */
    HTMLVisualElement.prototype.read = function (key) {
        return this.getComputedStyle()[key] || 0;
    };
    HTMLVisualElement.prototype.addValue = function (key, value) {
        _super.prototype.addValue.call(this, key, value);
        // If we have rotate values we want to foce the layoutOrigin used in layout projection
        // to the center of the element.
        if (key.startsWith("rotate"))
            this.layoutOrigin = 0.5;
    };
    /**
     * Read a value directly from the HTMLElement in case it's not defined by a Motion
     * prop. If it's a transform, we just return a pre-defined default value as reading these
     * out of a matrix is either error-prone or can incur a big payload for little benefit.
     */
    HTMLVisualElement.prototype.readNativeValue = function (key) {
        if (isTransformProp(key)) {
            var defaultValueType = getDefaultValueType(key);
            return defaultValueType ? defaultValueType.default || 0 : 0;
        }
        else {
            return this.read(key);
        }
    };
    HTMLVisualElement.prototype.enableLayoutProjection = function () {
        this.isLayoutProjectionEnabled = true;
    };
    HTMLVisualElement.prototype.hide = function () {
        if (this.isVisible === false)
            return;
        this.isVisible = false;
        this.scheduleRender();
    };
    HTMLVisualElement.prototype.show = function () {
        if (this.isVisible === true)
            return;
        this.isVisible = true;
        this.scheduleRender();
    };
    /**
     * Register an event listener to fire when the layout is updated. We might want to expose support
     * for this via a `motion` prop.
     */
    HTMLVisualElement.prototype.onLayoutUpdate = function (callback) {
        return this.layoutUpdateListeners.add(callback);
    };
    HTMLVisualElement.prototype.onLayoutMeasure = function (callback) {
        return this.layoutMeasureListeners.add(callback);
    };
    HTMLVisualElement.prototype.onViewportBoxUpdate = function (callback) {
        return this.viewportBoxUpdateListeners.add(callback);
    };
    /**
     * To be called when all layouts are successfully updated. In turn we can notify layoutUpdate
     * subscribers.
     */
    HTMLVisualElement.prototype.layoutReady = function (config) {
        this.layoutUpdateListeners.notify(this.box, this.prevViewportBox || this.box, config);
    };
    /**
     * Measure and return the Element's bounding box. We convert it to a AxisBox2D
     * structure to make it easier to work on each individual axis generically.
     */
    HTMLVisualElement.prototype.getBoundingBox = function () {
        var transformPagePoint = this.config.transformPagePoint;
        return getBoundingBox(this.element, transformPagePoint);
    };
    HTMLVisualElement.prototype.getBoundingBoxWithoutTransforms = function () {
        var bbox = this.getBoundingBox();
        removeBoxTransforms(bbox, this.latest);
        return bbox;
    };
    /**
     * Return the computed style after a render.
     */
    HTMLVisualElement.prototype.getComputedStyle = function () {
        return window.getComputedStyle(this.element);
    };
    /**
     * Record the bounding box as it exists before a re-render.
     */
    HTMLVisualElement.prototype.snapshotBoundingBox = function () {
        this.prevViewportBox = this.getBoundingBoxWithoutTransforms();
        /**
         * Update targetBox to match the prevViewportBox. This is just to ensure
         * that targetBox is affected by scroll in the same way as the measured box
         */
        var _a = this.axisProgress, x = _a.x, y = _a.y;
        if (!this.isTargetBoxLocked && !x.isAnimating() && !y.isAnimating()) {
            this.targetBox = copyAxisBox(this.prevViewportBox);
        }
    };
    HTMLVisualElement.prototype.measureLayout = function () {
        this.box = this.getBoundingBox();
        this.boxCorrected = copyAxisBox(this.box);
        if (!this.targetBox)
            this.targetBox = copyAxisBox(this.box);
        this.layoutMeasureListeners.notify(this.box, this.prevViewportBox || this.box);
    };
    /**
     * Ensure the targetBox reflects the latest visual box on screen
     */
    HTMLVisualElement.prototype.refreshTargetBox = function () {
        this.targetBox = this.getBoundingBoxWithoutTransforms();
    };
    HTMLVisualElement.prototype.lockTargetBox = function () {
        this.isTargetBoxLocked = true;
    };
    HTMLVisualElement.prototype.unlockTargetBox = function () {
        this.stopLayoutAnimation();
        this.isTargetBoxLocked = false;
    };
    /**
     * Reset the transform on the current Element. This is called as part
     * of a batched process across the entire layout tree. To remove this write
     * cycle it'd be interesting to see if it's possible to "undo" all the current
     * layout transforms up the tree in the same way this.getBoundingBoxWithoutTransforms
     * works
     */
    HTMLVisualElement.prototype.resetTransform = function () {
        var transformTemplate = this.config.transformTemplate;
        this.element.style.transform = transformTemplate
            ? transformTemplate({}, "")
            : "none";
        // Ensure that whatever happens next, we restore our transform
        this.scheduleRender();
    };
    /**
     * Reset rotate on this element. Doing so allows us to accurately measure the
     * bounding box of the element.
     *
     * This function will only be called if _supportRotate is enabled in a parent
     * AnimateSharedLayout. This is a private prop for use within Framer. It allows
     * us to support rotation in Magic Motion.
     *
     * @internal
     */
    HTMLVisualElement.prototype.resetRotate = function () {
        var _this = this;
        // If there's no detected rotation values, we can early return without a forced render.
        var hasRotate = false;
        // Keep a record of all the values we've reset
        var resetValues = {};
        // Check the rotate value of all axes and reset to 0
        transformAxes.forEach(function (axis) {
            var key = "rotate" + axis;
            // If this rotation doesn't exist as a motion value, then we don't
            // need to reset it
            if (!_this.hasValue(key))
                return;
            hasRotate = true;
            // Record the rotation and then temporarily set it to 0
            resetValues[key] = _this.latest[key];
            _this.latest[key] = 0;
        });
        // If there's no rotation values, we don't need to do any more.
        if (!hasRotate)
            return;
        // Force a render of this element to apply the transform with all rotations
        // set to 0.
        this.render();
        // Put back all the values we reset
        for (var key in resetValues) {
            this.latest[key] = resetValues[key];
        }
        // Schedule a render for the next frame. This ensures we won't visually
        // see the element with the reset rotate value applied.
        this.scheduleRender();
    };
    /**
     * Set new min/max boundaries to project an axis into
     */
    HTMLVisualElement.prototype.setAxisTarget = function (axis, min, max) {
        var targetAxis = this.targetBox[axis];
        targetAxis.min = min;
        targetAxis.max = max;
        // Flag that we want to fire the onViewportBoxUpdate event handler
        this.hasViewportBoxUpdated = true;
        this.rootParent.scheduleUpdateLayoutDelta();
    };
    /**
     *
     */
    HTMLVisualElement.prototype.startLayoutAxisAnimation = function (axis, transition) {
        var _this = this;
        var progress = this.axisProgress[axis];
        var _a = this.targetBox[axis], min = _a.min, max = _a.max;
        var length = max - min;
        progress.clearListeners();
        progress.set(min);
        progress.set(min); // Set twice to hard-reset velocity
        progress.onChange(function (v) { return _this.setAxisTarget(axis, v, v + length); });
        return startAnimation(axis, progress, 0, transition);
    };
    HTMLVisualElement.prototype.stopLayoutAnimation = function () {
        var _this = this;
        eachAxis(function (axis) { return _this.axisProgress[axis].stop(); });
    };
    /**
     * Update the layout deltas to reflect the relative positions of the layout
     * and the desired target box
     */
    HTMLVisualElement.prototype.updateLayoutDeltas = function () {
        /**
         * Reset the corrected box with the latest values from box, as we're then going
         * to perform mutative operations on it.
         */
        resetBox(this.boxCorrected, this.box);
        /**
         * If this component has a parent, update this treeScale by incorporating the parent's
         * delta into its treeScale.
         */
        if (this.parent) {
            updateTreeScale(this.treeScale, this.parent.treeScale, this.parent.delta);
        }
        /**
         * Apply all the parent deltas to this box to produce the corrected box. This
         * is the layout box, as it will appear on screen as a result of the transforms of its parents.
         */
        applyTreeDeltas(this.boxCorrected, this.treePath);
        /**
         * Update the delta between the corrected box and the target box before user-set transforms were applied.
         * This will allow us to calculate the corrected borderRadius and boxShadow to compensate
         * for our layout reprojection, but still allow them to be scaled correctly by the user.
         * It might be that to simplify this we may want to accept that user-set scale is also corrected
         * and we wouldn't have to keep and calc both deltas, OR we could support a user setting
         * to allow people to choose whether these styles are corrected based on just the
         * layout reprojection or the final bounding box.
         */
        updateBoxDelta(this.delta, this.boxCorrected, this.targetBox, this.layoutOrigin);
        /**
         * If we have a listener for the viewport box, fire it.
         */
        this.hasViewportBoxUpdated &&
            this.viewportBoxUpdateListeners.notify(this.targetBox, this.delta);
        this.hasViewportBoxUpdated = false;
        /**
         * Ensure this element renders on the next frame if the projection transform has changed.
         */
        var deltaTransform = buildLayoutProjectionTransform(this.delta, this.treeScale);
        deltaTransform !== this.deltaTransform && this.scheduleRender();
        this.deltaTransform = deltaTransform;
    };
    HTMLVisualElement.prototype.updateTransformDeltas = function () {
        if (!this.isLayoutProjectionEnabled || !this.box)
            return;
        /**
         * Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
         * This is the final box that we will then project into by calculating a transform delta and
         * applying it to the corrected box.
         */
        applyBoxTransforms(this.targetBoxFinal, this.targetBox, this.latest);
        /**
         * Update the delta between the corrected box and the final target box, after
         * user-set transforms are applied to it. This will be used by the renderer to
         * create a transform style that will reproject the element from its actual layout
         * into the desired bounding box.
         */
        updateBoxDelta(this.deltaFinal, this.boxCorrected, this.targetBoxFinal, this.layoutOrigin);
    };
    /**
     * ========================================
     * Build & render
     * ========================================
     */
    /**
     * Build a style prop using the latest resolved MotionValues
     */
    HTMLVisualElement.prototype.build = function () {
        this.updateTransformDeltas();
        if (this.isVisible !== undefined) {
            this.style.visibility = this.isVisible ? "visible" : "hidden";
        }
        buildHTMLStyles(this.latest, this.style, this.vars, this.transform, this.transformOrigin, this.transformKeys, this.config, this.isLayoutProjectionEnabled && !!this.box, this.delta, this.deltaFinal, this.treeScale, this.targetBoxFinal);
    };
    /**
     * Render the Element by rebuilding and applying the latest styles and vars.
     */
    HTMLVisualElement.prototype.render = function () {
        // Rebuild the latest animated values into style and vars caches.
        this.build();
        // Directly assign style into the Element's style prop. In tests Object.assign is the
        // fastest way to assign styles.
        Object.assign(this.element.style, this.style);
        // Loop over any CSS variables and assign those.
        for (var key in this.vars) {
            this.element.style.setProperty(key, this.vars[key]);
        }
    };
    return HTMLVisualElement;
}(VisualElement));
/**
 * Pre-bound version of updateLayoutDelta so we're not creating a new function multiple
 * times per frame.
 */
var fireUpdateLayoutDelta = function (child) {
    return child.updateLayoutDelta();
};

/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */
function useConstant(init) {
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
    if (ref.current === null) {
        ref.current = init();
    }
    return ref.current;
}

function calcOrigin$1(origin, offset, size) {
    return typeof origin === "string"
        ? origin
        : style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"].transform(offset + size * origin);
}
/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */
function calcSVGTransformOrigin(dimensions, originX, originY) {
    var pxOriginX = calcOrigin$1(originX, dimensions.x, dimensions.width);
    var pxOriginY = calcOrigin$1(originY, dimensions.y, dimensions.height);
    return pxOriginX + " " + pxOriginY;
}

// Convert a progress 0-1 to a pixels value based on the provided length
var progressToPixels = function (progress, length) {
    return style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"].transform(progress * length);
};
var dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray",
};
var camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray",
};
/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */
function buildSVGPath(attrs, totalLength, length, spacing, offset, useDashCase) {
    if (spacing === void 0) { spacing = 1; }
    if (offset === void 0) { offset = 0; }
    if (useDashCase === void 0) { useDashCase = true; }
    // We use dash case when setting attributes directly to the DOM node and camel case
    // when defining props on a React component.
    var keys = useDashCase ? dashKeys : camelKeys;
    // Build the dash offset
    attrs[keys.offset] = progressToPixels(-offset, totalLength);
    // Build the dash array
    var pathLength = progressToPixels(length, totalLength);
    var pathSpacing = progressToPixels(spacing, totalLength);
    attrs[keys.array] = pathLength + " " + pathSpacing;
}

var unmeasured = { x: 0, y: 0, width: 0, height: 0 };
/**
 * Build SVG visual attrbutes, like cx and style.transform
 */
function buildSVGAttrs(_a, style, vars, attrs, transform, transformOrigin, transformKeys, config, dimensions, totalPathLength, isLayoutProjectionEnabled, delta, deltaFinal, treeScale, targetBox) {
    var attrX = _a.attrX, attrY = _a.attrY, originX = _a.originX, originY = _a.originY, pathLength = _a.pathLength, _b = _a.pathSpacing, pathSpacing = _b === void 0 ? 1 : _b, _c = _a.pathOffset, pathOffset = _c === void 0 ? 0 : _c, 
    // This is object creation, which we try to avoid per-frame.
    latest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
    /**
     * With SVG we treat all animated values as attributes rather than CSS, so we build into attrs
     */
    buildHTMLStyles(latest, attrs, vars, transform, transformOrigin, transformKeys, config, isLayoutProjectionEnabled, delta, deltaFinal, treeScale, targetBox);
    /**
     * However, we apply transforms as CSS transforms. So if we detect a transform we take it from attrs
     * and copy it into style.
     */
    if (attrs.transform) {
        style.transform = attrs.transform;
        delete attrs.transform;
    }
    // Parse transformOrigin
    if (originX !== undefined || originY !== undefined || style.transform) {
        style.transformOrigin = calcSVGTransformOrigin(dimensions || unmeasured, originX !== undefined ? originX : 0.5, originY !== undefined ? originY : 0.5);
    }
    // Treat x/y not as shortcuts but as actual attributes
    if (attrX !== undefined)
        attrs.x = attrX;
    if (attrY !== undefined)
        attrs.y = attrY;
    // Build SVG path if one has been measured
    if (totalPathLength !== undefined && pathLength !== undefined) {
        buildSVGPath(attrs, totalPathLength, pathLength, pathSpacing, pathOffset, false);
    }
    return attrs;
}

/**
 * A set of attribute names that are always read/written as camel case.
 */
var camelCaseAttributes = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
]);

var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = "$1-$2";
/**
 * Convert camelCase to dash-case properties.
 */
var camelToDash = function (str) {
    return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};

/**
 * A VisualElement for SVGElements. Inherits from and extends HTMLVisualElement as the two
 * share data structures.
 */
var SVGVisualElement = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SVGVisualElement, _super);
    function SVGVisualElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * A mutable record of attributes we want to apply directly to the rendered Element
         * every frame. We use a mutable data structure to reduce GC during animations.
         */
        _this.attrs = {};
        /**
         * We disable hardware acceleration for SVG transforms as they're not currently able to be accelerated.
         */
        _this.defaultConfig = {
            enableHardwareAcceleration: false,
        };
        /**
         * Without duplicating this call from HTMLVisualElement we end up with HTMLVisualElement.defaultConfig
         * being assigned to config
         */
        _this.config = _this.defaultConfig;
        return _this;
    }
    /**
     * Measure the SVG element on mount. This can affect page rendering so there might be a
     * better time to perform this - for instance dynamically only if there's a transform-origin dependent
     * transform being set (like rotate)
     */
    SVGVisualElement.prototype.mount = function (element) {
        _super.prototype.mount.call(this, element);
        this.measure();
    };
    /**
     * Update the SVG dimensions and path length
     */
    SVGVisualElement.prototype.measure = function () {
        try {
            this.dimensions =
                typeof this.element.getBBox ===
                    "function"
                    ? this.element.getBBox()
                    : this.element.getBoundingClientRect();
        }
        catch (e) {
            // Most likely trying to measure an unrendered element under Firefox
            this.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        if (isPath(this.element)) {
            this.totalPathLength = this.element.getTotalLength();
        }
    };
    /**
     * Empty the mutable data structures in case attrs have been removed between renders.
     */
    SVGVisualElement.prototype.clean = function () {
        _super.prototype.clean.call(this);
        this.attrs = {};
    };
    /**
     * Read an attribute directly from the SVGElement
     */
    SVGVisualElement.prototype.read = function (key) {
        key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
        return this.element.getAttribute(key);
    };
    SVGVisualElement.prototype.build = function () {
        this.updateTransformDeltas();
        buildSVGAttrs(this.latest, this.style, this.vars, this.attrs, this.transform, this.transformOrigin, this.transformKeys, this.config, this.dimensions, this.totalPathLength, this.isLayoutProjectionEnabled && !!this.box, this.delta, this.deltaFinal, this.treeScale, this.targetBoxFinal);
    };
    SVGVisualElement.prototype.render = function () {
        // Update HTML styles and CSS variables
        _super.prototype.render.call(this);
        // Loop through attributes and apply them to the SVGElement
        for (var key in this.attrs) {
            this.element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, this.attrs[key]);
        }
    };
    return SVGVisualElement;
}(HTMLVisualElement));
function isPath(element) {
    return element.tagName === "path";
}

/**
 * @internal
 */
/**
 * @internal
 */
var svgElements = [
    "animate",
    "circle",
    "clipPath",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "tspan",
    "use",
    "view",
];

var svgTagNames = new Set(svgElements);
/**
 * Determine whether this is a HTML or SVG component based on if the provided
 * Component is a string and a recognised SVG tag. A potentially better way to
 * do this would be to offer a `motion.customSVG` function and determine this
 * when we generate the `motion.circle` etc components.
 */
function isSVGComponent(Component) {
    return typeof Component === "string" && svgTagNames.has(Component);
}

/**
 * @public
 */
var PresenceContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["createContext"])(null);

/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed the tree, but
 * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */
function usePresence() {
    var context = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(PresenceContext);
    if (context === null)
        return [true, null];
    var isPresent = context.isPresent, onExitComplete = context.onExitComplete, register = context.register;
    // It's safe to call the following hooks conditionally (after an early return) because the context will always
    // either be null or non-null for the lifespan of the component.
    // Replace with useOpaqueId when released in React
    var id = useUniqueId();
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () { return register(id); }, []);
    var safeToRemove = function () { return onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete(id); };
    return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}
/**
 * @public
 */
function useIsPresent() {
    var context = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(PresenceContext);
    return context === null ? true : context.isPresent;
}
var counter = 0;
var incrementId = function () { return counter++; };
var useUniqueId = function () { return useConstant(incrementId); };

/**
 * DOM-flavoured variation of the useVisualElement hook. Used to create either a HTMLVisualElement
 * or SVGVisualElement for the component.
 */
var useDomVisualElement = function (Component, props, parent, isStatic, ref) {
    var visualElement = useConstant(function () {
        var DOMVisualElement = isSVGComponent(Component)
            ? SVGVisualElement
            : HTMLVisualElement;
        return new DOMVisualElement(parent, ref);
    });
    visualElement.updateConfig(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ enableHardwareAcceleration: !isStatic }, props));
    visualElement.layoutId = props.layoutId;
    var isPresent = useIsPresent();
    visualElement.isPresent =
        props.isPresent !== undefined ? props.isPresent : isPresent;
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        if (props.onViewportBoxUpdate) {
            return visualElement.onViewportBoxUpdate(props.onViewportBoxUpdate);
        }
    }, [props.onViewportBoxUpdate]);
    return visualElement;
};

/**
 * A list of all valid MotionProps.
 *
 * @internalremarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */
var validMotionProps = new Set([
    "initial",
    "animate",
    "exit",
    "style",
    "variants",
    "transition",
    "transformTemplate",
    "transformValues",
    "custom",
    "inherit",
    "static",
    "layout",
    "layoutId",
    "onLayoutAnimationComplete",
    "onViewportBoxUpdate",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "drag",
    "dragControls",
    "dragListener",
    "dragConstraints",
    "dragDirectionLock",
    "_dragX",
    "_dragY",
    "dragElastic",
    "dragMomentum",
    "dragPropagation",
    "dragTransition",
    "onPan",
    "onPanStart",
    "onPanEnd",
    "onPanSessionStart",
    "onTap",
    "onTapStart",
    "onTapCancel",
    "whileHover",
    "whileTap",
    "onHoverEnd",
    "onHoverStart",
]);
/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */
function isValidMotionProp(key) {
    return validMotionProps.has(key);
}

var isPropValid = function (key) { return !isValidMotionProp(key); };
/**
 * Emotion and Styled Components both allow users to pass through arbitrary props to their components
 * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
 * of these should be passed to the underlying DOM node.
 *
 * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
 * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
 * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
 * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
 *
 * By making it an optionalDependency we can offer this functionality only in the situations where it's
 * actually required.
 */
try {
    var emotionIsPropValid_1 = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js").default;
    isPropValid = function (key) {
        // Handle events explicitly as Emotion validates them all as true
        if (key.startsWith("on")) {
            return !isValidMotionProp(key);
        }
        else {
            return emotionIsPropValid_1(key);
        }
    };
}
catch (_a) {
    // We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}
function filterProps(props) {
    var domProps = {};
    for (var key in props) {
        if (isPropValid(key))
            domProps[key] = props[key];
    }
    return domProps;
}

function buildHTMLProps(visualElement, _a) {
    var drag = _a.drag;
    // The `any` isn't ideal but it is the type of createElement props argument
    var htmlProps = {
        style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, visualElement.reactStyle), visualElement.style), visualElement.vars),
    };
    if (!!drag) {
        // Disable text selection
        htmlProps.style.userSelect = "none";
        // Disable the ghost element when a user drags
        htmlProps.draggable = false;
    }
    return htmlProps;
}

/**
 * Build React props for SVG elements
 */
function buildSVGProps(visualElement) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, visualElement.attrs), { style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, visualElement.reactStyle) });
}

function render(Component, props, visualElement) {
    // Only filter props from components we control, ie `motion.div`. If this
    // is a custom component pass along everything provided to it.
    var forwardedProps = typeof Component === "string" ? filterProps(props) : props;
    /**
     * Every render, empty and rebuild the animated values to be applied to our Element.
     * During animation these data structures are used in a mutable fashion to reduce
     * garbage collection, but between renders we can flush them to remove values
     * that might have been taken out of the provided props.
     */
    visualElement.clean();
    visualElement.build();
    // Generate props to visually render this component
    var visualProps = isSVGComponent(Component)
        ? buildSVGProps(visualElement)
        : buildHTMLProps(visualElement, props);
    return Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, forwardedProps), { ref: visualElement.ref }), visualProps));
}

function isCSSVariable$1(value) {
    return typeof value === "string" && value.startsWith("var(--");
}
/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
    var match = cssVariableRegex.exec(current);
    if (!match)
        return [,];
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(match, 3), token = _a[1], fallback = _a[2];
    return [token, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth) {
    if (depth === void 0) { depth = 1; }
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(depth <= maxDepth, "Max CSS variable fallback depth detected in property \"" + current + "\". This may indicate a circular fallback dependency.");
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(parseCSSVariable(current), 2), token = _a[0], fallback = _a[1];
    // No CSS variable detected
    if (!token)
        return;
    // Attempt to read this CSS variable off the element
    var resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
        return resolved;
    }
    else if (isCSSVariable$1(fallback)) {
        // The fallback might itself be a CSS variable, in which case we attempt to resolve it too.
        return getVariableValue(fallback, element, depth + 1);
    }
    else {
        return fallback;
    }
}
/**
 * Resolve CSS variables from
 *
 * @internal
 */
function resolveCSSVariables(visualElement, _a, transitionEnd) {
    var _b;
    var target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, []);
    var element = visualElement.getInstance();
    if (!(element instanceof HTMLElement))
        return { target: target, transitionEnd: transitionEnd };
    // If `transitionEnd` isn't `undefined`, clone it. We could clone `target` and `transitionEnd`
    // only if they change but I think this reads clearer and this isn't a performance-critical path.
    if (transitionEnd) {
        transitionEnd = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transitionEnd);
    }
    // Go through existing `MotionValue`s and ensure any existing CSS variables are resolved
    visualElement.forEachValue(function (value) {
        var current = value.get();
        if (!isCSSVariable$1(current))
            return;
        var resolved = getVariableValue(current, element);
        if (resolved)
            value.set(resolved);
    });
    // Cycle through every target property and resolve CSS variables. Currently
    // we only read single-var properties like `var(--foo)`, not `calc(var(--foo) + 20px)`
    for (var key in target) {
        var current = target[key];
        if (!isCSSVariable$1(current))
            continue;
        var resolved = getVariableValue(current, element);
        if (!resolved)
            continue;
        // Clone target if it hasn't already been
        target[key] = resolved;
        // If the user hasn't already set this key on `transitionEnd`, set it to the unresolved
        // CSS variable. This will ensure that after the animation the component will reflect
        // changes in the value of the CSS variable.
        if (transitionEnd)
            (_b = transitionEnd[key]) !== null && _b !== void 0 ? _b : (transitionEnd[key] = current);
    }
    return { target: target, transitionEnd: transitionEnd };
}

var positionalKeys = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
]);
var isPositionalKey = function (key) { return positionalKeys.has(key); };
var hasPositionalKey = function (target) {
    return Object.keys(target).some(isPositionalKey);
};
var setAndResetVelocity = function (value, to) {
    // Looks odd but setting it twice doesn't render, it'll just
    // set both prev and current to the latest value
    value.set(to, false);
    value.set(to);
};
var isNumOrPxType = function (v) {
    return v === style_value_types__WEBPACK_IMPORTED_MODULE_4__["number"] || v === style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"];
};
var BoundingBoxDimension;
(function (BoundingBoxDimension) {
    BoundingBoxDimension["width"] = "width";
    BoundingBoxDimension["height"] = "height";
    BoundingBoxDimension["left"] = "left";
    BoundingBoxDimension["right"] = "right";
    BoundingBoxDimension["top"] = "top";
    BoundingBoxDimension["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));
var getPosFromMatrix = function (matrix, pos) {
    return parseFloat(matrix.split(", ")[pos]);
};
var getTranslateFromMatrix = function (pos2, pos3) { return function (_bbox, _a) {
    var transform = _a.transform;
    if (transform === "none" || !transform)
        return 0;
    var matrix3d = transform.match(/^matrix3d\((.+)\)$/);
    if (matrix3d) {
        return getPosFromMatrix(matrix3d[1], pos3);
    }
    else {
        var matrix = transform.match(/^matrix\((.+)\)$/);
        if (matrix) {
            return getPosFromMatrix(matrix[1], pos2);
        }
        else {
            return 0;
        }
    }
}; };
var transformKeys = new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = transformProps.filter(function (key) { return !transformKeys.has(key); });
function removeNonTranslationalTransform(visualElement) {
    var removedTransforms = [];
    nonTranslationalTransformKeys.forEach(function (key) {
        var value = visualElement.getValue(key);
        if (value !== undefined) {
            removedTransforms.push([key, value.get()]);
            value.set(key.startsWith("scale") ? 1 : 0);
        }
    });
    // Apply changes to element before measurement
    if (removedTransforms.length)
        visualElement.render();
    return removedTransforms;
}
var positionalValues = {
    // Dimensions
    width: function (_a) {
        var x = _a.x;
        return x.max - x.min;
    },
    height: function (_a) {
        var y = _a.y;
        return y.max - y.min;
    },
    top: function (_bbox, _a) {
        var top = _a.top;
        return parseFloat(top);
    },
    left: function (_bbox, _a) {
        var left = _a.left;
        return parseFloat(left);
    },
    bottom: function (_a, _b) {
        var y = _a.y;
        var top = _b.top;
        return parseFloat(top) + (y.max - y.min);
    },
    right: function (_a, _b) {
        var x = _a.x;
        var left = _b.left;
        return parseFloat(left) + (x.max - x.min);
    },
    // Transform
    x: getTranslateFromMatrix(4, 13),
    y: getTranslateFromMatrix(5, 14),
};
var convertChangedValueTypes = function (target, visualElement, changedKeys) {
    var originBbox = visualElement.getBoundingBox();
    var elementComputedStyle = visualElement.getComputedStyle();
    var display = elementComputedStyle.display, top = elementComputedStyle.top, left = elementComputedStyle.left, bottom = elementComputedStyle.bottom, right = elementComputedStyle.right, transform = elementComputedStyle.transform;
    var originComputedStyle = { top: top, left: left, bottom: bottom, right: right, transform: transform };
    // If the element is currently set to display: "none", make it visible before
    // measuring the target bounding box
    if (display === "none") {
        visualElement.setStaticValues("display", target.display || "block");
    }
    // Apply the latest values (as set in checkAndConvertChangedValueTypes)
    visualElement.render();
    var targetBbox = visualElement.getBoundingBox();
    changedKeys.forEach(function (key) {
        // Restore styles to their **calculated computed style**, not their actual
        // originally set style. This allows us to animate between equivalent pixel units.
        var value = visualElement.getValue(key);
        setAndResetVelocity(value, positionalValues[key](originBbox, originComputedStyle));
        target[key] = positionalValues[key](targetBbox, elementComputedStyle);
    });
    return target;
};
var checkAndConvertChangedValueTypes = function (visualElement, target, origin, transitionEnd) {
    if (origin === void 0) { origin = {}; }
    if (transitionEnd === void 0) { transitionEnd = {}; }
    target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, target);
    transitionEnd = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transitionEnd);
    var targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
    // We want to remove any transform values that could affect the element's bounding box before
    // it's measured. We'll reapply these later.
    var removedTransformValues = [];
    var hasAttemptedToRemoveTransformValues = false;
    var changedValueTypeKeys = [];
    targetPositionalKeys.forEach(function (key) {
        var value = visualElement.getValue(key);
        if (!visualElement.hasValue(key))
            return;
        var from = origin[key];
        var to = target[key];
        var fromType = findDimensionValueType(from);
        var toType;
        // TODO: The current implementation of this basically throws an error
        // if you try and do value conversion via keyframes. There's probably
        // a way of doing this but the performance implications would need greater scrutiny,
        // as it'd be doing multiple resize-remeasure operations.
        if (isKeyframesTarget(to)) {
            var numKeyframes = to.length;
            for (var i = to[0] === null ? 1 : 0; i < numKeyframes; i++) {
                if (!toType) {
                    toType = findDimensionValueType(to[i]);
                    Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(toType === fromType ||
                        (isNumOrPxType(fromType) && isNumOrPxType(toType)), "Keyframes must be of the same dimension as the current value");
                }
                else {
                    Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(findDimensionValueType(to[i]) === toType, "All keyframes must be of the same type");
                }
            }
        }
        else {
            toType = findDimensionValueType(to);
        }
        if (fromType !== toType) {
            // If they're both just number or px, convert them both to numbers rather than
            // relying on resize/remeasure to convert (which is wasteful in this situation)
            if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
                var current = value.get();
                if (typeof current === "string") {
                    value.set(parseFloat(current));
                }
                if (typeof to === "string") {
                    target[key] = parseFloat(to);
                }
                else if (Array.isArray(to) && toType === style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"]) {
                    target[key] = to.map(parseFloat);
                }
            }
            else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) && (toType === null || toType === void 0 ? void 0 : toType.transform) &&
                (from === 0 || to === 0)) {
                // If one or the other value is 0, it's safe to coerce it to the
                // type of the other without measurement
                if (from === 0) {
                    value.set(toType.transform(from));
                }
                else {
                    target[key] = fromType.transform(to);
                }
            }
            else {
                // If we're going to do value conversion via DOM measurements, we first
                // need to remove non-positional transform values that could affect the bbox measurements.
                if (!hasAttemptedToRemoveTransformValues) {
                    removedTransformValues = removeNonTranslationalTransform(visualElement);
                    hasAttemptedToRemoveTransformValues = true;
                }
                changedValueTypeKeys.push(key);
                transitionEnd[key] =
                    transitionEnd[key] !== undefined
                        ? transitionEnd[key]
                        : target[key];
                setAndResetVelocity(value, to);
            }
        }
    });
    if (changedValueTypeKeys.length) {
        var convertedTarget = convertChangedValueTypes(target, visualElement, changedValueTypeKeys);
        // If we removed transform values, reapply them before the next render
        if (removedTransformValues.length) {
            removedTransformValues.forEach(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), key = _b[0], value = _b[1];
                visualElement.getValue(key).set(value);
            });
        }
        // Reapply original values
        visualElement.render();
        return { target: convertedTarget, transitionEnd: transitionEnd };
    }
    else {
        return { target: target, transitionEnd: transitionEnd };
    }
};
/**
 * Convert value types for x/y/width/height/top/left/bottom/right
 *
 * Allows animation between `'auto'` -> `'100%'` or `0` -> `'calc(50% - 10vw)'`
 *
 * @internal
 */
function unitConversion(visualElement, target, origin, transitionEnd) {
    return hasPositionalKey(target)
        ? checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd)
        : { target: target, transitionEnd: transitionEnd };
}

/**
 * Parse a DOM variant to make it animatable. This involves resolving CSS variables
 * and ensuring animations like "20%" => "calc(50vw)" are performed in pixels.
 */
var parseDomVariant = function (visualElement, target, origin, transitionEnd) {
    var resolved = resolveCSSVariables(visualElement, target, transitionEnd);
    target = resolved.target;
    transitionEnd = resolved.transitionEnd;
    return unitConversion(visualElement, target, origin, transitionEnd);
};

/**
 * Use callback either only on the initial render or on all renders. In concurrent mode
 * the "initial" render might run multiple times
 *
 * @param callback - Callback to run
 * @param isInitialOnly - Set to `true` to only run on initial render, or `false` for all renders. Defaults to `false`.
 *
 * @public
 */
function useInitialOrEveryRender(callback, isInitialOnly) {
    if (isInitialOnly === void 0) { isInitialOnly = false; }
    var isInitialRender = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(true);
    if (!isInitialOnly || (isInitialOnly && isInitialRender.current)) {
        callback();
    }
    isInitialRender.current = false;
}

/**
 * Control animations on one or more components.
 *
 * @public
 */
var AnimationControls = /** @class */ (function () {
    function AnimationControls() {
        /**
         * Track whether the host component has mounted.
         *
         * @internal
         */
        this.hasMounted = false;
        /**
         * Pending animations that are started before a component is mounted.
         *
         * @internal
         */
        this.pendingAnimations = [];
        /**
         * A collection of linked component animation controls.
         *
         * @internal
         */
        this.componentControls = new Set();
    }
    /**
     * Set variants on this and all child components.
     *
     * @param variants - The variants to set
     *
     * @internal
     */
    AnimationControls.prototype.setVariants = function (variants) {
        this.variants = variants;
        this.componentControls.forEach(function (controls) {
            return controls.setVariants(variants);
        });
    };
    /**
     * Set a default transition on this and all child components
     *
     * @param transition - The default transition to set
     *
     * @internal
     */
    AnimationControls.prototype.setDefaultTransition = function (transition) {
        this.defaultTransition = transition;
        this.componentControls.forEach(function (controls) {
            return controls.setDefaultTransition(transition);
        });
    };
    /**
     * Subscribes a component's animation controls to this.
     *
     * @param controls - The controls to subscribe
     * @returns An unsubscribe function.
     *
     * @internal
     */
    AnimationControls.prototype.subscribe = function (controls) {
        var _this = this;
        this.componentControls.add(controls);
        if (this.variants)
            controls.setVariants(this.variants);
        if (this.defaultTransition)
            controls.setDefaultTransition(this.defaultTransition);
        return function () { return _this.componentControls.delete(controls); };
    };
    /**
     * Starts an animation on all linked components.
     *
     * @remarks
     *
     * ```jsx
     * controls.start("variantLabel")
     * controls.start({
     *   x: 0,
     *   transition: { duration: 1 }
     * })
     * ```
     *
     * @param definition - Properties or variant label to animate to
     * @param transition - Optional `transtion` to apply to a variant
     * @returns - A `Promise` that resolves when all animations have completed.
     *
     * @public
     */
    AnimationControls.prototype.start = function (definition, transitionOverride) {
        var _this = this;
        if (this.hasMounted) {
            var animations_1 = [];
            this.componentControls.forEach(function (controls) {
                var animation = controls.start(definition, {
                    transitionOverride: transitionOverride,
                });
                animations_1.push(animation);
            });
            return Promise.all(animations_1);
        }
        else {
            return new Promise(function (resolve) {
                _this.pendingAnimations.push({
                    animation: [definition, transitionOverride],
                    resolve: resolve,
                });
            });
        }
    };
    /**
     * Instantly set to a set of properties or a variant.
     *
     * ```jsx
     * // With properties
     * controls.set({ opacity: 0 })
     *
     * // With variants
     * controls.set("hidden")
     * ```
     *
     * @internalremarks
     * We could perform a similar trick to `.start` where this can be called before mount
     * and we maintain a list of of pending actions that get applied on mount. But the
     * expectation of `set` is that it happens synchronously and this would be difficult
     * to do before any children have even attached themselves. It's also poor practise
     * and we should discourage render-synchronous `.start` calls rather than lean into this.
     *
     * @public
     */
    AnimationControls.prototype.set = function (definition) {
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(this.hasMounted, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.");
        return this.componentControls.forEach(function (controls) {
            return controls.apply(definition);
        });
    };
    /**
     * Stops animations on all linked components.
     *
     * ```jsx
     * controls.stop()
     * ```
     *
     * @public
     */
    AnimationControls.prototype.stop = function () {
        this.componentControls.forEach(function (controls) { return controls.stop(); });
    };
    /**
     * Initialises the animation controls.
     *
     * @internal
     */
    AnimationControls.prototype.mount = function () {
        var _this = this;
        this.hasMounted = true;
        this.pendingAnimations.forEach(function (_a) {
            var animation = _a.animation, resolve = _a.resolve;
            return _this.start.apply(_this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(animation)).then(resolve);
        });
    };
    /**
     * Stops all child animations when the host component unmounts.
     *
     * @internal
     */
    AnimationControls.prototype.unmount = function () {
        this.hasMounted = false;
        this.stop();
    };
    return AnimationControls;
}());
/**
 * @internal
 */
var animationControls = function () { return new AnimationControls(); };

/**
 * @internal
 */
var MotionContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["createContext"])({
    static: false,
});
var isVariantLabel = function (v) {
    return typeof v === "string" || Array.isArray(v);
};
var isAnimationControls = function (v) {
    return v instanceof AnimationControls;
};
/**
 * Set up the context for children motion components.
 *
 * We also use this opportunity to apply `initial` values
 */
var useMotionContext = function (parentContext, controls, visualElement, isStatic, _a) {
    if (isStatic === void 0) { isStatic = false; }
    var initial = _a.initial, animate = _a.animate, variants = _a.variants, whileTap = _a.whileTap, whileHover = _a.whileHover, layoutId = _a.layoutId;
    // Determine whether this is a root element of an AnimatePresence component
    var presenceContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(PresenceContext);
    var presenceId = presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.id;
    visualElement.isPresenceRoot = parentContext.presenceId !== presenceId;
    // Override initial with that from a parent context, if defined
    if ((presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) !== undefined) {
        initial = presenceContext.initial;
    }
    var initialState;
    if (initial === false && !isAnimationControls(animate)) {
        initialState = animate;
    }
    else if (typeof initial !== "boolean") {
        initialState = initial;
    }
    // Track mounted status so children can detect whether they were present during their
    // parent's first render
    var hasMounted = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(false);
    // We propagate this component's VisualElementAnimationControls *if* we're being provided variants,
    // if we're being used to control variants, or if we're being passed animation controls.
    // Otherwise this component should be "invisible" to variant propagation. This is a slight concession
    // to Framer X where every `Frame` is a `motion` component and it might be if we change that in the future
    // that this restriction is removed.
    var shouldPropagateControls = variants ||
        isVariantLabel(animate) ||
        isVariantLabel(whileTap) ||
        isVariantLabel(whileHover) ||
        isAnimationControls(animate);
    // If this component's `initial` prop is a variant label, propagate it. Otherwise pass the parent's.
    var targetInitial = isVariantLabel(initialState)
        ? initialState
        : parentContext.initial;
    // If this is a variant tree we need to propagate the `animate` prop in case new children are added after
    // the tree initially animates.
    var targetAnimate = isVariantLabel(animate)
        ? animate
        : parentContext.animate;
    // Only allow `initial` to trigger context re-renders if this is a `static` component (ie we're on the Framer canvas)
    // or in another non-animation/interaction environment.
    var initialDependency = isStatic ? targetInitial : null;
    // Only allow `animate` to trigger context re-renders if it's a variant label. If this is an array of
    // variant labels there's probably an optimisation to deep-compare but it might be an over-optimisation.
    // We want to do this as we rely on React's component rendering order each render cycle to determine
    // the new order of any child components for the `staggerChildren` functionality.
    var animateDependency = shouldPropagateControls && isVariantLabel(targetAnimate)
        ? targetAnimate
        : null;
    // The context to provide to the child. We `useMemo` because although `controls` and `initial` are
    // unlikely to change, by making the context an object it'll be considered a new value every render.
    // So all child motion components will re-render as a result.
    var context = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () { return ({
        controls: shouldPropagateControls
            ? controls
            : parentContext.controls,
        initial: targetInitial,
        animate: targetAnimate,
        visualElement: visualElement,
        hasMounted: hasMounted,
        isReducedMotion: parentContext.isReducedMotion,
        presenceId: presenceId,
    }); }, [
        initialDependency,
        animateDependency,
        parentContext.isReducedMotion,
        animate,
        layoutId,
        presenceId,
    ]);
    // Update the `static` property every render. This is unlikely to change but also essentially free.
    context.static = isStatic;
    // Set initial state. If this is a static component (ie in Framer canvas), respond to updates
    // in `initial`.
    useInitialOrEveryRender(function () {
        var initialToApply = initialState || parentContext.initial;
        initialToApply && controls.apply(initialToApply);
    }, !isStatic);
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        hasMounted.current = true;
    }, []);
    return context;
};

var checkShouldInheritVariant = function (_a) {
    var animate = _a.animate, variants = _a.variants, _b = _a.inherit, inherit = _b === void 0 ? true : _b;
    return (inherit &&
        !!variants &&
        (!animate || animate instanceof AnimationControls));
};

var isMotionValue = function (value) {
    return value instanceof MotionValue;
};

/**
 * Scrape props for MotionValues and add/remove them to this component's
 * VisualElement
 */
function useMotionValues(visualElement, props) {
    var prev = useConstant(empty);
    /**
     * Remove MotionValues that are no longer present
     */
    for (var key in prev) {
        var isTransform = isTransformProp(key) || isTransformOriginProp(key);
        var existsAsProp = props[key];
        var existsAsStyle = props.style && props.style[key];
        var propIsMotionValue = existsAsProp && isMotionValue(props[key]);
        var styleIsMotionValue = existsAsStyle && isMotionValue(props.style[key]);
        var transformRemoved = isTransform && !existsAsProp && !existsAsStyle;
        var motionValueRemoved = !isTransform && !propIsMotionValue && !styleIsMotionValue;
        if (transformRemoved || motionValueRemoved) {
            visualElement.removeValue(key);
            delete prev[key];
        }
    }
    /**
     * Add incoming MotionValues
     */
    addMotionValues(visualElement, prev, props);
    if (props.style)
        addMotionValues(visualElement, prev, props.style, true);
    /**
     * Transform custom values if provided a handler, ie size -> width/height
     * Ideally we'd ditch this by removing support for size and other custom values from Framer.
     */
    if (props.transformValues) {
        visualElement.reactStyle = props.transformValues(visualElement.reactStyle);
    }
}
/**
 * Add incoming MotionValues
 *
 * TODO: Type the VisualElements properly
 */
function addMotionValues(visualElement, prev, source, isStyle) {
    if (isStyle === void 0) { isStyle = false; }
    if (isStyle)
        visualElement.reactStyle = {};
    for (var key in source) {
        var value = source[key];
        var foundMotionValue = false;
        if (isMotionValue(value)) {
            // If this is a MotionValue, add it if it isn't a reserved key
            if (!reservedNames.has(key)) {
                visualElement.addValue(key, value);
                foundMotionValue = true;
            }
        }
        else if (isTransformProp(key) || isTransformOriginProp(key)) {
            // If this is a transform prop, always create a MotionValue
            // to ensure we can reconcile them all together.
            if (!visualElement.hasValue(key)) {
                visualElement.addValue(key, motionValue(value));
            }
            else if (value !== prev[key]) {
                // If the MotionValue already exists, update it with the
                // latest incoming value
                var motion = visualElement.getValue(key);
                motion.set(value);
            }
            foundMotionValue = true;
        }
        else if (isStyle) {
            visualElement.reactStyle[key] = value;
        }
        if (foundMotionValue)
            prev[key] = value;
    }
}
/**
 * These are props we accept as MotionValues but don't want to add
 * to the VisualElement
 */
var reservedNames = new Set([]);
var empty = function () { return ({}); };

var isCustomValue = function (v) {
    return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = function (v) {
    // TODO maybe throw if v.length - 1 is placeholder token?
    return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};

/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */
var isNumericalString = function (v) { return /^\-?\d*\.?\d+$/.test(v); };

/**
 * Get the current value of every `MotionValue` in a `VisualElement`
 */
var getCurrent = function (visualElement) {
    var current = {};
    visualElement.forEachValue(function (value, key) { return (current[key] = value.get()); });
    return current;
};
/**
 * Get the current velocity of every `MotionValue` in a `VisualElement`
 */
var getVelocity = function (visualElement) {
    var velocity = {};
    visualElement.forEachValue(function (value, key) { return (velocity[key] = value.getVelocity()); });
    return velocity;
};
/**
 * Check if value is a function that returns a `Target`. A generic typeof === 'function'
 * check, just helps with typing.
 */
var isTargetResolver = function (p) {
    return typeof p === "function";
};
/**
 * Check if value is a list of variant labels
 */
var isVariantLabels = function (v) { return Array.isArray(v); };
/**
 * Control animations for a single component
 *
 * @internal
 */
var VisualElementAnimationControls = /** @class */ (function () {
    function VisualElementAnimationControls(visualElement, _a) {
        var _this = this;
        var makeTargetAnimatable = _a.makeTargetAnimatable;
        /**
         * A reference to the component's latest props. We could probably ditch this in
         * favour to a reference to the `custom` prop now we don't send all props through
         * to target resolvers.
         */
        this.props = {};
        /**
         * The component's variants, as provided by `variants`
         */
        this.variants = {};
        /**
         * A set of values that we animate back to when a value is cleared of all overrides.
         */
        this.baseTarget = {};
        /**
         * A series of target overrides that we can animate to/from when overrides are set/cleared.
         */
        this.overrides = [];
        /**
         * A series of target overrides as they were originally resolved.
         */
        this.resolvedOverrides = [];
        /**
         * A Set of currently active override indexes
         */
        this.activeOverrides = new Set();
        /**
         * A Set of value keys that are currently animating.
         */
        this.isAnimating = new Set();
        /**
         * Check if the associated `VisualElement` has a key with the provided string.
         * Pre-bound to the class so we can provide directly to the `filter` in `checkForNewValues`.
         */
        this.hasValue = function (key) { return !_this.visualElement.hasValue(key); };
        this.visualElement = visualElement;
        this.makeTargetAnimatable = makeTargetAnimatable;
        this.visualElement.forEachValue(function (value, key) { return (_this.baseTarget[key] = value.get()); });
    }
    /**
     * Set the reference to the component's props.
     * @param props -
     */
    VisualElementAnimationControls.prototype.setProps = function (props) {
        this.props = props;
    };
    /**
     * Set the reference to the component's variants
     * @param variants -
     */
    VisualElementAnimationControls.prototype.setVariants = function (variants) {
        if (variants)
            this.variants = variants;
    };
    /**
     * Set the component's default transition
     * @param transition -
     */
    VisualElementAnimationControls.prototype.setDefaultTransition = function (transition) {
        if (transition)
            this.defaultTransition = transition;
    };
    /**
     * Set motion values without animation.
     *
     * @param definition -
     * @param isActive -
     */
    VisualElementAnimationControls.prototype.setValues = function (definition, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.isActive, isActive = _c === void 0 ? new Set() : _c, priority = _b.priority;
        var _d = this.resolveVariant(definition), target = _d.target, transitionEnd = _d.transitionEnd;
        target = this.transformValues(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, target), transitionEnd));
        for (var key in target) {
            if (isActive.has(key))
                return;
            isActive.add(key);
            if (target) {
                var targetValue = resolveFinalValueInKeyframes(target[key]);
                if (this.visualElement.hasValue(key)) {
                    var value = this.visualElement.getValue(key);
                    value && value.set(targetValue);
                }
                else {
                    this.visualElement.addValue(key, motionValue(targetValue));
                }
                if (!priority)
                    this.baseTarget[key] = targetValue;
            }
        }
    };
    /**
     * Allows `transformValues` to be set by a component that allows us to
     * transform the values in a given `Target`. This allows Framer Library
     * to extend Framer Motion to animate `Color` variables etc. Currently we have
     * to manually support these extended types here in Framer Motion.
     *
     * @param values -
     */
    VisualElementAnimationControls.prototype.transformValues = function (values) {
        var transformValues = this.props.transformValues;
        return transformValues ? transformValues(values) : values;
    };
    /**
     * Check a `Target` for new values we haven't animated yet, and add them
     * to the `MotionValueMap`.
     *
     * Currently there's functionality here that is DOM-specific, we should allow
     * this functionality to be injected by the factory that creates DOM-specific
     * components.
     *
     * @param target -
     */
    VisualElementAnimationControls.prototype.checkForNewValues = function (target) {
        var newValueKeys = Object.keys(target).filter(this.hasValue);
        var numNewValues = newValueKeys.length;
        if (!numNewValues)
            return;
        for (var i = 0; i < numNewValues; i++) {
            var key = newValueKeys[i];
            var targetValue = target[key];
            var value = null;
            // If this is a keyframes value, we can attempt to use the first value in the
            // array as that's going to be the first value of the animation anyway
            if (Array.isArray(targetValue)) {
                value = targetValue[0];
            }
            // If it isn't a keyframes or the first keyframes value was set as `null`, read the
            // value from the DOM. It might be worth investigating whether to check props (for SVG)
            // or props.style (for HTML) if the value exists there before attempting to read.
            if (value === null) {
                var readValue = this.visualElement.readNativeValue(key);
                value = readValue !== undefined ? readValue : target[key];
                Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(value !== null, "No initial value for \"" + key + "\" can be inferred. Ensure an initial value for \"" + key + "\" is defined on the component.");
            }
            if (typeof value === "string" && isNumericalString(value)) {
                // If this is a number read as a string, ie "0" or "200", convert it to a number
                value = parseFloat(value);
            }
            else if (!findValueType(value) && style_value_types__WEBPACK_IMPORTED_MODULE_4__["complex"].test(targetValue)) {
                // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
                value = style_value_types__WEBPACK_IMPORTED_MODULE_4__["complex"].getAnimatableNone(targetValue);
            }
            this.visualElement.addValue(key, motionValue(value));
            this.baseTarget[key] = value;
        }
    };
    /**
     * Resolve a variant from its label or resolver into an actual `Target` we can animate to.
     * @param variant -
     */
    VisualElementAnimationControls.prototype.resolveVariant = function (variant, _a) {
        var custom = (_a === void 0 ? {} : _a).custom;
        if (!variant) {
            return {
                target: undefined,
                transition: undefined,
                transitionEnd: undefined,
            };
        }
        if (isTargetResolver(variant)) {
            // resolve current and velocity
            variant = variant(custom !== null && custom !== void 0 ? custom : this.props.custom, getCurrent(this.visualElement), getVelocity(this.visualElement));
        }
        var _b = variant.transition, transition = _b === void 0 ? this.defaultTransition : _b, transitionEnd = variant.transitionEnd, target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(variant, ["transition", "transitionEnd"]);
        return { transition: transition, transitionEnd: transitionEnd, target: target };
    };
    /**
     * Get the highest active override priority index
     */
    VisualElementAnimationControls.prototype.getHighestPriority = function () {
        if (!this.activeOverrides.size)
            return 0;
        return Math.max.apply(Math, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(Array.from(this.activeOverrides)));
    };
    /**
     * Set an override. We add this layer of indirection so if, for instance, a tap gesture
     * starts and overrides a hover gesture, when we clear the tap gesture and fallback to the
     * hover gesture, if that hover gesture has changed in the meantime we can go to that rather
     * than the one that was resolved when the hover gesture animation started.
     *
     * @param definition -
     * @param overrideIndex -
     */
    VisualElementAnimationControls.prototype.setOverride = function (definition, overrideIndex) {
        this.overrides[overrideIndex] = definition;
        if (this.children) {
            this.children.forEach(function (child) {
                return child.setOverride(definition, overrideIndex);
            });
        }
    };
    /**
     * Start an override animation.
     * @param overrideIndex -
     */
    VisualElementAnimationControls.prototype.startOverride = function (overrideIndex) {
        var override = this.overrides[overrideIndex];
        if (override) {
            return this.start(override, { priority: overrideIndex });
        }
    };
    /**
     * Clear an override. We check every value we animated to in this override to see if
     * its present on any lower-priority overrides. If not, we animate it back to its base target.
     * @param overrideIndex -
     */
    VisualElementAnimationControls.prototype.clearOverride = function (overrideIndex) {
        var _this = this;
        if (this.children) {
            this.children.forEach(function (child) { return child.clearOverride(overrideIndex); });
        }
        var override = this.overrides[overrideIndex];
        if (!override)
            return;
        this.activeOverrides.delete(overrideIndex);
        var highest = this.getHighestPriority();
        this.resetIsAnimating();
        if (highest) {
            var highestOverride = this.overrides[highest];
            highestOverride && this.startOverride(highest);
        }
        // Figure out which remaining values were affected by the override and animate those
        var overrideTarget = this.resolvedOverrides[overrideIndex];
        if (!overrideTarget)
            return;
        var remainingValues = {};
        for (var key in this.baseTarget) {
            if (overrideTarget[key] !== undefined) {
                remainingValues[key] = this.baseTarget[key];
            }
        }
        this.onStart();
        this.animate(remainingValues).then(function () { return _this.onComplete(); });
    };
    /**
     * Apply a target/variant without any animation
     */
    VisualElementAnimationControls.prototype.apply = function (definition) {
        if (Array.isArray(definition)) {
            return this.applyVariantLabels(definition);
        }
        else if (typeof definition === "string") {
            return this.applyVariantLabels([definition]);
        }
        else {
            this.setValues(definition);
        }
    };
    /**
     * Apply variant labels without animation
     */
    VisualElementAnimationControls.prototype.applyVariantLabels = function (variantLabelList) {
        var _this = this;
        var isActive = new Set();
        var reversedList = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(variantLabelList).reverse();
        reversedList.forEach(function (key) {
            var _a = _this.resolveVariant(_this.variants[key]), target = _a.target, transitionEnd = _a.transitionEnd;
            if (transitionEnd) {
                _this.setValues(transitionEnd, { isActive: isActive });
            }
            if (target) {
                _this.setValues(target, { isActive: isActive });
            }
            if (_this.children && _this.children.size) {
                _this.children.forEach(function (child) {
                    return child.applyVariantLabels(variantLabelList);
                });
            }
        });
    };
    VisualElementAnimationControls.prototype.start = function (definition, opts) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        if (opts.priority) {
            this.activeOverrides.add(opts.priority);
        }
        this.resetIsAnimating(opts.priority);
        var animation;
        if (isVariantLabels(definition)) {
            animation = this.animateVariantLabels(definition, opts);
        }
        else if (typeof definition === "string") {
            animation = this.animateVariant(definition, opts);
        }
        else {
            animation = this.animate(definition, opts);
        }
        this.onStart();
        return animation.then(function () { return _this.onComplete(); });
    };
    VisualElementAnimationControls.prototype.animate = function (animationDefinition, _a) {
        var _this = this;
        if (_a === void 0) { _a = {}; }
        var _b = _a.delay, delay = _b === void 0 ? 0 : _b, _c = _a.priority, priority = _c === void 0 ? 0 : _c, transitionOverride = _a.transitionOverride, opts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["delay", "priority", "transitionOverride"]);
        var _d = this.resolveVariant(animationDefinition, opts), target = _d.target, transition = _d.transition, transitionEnd = _d.transitionEnd;
        if (transitionOverride) {
            transition = transitionOverride;
        }
        if (!target)
            return Promise.resolve();
        target = this.transformValues(target);
        if (transitionEnd) {
            transitionEnd = this.transformValues(transitionEnd);
        }
        this.checkForNewValues(target);
        var origin = this.transformValues(getOrigin(target, transition, this.visualElement));
        if (this.makeTargetAnimatable) {
            var animatable = this.makeTargetAnimatable(this.visualElement, target, origin, transitionEnd);
            target = animatable.target;
            transitionEnd = animatable.transitionEnd;
        }
        if (priority) {
            this.resolvedOverrides[priority] = target;
        }
        this.checkForNewValues(target);
        var animations = [];
        for (var key in target) {
            var value = this.visualElement.getValue(key);
            if (!value || !target || target[key] === undefined)
                continue;
            var valueTarget = target[key];
            if (!priority) {
                this.baseTarget[key] = resolveFinalValueInKeyframes(valueTarget);
            }
            if (this.isAnimating.has(key))
                continue;
            this.isAnimating.add(key);
            animations.push(startAnimation(key, value, valueTarget, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ delay: delay }, transition)));
        }
        var allAnimations = Promise.all(animations);
        return transitionEnd
            ? allAnimations.then(function () {
                _this.setValues(transitionEnd, { priority: priority });
            })
            : allAnimations;
    };
    VisualElementAnimationControls.prototype.animateVariantLabels = function (variantLabels, opts) {
        var _this = this;
        var animations = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(variantLabels).reverse()
            .map(function (label) { return _this.animateVariant(label, opts); });
        return Promise.all(animations);
    };
    VisualElementAnimationControls.prototype.animateVariant = function (variantLabel, opts) {
        var _this = this;
        var priority = (opts && opts.priority) || 0;
        var variant = this.variants[variantLabel];
        var transition = variant
            ? this.resolveVariant(variant, opts).transition || {}
            : {};
        /**
         * If we have a variant, create a callback that runs it as an animation.
         * Otherwise, we resolve a Promise immediately for a composable no-op.
         */
        var getAnimation = variant
            ? function () { return _this.animate(variant, opts); }
            : function () { return Promise.resolve(); };
        /**
         * If we have children, create a callback that runs all their animations.
         * Otherwise, we resolve a Promise immediately for a composable no-op.
         */
        var getChildrenAnimations = this.children
            ? function (forwardDelay) {
                if (forwardDelay === void 0) { forwardDelay = 0; }
                var _a = transition.delayChildren, delayChildren = _a === void 0 ? 0 : _a;
                return _this.animateChildren(variantLabel, delayChildren + forwardDelay, transition.staggerChildren, transition.staggerDirection, priority, opts === null || opts === void 0 ? void 0 : opts.custom);
            }
            : function () { return Promise.resolve(); };
        /**
         * If the transition explicitly defines a "when" option, we need to resolve either
         * this animation or all children animations before playing the other.
         */
        var when = transition.when;
        if (when) {
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(when === "beforeChildren"
                ? [getAnimation, getChildrenAnimations]
                : [getChildrenAnimations, getAnimation], 2), first = _a[0], last = _a[1];
            return first().then(last);
        }
        else {
            return Promise.all([
                getAnimation(),
                getChildrenAnimations(opts === null || opts === void 0 ? void 0 : opts.delay),
            ]);
        }
    };
    VisualElementAnimationControls.prototype.animateChildren = function (variantLabel, delayChildren, staggerChildren, staggerDirection, priority, custom) {
        if (delayChildren === void 0) { delayChildren = 0; }
        if (staggerChildren === void 0) { staggerChildren = 0; }
        if (staggerDirection === void 0) { staggerDirection = 1; }
        if (priority === void 0) { priority = 0; }
        if (!this.children) {
            return Promise.resolve();
        }
        var animations = [];
        var maxStaggerDuration = (this.children.size - 1) * staggerChildren;
        var generateStaggerDuration = staggerDirection === 1
            ? function (i) { return i * staggerChildren; }
            : function (i) { return maxStaggerDuration - i * staggerChildren; };
        Array.from(this.children).forEach(function (childControls, i) {
            var animation = childControls.animateVariant(variantLabel, {
                priority: priority,
                delay: delayChildren + generateStaggerDuration(i),
                custom: custom,
            });
            animations.push(animation);
        });
        return Promise.all(animations);
    };
    VisualElementAnimationControls.prototype.onStart = function () {
        var onAnimationStart = this.props.onAnimationStart;
        onAnimationStart && onAnimationStart();
    };
    VisualElementAnimationControls.prototype.onComplete = function () {
        var onAnimationComplete = this.props.onAnimationComplete;
        onAnimationComplete && onAnimationComplete();
    };
    VisualElementAnimationControls.prototype.checkOverrideIsAnimating = function (priority) {
        var numOverrides = this.overrides.length;
        for (var i = priority + 1; i < numOverrides; i++) {
            var resolvedOverride = this.resolvedOverrides[i];
            if (resolvedOverride) {
                for (var key in resolvedOverride) {
                    this.isAnimating.add(key);
                }
            }
        }
    };
    VisualElementAnimationControls.prototype.resetIsAnimating = function (priority) {
        if (priority === void 0) { priority = 0; }
        this.isAnimating.clear();
        // If this isn't the highest priority gesture, block the animation
        // of anything that's currently being animated
        if (priority < this.getHighestPriority()) {
            this.checkOverrideIsAnimating(priority);
        }
        if (this.children) {
            this.children.forEach(function (child) { return child.resetIsAnimating(priority); });
        }
    };
    VisualElementAnimationControls.prototype.stop = function () {
        this.visualElement.forEachValue(function (value) { return value.stop(); });
    };
    /**
     * Add the controls of a child component.
     * @param controls -
     */
    VisualElementAnimationControls.prototype.addChild = function (controls) {
        if (!this.children) {
            this.children = new Set();
        }
        this.children.add(controls);
        // We set child overrides when `setOverride` is called, but also have to do it here
        // as the first time `setOverride` is called all the children might not have been added yet.
        this.overrides.forEach(function (override, i) {
            override && controls.setOverride(override, i);
        });
    };
    VisualElementAnimationControls.prototype.removeChild = function (controls) {
        if (!this.children) {
            return;
        }
        this.children.delete(controls);
    };
    VisualElementAnimationControls.prototype.resetChildren = function () {
        if (this.children)
            this.children.clear();
    };
    return VisualElementAnimationControls;
}());
function getOriginFromTransition(key, transition) {
    if (!transition)
        return;
    var valueTransition = transition[key] || transition["default"] || transition;
    return valueTransition.from;
}
function getOrigin(target, transition, visualElement) {
    var _a, _b;
    var origin = {};
    for (var key in target) {
        origin[key] = (_a = getOriginFromTransition(key, transition)) !== null && _a !== void 0 ? _a : (_b = visualElement.getValue(key)) === null || _b === void 0 ? void 0 : _b.get();
    }
    return origin;
}

/**
 * Creates an imperative set of controls to trigger animations.
 *
 * This allows a consolidated, uniform API for animations, to be triggered by other APIs like the `animate` prop, or the gesture handlers.
 *
 * @internal
 */
function useVisualElementAnimation(visualElement, props, config) {
    var subscribeToParentControls = checkShouldInheritVariant(props);
    var variants = props.variants, transition = props.transition;
    var parentControls = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(MotionContext).controls;
    var presenceContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(PresenceContext);
    var controls = useConstant(function () { return new VisualElementAnimationControls(visualElement, config); });
    // Reset and resubscribe children every render to ensure stagger order is correct
    if (!presenceContext || presenceContext.isPresent) {
        controls.resetChildren();
        controls.setProps(props);
        controls.setVariants(variants);
        controls.setDefaultTransition(transition);
    }
    // We have to subscribe to the parent controls within a useEffect rather than during render,
    // as
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        if (subscribeToParentControls && parentControls) {
            parentControls.addChild(controls);
        }
    });
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        return function () {
            // Remove reference to onAnimationComplete from controls. All the MotionValues
            // are unsubscribed from this component separately. We let animations run out
            // as they might be animating other components.
            var onAnimationComplete = props.onAnimationComplete, unmountProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(props, ["onAnimationComplete"]);
            controls.setProps(unmountProps);
            parentControls && parentControls.removeChild(controls);
        };
    }, []);
    return controls;
}

/**
 * @public
 */
var MotionConfigContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["createContext"])({
    transformPagePoint: function (p) { return p; },
    features: [],
});
/**
 * MotionConfig can be used in combination with the `m` component to cut bundle size
 * and dynamically load only the features you use.
 *
 * ```jsx
 * import {
 *   m as motion,
 *   AnimationFeature,
 *   MotionConfig
 * } from "framer-motion"
 *
 * export function App() {
 *   return (
 *     <MotionConfig features={[AnimationFeature]}>
 *       <motion.div animate={{ x: 100 }} />
 *     </MotionConfig>
 *   )
 * }
 * ```
 *
 * @public
 */
function MotionConfig(_a) {
    var children = _a.children, _b = _a.features, features = _b === void 0 ? [] : _b, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["children", "features"]);
    var pluginContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(MotionConfigContext);
    var loadedFeatures = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(pluginContext.features, features);
    // We do want to rerender children when the number of loaded features changes
    var value = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () { return ({ features: loadedFeatures }); }, [
        loadedFeatures.length,
    ]);
    // Mutative to prevent triggering rerenders in all listening
    // components every time this component renders
    for (var key in props) {
        value[key] = props[key];
    }
    return (Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(MotionConfigContext.Provider, { value: value }, children));
}

/**
 * Load features via renderless components based on the provided MotionProps
 */
function useFeatures(defaultFeatures, isStatic, visualElement, controls, props, context, parentContext, shouldInheritVariant) {
    var plugins = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(MotionConfigContext);
    // If this is a static component, or we're rendering on the server, we don't load
    // any feature components
    if (isStatic || typeof window === "undefined")
        return null;
    var allFeatures = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(defaultFeatures, plugins.features);
    var numFeatures = allFeatures.length;
    var features = [];
    // Decide which features we should render and add them to the returned array
    for (var i = 0; i < numFeatures; i++) {
        var _a = allFeatures[i], shouldRender = _a.shouldRender, key = _a.key, getComponent = _a.getComponent;
        if (shouldRender(props, parentContext)) {
            var Component = getComponent(props);
            Component &&
                features.push(Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ key: key }, props, { localContext: context, parentContext: parentContext, visualElement: visualElement, controls: controls, inherit: shouldInheritVariant })));
        }
    }
    return features;
}

var Presence;
(function (Presence) {
    Presence[Presence["Entering"] = 0] = "Entering";
    Presence[Presence["Present"] = 1] = "Present";
    Presence[Presence["Exiting"] = 2] = "Exiting";
})(Presence || (Presence = {}));
var VisibilityAction;
(function (VisibilityAction) {
    VisibilityAction[VisibilityAction["Hide"] = 0] = "Hide";
    VisibilityAction[VisibilityAction["Show"] = 1] = "Show";
})(VisibilityAction || (VisibilityAction = {}));

/**
 * Default handlers for batching VisualElements
 */
var defaultHandler = {
    measureLayout: function (child) { return child.measureLayout(); },
    layoutReady: function (child) { return child.layoutReady(); },
};
/**
 * Sort VisualElements by tree depth, so we process the highest elements first.
 */
var sortByDepth = function (a, b) {
    return a.depth - b.depth;
};
/**
 * Create a batcher to process VisualElements
 */
function createBatcher() {
    var queue = new Set();
    var add = function (child) { return queue.add(child); };
    var flush = function (_a) {
        var _b = _a === void 0 ? defaultHandler : _a, measureLayout = _b.measureLayout, layoutReady = _b.layoutReady;
        var order = Array.from(queue).sort(sortByDepth);
        /**
         * Write: Reset any transforms on children elements so we can read their actual layout
         */
        order.forEach(function (child) { return child.resetTransform(); });
        /**
         * Read: Measure the actual layout
         */
        order.forEach(measureLayout);
        /**
         * Write: Notify the VisualElements they're ready for further write operations.
         */
        order.forEach(layoutReady);
        /**
         * After all children have started animating, ensure any Entering components are set to Present.
         * If we add deferred animations (set up all animations and then start them in two loops) this
         * could be moved to the start loop. But it needs to happen after all the animations configs
         * are generated in AnimateSharedLayout as this relies on presence data
         */
        order.forEach(function (child) {
            if (child.isPresent)
                child.presence = Presence.Present;
        });
        queue.clear();
    };
    return { add: add, flush: flush };
}
function isSharedLayout(context) {
    return !!context.forceUpdate;
}
var SharedLayoutContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["createContext"])(createBatcher());

var isBrowser = typeof window !== "undefined";
var useIsomorphicLayoutEffect = isBrowser ? react__WEBPACK_IMPORTED_MODULE_5__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_5__["useEffect"];

function useSnapshotOnUnmount(visualElement) {
    var syncLayout = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(SharedLayoutContext);
    useIsomorphicLayoutEffect(function () { return function () {
        if (isSharedLayout(syncLayout)) {
            syncLayout.remove(visualElement);
        }
    }; }, []);
}

/**
 * Create a `motion` component.
 *
 * This function accepts a Component argument, which can be either a string (ie "div"
 * for `motion.div`), or an actual React component.
 *
 * Alongside this is a config option which provides a way of rendering the provided
 * component "offline", or outside the React render cycle.
 *
 * @internal
 */
function createMotionComponent(Component, _a) {
    var defaultFeatures = _a.defaultFeatures, useVisualElement = _a.useVisualElement, render = _a.render, animationControlsConfig = _a.animationControlsConfig;
    function MotionComponent(props, externalRef) {
        var parentContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(MotionContext);
        var shouldInheritVariant = checkShouldInheritVariant(props);
        /**
         * If a component isStatic, we only visually update it as a
         * result of a React re-render, rather than any interactions or animations.
         * If this component or any ancestor isStatic, we disable hardware acceleration
         * and don't load any additional functionality.
         */
        var isStatic = parentContext.static || props.static || false;
        /**
         * Create a VisualElement for this component. A VisualElement provides a common
         * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
         * providing a way of rendering to these APIs outside of the React render loop
         * for more performant animations and interactions
         */
        var visualElement = useVisualElement(Component, props, parentContext.visualElement, isStatic, externalRef);
        /**
         * Scrape MotionValues from props and add/remove them to/from
         * the VisualElement as necessary.
         */
        useMotionValues(visualElement, props);
        /**
         * Create animation controls for the VisualElement. It might be
         * interesting to try and combine this with VisualElement itself in a further refactor.
         */
        var controls = useVisualElementAnimation(visualElement, props, animationControlsConfig);
        /**
         * Build the MotionContext to pass on to the next `motion` component.
         */
        var context = useMotionContext(parentContext, controls, visualElement, isStatic, props);
        /**
         * Load features as renderless components unless the component isStatic
         */
        var features = useFeatures(defaultFeatures, isStatic, visualElement, controls, props, context, parentContext, shouldInheritVariant);
        var component = render(Component, props, visualElement);
        /**
         *
         */
        useSnapshotOnUnmount(visualElement);
        // The mount order and hierarchy is specific to ensure our element ref is hydrated by the time
        // all plugins and features has to execute.
        return (Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null,
            Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(MotionContext.Provider, { value: context }, component),
            features));
    }
    return Object(react__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(MotionComponent);
}

function createLock(name) {
    var lock = null;
    return function () {
        var openLock = function () {
            lock = null;
        };
        if (lock === null) {
            lock = name;
            return openLock;
        }
        return false;
    };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag) {
    var lock = false;
    if (drag === "y") {
        lock = globalVerticalLock();
    }
    else if (drag === "x") {
        lock = globalHorizontalLock();
    }
    else {
        var openHorizontal_1 = globalHorizontalLock();
        var openVertical_1 = globalVerticalLock();
        if (openHorizontal_1 && openVertical_1) {
            lock = function () {
                openHorizontal_1();
                openVertical_1();
            };
        }
        else {
            // Release the locks because we don't use them
            if (openHorizontal_1)
                openHorizontal_1();
            if (openVertical_1)
                openVertical_1();
        }
    }
    return lock;
}

var isViewportScrollBlocked = false;
var isBrowser$1 = typeof window !== "undefined";
if (isBrowser$1) {
    document.addEventListener("touchmove", function (event) {
        if (isViewportScrollBlocked) {
            event.preventDefault();
        }
    }, { passive: false });
}
var blockViewportScroll = function () { return (isViewportScrollBlocked = true); };
var unblockViewportScroll = function () { return (isViewportScrollBlocked = false); };

function addDomEvent(target, eventName, handler, options) {
    if (!handler)
        return;
    target.addEventListener(eventName, handler, options);
    return function () { return target.removeEventListener(eventName, handler, options); };
}
/**
 * Attaches an event listener directly to the provided DOM element.
 *
 * Bypassing React's event system can be desirable, for instance when attaching non-passive
 * event handlers.
 *
 * ```jsx
 * const ref = useRef(null)
 *
 * useDomEvent(ref, 'wheel', onWheel, { passive: false })
 *
 * return <div ref={ref} />
 * ```
 *
 * @param ref - React.RefObject that's been provided to the element you want to bind the listener to.
 * @param eventName - Name of the event you want listen for.
 * @param handler - Function to fire when receiving the event.
 * @param options - Options to pass to `Event.addEventListener`.
 *
 * @public
 */
function useDomEvent(ref, eventName, handler, options) {
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        var element = ref.current;
        if (handler && element) {
            return addDomEvent(element, eventName, handler, options);
        }
    }, [ref, eventName, handler, options]);
}

function isMouseEvent(event) {
    // PointerEvent inherits from MouseEvent so we can't use a straight instanceof check.
    if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) {
        return !!(event.pointerType === "mouse");
    }
    return event instanceof MouseEvent;
}
function isTouchEvent(event) {
    var hasTouches = !!event.touches;
    return hasTouches;
}

/**
 * Filters out events not attached to the primary pointer (currently left mouse button)
 * @param eventHandler
 */
function filterPrimaryPointer(eventHandler) {
    if (!eventHandler)
        return undefined;
    return function (event) {
        var isMouseEvent = event instanceof MouseEvent;
        var isPrimaryPointer = !isMouseEvent ||
            (isMouseEvent && event.button === 0);
        if (isPrimaryPointer) {
            eventHandler(event);
        }
    };
}
var defaultPagePoint = { pageX: 0, pageY: 0 };
function pointFromTouch(e, pointType) {
    if (pointType === void 0) { pointType = "page"; }
    var primaryTouch = e.touches[0] || e.changedTouches[0];
    var point = primaryTouch || defaultPagePoint;
    return {
        x: point[pointType + "X"],
        y: point[pointType + "Y"],
    };
}
function pointFromMouse(point, pointType) {
    if (pointType === void 0) { pointType = "page"; }
    return {
        x: point[pointType + "X"],
        y: point[pointType + "Y"],
    };
}
function extractEventInfo(event, pointType) {
    if (pointType === void 0) { pointType = "page"; }
    return {
        point: isTouchEvent(event)
            ? pointFromTouch(event, pointType)
            : pointFromMouse(event, pointType),
    };
}
function getViewportPointFromEvent(event) {
    return extractEventInfo(event, "client");
}
var wrapHandler = function (handler, shouldFilterPrimaryPointer) {
    if (shouldFilterPrimaryPointer === void 0) { shouldFilterPrimaryPointer = false; }
    if (!handler)
        return;
    var listener = function (event) { return handler(event, extractEventInfo(event)); };
    return shouldFilterPrimaryPointer
        ? filterPrimaryPointer(listener)
        : listener;
};

var isBrowser$2 = typeof window !== "undefined";
// We check for event support via functions in case they've been mocked by a testing suite.
var supportsPointerEvents = function () {
    return isBrowser$2 && window.onpointerdown === null;
};
var supportsTouchEvents = function () {
    return isBrowser$2 && window.ontouchstart === null;
};
var supportsMouseEvents = function () {
    return isBrowser$2 && window.onmousedown === null;
};

var mouseEventNames = {
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointercancel: "mousecancel",
    pointerover: "mouseover",
    pointerout: "mouseout",
    pointerenter: "mouseenter",
    pointerleave: "mouseleave",
};
var touchEventNames = {
    pointerdown: "touchstart",
    pointermove: "touchmove",
    pointerup: "touchend",
    pointercancel: "touchcancel",
};
function getPointerEventName(name) {
    if (supportsPointerEvents()) {
        return name;
    }
    else if (supportsTouchEvents()) {
        return touchEventNames[name];
    }
    else if (supportsMouseEvents()) {
        return mouseEventNames[name];
    }
    return name;
}
function addPointerEvent(target, eventName, handler, options) {
    return addDomEvent(target, getPointerEventName(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
}
function usePointerEvent(ref, eventName, handler, options) {
    return useDomEvent(ref, getPointerEventName(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
}

/** @public */
var Point;
(function (Point) {
    /** @beta */
    Point.subtract = function (a, b) {
        return { x: a.x - b.x, y: a.y - b.y };
    };
    /** @beta */
    Point.relativeTo = function (idOrElem) {
        var elem;
        var getElem = function () {
            // Caching element here could be leaky because of React lifecycle
            if (elem !== undefined)
                return elem;
            if (typeof idOrElem === "string") {
                elem = document.getElementById(idOrElem);
            }
            else {
                elem = idOrElem;
            }
            return elem;
        };
        return function (_a) {
            var x = _a.x, y = _a.y;
            var localElem = getElem();
            if (!localElem)
                return undefined;
            var rect = localElem.getBoundingClientRect();
            return {
                x: x - rect.left - window.scrollX,
                y: y - rect.top - window.scrollY,
            };
        };
    };
})(Point || (Point = {}));

/**
 * @internal
 */
var PanSession = /** @class */ (function () {
    function PanSession(event, handlers, _a) {
        var _this = this;
        var transformPagePoint = (_a === void 0 ? {} : _a).transformPagePoint;
        /**
         * @internal
         */
        this.startEvent = null;
        /**
         * @internal
         */
        this.lastMoveEvent = null;
        /**
         * @internal
         */
        this.lastMoveEventInfo = null;
        /**
         * @internal
         */
        this.handlers = {};
        this.updatePoint = function () {
            if (!(_this.lastMoveEvent && _this.lastMoveEventInfo))
                return;
            var info = getPanInfo(_this.lastMoveEventInfo, _this.history);
            var isPanStarted = _this.startEvent !== null;
            // Only start panning if the offset is larger than 3 pixels. If we make it
            // any larger than this we'll want to reset the pointer history
            // on the first update to avoid visual snapping to the cursoe.
            var isDistancePastThreshold = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["distance"])(info.offset, { x: 0, y: 0 }) >= 3;
            if (!isPanStarted && !isDistancePastThreshold)
                return;
            var point = info.point;
            var timestamp = Object(framesync__WEBPACK_IMPORTED_MODULE_1__["getFrameData"])().timestamp;
            _this.history.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, point), { timestamp: timestamp }));
            var _a = _this.handlers, onStart = _a.onStart, onMove = _a.onMove;
            if (!isPanStarted) {
                onStart && onStart(_this.lastMoveEvent, info);
                _this.startEvent = _this.lastMoveEvent;
            }
            onMove && onMove(_this.lastMoveEvent, info);
        };
        // If we have more than one touch, don't start detecting this gesture
        if (isTouchEvent(event) && event.touches.length > 1)
            return;
        this.handlers = handlers;
        this.transformPagePoint = transformPagePoint;
        var info = extractEventInfo(event);
        var initialInfo = transformPoint(info, this.transformPagePoint);
        var point = initialInfo.point;
        var timestamp = Object(framesync__WEBPACK_IMPORTED_MODULE_1__["getFrameData"])().timestamp;
        this.history = [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, point), { timestamp: timestamp })];
        var onSessionStart = handlers.onSessionStart;
        onSessionStart &&
            onSessionStart(event, getPanInfo(initialInfo, this.history));
        var removeOnPointerMove = addPointerEvent(window, "pointermove", function (event, info) { return _this.handlePointerMove(event, info); });
        var removeOnPointerUp = addPointerEvent(window, "pointerup", function (event, info) { return _this.handlePointerUp(event, info); });
        this.removeListeners = function () {
            removeOnPointerMove && removeOnPointerMove();
            removeOnPointerUp && removeOnPointerUp();
        };
    }
    PanSession.prototype.handlePointerMove = function (event, info) {
        this.lastMoveEvent = event;
        this.lastMoveEventInfo = transformPoint(info, this.transformPagePoint);
        // Because Safari doesn't trigger mouseup events when it's above a `<select>`
        if (isMouseEvent(event) && event.buttons === 0) {
            this.handlePointerUp(event, info);
            return;
        }
        // Throttle mouse move event to once per frame
        framesync__WEBPACK_IMPORTED_MODULE_1__["default"].update(this.updatePoint, true);
    };
    PanSession.prototype.handlePointerUp = function (event, info) {
        this.end();
        var onEnd = this.handlers.onEnd;
        if (!onEnd)
            return;
        var panInfo = getPanInfo(transformPoint(info, this.transformPagePoint), this.history);
        onEnd && onEnd(event, panInfo);
    };
    PanSession.prototype.updateHandlers = function (handlers) {
        this.handlers = handlers;
    };
    PanSession.prototype.end = function () {
        this.removeListeners && this.removeListeners();
        framesync__WEBPACK_IMPORTED_MODULE_1__["cancelSync"].update(this.updatePoint);
        unblockViewportScroll();
    };
    return PanSession;
}());
function transformPoint(info, transformPagePoint) {
    return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function getPanInfo(_a, history) {
    var point = _a.point;
    return {
        point: point,
        delta: Point.subtract(point, lastDevicePoint(history)),
        offset: Point.subtract(point, startDevicePoint(history)),
        velocity: getVelocity$1(history, 0.1),
    };
}
function startDevicePoint(history) {
    return history[0];
}
function lastDevicePoint(history) {
    return history[history.length - 1];
}
function getVelocity$1(history, timeDelta) {
    if (history.length < 2) {
        return { x: 0, y: 0 };
    }
    var i = history.length - 1;
    var timestampedPoint = null;
    var lastPoint = lastDevicePoint(history);
    while (i >= 0) {
        timestampedPoint = history[i];
        if (lastPoint.timestamp - timestampedPoint.timestamp >
            secondsToMilliseconds(timeDelta)) {
            break;
        }
        i--;
    }
    if (!timestampedPoint) {
        return { x: 0, y: 0 };
    }
    var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1000;
    if (time === 0) {
        return { x: 0, y: 0 };
    }
    var currentVelocity = {
        x: (lastPoint.x - timestampedPoint.x) / time,
        y: (lastPoint.y - timestampedPoint.y) / time,
    };
    if (currentVelocity.x === Infinity) {
        currentVelocity.x = 0;
    }
    if (currentVelocity.y === Infinity) {
        currentVelocity.y = 0;
    }
    return currentVelocity;
}

/**
 * Apply constraints to a point. These constraints are both physical along an
 * axis, and an elastic factor that determines how much to constrain the point
 * by if it does lie outside the defined parameters.
 */
function applyConstraints(point, _a, elastic) {
    var min = _a.min, max = _a.max;
    if (min !== undefined && point < min) {
        // If we have a min point defined, and this is outside of that, constrain
        point = elastic ? Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(min, point, elastic) : Math.max(point, min);
    }
    else if (max !== undefined && point > max) {
        // If we have a max point defined, and this is outside of that, constrain
        point = elastic ? Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(max, point, elastic) : Math.min(point, max);
    }
    return point;
}
/**
 * Calculates a min projection point based on a pointer, pointer progress
 * within the drag target, and constraints.
 *
 * For instance if an element was 100px width, we were dragging from 0.25
 * along this axis, the pointer is at 200px, and there were no constraints,
 * we would calculate a min projection point of 175px.
 */
function calcConstrainedMinPoint(point, length, progress, constraints, elastic) {
    // Calculate a min point for this axis and apply it to the current pointer
    var min = point - length * progress;
    return constraints ? applyConstraints(min, constraints, elastic) : min;
}
/**
 * Calculate constraints in terms of the viewport when defined relatively to the
 * measured axis. This is measured from the nearest edge, so a max constraint of 200
 * on an axis with a max value of 300 would return a constraint of 500 - axis length
 */
function calcRelativeAxisConstraints(axis, min, max) {
    return {
        min: min !== undefined ? axis.min + min : undefined,
        max: max !== undefined
            ? axis.max + max - (axis.max - axis.min)
            : undefined,
    };
}
/**
 * Calculate constraints in terms of the viewport when
 * defined relatively to the measured bounding box.
 */
function calcRelativeConstraints(layoutBox, _a) {
    var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
    return {
        x: calcRelativeAxisConstraints(layoutBox.x, left, right),
        y: calcRelativeAxisConstraints(layoutBox.y, top, bottom),
    };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative axis
 */
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
    var _a;
    var min = constraintsAxis.min - layoutAxis.min;
    var max = constraintsAxis.max - layoutAxis.max;
    // If the constraints axis is actually smaller than the layout axis then we can
    // flip the constraints
    if (constraintsAxis.max - constraintsAxis.min <
        layoutAxis.max - layoutAxis.min) {
        _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])([max, min], 2), min = _a[0], max = _a[1];
    }
    return {
        min: layoutAxis.min + min,
        max: layoutAxis.min + max,
    };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative box
 */
function calcViewportConstraints(layoutBox, constraintsBox) {
    return {
        x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
        y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y),
    };
}
/**
 * Calculate the an axis position based on two axes and a progress value.
 */
function calcPositionFromProgress(axis, constraints, progress) {
    var axisLength = axis.max - axis.min;
    var min = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(constraints.min, constraints.max - axisLength, progress);
    return { min: min, max: min + axisLength };
}
/**
 * Rebase the calculated viewport constraints relative to the layout.min point.
 */
function rebaseAxisConstraints(layout, constraints) {
    var relativeConstraints = {};
    if (constraints.min !== undefined) {
        relativeConstraints.min = constraints.min - layout.min;
    }
    if (constraints.max !== undefined) {
        relativeConstraints.max = constraints.max - layout.min;
    }
    return relativeConstraints;
}

var elementDragControls = new WeakMap();
/**
 *
 */
var lastPointerEvent;
var VisualElementDragControls = /** @class */ (function () {
    function VisualElementDragControls(_a) {
        var visualElement = _a.visualElement;
        /**
         * Track whether we're currently dragging.
         *
         * @internal
         */
        this.isDragging = false;
        /**
         * The current direction of drag, or `null` if both.
         *
         * @internal
         */
        this.currentDirection = null;
        /**
         * The permitted boundaries of travel, in pixels.
         *
         * @internal
         */
        this.constraints = false;
        /**
         * A reference to the host component's latest props.
         *
         * @internal
         */
        this.props = {};
        /**
         * Track the initial position of the cursor relative to the dragging element
         * when dragging starts as a value of 0-1 on each axis. We then use this to calculate
         * an ideal bounding box for the VisualElement renderer to project into every frame.
         *
         * @internal
         */
        this.cursorProgress = {
            x: 0.5,
            y: 0.5,
        };
        // When updating _dragX, or _dragY instead of the VisualElement,
        // persist their values between drag gestures.
        this.originPoint = {};
        // This is a reference to the global drag gesture lock, ensuring only one component
        // can "capture" the drag of one or both axes.
        // TODO: Look into moving this into pansession?
        this.openGlobalLock = null;
        /**
         * @internal
         */
        this.panSession = null;
        this.visualElement = visualElement;
        this.visualElement.enableLayoutProjection();
        elementDragControls.set(visualElement, this);
    }
    /**
     * Instantiate a PanSession for the drag gesture
     *
     * @public
     */
    VisualElementDragControls.prototype.start = function (originEvent, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, _c = _b.snapToCursor, snapToCursor = _c === void 0 ? false : _c, cursorProgress = _b.cursorProgress;
        /**
         * If this drag session has been manually triggered by the user, it might be from an event
         * outside the draggable element. If snapToCursor is set to true, we need to measure the position
         * of the element and snap it to the cursor.
         */
        snapToCursor && this.snapToCursor(originEvent);
        var onSessionStart = function () {
            // Initiate viewport scroll blocking on touch start. This is a very aggressive approach
            // which has come out of the difficulty in us being able to do this once a scroll gesture
            // has initiated in mobile browsers. This means if there's a horizontally-scrolling carousel
            // on a page we can't let a user scroll the page itself from it. Ideally what we'd do is
            // trigger this once we've got a scroll direction determined. This approach sort-of worked
            // but if the component was dragged too far in a single frame page scrolling would initiate.
            blockViewportScroll();
            // Stop any animations on both axis values immediately. This allows the user to throw and catch
            // the component.
            _this.stopMotion();
        };
        var onStart = function (event, info) {
            var _a, _b;
            // Attempt to grab the global drag gesture lock - maybe make this part of PanSession
            var _c = _this.props, drag = _c.drag, dragPropagation = _c.dragPropagation;
            if (drag && !dragPropagation) {
                if (_this.openGlobalLock)
                    _this.openGlobalLock();
                _this.openGlobalLock = getGlobalLock(drag);
                // If we don 't have the lock, don't start dragging
                if (!_this.openGlobalLock)
                    return;
            }
            /**
             * Record the progress of the mouse within the draggable element on each axis.
             * onPan, we're going to use this to calculate a new bounding box for the element to
             * project into. This will ensure that even if the DOM element moves via a relayout, it'll
             * stick to the correct place under the pointer.
             */
            _this.prepareBoundingBox();
            _this.visualElement.lockTargetBox();
            /**
             * Resolve the drag constraints. These are either set as top/right/bottom/left constraints
             * relative to the element's layout, or a ref to another element. Both need converting to
             * viewport coordinates.
             */
            _this.resolveDragConstraints();
            /**
             * When dragging starts, we want to find where the cursor is relative to the bounding box
             * of the element. Every frame, we calculate a new bounding box using this relative position
             * and let the visualElement renderer figure out how to reproject the element into this bounding
             * box.
             *
             * By doing it this way, rather than applying an x/y transform directly to the element,
             * we can ensure the component always visually sticks to the cursor as we'd expect, even
             * if the DOM element itself changes layout as a result of React updates the user might
             * make based on the drag position.
             */
            var point = getViewportPointFromEvent(event).point;
            eachAxis(function (axis) {
                var _a = _this.visualElement.targetBox[axis], min = _a.min, max = _a.max;
                _this.cursorProgress[axis] = cursorProgress
                    ? cursorProgress[axis]
                    : Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["progress"])(min, max, point[axis]);
                /**
                 * If we have external drag MotionValues, record their origin point. On pointermove
                 * we'll apply the pan gesture offset directly to this value.
                 */
                var axisValue = _this.getAxisMotionValue(axis);
                if (axisValue) {
                    _this.originPoint[axis] = axisValue.get();
                }
            });
            // Set current drag status
            _this.isDragging = true;
            _this.currentDirection = null;
            // Fire onDragStart event
            (_b = (_a = _this.props).onDragStart) === null || _b === void 0 ? void 0 : _b.call(_a, event, info);
        };
        var onMove = function (event, info) {
            var _a, _b, _c, _d;
            var _e = _this.props, dragPropagation = _e.dragPropagation, dragDirectionLock = _e.dragDirectionLock;
            // If we didn't successfully receive the gesture lock, early return.
            if (!dragPropagation && !_this.openGlobalLock)
                return;
            var offset = info.offset;
            // Attempt to detect drag direction if directionLock is true
            if (dragDirectionLock && _this.currentDirection === null) {
                _this.currentDirection = getCurrentDirection(offset);
                // If we've successfully set a direction, notify listener
                if (_this.currentDirection !== null) {
                    (_b = (_a = _this.props).onDirectionLock) === null || _b === void 0 ? void 0 : _b.call(_a, _this.currentDirection);
                }
                return;
            }
            // Update each point with the latest position
            _this.updateAxis("x", event, offset);
            _this.updateAxis("y", event, offset);
            // Fire onDrag event
            (_d = (_c = _this.props).onDrag) === null || _d === void 0 ? void 0 : _d.call(_c, event, info);
            // Update the last pointer event
            lastPointerEvent = event;
        };
        var onEnd = function (event, info) { return _this.stop(event, info); };
        var transformPagePoint = this.props.transformPagePoint;
        this.panSession = new PanSession(originEvent, {
            onSessionStart: onSessionStart,
            onStart: onStart,
            onMove: onMove,
            onEnd: onEnd,
        }, { transformPagePoint: transformPagePoint });
    };
    /**
     * Ensure the component's layout and target bounding boxes are up-to-date.
     */
    VisualElementDragControls.prototype.prepareBoundingBox = function () {
        var element = this.visualElement.getInstance();
        var transform = element.style.transform;
        this.visualElement.resetTransform();
        this.visualElement.measureLayout();
        element.style.transform = transform;
        this.visualElement.refreshTargetBox();
    };
    VisualElementDragControls.prototype.resolveDragConstraints = function () {
        var _this = this;
        var dragConstraints = this.props.dragConstraints;
        if (dragConstraints) {
            this.constraints = isRefObject(dragConstraints)
                ? this.resolveRefConstraints(this.visualElement.box, dragConstraints)
                : calcRelativeConstraints(this.visualElement.box, dragConstraints);
        }
        else {
            this.constraints = false;
        }
        /**
         * If we're outputting to external MotionValues, we want to rebase the measured constraints
         * from viewport-relative to component-relative.
         */
        if (this.constraints) {
            eachAxis(function (axis) {
                if (_this.getAxisMotionValue(axis)) {
                    _this.constraints[axis] = rebaseAxisConstraints(_this.visualElement.box[axis], _this.constraints[axis]);
                }
            });
        }
    };
    VisualElementDragControls.prototype.resolveRefConstraints = function (layoutBox, constraints) {
        var _a = this.props, onMeasureDragConstraints = _a.onMeasureDragConstraints, transformPagePoint = _a.transformPagePoint;
        var constraintsElement = constraints.current;
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
        this.constraintsBox = getBoundingBox(constraintsElement, transformPagePoint);
        var measuredConstraints = calcViewportConstraints(layoutBox, this.constraintsBox);
        /**
         * If there's an onMeasureDragConstraints listener we call it and
         * if different constraints are returned, set constraints to that
         */
        if (onMeasureDragConstraints) {
            var userConstraints = onMeasureDragConstraints(convertAxisBoxToBoundingBox(measuredConstraints));
            if (userConstraints) {
                measuredConstraints = convertBoundingBoxToAxisBox(userConstraints);
            }
        }
        return measuredConstraints;
    };
    VisualElementDragControls.prototype.cancelDrag = function () {
        unblockViewportScroll();
        this.isDragging = false;
        this.panSession && this.panSession.end();
        this.panSession = null;
        if (!this.props.dragPropagation && this.openGlobalLock) {
            this.openGlobalLock();
            this.openGlobalLock = null;
        }
    };
    VisualElementDragControls.prototype.stop = function (event, info) {
        var _a;
        this.visualElement.unlockTargetBox();
        (_a = this.panSession) === null || _a === void 0 ? void 0 : _a.end();
        this.panSession = null;
        var isDragging = this.isDragging;
        this.cancelDrag();
        if (!isDragging)
            return;
        var _b = this.props, dragMomentum = _b.dragMomentum, dragElastic = _b.dragElastic, onDragEnd = _b.onDragEnd;
        if (dragMomentum || dragElastic) {
            var velocity = info.velocity;
            this.animateDragEnd(velocity);
        }
        onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(event, info);
    };
    VisualElementDragControls.prototype.snapToCursor = function (event) {
        var _this = this;
        this.prepareBoundingBox();
        eachAxis(function (axis) {
            var axisValue = _this.getAxisMotionValue(axis);
            if (axisValue) {
                var point = getViewportPointFromEvent(event).point;
                var box = _this.visualElement.box;
                var length_1 = box[axis].max - box[axis].min;
                var center = box[axis].min + length_1 / 2;
                var offset = point[axis] - center;
                _this.originPoint[axis] = point[axis];
                axisValue.set(offset);
            }
            else {
                _this.cursorProgress[axis] = 0.5;
                _this.updateVisualElementAxis(axis, event);
            }
        });
    };
    /**
     * Update the specified axis with the latest pointer information.
     */
    VisualElementDragControls.prototype.updateAxis = function (axis, event, offset) {
        var drag = this.props.drag;
        // If we're not dragging this axis, do an early return.
        if (!shouldDrag(axis, drag, this.currentDirection))
            return;
        return this.getAxisMotionValue(axis)
            ? this.updateAxisMotionValue(axis, offset)
            : this.updateVisualElementAxis(axis, event);
    };
    VisualElementDragControls.prototype.updateAxisMotionValue = function (axis, offset) {
        var axisValue = this.getAxisMotionValue(axis);
        if (!offset || !axisValue)
            return;
        var dragElastic = this.props.dragElastic;
        var nextValue = this.originPoint[axis] + offset[axis];
        var update = this.constraints
            ? applyConstraints(nextValue, this.constraints[axis], dragElastic)
            : nextValue;
        axisValue.set(update);
    };
    VisualElementDragControls.prototype.updateVisualElementAxis = function (axis, event) {
        var _a;
        var dragElastic = this.props.dragElastic;
        // Get the actual layout bounding box of the element
        var axisLayout = this.visualElement.box[axis];
        // Calculate its current length. In the future we might want to lerp this to animate
        // between lengths if the layout changes as we change the DOM
        var axisLength = axisLayout.max - axisLayout.min;
        // Get the initial progress that the pointer sat on this axis on gesture start.
        var axisProgress = this.cursorProgress[axis];
        var point = getViewportPointFromEvent(event).point;
        // Calculate a new min point based on the latest pointer position, constraints and elastic
        var min = calcConstrainedMinPoint(point[axis], axisLength, axisProgress, (_a = this.constraints) === null || _a === void 0 ? void 0 : _a[axis], dragElastic);
        // Update the axis viewport target with this new min and the length
        this.visualElement.setAxisTarget(axis, min, min + axisLength);
    };
    VisualElementDragControls.prototype.updateProps = function (_a) {
        var _b = _a.drag, drag = _b === void 0 ? false : _b, _c = _a.dragDirectionLock, dragDirectionLock = _c === void 0 ? false : _c, _d = _a.dragPropagation, dragPropagation = _d === void 0 ? false : _d, _e = _a.dragConstraints, dragConstraints = _e === void 0 ? false : _e, _f = _a.dragElastic, dragElastic = _f === void 0 ? 0.35 : _f, _g = _a.dragMomentum, dragMomentum = _g === void 0 ? true : _g, remainingProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["drag", "dragDirectionLock", "dragPropagation", "dragConstraints", "dragElastic", "dragMomentum"]);
        this.props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ drag: drag,
            dragDirectionLock: dragDirectionLock,
            dragPropagation: dragPropagation,
            dragConstraints: dragConstraints,
            dragElastic: dragElastic,
            dragMomentum: dragMomentum }, remainingProps);
    };
    /**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - If the component will perform layout animations, we output the gesture to the component's
     *      visual bounding box
     * - Otherwise, we apply the delta to the x/y motion values.
     */
    VisualElementDragControls.prototype.getAxisMotionValue = function (axis) {
        var _a = this.props, layout = _a.layout, layoutId = _a.layoutId;
        var dragKey = "_drag" + axis.toUpperCase();
        if (this.props[dragKey]) {
            return this.props[dragKey];
        }
        else if (!layout && layoutId === undefined) {
            return this.visualElement.getValue(axis, 0);
        }
    };
    VisualElementDragControls.prototype.animateDragEnd = function (velocity) {
        var _this = this;
        var _a = this.props, drag = _a.drag, dragMomentum = _a.dragMomentum, dragElastic = _a.dragElastic, dragTransition = _a.dragTransition;
        var momentumAnimations = eachAxis(function (axis) {
            if (!shouldDrag(axis, drag, _this.currentDirection)) {
                return;
            }
            var transition = _this.constraints ? _this.constraints[axis] : {};
            /**
             * Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
             * of spring animations so we should look into adding a disable spring option to `inertia`.
             * We could do something here where we affect the `bounceStiffness` and `bounceDamping`
             * using the value of `dragElastic`.
             */
            var bounceStiffness = dragElastic ? 200 : 1000000;
            var bounceDamping = dragElastic ? 40 : 10000000;
            var inertia = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "inertia", velocity: dragMomentum ? velocity[axis] : 0, bounceStiffness: bounceStiffness,
                bounceDamping: bounceDamping, timeConstant: 750, restDelta: 1, restSpeed: 10 }, dragTransition), transition);
            // If we're not animating on an externally-provided `MotionValue` we can use the
            // component's animation controls which will handle interactions with whileHover (etc),
            // otherwise we just have to animate the `MotionValue` itself.
            return _this.getAxisMotionValue(axis)
                ? _this.startAxisValueAnimation(axis, inertia)
                : _this.visualElement.startLayoutAxisAnimation(axis, inertia);
        });
        // Run all animations and then resolve the new drag constraints.
        return Promise.all(momentumAnimations).then(function () {
            var _a, _b;
            (_b = (_a = _this.props).onDragTransitionEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
        });
    };
    VisualElementDragControls.prototype.stopMotion = function () {
        var _this = this;
        eachAxis(function (axis) {
            var axisValue = _this.getAxisMotionValue(axis);
            axisValue
                ? axisValue.stop()
                : _this.visualElement.stopLayoutAnimation();
        });
    };
    VisualElementDragControls.prototype.startAxisValueAnimation = function (axis, transition) {
        var axisValue = this.getAxisMotionValue(axis);
        if (!axisValue)
            return;
        var currentValue = axisValue.get();
        axisValue.set(currentValue);
        axisValue.set(currentValue); // Set twice to hard-reset velocity
        return startAnimation(axis, axisValue, 0, transition);
    };
    VisualElementDragControls.prototype.scalePoint = function () {
        var _this = this;
        var _a = this.props, drag = _a.drag, dragConstraints = _a.dragConstraints;
        if (!isRefObject(dragConstraints) || !this.constraintsBox)
            return;
        // Stop any current animations as there can be some visual glitching if we resize mid animation
        this.stopMotion();
        // Record the relative progress of the targetBox relative to the constraintsBox
        var boxProgress = { x: 0, y: 0 };
        eachAxis(function (axis) {
            boxProgress[axis] = calcOrigin(_this.visualElement.targetBox[axis], _this.constraintsBox[axis]);
        });
        /**
         * For each axis, calculate the current progress of the layout axis within the constraints.
         * Then, using the latest layout and constraints measurements, reposition the new layout axis
         * proportionally within the constraints.
         */
        this.prepareBoundingBox();
        this.resolveDragConstraints();
        eachAxis(function (axis) {
            if (!shouldDrag(axis, drag, null))
                return;
            // Calculate the position of the targetBox relative to the constraintsBox using the
            // previously calculated progress
            var _a = calcPositionFromProgress(_this.visualElement.targetBox[axis], _this.constraintsBox[axis], boxProgress[axis]), min = _a.min, max = _a.max;
            _this.visualElement.setAxisTarget(axis, min, max);
        });
    };
    VisualElementDragControls.prototype.mount = function (visualElement) {
        var _this = this;
        var element = visualElement.getInstance();
        /**
         * Attach a pointerdown event listener on this DOM element to initiate drag tracking.
         */
        var stopPointerListener = addPointerEvent(element, "pointerdown", function (event) {
            var _a = _this.props, drag = _a.drag, _b = _a.dragListener, dragListener = _b === void 0 ? true : _b;
            drag && dragListener && _this.start(event);
        });
        /**
         * Attach a window resize listener to scale the draggable target within its defined
         * constraints as the window resizes.
         */
        var stopResizeListener = addDomEvent(window, "resize", function () {
            _this.scalePoint();
        });
        /**
         * Ensure drag constraints are resolved correctly relative to the dragging element
         * whenever its layout changes.
         */
        var stopLayoutUpdateListener = visualElement.onLayoutUpdate(function () {
            if (_this.isDragging)
                _this.resolveDragConstraints();
        });
        /**
         * If the previous component with this same layoutId was dragging at the time
         * it was unmounted, we want to continue the same gesture on this component.
         */
        var prevSnapshot = visualElement.prevSnapshot;
        (prevSnapshot === null || prevSnapshot === void 0 ? void 0 : prevSnapshot.isDragging) &&
            this.start(lastPointerEvent, {
                cursorProgress: prevSnapshot.cursorProgress,
            });
        /**
         * Return a function that will teardown the drag gesture
         */
        return function () {
            stopPointerListener === null || stopPointerListener === void 0 ? void 0 : stopPointerListener();
            stopResizeListener === null || stopResizeListener === void 0 ? void 0 : stopResizeListener();
            stopLayoutUpdateListener === null || stopLayoutUpdateListener === void 0 ? void 0 : stopLayoutUpdateListener();
            _this.cancelDrag();
        };
    };
    return VisualElementDragControls;
}());
function shouldDrag(direction, drag, currentDirection) {
    return ((drag === true || drag === direction) &&
        (currentDirection === null || currentDirection === direction));
}
/**
 * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
 * than the provided threshold, return `null`.
 *
 * @param offset - The x/y offset from origin.
 * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
 */
function getCurrentDirection(offset, lockThreshold) {
    if (lockThreshold === void 0) { lockThreshold = 10; }
    var direction = null;
    if (Math.abs(offset.y) > lockThreshold) {
        direction = "y";
    }
    else if (Math.abs(offset.x) > lockThreshold) {
        direction = "x";
    }
    return direction;
}

/**
 * A hook that allows an element to be dragged.
 *
 * @internal
 */
function useDrag(props, visualElement) {
    var groupDragControls = props.dragControls;
    var transformPagePoint = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(MotionConfigContext).transformPagePoint;
    var dragControls = useConstant(function () {
        return new VisualElementDragControls({
            visualElement: visualElement,
        });
    });
    dragControls.updateProps(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props), { transformPagePoint: transformPagePoint }));
    // If we've been provided a DragControls for manual control over the drag gesture,
    // subscribe this component to it on mount.
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () { return groupDragControls && groupDragControls.subscribe(dragControls); }, [dragControls]);
    // Mount the drag controls with the visualElement
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () { return dragControls.mount(visualElement); }, []);
}

var makeRenderlessComponent = function (hook) { return function (props) {
    hook(props);
    return null;
}; };

var Component = makeRenderlessComponent(function (_a) {
    var visualElement = _a.visualElement, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["visualElement"]);
    return useDrag(props, visualElement);
});
/**
 * @public
 */
var Drag = {
    key: "drag",
    shouldRender: function (props) { return !!props.drag; },
    getComponent: function () { return Component; },
};

function useUnmountEffect(callback) {
    return Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () { return function () { return callback(); }; }, []);
}

/**
 *
 * @param handlers -
 * @param ref -
 *
 * @internalremarks
 * Currently this sets new pan gesture functions every render. The memo route has been explored
 * in the past but ultimately we're still creating new functions every render. An optimisation
 * to explore is creating the pan gestures and loading them into a `ref`.
 *
 * @internal
 */
function usePanGesture(_a, ref) {
    var onPan = _a.onPan, onPanStart = _a.onPanStart, onPanEnd = _a.onPanEnd, onPanSessionStart = _a.onPanSessionStart;
    var hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
    var panSession = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
    var transformPagePoint = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(MotionConfigContext).transformPagePoint;
    var handlers = {
        onSessionStart: onPanSessionStart,
        onStart: onPanStart,
        onMove: onPan,
        onEnd: function (event, info) {
            panSession.current = null;
            onPanEnd && onPanEnd(event, info);
        },
    };
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        if (panSession.current !== null) {
            panSession.current.updateHandlers(handlers);
        }
    });
    function onPointerDown(event) {
        panSession.current = new PanSession(event, handlers, {
            transformPagePoint: transformPagePoint,
        });
    }
    usePointerEvent(ref, "pointerdown", hasPanEvents && onPointerDown);
    useUnmountEffect(function () { return panSession.current && panSession.current.end(); });
}

/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */
var isNodeOrChild = function (parent, child) {
    if (!child) {
        return false;
    }
    else if (parent === child) {
        return true;
    }
    else {
        return isNodeOrChild(parent, child.parentElement);
    }
};

var order$1 = ["whileHover", "whileTap", "whileDrag"];
var getGesturePriority = function (gesture) {
    return order$1.indexOf(gesture) + 1;
};

var tapGesturePriority = getGesturePriority("whileTap");
/**
 * @param handlers -
 * @internal
 */
function useTapGesture(_a, ref) {
    var onTap = _a.onTap, onTapStart = _a.onTapStart, onTapCancel = _a.onTapCancel, whileTap = _a.whileTap, controls = _a.controls;
    var hasTapListeners = onTap || onTapStart || onTapCancel || whileTap;
    var isTapping = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(false);
    var cancelPointerEventListener = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
    function removePointerUp() {
        cancelPointerEventListener.current &&
            cancelPointerEventListener.current();
        cancelPointerEventListener.current = null;
    }
    if (whileTap && controls) {
        controls.setOverride(whileTap, tapGesturePriority);
    }
    // We load this event handler into a ref so we can later refer to
    // onPointerUp.current which will always have reference to the latest props
    var onPointerUp = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
    onPointerUp.current = function (event, info) {
        var element = ref.current;
        removePointerUp();
        if (!isTapping.current || !element)
            return;
        isTapping.current = false;
        if (controls && whileTap) {
            controls.clearOverride(tapGesturePriority);
        }
        // Check the gesture lock - if we get it, it means no drag gesture is active
        // and we can safely fire the tap gesture.
        var openGestureLock = getGlobalLock(true);
        if (!openGestureLock)
            return;
        openGestureLock();
        if (!isNodeOrChild(element, event.target)) {
            onTapCancel && onTapCancel(event, info);
        }
        else {
            onTap && onTap(event, info);
        }
    };
    function onPointerDown(event, info) {
        removePointerUp();
        cancelPointerEventListener.current = addPointerEvent(window, "pointerup", function (event, info) { return onPointerUp.current(event, info); });
        var element = ref.current;
        if (!element || isTapping.current)
            return;
        isTapping.current = true;
        onTapStart && onTapStart(event, info);
        if (controls && whileTap) {
            controls.startOverride(tapGesturePriority);
        }
    }
    usePointerEvent(ref, "pointerdown", hasTapListeners ? onPointerDown : undefined);
    useUnmountEffect(removePointerUp);
}

var hoverPriority = getGesturePriority("whileHover");
var filterTouch = function (listener) { return function (event, info) {
    if (isMouseEvent(event))
        listener(event, info);
}; };
/**
 *
 * @param props
 * @param ref
 * @internal
 */
function useHoverGesture(_a, ref) {
    var whileHover = _a.whileHover, onHoverStart = _a.onHoverStart, onHoverEnd = _a.onHoverEnd, controls = _a.controls;
    if (whileHover && controls) {
        controls.setOverride(whileHover, hoverPriority);
    }
    usePointerEvent(ref, "pointerenter", filterTouch(function (event, info) {
        if (onHoverStart)
            onHoverStart(event, info);
        if (whileHover && controls) {
            controls.startOverride(hoverPriority);
        }
    }));
    usePointerEvent(ref, "pointerleave", filterTouch(function (event, info) {
        if (onHoverEnd)
            onHoverEnd(event, info);
        if (whileHover && controls) {
            controls.clearOverride(hoverPriority);
        }
    }));
}

/**
 * Add pan and tap gesture recognition to an element.
 *
 * @param props - Gesture event handlers
 * @param ref - React `ref` containing a DOM `Element`
 * @public
 */
function useGestures(props, ref) {
    usePanGesture(props, ref);
    useTapGesture(props, ref);
    useHoverGesture(props, ref);
}

var gestureProps = [
    "onPan",
    "onPanStart",
    "onPanEnd",
    "onPanSessionStart",
    "onTap",
    "onTapStart",
    "onTapCancel",
    "whileTap",
    "whileHover",
    "onHoverStart",
    "onHoverEnd",
];
var GestureComponent = makeRenderlessComponent(function (_a) {
    var visualElement = _a.visualElement, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["visualElement"]);
    useGestures(props, visualElement);
});
/**
 * @public
 */
var Gestures = {
    key: "gestures",
    shouldRender: function (props) {
        return gestureProps.some(function (key) { return props.hasOwnProperty(key); });
    },
    getComponent: function () { return GestureComponent; },
};

var ExitComponent = makeRenderlessComponent(function (props) {
    var animate = props.animate, controls = props.controls, exit = props.exit;
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(usePresence(), 2), isPresent = _a[0], onExitComplete = _a[1];
    var presenceContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(PresenceContext);
    var isPlayingExitAnimation = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(false);
    var custom = (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.custom) !== undefined
        ? presenceContext.custom
        : props.custom;
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        if (!isPresent) {
            if (!isPlayingExitAnimation.current && exit) {
                controls.start(exit, { custom: custom }).then(onExitComplete);
            }
            isPlayingExitAnimation.current = true;
        }
        else if (isPlayingExitAnimation.current &&
            animate &&
            typeof animate !== "boolean" &&
            !(animate instanceof AnimationControls)) {
            controls.start(animate);
        }
        if (isPresent) {
            isPlayingExitAnimation.current = false;
        }
    }, [animate, controls, custom, exit, isPresent, onExitComplete, props]);
});
/**
 * @public
 */
var Exit = {
    key: "exit",
    shouldRender: function (props) { return !!props.exit && !checkShouldInheritVariant(props); },
    getComponent: function () { return ExitComponent; },
};

var AnimatePropType;
(function (AnimatePropType) {
    AnimatePropType["Target"] = "Target";
    AnimatePropType["VariantLabel"] = "VariantLabel";
    AnimatePropType["AnimationSubscription"] = "AnimationSubscription";
})(AnimatePropType || (AnimatePropType = {}));

function shallowCompare(next, prev) {
    if (prev === null)
        return false;
    var prevLength = prev.length;
    if (prevLength !== next.length)
        return false;
    for (var i = 0; i < prevLength; i++) {
        if (prev[i] !== next[i])
            return false;
    }
    return true;
}

var hasUpdated = function (prev, next) {
    return (next !== undefined &&
        (Array.isArray(prev) && Array.isArray(next)
            ? !shallowCompare(next, prev)
            : prev !== next));
};
function targetWithoutTransition(_a, mergeTransitionEnd) {
    if (mergeTransitionEnd === void 0) { mergeTransitionEnd = false; }
    var transition = _a.transition, transitionEnd = _a.transitionEnd, target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["transition", "transitionEnd"]);
    return mergeTransitionEnd
        ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, target), transitionEnd)
        : target;
}
/**
 * Handle the `animate` prop when its an object of values, ie:
 *
 * ```jsx
 * <motion.div animate={{ opacity: 1 }} />
 * ```
 *
 * @internalremarks
 * It might be worth consolidating this with `use-variants`
 *
 * ```jsx
 * <motion.div animate="visible" />
 * ```
 *
 * @param target
 * @param controls
 * @param values
 * @param transition
 *
 * @internal
 */
function useAnimateProp(targetAndTransition, controls, visualElement, defaultTransition) {
    var isInitialRender = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(true);
    var prevValues = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
    if (!prevValues.current) {
        prevValues.current = targetWithoutTransition(targetAndTransition, true);
    }
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        var targetToAnimate = {};
        // These are the values we're actually animating
        var animatingTarget = targetWithoutTransition(targetAndTransition);
        // This is the target as it'll be once transitionEnd values are applied
        var finalTarget = targetWithoutTransition(targetAndTransition, true);
        // Detect which values have changed between renders
        for (var key in animatingTarget) {
            // This value should animate on mount if this value doesn't already exist (wasn't
            // defined in `style` or `initial`) or if it does exist and it's already changed.
            var shouldAnimateOnMount = isInitialRender.current &&
                (!visualElement.hasValue(key) ||
                    visualElement.getValue(key).get() !== finalTarget[key]);
            // If this value has updated between renders or it's we're animating this value on mount,
            // add it to the animate target.
            var isValidValue = finalTarget[key] !== null;
            var valueHasUpdated = hasUpdated(prevValues.current[key], finalTarget[key]);
            if (isValidValue && (valueHasUpdated || shouldAnimateOnMount)) {
                targetToAnimate[key] = animatingTarget[key];
            }
        }
        isInitialRender.current = false;
        prevValues.current = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prevValues.current), finalTarget);
        if (Object.keys(targetToAnimate).length) {
            controls.start(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, targetToAnimate), { transition: targetAndTransition.transition || defaultTransition, transitionEnd: targetAndTransition.transitionEnd }));
        }
    }, [targetAndTransition]);
}

var labelsToArray = function (label) {
    if (!label) {
        return [];
    }
    if (Array.isArray(label)) {
        return label;
    }
    return [label];
};
var resolveVariantLabels = function (variant) {
    var unresolvedVariant = variant instanceof MotionValue ? variant.get() : variant;
    return Array.from(new Set(labelsToArray(unresolvedVariant)));
};
/**
 * Hooks in React sometimes accept a dependency array as their final argument. (ie useEffect/useMemo)
 * When values in this array change, React re-runs the dependency. However if the array
 * contains a variable number of items, React throws an error.
 */
var asDependencyList = function (list) { return [
    list.join(","),
]; };

var hasVariantChanged = function (oldVariant, newVariant) {
    return oldVariant.join(",") !== newVariant.join(",");
};
/**
 * Handle variants and the `animate` prop when its set as variant labels.
 *
 * @param initial - Initial variant(s)
 * @param animate - Variant(s) to animate to
 * @param inherit - `true` is inheriting animations from parent
 * @param controls - Animation controls
 *
 * @internal
 */
function useVariants(initial, animate, inherit, controls) {
    var targetVariants = resolveVariantLabels(animate);
    var context = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(MotionContext);
    var parentAlreadyMounted = context.hasMounted && context.hasMounted.current;
    var hasMounted = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(false);
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        var shouldAnimate = false;
        if (inherit) {
            // If we're inheriting variant changes and the parent has already
            // mounted when this component loads, we need to manually trigger
            // this animation.
            shouldAnimate = !!parentAlreadyMounted;
            targetVariants = resolveVariantLabels(context.animate);
        }
        else {
            shouldAnimate =
                hasMounted.current ||
                    hasVariantChanged(resolveVariantLabels(initial), targetVariants);
        }
        shouldAnimate && controls.start(targetVariants);
        hasMounted.current = true;
    }, asDependencyList(targetVariants));
}

/**
 * `useAnimationGroupSubscription` allows a component to subscribe to an
 * externally-created `AnimationControls`, created by the `useAnimation` hook.
 *
 * @param animation
 * @param controls
 *
 * @internal
 */
function useAnimationGroupSubscription(animation, controls) {
    var unsubscribe = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () { return animation.subscribe(controls); }, [
        animation,
    ]);
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () { return function () {
        unsubscribe && unsubscribe();
    }; }, [unsubscribe]);
}

var _a, _b;
var AnimatePropComponents = (_a = {},
    _a[AnimatePropType.Target] = makeRenderlessComponent(function (_a) {
        var animate = _a.animate, controls = _a.controls, visualElement = _a.visualElement, transition = _a.transition;
        return useAnimateProp(animate, controls, visualElement, transition);
    }),
    _a[AnimatePropType.VariantLabel] = makeRenderlessComponent(function (_a) {
        var animate = _a.animate, _b = _a.inherit, inherit = _b === void 0 ? true : _b, controls = _a.controls, initial = _a.initial;
        return useVariants(initial, animate, inherit, controls);
    }),
    _a[AnimatePropType.AnimationSubscription] = makeRenderlessComponent(function (_a) {
        var animate = _a.animate, controls = _a.controls;
        return useAnimationGroupSubscription(animate, controls);
    }),
    _a);
var isVariantLabel$1 = function (prop) {
    return Array.isArray(prop) || typeof prop === "string";
};
var isAnimationSubscription = function (_a) {
    var animate = _a.animate;
    return animate instanceof AnimationControls;
};
var animationProps = ["initial", "animate", "whileTap", "whileHover"];
var animatePropTypeTests = (_b = {},
    _b[AnimatePropType.Target] = function (props) {
        return (props.animate !== undefined &&
            !isVariantLabel$1(props.animate) &&
            !isAnimationSubscription(props));
    },
    _b[AnimatePropType.VariantLabel] = function (props) {
        return (props.variants !== undefined ||
            animationProps.some(function (key) { return typeof props[key] === "string"; }));
    },
    _b[AnimatePropType.AnimationSubscription] = isAnimationSubscription,
    _b);
var getAnimationComponent = function (props) {
    var animatePropType = undefined;
    for (var key in AnimatePropType) {
        if (animatePropTypeTests[key](props)) {
            animatePropType = key;
        }
    }
    return animatePropType ? AnimatePropComponents[animatePropType] : undefined;
};
/**
 * @public
 */
var Animation = {
    key: "animation",
    shouldRender: function () { return true; },
    getComponent: getAnimationComponent,
};

function tweenAxis(target, prev, next, p) {
    target.min = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(prev.min, next.min, p);
    target.max = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(prev.max, next.max, p);
}

var progressTarget = 1000;
var Animate = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Animate, _super);
    function Animate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.frameTarget = {
            x: { min: 0, max: 0 },
            y: { min: 0, max: 0 },
        };
        _this.stopAxisAnimation = {
            x: undefined,
            y: undefined,
        };
        _this.animate = function (target, origin, _a) {
            if (_a === void 0) { _a = {}; }
            var originBox = _a.originBox, targetBox = _a.targetBox, visibilityAction = _a.visibilityAction, config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["originBox", "targetBox", "visibilityAction"]);
            var _b = _this.props, visualElement = _b.visualElement, layout = _b.layout;
            /**
             * Allow the measured origin (prev bounding box) and target (actual layout) to be
             * overridden by the provided config.
             */
            origin = originBox || origin;
            target = targetBox || target;
            var boxHasMoved = hasMoved(origin, target);
            var animations = eachAxis(function (axis) {
                /**
                 * If layout is set to "position", we can resize the origin box based on the target
                 * box and only animate its position.
                 */
                if (layout === "position") {
                    var targetLength = target[axis].max - target[axis].min;
                    origin[axis].max = origin[axis].min + targetLength;
                }
                if (visualElement.isTargetBoxLocked) {
                    return;
                }
                else if (visibilityAction !== undefined) {
                    // If we're meant to show/hide the visualElement, do so
                    visibilityAction === VisibilityAction.Hide
                        ? visualElement.hide()
                        : visualElement.show();
                }
                else if (boxHasMoved) {
                    // If the box has moved, animate between it's current visual state and its
                    // final state
                    return _this.animateAxis(axis, target[axis], origin[axis], config);
                }
                else {
                    // If the box has remained in the same place, immediately set the axis target
                    // to the final desired state
                    return visualElement.setAxisTarget(axis, target[axis].min, target[axis].max);
                }
            });
            // Force a render to ensure there's no flash of uncorrected bounding box.
            visualElement.render();
            /**
             * If this visualElement isn't present (ie it's been removed from the tree by the user but
             * kept in by the tree by AnimatePresence) then call safeToRemove when all axis animations
             * have successfully finished.
             */
            return Promise.all(animations).then(function () {
                var _a, _b;
                (_b = (_a = _this.props).onLayoutAnimationComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
                if (visualElement.isPresent) {
                    visualElement.presence = Presence.Present;
                }
                else {
                    _this.safeToRemove();
                }
            });
        };
        return _this;
    }
    Animate.prototype.componentDidMount = function () {
        var visualElement = this.props.visualElement;
        visualElement.enableLayoutProjection();
        this.unsubLayoutReady = visualElement.onLayoutUpdate(this.animate);
    };
    Animate.prototype.componentWillUnmount = function () {
        var _this = this;
        this.unsubLayoutReady();
        eachAxis(function (axis) { var _a, _b; return (_b = (_a = _this.stopAxisAnimation)[axis]) === null || _b === void 0 ? void 0 : _b.call(_a); });
    };
    /**
     * TODO: This manually performs animations on the visualElement's layout progress
     * values. It'd be preferable to amend the HTMLVisualElement.startLayoutAxisAnimation
     * API to accept more custom animations like this.
     */
    Animate.prototype.animateAxis = function (axis, target, origin, _a) {
        var _b, _c;
        var _d = _a === void 0 ? {} : _a, transition = _d.transition, crossfadeOpacity = _d.crossfadeOpacity;
        (_c = (_b = this.stopAxisAnimation)[axis]) === null || _c === void 0 ? void 0 : _c.call(_b);
        var visualElement = this.props.visualElement;
        var frameTarget = this.frameTarget[axis];
        var layoutProgress = visualElement.axisProgress[axis];
        /**
         * Set layout progress back to 0. We set it twice to hard-reset any velocity that might
         * be re-incoporated into a subsequent spring animation.
         */
        layoutProgress.clearListeners();
        layoutProgress.set(0);
        layoutProgress.set(0);
        /**
         * If this is a crossfade animation, create a function that updates both the opacity of this component
         * and the one being crossfaded out.
         */
        var crossfade = crossfadeOpacity && this.createCrossfadeAnimation(crossfadeOpacity);
        /**
         * Create an animation function to run once per frame. This will tween the visual bounding box from
         * origin to target using the latest progress value.
         */
        var frame = function () {
            // Convert the latest layoutProgress, which is a value from 0-1000, into a 0-1 progress
            var p = layoutProgress.get() / progressTarget;
            // Tween the axis and update the visualElement with the latest values
            tweenAxis(frameTarget, origin, target, p);
            visualElement.setAxisTarget(axis, frameTarget.min, frameTarget.max);
            // If this is a crossfade animation, update both elements.
            crossfade === null || crossfade === void 0 ? void 0 : crossfade(p);
        };
        // Synchronously run a frame to ensure there's no flash of the uncorrected bounding box.
        frame();
        // Create a function to stop animation on this specific axis
        var unsubscribeProgress = layoutProgress.onChange(frame);
        // Start the animation on this axis
        var animation = startAnimation(axis === "x" ? "layoutX" : "layoutY", layoutProgress, progressTarget, transition || this.props.transition || defaultTransition).then(unsubscribeProgress);
        this.stopAxisAnimation[axis] = function () {
            layoutProgress.stop();
            unsubscribeProgress();
        };
        return animation;
    };
    Animate.prototype.createCrossfadeAnimation = function (crossfadeOpacity) {
        var visualElement = this.props.visualElement;
        var opacity = visualElement.getValue("opacity", 0);
        return function (p) {
            opacity.set(easeCrossfadeIn(Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(0, 1, p)));
            crossfadeOpacity.set(easeCrossfadeOut(Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(1, 0, p)));
        };
    };
    Animate.prototype.safeToRemove = function () {
        var _a, _b;
        (_b = (_a = this.props).safeToRemove) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    Animate.prototype.render = function () {
        return null;
    };
    return Animate;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]));
function AnimateLayoutContextProvider(props) {
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(usePresence(), 2), safeToRemove = _a[1];
    return Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Animate, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { safeToRemove: safeToRemove }));
}
function hasMoved(a, b) {
    return hasAxisMoved(a.x, b.x) || hasAxisMoved(a.y, b.y);
}
function hasAxisMoved(a, b) {
    return a.min !== b.min || a.max !== b.max;
}
var defaultTransition = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1],
};
function compress(min, max, easing) {
    return function (p) {
        // Could replace ifs with clamp
        if (p < min)
            return 0;
        if (p > max)
            return 1;
        return easing(Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["progress"])(min, max, p));
    };
}
var easeCrossfadeIn = compress(0, 0.5, popmotion__WEBPACK_IMPORTED_MODULE_2__["circOut"]);
var easeCrossfadeOut = compress(0.5, 0.95, popmotion__WEBPACK_IMPORTED_MODULE_2__["linear"]);
/**
 * @public
 */
var AnimateLayout = {
    key: "animate-layout",
    shouldRender: function (props) { return !!props.layout || !!props.layoutId; },
    getComponent: function () { return AnimateLayoutContextProvider; },
};

/**
 * This component is responsible for scheduling the measuring of the motion component
 */
var Measure = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Measure, _super);
    function Measure() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * If this is a child of a SyncContext, register the VisualElement with it on mount.
     */
    Measure.prototype.componentDidMount = function () {
        var _a = this.props, syncLayout = _a.syncLayout, visualElement = _a.visualElement;
        isSharedLayout(syncLayout) && syncLayout.register(visualElement);
    };
    /**
     * If this is a child of a SyncContext, notify it that it needs to re-render. It will then
     * handle the snapshotting.
     *
     * If it is stand-alone component, add it to the batcher.
     */
    Measure.prototype.getSnapshotBeforeUpdate = function () {
        var _a = this.props, syncLayout = _a.syncLayout, visualElement = _a.visualElement;
        if (isSharedLayout(syncLayout)) {
            syncLayout.syncUpdate();
        }
        else {
            visualElement.snapshotBoundingBox();
            syncLayout.add(visualElement);
        }
        return null;
    };
    Measure.prototype.componentDidUpdate = function () {
        var _a = this.props, syncLayout = _a.syncLayout, visualElement = _a.visualElement;
        if (!isSharedLayout(syncLayout))
            syncLayout.flush();
        /**
         * If this axis isn't animating as a result of this render we want to reset the targetBox
         * to the measured box
         */
        var _b = visualElement.axisProgress, x = _b.x, y = _b.y;
        if (visualElement.box &&
            !visualElement.isTargetBoxLocked &&
            !x.isAnimating() &&
            !y.isAnimating()) {
            eachAxis(function (axis) {
                var _a = visualElement.box[axis], min = _a.min, max = _a.max;
                visualElement.setAxisTarget(axis, min, max);
            });
            // Force a render to ensure there's no flash of uncorrected bounding box.
            visualElement.render();
        }
    };
    Measure.prototype.render = function () {
        return null;
    };
    return Measure;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component));
function MeasureContextProvider(props) {
    var syncLayout = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(SharedLayoutContext);
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Measure, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { syncLayout: syncLayout }));
}
var MeasureLayout = {
    key: "measure-layout",
    shouldRender: function (props) {
        return !!props.drag || !!props.layout || !!props.layoutId;
    },
    getComponent: function () { return MeasureContextProvider; },
};

/**
 * Convert any React component into a `motion` component. The provided component
 * **must** use `React.forwardRef` to the underlying DOM component you want to animate.
 *
 * ```jsx
 * const Component = React.forwardRef((props, ref) => {
 *   return <div ref={ref} />
 * })
 *
 * const MotionComponent = motion.custom(Component)
 * ```
 *
 * @public
 */
function createMotionProxy(defaultFeatures) {
    var config = {
        defaultFeatures: defaultFeatures,
        useVisualElement: useDomVisualElement,
        render: render,
        animationControlsConfig: {
            makeTargetAnimatable: parseDomVariant,
        },
    };
    function custom(Component) {
        return createMotionComponent(Component, config);
    }
    var componentCache = new Map();
    function get(target, key) {
        if (key === "custom")
            return target.custom;
        if (!componentCache.has(key)) {
            componentCache.set(key, createMotionComponent(key, config));
        }
        return componentCache.get(key);
    }
    return new Proxy({ custom: custom }, { get: get });
}
/**
 * HTML & SVG components, optimised for use with gestures and animation. These can be used as
 * drop-in replacements for any HTML & SVG component, all CSS & SVG properties are supported.
 *
 * @public
 */
var motion = /*@__PURE__*/ createMotionProxy([
    MeasureLayout,
    Animation,
    Drag,
    Gestures,
    Exit,
    AnimateLayout,
]);
/**
 * @public
 */
var m = /*@__PURE__*/ createMotionProxy([MeasureLayout]);

function useForceUpdate() {
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0), 2), forcedRenderCount = _a[0], setForcedRenderCount = _a[1];
    return Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () { return setForcedRenderCount(forcedRenderCount + 1); }, [
        forcedRenderCount,
    ]);
}

var presenceId = 0;
function getPresenceId() {
    var id = presenceId;
    presenceId++;
    return id;
}
var PresenceChild = function (_a) {
    var children = _a.children, initial = _a.initial, isPresent = _a.isPresent, onExitComplete = _a.onExitComplete, custom = _a.custom;
    var presenceChildren = useConstant(newChildrenMap);
    var context = {
        id: useConstant(getPresenceId),
        initial: initial,
        isPresent: isPresent,
        custom: custom,
        onExitComplete: function (childId) {
            presenceChildren.set(childId, true);
            var allComplete = true;
            presenceChildren.forEach(function (isComplete) {
                if (!isComplete)
                    allComplete = false;
            });
            allComplete && (onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete());
        },
        register: function (childId) {
            presenceChildren.set(childId, false);
            return function () { return presenceChildren.delete(childId); };
        },
    };
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
        presenceChildren.forEach(function (_, key) { return presenceChildren.set(key, false); });
    }, [isPresent]);
    return (Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PresenceContext.Provider, { value: context }, children));
};
function newChildrenMap() {
    return new Map();
}

function getChildKey(child) {
    return child.key || "";
}
function updateChildLookup(children, allChildren) {
    var seenChildren =  true ? new Set() : undefined;
    children.forEach(function (child) {
        var key = getChildKey(child);
        if ( true && seenChildren) {
            if (seenChildren.has(key)) {
                console.warn("Children of AnimatePresence require unique keys. \"" + key + "\" is a duplicate.");
            }
            seenChildren.add(key);
        }
        allChildren.set(key, child);
    });
}
function onlyElements(children) {
    var filtered = [];
    // We use forEach here instead of map as map mutates the component key by preprending `.$`
    react__WEBPACK_IMPORTED_MODULE_5__["Children"].forEach(children, function (child) {
        if (Object(react__WEBPACK_IMPORTED_MODULE_5__["isValidElement"])(child))
            filtered.push(child);
    });
    return filtered;
}
/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * @library
 *
 * Any `Frame` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { Frame, AnimatePresence } from 'framer'
 *
 * // As items are added and removed from `items`
 * export function Items({ items }) {
 *   return (
 *     <AnimatePresence>
 *       {items.map(item => (
 *         <Frame
 *           key={item.id}
 *           initial={{ opacity: 0 }}
 *           animate={{ opacity: 1 }}
 *           exit={{ opacity: 0 }}
 *         />
 *       ))}
 *     </AnimatePresence>
 *   )
 * }
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * @motion
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `usePresence` all need to call `safeToRemove`.
 *
 * @public
 */
var AnimatePresence = function (_a) {
    var children = _a.children, custom = _a.custom, _b = _a.initial, initial = _b === void 0 ? true : _b, onExitComplete = _a.onExitComplete, exitBeforeEnter = _a.exitBeforeEnter;
    // We want to force a re-render once all exiting animations have finished. We
    // either use a local forceRender function, or one from a parent context if it exists.
    var forceRender = useForceUpdate();
    var layoutContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(SharedLayoutContext);
    if (isSharedLayout(layoutContext)) {
        forceRender = layoutContext.forceUpdate;
    }
    var isInitialRender = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(true);
    // Filter out any children that aren't ReactElements. We can only track ReactElements with a props.key
    var filteredChildren = onlyElements(children);
    // Keep a living record of the children we're actually rendering so we
    // can diff to figure out which are entering and exiting
    var presentChildren = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(filteredChildren);
    // A lookup table to quickly reference components by key
    var allChildren = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(new Map())
        .current;
    // A living record of all currently exiting components.
    var exiting = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(new Set()).current;
    updateChildLookup(filteredChildren, allChildren);
    // If this is the initial component render, just deal with logic surrounding whether
    // we play onMount animations or not.
    if (isInitialRender.current) {
        isInitialRender.current = false;
        return (Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, filteredChildren.map(function (child) { return (Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PresenceChild, { key: getChildKey(child), isPresent: true, initial: initial ? undefined : false }, child)); })));
    }
    // If this is a subsequent render, deal with entering and exiting children
    var childrenToRender = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(filteredChildren);
    // Diff the keys of the currently-present and target children to update our
    // exiting list.
    var presentKeys = presentChildren.current.map(getChildKey);
    var targetKeys = filteredChildren.map(getChildKey);
    // Diff the present children with our target children and mark those that are exiting
    var numPresent = presentKeys.length;
    for (var i = 0; i < numPresent; i++) {
        var key = presentKeys[i];
        if (targetKeys.indexOf(key) === -1) {
            exiting.add(key);
        }
        else {
            // In case this key has re-entered, remove from the exiting list
            exiting.delete(key);
        }
    }
    // If we currently have exiting children, and we're deferring rendering incoming children
    // until after all current children have exiting, empty the childrenToRender array
    if (exitBeforeEnter && exiting.size) {
        childrenToRender = [];
    }
    // Loop through all currently exiting components and clone them to overwrite `animate`
    // with any `exit` prop they might have defined.
    exiting.forEach(function (key) {
        // If this component is actually entering again, early return
        if (targetKeys.indexOf(key) !== -1)
            return;
        var child = allChildren.get(key);
        if (!child)
            return;
        var insertionIndex = presentKeys.indexOf(key);
        var onExit = function () {
            allChildren.delete(key);
            exiting.delete(key);
            // Remove this child from the present children
            var removeIndex = presentChildren.current.findIndex(function (presentChild) { return presentChild.key === key; });
            presentChildren.current.splice(removeIndex, 1);
            // Defer re-rendering until all exiting children have indeed left
            if (!exiting.size) {
                presentChildren.current = filteredChildren;
                forceRender();
                onExitComplete && onExitComplete();
            }
        };
        childrenToRender.splice(insertionIndex, 0, Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PresenceChild, { key: getChildKey(child), isPresent: false, onExitComplete: onExit, custom: custom }, child));
    });
    // Add `MotionContext` even to children that don't need it to ensure we're rendering
    // the same tree between renders
    childrenToRender = childrenToRender.map(function (child) {
        var key = child.key;
        return exiting.has(key) ? (child) : (Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PresenceChild, { key: getChildKey(child), isPresent: true }, child));
    });
    presentChildren.current = childrenToRender;
    if ( true &&
        exitBeforeEnter &&
        childrenToRender.length > 1) {
        console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour.");
    }
    return (Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, exiting.size
        ? childrenToRender
        : childrenToRender.map(function (child) { return Object(react__WEBPACK_IMPORTED_MODULE_5__["cloneElement"])(child); })));
};

function createSwitchAnimation(child, stack) {
    if (stack && child !== stack.lead) {
        return { visibilityAction: VisibilityAction.Hide };
    }
    else if (stack &&
        child.presence !== Presence.Entering &&
        child === stack.lead &&
        stack.lead !== stack.prevLead) {
        return { visibilityAction: VisibilityAction.Show };
    }
    var originBox;
    var targetBox;
    if (child.presence === Presence.Entering) {
        originBox = stack === null || stack === void 0 ? void 0 : stack.getFollowOrigin();
    }
    else if (child.presence === Presence.Exiting) {
        targetBox = stack === null || stack === void 0 ? void 0 : stack.getFollowTarget();
    }
    return { originBox: originBox, targetBox: targetBox };
}
function createCrossfadeAnimation(child, stack) {
    var _a, _b, _c;
    var config = {};
    var stackLead = stack && stack.lead;
    var stackLeadPresence = stackLead === null || stackLead === void 0 ? void 0 : stackLead.presence;
    if (stack && child === stackLead) {
        if (child.presence === Presence.Entering) {
            config.originBox = stack.getFollowOrigin();
        }
        else if (child.presence === Presence.Exiting) {
            config.targetBox = stack.getFollowTarget();
        }
    }
    else if (stack && child === stack.follow) {
        config.transition = stack.getLeadTransition();
        if (stackLeadPresence === Presence.Entering) {
            config.targetBox = stack.getLeadTarget();
        }
        else if (stackLeadPresence === Presence.Exiting) {
            config.originBox = stack.getLeadOrigin();
        }
    }
    // If neither the lead or follow component is the root child of AnimatePresence,
    // don't handle crossfade animations
    if (!((_a = stack === null || stack === void 0 ? void 0 : stack.follow) === null || _a === void 0 ? void 0 : _a.isPresenceRoot) && !(stackLead === null || stackLead === void 0 ? void 0 : stackLead.isPresenceRoot)) {
        return config;
    }
    if (!stack || child === stackLead) {
        if (child.presence === Presence.Entering) {
            config.crossfadeOpacity = (_b = stack === null || stack === void 0 ? void 0 : stack.follow) === null || _b === void 0 ? void 0 : _b.getValue("opacity", 0);
        }
    }
    else if (stack && child === stack.follow) {
        if (!stackLead || stackLeadPresence === Presence.Entering) ;
        else if (stackLeadPresence === Presence.Exiting) {
            config.crossfadeOpacity = (_c = stack === null || stack === void 0 ? void 0 : stack.lead) === null || _c === void 0 ? void 0 : _c.getValue("opacity", 1);
        }
    }
    else {
        config.visibilityAction = VisibilityAction.Hide;
    }
    return config;
}

/**
 * For each layout animation, we want to identify two components
 * within a stack that will serve as the "lead" and "follow" components.
 *
 * In the switch animation, the lead component performs the entire animation.
 * It uses the follow bounding box to animate out from and back to. The follow
 * component is hidden.
 *
 * In the crossfade animation, both the lead and follow components perform
 * the entire animation, animating from the follow origin bounding box to the lead
 * target bounding box.
 *
 * Generalising a stack as First In Last Out, *searching from the end* we can
 * generally consider the lead component to be:
 *  - If the last child is present, the last child
 *  - If the last child is exiting, the last *encountered* exiting component
 */
function findLeadAndFollow(stack, _a) {
    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), prevLead = _b[0], prevFollow = _b[1];
    var lead = undefined;
    var leadIndex = 0;
    var follow = undefined;
    // Find the lead child first
    var numInStack = stack.length;
    var lastIsPresent = false;
    for (var i = numInStack - 1; i >= 0; i--) {
        var child = stack[i];
        var isLastInStack = i === numInStack - 1;
        if (isLastInStack)
            lastIsPresent = child.isPresent;
        if (lastIsPresent) {
            lead = child;
        }
        else {
            // If the child before this will be present, make this the
            // lead.
            var prev = stack[i - 1];
            if (prev && prev.isPresent)
                lead = child;
        }
        if (lead) {
            leadIndex = i;
            break;
        }
    }
    if (!lead)
        lead = stack[0];
    // Find the follow child
    follow = stack[leadIndex - 1];
    // If the lead component is exiting, find the closest follow
    // present component
    if (lead) {
        for (var i = leadIndex - 1; i >= 0; i--) {
            var child = stack[i];
            if (child.isPresent) {
                follow = child;
                break;
            }
        }
    }
    // If the lead has changed and the previous lead still exists in the
    // stack, set it to the previous lead. This allows us to differentiate between
    // a, b, c(exit) -> a, b(exit), c(exit)
    // and
    // a, b(exit), c -> a, b(exit), c(exit)
    if (lead !== prevLead &&
        !lastIsPresent &&
        follow === prevFollow &&
        stack.find(function (stackChild) { return stackChild === prevLead; })) {
        lead = prevLead;
    }
    return [lead, follow];
}
var LayoutStack = /** @class */ (function () {
    function LayoutStack() {
        this.order = [];
        // Track whether we've ever had a child
        this.hasChildren = false;
    }
    LayoutStack.prototype.add = function (child) {
        var _a;
        var layoutOrder = child.config.layoutOrder;
        if (layoutOrder === undefined) {
            this.order.push(child);
        }
        else {
            var index = this.order.findIndex(function (stackChild) {
                return layoutOrder <= (stackChild.config.layoutOrder || 0);
            });
            if (index === -1) {
                child.presence = this.hasChildren
                    ? Presence.Entering
                    : Presence.Present;
                index = this.order.length;
            }
            this.order.splice(index, 0, child);
        }
        /**
         *
         */
        // Load previous values from snapshot into this child
        // TODO Neaten up
        // TODO Double check when reimplementing move
        // TODO Add isDragging status and
        if (this.snapshot) {
            child.prevSnapshot = this.snapshot;
            // TODO Remove in favour of above
            child.prevViewportBox = this.snapshot.boundingBox;
            var latest = this.snapshot.latestMotionValues;
            for (var key in latest) {
                if (!child.hasValue(key)) {
                    child.addValue(key, motionValue(latest[key]));
                }
                else {
                    (_a = child.getValue(key)) === null || _a === void 0 ? void 0 : _a.set(latest[key]);
                }
            }
        }
        this.hasChildren = true;
    };
    LayoutStack.prototype.remove = function (child) {
        var index = this.order.findIndex(function (stackChild) { return child === stackChild; });
        if (index !== -1)
            this.order.splice(index, 1);
    };
    LayoutStack.prototype.updateLeadAndFollow = function () {
        this.prevLead = this.lead;
        this.prevFollow = this.follow;
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(findLeadAndFollow(this.order, [
            this.lead,
            this.follow,
        ]), 2), lead = _a[0], follow = _a[1];
        this.lead = lead;
        this.follow = follow;
    };
    LayoutStack.prototype.updateSnapshot = function () {
        if (!this.lead)
            return;
        var snapshot = {
            boundingBox: this.lead.prevViewportBox,
            latestMotionValues: {},
        };
        this.lead.forEachValue(function (value, key) {
            var latest = value.get();
            if (!isTransformProp(latest)) {
                snapshot.latestMotionValues[key] = latest;
            }
        });
        var dragControls = elementDragControls.get(this.lead);
        if (dragControls && dragControls.isDragging) {
            snapshot.isDragging = true;
            snapshot.cursorProgress = dragControls.cursorProgress;
        }
        this.snapshot = snapshot;
    };
    LayoutStack.prototype.isLeadPresent = function () {
        var _a;
        return this.lead && ((_a = this.lead) === null || _a === void 0 ? void 0 : _a.presence) !== Presence.Exiting;
    };
    LayoutStack.prototype.shouldStackAnimate = function () {
        return true;
        // return this.lead && this.lead?.isPresent
        //     ? this.lead?.props?._shouldAnimate === true
        //     : this.follow && this.follow?.props._shouldAnimate === true
    };
    LayoutStack.prototype.getFollowOrigin = function () {
        var _a;
        // This shouldAnimate check is quite specifically a fix for the optimisation made in Framer
        // where components are kept in the tree ready to be re-used
        return this.follow // && this.follow.shouldAnimate
            ? this.follow.prevViewportBox
            : (_a = this.snapshot) === null || _a === void 0 ? void 0 : _a.boundingBox;
    };
    LayoutStack.prototype.getFollowTarget = function () {
        var _a;
        return (_a = this.follow) === null || _a === void 0 ? void 0 : _a.box;
    };
    LayoutStack.prototype.getLeadOrigin = function () {
        var _a;
        return (_a = this.lead) === null || _a === void 0 ? void 0 : _a.prevViewportBox;
    };
    LayoutStack.prototype.getLeadTarget = function () {
        var _a;
        return (_a = this.lead) === null || _a === void 0 ? void 0 : _a.box;
    };
    LayoutStack.prototype.getLeadTransition = function () {
        var _a;
        return (_a = this.lead) === null || _a === void 0 ? void 0 : _a.config.transition;
    };
    return LayoutStack;
}());

/**
 * @public
 */
var AnimateSharedLayout = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AnimateSharedLayout, _super);
    function AnimateSharedLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * A list of all the children in the shared layout
         */
        _this.children = new Set();
        /**
         * As animate components with a defined `layoutId` are added/removed to the tree,
         * we store them in order. When one is added, it will animate out from the
         * previous one, and when it's removed, it'll animate to the previous one.
         */
        _this.stacks = new Map();
        /**
         * Track whether the component has mounted. If it hasn't, the presence of added children
         * are set to Present, whereas if it has they're considered Entering
         */
        _this.hasMounted = false;
        /**
         * Track whether we already have an update scheduled. If we don't, we'll run snapshots
         * and schedule one.
         */
        _this.updateScheduled = false;
        /**
         * Tracks whether we already have a render scheduled. If we don't, we'll force one with this.forceRender
         */
        _this.renderScheduled = false;
        /**
         * The methods provided to all children in the shared layout tree.
         */
        _this.syncContext = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, createBatcher()), { syncUpdate: function (force) { return _this.scheduleUpdate(force); }, forceUpdate: function () {
                // By copying syncContext to itself, when this component re-renders it'll also re-render
                // all children subscribed to the SharedLayout context.
                _this.syncContext = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.syncContext);
                _this.scheduleUpdate(true);
            }, register: function (child) { return _this.addChild(child); }, remove: function (child) { return _this.removeChild(child); } });
        return _this;
    }
    AnimateSharedLayout.prototype.componentDidMount = function () {
        this.hasMounted = true;
        this.updateStacks();
    };
    AnimateSharedLayout.prototype.componentDidUpdate = function () {
        this.startLayoutAnimation();
    };
    AnimateSharedLayout.prototype.shouldComponentUpdate = function () {
        this.renderScheduled = true;
        return true;
    };
    AnimateSharedLayout.prototype.startLayoutAnimation = function () {
        var _this = this;
        /**
         * Reset update and render scheduled status
         */
        this.renderScheduled = this.updateScheduled = false;
        var type = this.props.type;
        /**
         * Update presence metadata based on the latest AnimatePresence status.
         * This is a kind of goofy way of dealing with this, perhaps there's a better model to find.
         */
        this.children.forEach(function (child) {
            if (!child.isPresent) {
                child.presence = Presence.Exiting;
            }
            else if (child.presence !== Presence.Entering) {
                child.presence =
                    child.presence === Presence.Exiting
                        ? Presence.Entering
                        : Presence.Present;
            }
        });
        /**
         * In every layoutId stack, nominate a component to lead the animation and another
         * to follow
         */
        this.updateStacks();
        /**
         * Decide which animation to use between shared layoutId components
         */
        var createAnimation = type === "crossfade"
            ? createCrossfadeAnimation
            : createSwitchAnimation;
        /**
         * Create a handler which we can use to flush the children animations
         */
        var handler = {
            measureLayout: function (child) { return child.measureLayout(); },
            layoutReady: function (child) {
                var layoutId = child.layoutId;
                child.layoutReady(createAnimation(child, _this.getStack(layoutId)));
            },
        };
        /**
         * Shared layout animations can be used without the AnimateSharedLayout wrapping component.
         * This requires some co-ordination across components to stop layout thrashing
         * and ensure measurements are taken at the correct time.
         *
         * Here we use that same mechanism of schedule/flush.
         */
        this.children.forEach(function (child) { return _this.syncContext.add(child); });
        this.syncContext.flush(handler);
        /**
         * Clear snapshots so subsequent rerenders don't retain memory of outgoing components
         */
        this.stacks.forEach(function (stack) { return (stack.snapshot = undefined); });
    };
    AnimateSharedLayout.prototype.updateStacks = function () {
        this.stacks.forEach(function (stack) { return stack.updateLeadAndFollow(); });
    };
    AnimateSharedLayout.prototype.scheduleUpdate = function (force) {
        if (force === void 0) { force = false; }
        if (!(force || !this.updateScheduled))
            return;
        /**
         * Flag we've scheduled an update
         */
        this.updateScheduled = true;
        /**
         * Write: If we're supporting bounding box-distorting transforms, reset them before
         * measuring the bounding box. This is currently only supported within Framer
         * and introduces a write cycle.
         */
        if (this.props._supportRotate) {
            this.children.forEach(function (child) { return child.resetRotate(); });
        }
        /**
         * Read: Snapshot children
         */
        this.children.forEach(function (child) { return child.snapshotBoundingBox(); });
        /**
         * Every child keeps a local snapshot, but we also want to record
         * snapshots of the visible children as, if they're are being removed
         * in this render, we can still access them.
         */
        this.stacks.forEach(function (stack) { return stack.updateSnapshot(); });
        /**
         * Force a rerender by setting state if we aren't already going to render.
         */
        if (force || !this.renderScheduled) {
            this.renderScheduled = true;
            this.forceUpdate();
        }
    };
    AnimateSharedLayout.prototype.addChild = function (child) {
        this.children.add(child);
        this.addToStack(child);
        child.presence = this.hasMounted ? Presence.Entering : Presence.Present;
    };
    AnimateSharedLayout.prototype.removeChild = function (child) {
        this.scheduleUpdate();
        this.children.delete(child);
        this.removeFromStack(child);
    };
    AnimateSharedLayout.prototype.addToStack = function (child) {
        var stack = this.getStack(child.layoutId);
        stack === null || stack === void 0 ? void 0 : stack.add(child);
    };
    AnimateSharedLayout.prototype.removeFromStack = function (child) {
        var stack = this.getStack(child.layoutId);
        stack === null || stack === void 0 ? void 0 : stack.remove(child);
    };
    /**
     * Return a stack of animate children based on the provided layoutId.
     * Will create a stack if none currently exists with that layoutId.
     */
    AnimateSharedLayout.prototype.getStack = function (id) {
        if (id === undefined)
            return;
        // Create stack if it doesn't already exist
        !this.stacks.has(id) && this.stacks.set(id, new LayoutStack());
        return this.stacks.get(id);
    };
    AnimateSharedLayout.prototype.render = function () {
        return (Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SharedLayoutContext.Provider, { value: this.syncContext }, this.props.children));
    };
    return AnimateSharedLayout;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]));

/**
 * Creates a `MotionValue` to track the state and velocity of a value.
 *
 * Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
 *
 * @library
 *
 * ```jsx
 * export function MyComponent() {
 *   const scale = useMotionValue(1)
 *
 *   return <Frame scale={scale} />
 * }
 * ```
 *
 * @motion
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const scale = useMotionValue(1)
 *
 *   return <motion.div style={{ scale }} />
 * }
 * ```
 *
 * @param initial - The initial state.
 *
 * @public
 */
function useMotionValue(initial) {
    return useConstant(function () { return motionValue(initial); });
}

function useOnChange(value, callback) {
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () { return (isMotionValue(value) ? value.onChange(callback) : undefined); }, [value]);
}
function useMultiOnChange(values, handler) {
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        var subscriptions = values.map(function (value) { return value.onChange(handler); });
        return function () { return subscriptions.forEach(function (unsubscribe) { return unsubscribe(); }); };
    }, values);
}

function useCombineMotionValues(values, combineValues) {
    /**
     * Initialise the returned motion value. This remains the same between renders.
     */
    var value = useMotionValue(combineValues());
    /**
     * Create a function that will update the template motion value with the latest values.
     * This is pre-bound so whenever a motion value updates it can schedule its
     * execution in Framesync. If it's already been scheduled it won't be fired twice
     * in a single frame.
     */
    var updateValue = function () { return value.set(combineValues()); };
    /**
     * Synchronously update the motion value with the latest values during the render.
     * This ensures that within a React render, the styles applied to the DOM are up-to-date.
     */
    updateValue();
    /**
     * Subscribe to all motion values found within the template. Whenever any of them change,
     * schedule an update.
     */
    useMultiOnChange(values, function () { return framesync__WEBPACK_IMPORTED_MODULE_1__["default"].update(updateValue, false, true); });
    return value;
}

/**
 * Combine multiple motion values into a new one using a string template literal.
 *
 * ```jsx
 * import {
 *   motion,
 *   useSpring,
 *   useMotionValue,
 *   useMotionTemplate
 * } from "framer-motion"
 *
 * function Component() {
 *   const shadowX = useSpring(0)
 *   const shadowY = useMotionValue(0)
 *   const shadow = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px 20px rgba(0,0,0,0.3))`
 *
 *   return <motion.div style={{ filter: shadow }} />
 * }
 * ```
 *
 * @public
 */
function useMotionTemplate(fragments) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    /**
     * Create a function that will build a string from the latest motion values.
     */
    var numFragments = fragments.length;
    function buildValue() {
        var output = "";
        for (var i = 0; i < numFragments; i++) {
            output += fragments[i];
            var value = values[i];
            if (value)
                output += values[i].get();
        }
        return output;
    }
    return useCombineMotionValues(values, buildValue);
}

/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 *
 * @internal
 */
function resolveMotionValue(value) {
    var unwrappedValue = value instanceof MotionValue ? value.get() : value;
    return isCustomValue(unwrappedValue)
        ? unwrappedValue.toValue()
        : unwrappedValue;
}

var isCustomValueType = function (v) {
    return typeof v === "object" && v.mix;
};
var getMixer = function (v) { return (isCustomValueType(v) ? v.mix : undefined); };
function transform() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var useImmediate = !Array.isArray(args[0]);
    var argOffset = useImmediate ? 0 : -1;
    var inputValue = args[0 + argOffset];
    var inputRange = args[1 + argOffset];
    var outputRange = args[2 + argOffset];
    var options = args[3 + argOffset];
    var interpolator = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["interpolate"])(inputRange, outputRange, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ mixer: getMixer(outputRange[0]) }, options));
    return useImmediate ? interpolator(inputValue) : interpolator;
}

function useTransform(input, inputRangeOrTransformer, outputRange, options) {
    var transformer = typeof inputRangeOrTransformer === "function"
        ? inputRangeOrTransformer
        : transform(inputRangeOrTransformer, outputRange, options);
    return Array.isArray(input)
        ? useListTransform(input, transformer)
        : useListTransform([input], function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 1), latest = _b[0];
            return transformer(latest);
        });
}
function useListTransform(values, transformer) {
    var latest = useConstant(function () { return []; });
    return useCombineMotionValues(values, function () {
        latest.length = 0;
        var numValues = values.length;
        for (var i = 0; i < numValues; i++) {
            latest[i] = values[i].get();
        }
        return transformer(latest);
    });
}

// Keep things reasonable and avoid scale: Infinity. In practise we might need
// to add another value, opacity, that could interpolate scaleX/Y [0,0.01] => [0,1]
// to simply hide content at unreasonable scales.
var maxScale = 100000;
var invertScale = function (scale) {
    return scale > 0.001 ? 1 / scale : maxScale;
};
/**
 * Returns a `MotionValue` each for `scaleX` and `scaleY` that update with the inverse
 * of their respective parent scales.
 *
 * This is useful for undoing the distortion of content when scaling a parent component.
 *
 * By default, `useInvertedScale` will automatically fetch `scaleX` and `scaleY` from the nearest parent.
 * By passing other `MotionValue`s in as `useInvertedScale({ scaleX, scaleY })`, it will invert the output
 * of those instead.
 *
 * @motion
 *
 * ```jsx
 * const MyComponent = () => {
 *   const { scaleX, scaleY } = useInvertedScale()
 *   return <motion.div style={{ scaleX, scaleY }} />
 * }
 * ```
 *
 * @library
 *
 * ```jsx
 * function MyComponent() {
 *   const { scaleX, scaleY } = useInvertedScale()
 *   return <Frame scaleX={scaleX} scaleY={scaleY} />
 * }
 * ```
 *
 * @deprecated
 */
var hasWarned = false;
function useInvertedScale(scale) {
    var parentScaleX = useMotionValue(1);
    var parentScaleY = useMotionValue(1);
    var visualElement = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(MotionContext).visualElement;
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(!!(scale || visualElement), "If no scale values are provided, useInvertedScale must be used within a child of another motion component.");
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["warning"])(hasWarned, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead.");
    hasWarned = true;
    if (scale) {
        parentScaleX = scale.scaleX || parentScaleX;
        parentScaleY = scale.scaleY || parentScaleY;
    }
    else if (visualElement) {
        parentScaleX = visualElement.getValue("scaleX", 1);
        parentScaleY = visualElement.getValue("scaleY", 1);
    }
    var scaleX = useTransform(parentScaleX, invertScale);
    var scaleY = useTransform(parentScaleY, invertScale);
    return { scaleX: scaleX, scaleY: scaleY };
}

/**
 * Creates a `MotionValue` that, when `set`, will use a spring animation to animate to its new state.
 *
 * It can either work as a stand-alone `MotionValue` by initialising it with a value, or as a subscriber
 * to another `MotionValue`.
 *
 * @remarks
 *
 * ```jsx
 * const x = useSpring(0, { stiffness: 300 })
 * const y = useSpring(x, { damping: 10 })
 * ```
 *
 * @param inputValue - `MotionValue` or number. If provided a `MotionValue`, when the input `MotionValue` changes, the created `MotionValue` will spring towards that value.
 * @param springConfig - Configuration options for the spring.
 * @returns `MotionValue`
 *
 * @public
 */
function useSpring(source, config) {
    if (config === void 0) { config = {}; }
    var activeSpringAnimation = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
    var value = useMotionValue(isMotionValue(source) ? source.get() : source);
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
        return value.attach(function (v, set) {
            if (activeSpringAnimation.current) {
                activeSpringAnimation.current.stop();
            }
            activeSpringAnimation.current = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["animate"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ from: value.get(), to: v, velocity: value.getVelocity() }, config), { onUpdate: set }));
            return value.get();
        });
    }, Object.values(config));
    useOnChange(source, function (v) { return value.set(parseFloat(v)); });
    return value;
}

function createScrollMotionValues() {
    return {
        scrollX: motionValue(0),
        scrollY: motionValue(0),
        scrollXProgress: motionValue(0),
        scrollYProgress: motionValue(0),
    };
}
function setProgress(offset, maxOffset, value) {
    value.set(!offset || !maxOffset ? 0 : offset / maxOffset);
}
function createScrollUpdater(values, getOffsets) {
    var update = function () {
        var _a = getOffsets(), xOffset = _a.xOffset, yOffset = _a.yOffset, xMaxOffset = _a.xMaxOffset, yMaxOffset = _a.yMaxOffset;
        // Set absolute positions
        values.scrollX.set(xOffset);
        values.scrollY.set(yOffset);
        // Set 0-1 progress
        setProgress(xOffset, xMaxOffset, values.scrollXProgress);
        setProgress(yOffset, yMaxOffset, values.scrollYProgress);
    };
    update();
    return update;
}

var getElementScrollOffsets = function (element) { return function () {
    return {
        xOffset: element.scrollLeft,
        yOffset: element.scrollTop,
        xMaxOffset: element.scrollWidth - element.offsetWidth,
        yMaxOffset: element.scrollHeight - element.offsetHeight,
    };
}; };
/**
 * Returns MotionValues that update when the provided element scrolls:
 *
 * - `scrollX` — Horizontal scroll distance in pixels.
 * - `scrollY` — Vertical scroll distance in pixels.
 * - `scrollXProgress` — Horizontal scroll progress between `0` and `1`.
 * - `scrollYProgress` — Vertical scroll progress between `0` and `1`.
 *
 * This element must be set to `overflow: scroll` on either or both axes to report scroll offset.
 *
 * @library
 *
 * ```jsx
 * import * as React from "react"
 * import {
 *   Frame,
 *   useElementScroll,
 *   useTransform
 * } from "framer"
 *
 * export function MyComponent() {
 *   const ref = React.useRef()
 *   const { scrollYProgress } = useElementScroll(ref)
 *
 *   return (
 *     <Frame ref={ref}>
 *       <Frame scaleX={scrollYProgress} />
 *     </Frame>
 *   )
 * }
 * ```
 *
 * @motion
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const ref = useRef()
 *   const { scrollYProgress } = useElementScroll(ref)
 *
 *   return (
 *     <div ref={ref}>
 *       <motion.div style={{ scaleX: scrollYProgress }} />
 *     </div>
 *   )
 * }
 * ```
 *
 * @public
 */
function useElementScroll(ref) {
    var values = useConstant(createScrollMotionValues);
    useIsomorphicLayoutEffect(function () {
        var element = ref.current;
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(!!element, "ref provided to useScroll must be passed into a HTML element.");
        if (!element)
            return;
        var updateScrollValues = createScrollUpdater(values, getElementScrollOffsets(element));
        var scrollListener = addDomEvent(element, "scroll", updateScrollValues, { passive: true });
        var resizeListener = addDomEvent(element, "resize", updateScrollValues);
        return function () {
            scrollListener && scrollListener();
            resizeListener && resizeListener();
        };
    }, []);
    return values;
}

var viewportScrollValues = createScrollMotionValues();
function getViewportScrollOffsets() {
    return {
        xOffset: window.pageXOffset,
        yOffset: window.pageYOffset,
        xMaxOffset: document.body.clientWidth - window.innerWidth,
        yMaxOffset: document.body.clientHeight - window.innerHeight,
    };
}
var hasListeners = false;
function addEventListeners() {
    hasListeners = true;
    if (typeof window === "undefined")
        return;
    var updateScrollValues = createScrollUpdater(viewportScrollValues, getViewportScrollOffsets);
    addDomEvent(window, "scroll", updateScrollValues, { passive: true });
    addDomEvent(window, "resize", updateScrollValues);
}
/**
 * Returns MotionValues that update when the viewport scrolls:
 *
 * - `scrollX` — Horizontal scroll distance in pixels.
 * - `scrollY` — Vertical scroll distance in pixels.
 * - `scrollXProgress` — Horizontal scroll progress between `0` and `1`.
 * - `scrollYProgress` — Vertical scroll progress between `0` and `1`.
 *
 * @library
 *
 * ```jsx
 * import * as React from "react"
 * import {
 *   Frame,
 *   useViewportScroll,
 *   useTransform
 * } from "framer"
 *
 * export function MyComponent() {
 *   const { scrollYProgress } = useViewportScroll()
 *   return <Frame scaleX={scrollYProgress} />
 * }
 * ```
 *
 * @motion
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const { scrollYProgress } = useViewportScroll()
 *   return <motion.div style={{ scaleX: scrollYProgress }} />
 * }
 * ```
 *
 * @public
 */
function useViewportScroll() {
    useIsomorphicLayoutEffect(function () {
        !hasListeners && addEventListeners();
    }, []);
    return viewportScrollValues;
}

/**
 * Creates `AnimationControls`, which can be used to manually start, stop
 * and sequence animations on one or more components.
 *
 * The returned `AnimationControls` should be passed to the `animate` property
 * of the components you want to animate.
 *
 * These components can then be animated with the `start` method.
 *
 * @library
 *
 * ```jsx
 * import * as React from 'react'
 * import { Frame, useAnimation } from 'framer'
 *
 * export function MyComponent(props) {
 *    const controls = useAnimation()
 *
 *    controls.start({
 *        x: 100,
 *        transition: { duration: 0.5 },
 *    })
 *
 *    return <Frame animate={controls} />
 * }
 * ```
 *
 * @motion
 *
 * ```jsx
 * import * as React from 'react'
 * import { motion, useAnimation } from 'framer-motion'
 *
 * export function MyComponent(props) {
 *    const controls = useAnimation()
 *
 *    controls.start({
 *        x: 100,
 *        transition: { duration: 0.5 },
 *    })
 *
 *    return <motion.div animate={controls} />
 * }
 * ```
 *
 * @returns Animation controller with `start` and `stop` methods
 *
 * @public
 */
function useAnimation() {
    var animationControls = useConstant(function () { return new AnimationControls(); });
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        animationControls.mount();
        return function () { return animationControls.unmount(); };
    }, []);
    return animationControls;
}

/**
 * Cycles through a series of visual properties. Can be used to toggle between or cycle through animations. It works similar to `useState` in React. It is provided an initial array of possible states, and returns an array of two arguments.
 *
 * @library
 *
 * ```jsx
 * import * as React from "react"
 * import { Frame, useCycle } from "framer"
 *
 * export function MyComponent() {
 *   const [x, cycleX] = useCycle(0, 50, 100)
 *
 *   return (
 *     <Frame
 *       animate={{ x: x }}
 *       onTap={() => cycleX()}
 *      />
 *    )
 * }
 * ```
 *
 * @motion
 *
 * An index value can be passed to the returned `cycle` function to cycle to a specific index.
 *
 * ```jsx
 * import * as React from "react"
 * import { motion, useCycle } from "framer-motion"
 *
 * export const MyComponent = () => {
 *   const [x, cycleX] = useCycle(0, 50, 100)
 *
 *   return (
 *     <motion.div
 *       animate={{ x: x }}
 *       onTap={() => cycleX()}
 *      />
 *    )
 * }
 * ```
 *
 * @param items - items to cycle through
 * @returns [currentState, cycleState]
 *
 * @public
 */
function useCycle() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    // TODO: After Framer X beta, remove this warning
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["warning"])(items.length > 1, "useCycle syntax has changed. `useCycle([0, 1, 2])` becomes `useCycle(0, 1, 2)`");
    var index = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(0);
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(items[index.current]), 2), item = _a[0], setItem = _a[1];
    return [
        item,
        function (next) {
            index.current =
                typeof next !== "number"
                    ? Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["wrap"])(0, items.length, index.current + 1)
                    : next;
            setItem(items[index.current]);
        },
    ];
}

// Does this device prefer reduced motion? Returns `null` server-side.
var prefersReducedMotion = motionValue(null);
if (typeof window !== "undefined") {
    if (window.matchMedia) {
        var motionMediaQuery_1 = window.matchMedia("(prefers-reduced-motion)");
        var setReducedMotionPreferences = function () {
            return prefersReducedMotion.set(motionMediaQuery_1.matches);
        };
        motionMediaQuery_1.addListener(setReducedMotionPreferences);
        setReducedMotionPreferences();
    }
    else {
        prefersReducedMotion.set(false);
    }
}
function determineShouldReduceMotion(prefersReduced, isReducedMotion) {
    return typeof isReducedMotion === "boolean"
        ? isReducedMotion
        : Boolean(prefersReduced);
}
/**
 * A hook that returns `true` if we should be using reduced motion based on the current device's Reduced Motion setting.
 *
 * This can be used to implement changes to your UI based on Reduced Motion. For instance, replacing motion-sickness inducing
 * `x`/`y` animations with `opacity`, disabling the autoplay of background videos, or turning off parallax motion.
 *
 * It will actively respond to changes and re-render your components with the latest setting.
 *
 * ```jsx
 * export function Sidebar({ isOpen }) {
 *   const shouldReduceMotion = useReducedMotion()
 *   const closedX = shouldReduceMotion ? 0 : "-100%"
 *
 *   return (
 *     <motion.div animate={{
 *       opacity: isOpen ? 1 : 0,
 *       x: isOpen ? 0 : closedX
 *     }} />
 *   )
 * }
 * ```
 *
 * @return boolean
 *
 * @public
 */
function useReducedMotion() {
    var isReducedMotion = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(MotionContext).isReducedMotion;
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(determineShouldReduceMotion(prefersReducedMotion.get(), isReducedMotion)), 2), shouldReduceMotion = _a[0], setShouldReduceMotion = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        return prefersReducedMotion.onChange(function (v) {
            setShouldReduceMotion(determineShouldReduceMotion(v, isReducedMotion));
        });
    }, [setShouldReduceMotion, isReducedMotion]);
    return shouldReduceMotion;
}

/**
 * Define accessibility options for a tree. Can be used to force the tree into Reduced Motion mode,
 * or disable device detection.
 *
 * @internal
 */
function ReducedMotion(_a) {
    var children = _a.children, enabled = _a.enabled;
    var context = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(MotionContext);
    context = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), { isReducedMotion: enabled })); }, [enabled]);
    return (Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(MotionContext.Provider, { value: context }, children));
}

/**
 * Can manually trigger a drag gesture on one or more `drag`-enabled `motion` components.
 *
 * @library
 *
 * ```jsx
 * const dragControls = useDragControls()
 *
 * function startDrag(event) {
 *   dragControls.start(event, { snapToCursor: true })
 * }
 *
 * return (
 *   <>
 *     <Frame onTapStart={startDrag} />
 *     <Frame drag="x" dragControls={dragControls} />
 *   </>
 * )
 * ```
 *
 * @motion
 *
 * ```jsx
 * const dragControls = useDragControls()
 *
 * function startDrag(event) {
 *   dragControls.start(event, { snapToCursor: true })
 * }
 *
 * return (
 *   <>
 *     <div onPointerDown={startDrag} />
 *     <motion.div drag="x" dragControls={dragControls} />
 *   </>
 * )
 * ```
 *
 * @public
 */
var DragControls = /** @class */ (function () {
    function DragControls() {
        this.componentControls = new Set();
    }
    /**
     * Subscribe a component's internal `VisualElementDragControls` to the user-facing API.
     *
     * @internal
     */
    DragControls.prototype.subscribe = function (controls) {
        var _this = this;
        this.componentControls.add(controls);
        return function () { return _this.componentControls.delete(controls); };
    };
    /**
     * Start a drag gesture on every `motion` component that has this set of drag controls
     * passed into it via the `dragControls` prop.
     *
     * ```jsx
     * dragControls.start(e, {
     *   snapToCursor: true
     * })
     * ```
     *
     * @param event - A mouse/touch/pointer event.
     * @param options - Options
     *
     * @public
     */
    DragControls.prototype.start = function (event, options) {
        this.componentControls.forEach(function (controls) {
            controls.start(event.nativeEvent || event, options);
        });
    };
    return DragControls;
}());
var createDragControls = function () { return new DragControls(); };
/**
 * Usually, dragging is initiated by pressing down on a `motion` component with a `drag` prop
 * and moving it. For some use-cases, for instance clicking at an arbitrary point on a video scrubber, we
 * might want to initiate that dragging from a different component than the draggable one.
 *
 * By creating a `dragControls` using the `useDragControls` hook, we can pass this into
 * the draggable component's `dragControls` prop. It exposes a `start` method
 * that can start dragging from pointer events on other components.
 *
 * @library
 *
 * ```jsx
 * const dragControls = useDragControls()
 *
 * function startDrag(event) {
 *   dragControls.start(event, { snapToCursor: true })
 * }
 *
 * return (
 *   <>
 *     <Frame onTapStart={startDrag} />
 *     <Frame drag="x" dragControls={dragControls} />
 *   </>
 * )
 * ```
 *
 * @motion
 *
 * ```jsx
 * const dragControls = useDragControls()
 *
 * function startDrag(event) {
 *   dragControls.start(event, { snapToCursor: true })
 * }
 *
 * return (
 *   <>
 *     <div onPointerDown={startDrag} />
 *     <motion.div drag="x" dragControls={dragControls} />
 *   </>
 * )
 * ```
 *
 * @public
 */
function useDragControls() {
    return useConstant(createDragControls);
}

/**
 * Uses the ref that is passed in, or creates a new one
 * @param external - External ref
 * @internal
 */
function useExternalRef(externalRef) {
    // We're conditionally calling `useRef` here which is sort of naughty as hooks
    // shouldn't be called conditionally. However, Framer Motion will break if this
    // condition changes anyway. It might be possible to use an invariant here to
    // make it explicit, but I expect changing `ref` is not normal behaviour.
    var ref = !externalRef || typeof externalRef === "function"
        ? Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null)
        : externalRef;
    // Handle `ref` functions. Again, calling the hook conditionally is kind of naughty
    // but `ref` types changing between renders would break Motion anyway. If we receive
    // bug reports about this, we should track the provided ref and throw an invariant
    // rather than move the conditional to inside the useEffect as this will be fired
    // for every Frame component within Framer.
    if (externalRef && typeof externalRef === "function") {
        Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
            externalRef(ref.current);
            return function () { return externalRef(null); };
        }, []);
    }
    return ref;
}

/**
 * This is just a very basic VisualElement, more of a hack to keep supporting useAnimatedState with
 * the latest APIs.
 */
var StateVisualElement = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StateVisualElement, _super);
    function StateVisualElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.initialState = {};
        return _this;
    }
    StateVisualElement.prototype.updateLayoutDelta = function () { };
    StateVisualElement.prototype.build = function () { };
    StateVisualElement.prototype.clean = function () { };
    StateVisualElement.prototype.getBoundingBox = function () {
        return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
    };
    StateVisualElement.prototype.readNativeValue = function (key) {
        return this.initialState[key] || 0;
    };
    StateVisualElement.prototype.render = function () {
        this.build();
    };
    return StateVisualElement;
}(VisualElement));
/**
 * This is not an officially supported API and may be removed
 * on any version.
 * @internal
 */
function useAnimatedState(initialState) {
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(initialState), 2), animationState = _a[0], setAnimationState = _a[1];
    var visualElement = useConstant(function () { return new StateVisualElement(); });
    visualElement.updateConfig({
        onUpdate: function (v) { return setAnimationState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, v)); },
    });
    visualElement.initialState = initialState;
    var controls = useVisualElementAnimation(visualElement, {}, {});
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        visualElement.mount({});
        return function () { return visualElement.unmount(); };
    }, []);
    var startAnimation = useConstant(function () { return function (animationDefinition) {
        return controls.start(animationDefinition);
    }; });
    return [animationState, startAnimation];
}




/***/ }),

/***/ "./node_modules/framesync/dist/framesync.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/framesync/dist/framesync.es.js ***!
  \*****************************************************/
/*! exports provided: default, cancelSync, getFrameData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelSync", function() { return cancelSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFrameData", function() { return getFrameData; });
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");


var prevTime = 0;
var onNextFrame = typeof window !== 'undefined' && window.requestAnimationFrame !== undefined ? function (callback) {
    return window.requestAnimationFrame(callback);
} : function (callback) {
    var timestamp = Date.now();
    var timeToCall = Math.max(0, 16.7 - (timestamp - prevTime));
    prevTime = timestamp + timeToCall;
    setTimeout(function () {
        return callback(prevTime);
    }, timeToCall);
};

var createStep = function (setRunNextFrame) {
    var processToRun = [];
    var processToRunNextFrame = [];
    var numThisFrame = 0;
    var isProcessing = false;
    var i = 0;
    var cancelled = new WeakSet();
    var toKeepAlive = new WeakSet();
    var renderStep = {
        cancel: function (process) {
            var indexOfCallback = processToRunNextFrame.indexOf(process);
            cancelled.add(process);
            if (indexOfCallback !== -1) {
                processToRunNextFrame.splice(indexOfCallback, 1);
            }
        },
        process: function (frame) {
            var _a;
            isProcessing = true;
            _a = [processToRunNextFrame, processToRun], processToRun = _a[0], processToRunNextFrame = _a[1];
            processToRunNextFrame.length = 0;
            numThisFrame = processToRun.length;
            if (numThisFrame) {
                var process_1;
                for (i = 0; i < numThisFrame; i++) {
                    process_1 = processToRun[i];
                    process_1(frame);
                    if (toKeepAlive.has(process_1) === true && !cancelled.has(process_1)) {
                        renderStep.schedule(process_1);
                        setRunNextFrame(true);
                    }
                }
            }
            isProcessing = false;
        },
        schedule: function (process, keepAlive, immediate) {
            if (keepAlive === void 0) {
                keepAlive = false;
            }
            if (immediate === void 0) {
                immediate = false;
            }
            Object(hey_listen__WEBPACK_IMPORTED_MODULE_0__["invariant"])(typeof process === "function", "Argument must be a function");
            var addToCurrentBuffer = immediate && isProcessing;
            var buffer = addToCurrentBuffer ? processToRun : processToRunNextFrame;
            cancelled.delete(process);
            if (keepAlive) toKeepAlive.add(process);
            if (buffer.indexOf(process) === -1) {
                buffer.push(process);
                if (addToCurrentBuffer) numThisFrame = processToRun.length;
            }
        }
    };
    return renderStep;
};

var maxElapsed = 40;
var defaultElapsed = 1 / 60 * 1000;
var useDefaultElapsed = true;
var willRunNextFrame = false;
var isProcessing = false;
var frame = {
    delta: 0,
    timestamp: 0
};
var stepsOrder = ["read", "update", "preRender", "render", "postRender"];
var setWillRunNextFrame = function (willRun) {
    return willRunNextFrame = willRun;
};
var steps = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
    acc[key] = createStep(setWillRunNextFrame);
    return acc;
}, {});
var sync = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
    var step = steps[key];
    acc[key] = function (process, keepAlive, immediate) {
        if (keepAlive === void 0) {
            keepAlive = false;
        }
        if (immediate === void 0) {
            immediate = false;
        }
        if (!willRunNextFrame) startLoop();
        step.schedule(process, keepAlive, immediate);
        return process;
    };
    return acc;
}, {});
var cancelSync = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
    acc[key] = steps[key].cancel;
    return acc;
}, {});
var processStep = function (stepId) {
    return steps[stepId].process(frame);
};
var processFrame = function (timestamp) {
    willRunNextFrame = false;
    frame.delta = useDefaultElapsed ? defaultElapsed : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
    if (!useDefaultElapsed) defaultElapsed = frame.delta;
    frame.timestamp = timestamp;
    isProcessing = true;
    stepsOrder.forEach(processStep);
    isProcessing = false;
    if (willRunNextFrame) {
        useDefaultElapsed = false;
        onNextFrame(processFrame);
    }
};
var startLoop = function () {
    willRunNextFrame = true;
    useDefaultElapsed = true;
    if (!isProcessing) onNextFrame(processFrame);
};
var getFrameData = function () {
    return frame;
};

/* harmony default export */ __webpack_exports__["default"] = (sync);



/***/ }),

/***/ "./node_modules/hey-listen/dist/hey-listen.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/hey-listen/dist/hey-listen.es.js ***!
  \*******************************************************/
/*! exports provided: invariant, warning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
var warning = function () { };
var invariant = function () { };
if (true) {
    warning = function (check, message) {
        if (!check && typeof console !== 'undefined') {
            console.warn(message);
        }
    };
    invariant = function (check, message) {
        if (!check) {
            throw new Error(message);
        }
    };
}




/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CWorkspace%5CProjects%5Cmy-portfolio%5Cpages%5Cindex.tsx!./":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CWorkspace%5CProjects%5Cmy-portfolio%5Cpages%5Cindex.tsx ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.tsx */ "./pages/index.tsx")
      if(true) {
        module.hot.accept(/*! ./pages/index.tsx */ "./pages/index.tsx", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.tsx */ "./pages/index.tsx")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

if (true) {
  exports.AmpStateContext.displayName = 'AmpStateContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1["default"].useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

if (true) {
  exports.HeadManagerContext.displayName = 'HeadManagerContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [react_1["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1["default"].Fragment) {
    return list.concat(react_1["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElements List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1["default"].Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return react_1["default"].cloneElement(c, {
      key: key
    });
  });
}

var Effect = side_effect_1["default"]();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head(_ref) {
  var children = _ref.children;
  return react_1["default"].createElement(amp_context_1.AmpStateContext.Consumer, null, function (ampState) {
    return react_1["default"].createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1["default"].createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: amp_1.isInAmpMode(ampState)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports["default"] = Head;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

exports["default"] = function () {
  var mountedInstances = new Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return /*#__PURE__*/function (_react_1$Component) {
    _inherits(_class, _react_1$Component);

    var _super = _createSuper(_class);

    _createClass(_class, null, [{
      key: "rewind",
      // Used when server rendering
      value: function rewind() {
        var recordedState = state;
        state = undefined;
        mountedInstances.clear();
        return recordedState;
      }
    }]);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this, props);

      if (isServer) {
        mountedInstances.add(_assertThisInitialized(_this));
        emitChange(_assertThisInitialized(_this));
      }

      return _this;
    }

    _createClass(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        mountedInstances.add(this);
        emitChange(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        emitChange(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        mountedInstances["delete"](this);
        emitChange(this);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return _class;
  }(react_1.Component);
};

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/performance-now/lib/performance-now.js":
/*!*************************************************************!*\
  !*** ./node_modules/performance-now/lib/performance-now.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/popmotion/dist/popmotion.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/popmotion/dist/popmotion.es.js ***!
  \*****************************************************/
/*! exports provided: DecayAnimator, KeyframesAnimator, SpringAnimator, angle, animate, anticipate, applyOffset, attract, attractExpo, backIn, backInOut, backOut, bounceIn, bounceInOut, bounceOut, circIn, circInOut, circOut, clamp, createAnticipate, createAttractor, createBackIn, createExpoIn, cubicBezier, degreesToRadians, distance, easeIn, easeInOut, easeOut, inertia, interpolate, isPoint, isPoint3D, linear, mirrorEasing, mix, mixColor, mixComplex, pipe, pointFromVector, progress, radiansToDegrees, reverseEasing, smooth, smoothFrame, snap, steps, toDecimal, velocityPerFrame, velocityPerSecond, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecayAnimator", function() { return DecayAnimator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyframesAnimator", function() { return KeyframesAnimator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpringAnimator", function() { return SpringAnimator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anticipate", function() { return anticipate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyOffset", function() { return applyOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attract", function() { return attract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attractExpo", function() { return attractExpo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backIn", function() { return backIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backInOut", function() { return backInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backOut", function() { return backOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceIn", function() { return bounceIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInOut", function() { return bounceInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOut", function() { return bounceOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circIn", function() { return circIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circInOut", function() { return circInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circOut", function() { return circOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAnticipate", function() { return createAnticipate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAttractor", function() { return createAttractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBackIn", function() { return createBackIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExpoIn", function() { return createExpoIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicBezier", function() { return cubicBezier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degreesToRadians", function() { return degreesToRadians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeIn", function() { return easeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOut", function() { return easeInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOut", function() { return easeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inertia", function() { return inertia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPoint", function() { return isPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPoint3D", function() { return isPoint3D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mirrorEasing", function() { return mirrorEasing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return mix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixColor", function() { return mixColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixComplex", function() { return mixComplex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointFromVector", function() { return pointFromVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progress", function() { return progress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radiansToDegrees", function() { return radiansToDegrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverseEasing", function() { return reverseEasing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smooth", function() { return smooth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothFrame", function() { return smoothFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snap", function() { return snap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "steps", function() { return steps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDecimal", function() { return toDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "velocityPerFrame", function() { return velocityPerFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "velocityPerSecond", function() { return velocityPerSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/style-value-types.es.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/framesync.es.js");





var SpringAnimator = /*#__PURE__*/function () {
    function SpringAnimator(options) {
        this.isComplete = false;
        this.updateOptions(options);
        this.createSpring();
    }
    SpringAnimator.prototype.createSpring = function () {
        var _a = this.options,
            velocity = _a.velocity,
            from = _a.from,
            to = _a.to,
            damping = _a.damping,
            stiffness = _a.stiffness,
            mass = _a.mass;
        var initialVelocity = velocity ? -(velocity / 1000) : 0.0;
        var initialDelta = to - from;
        var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
        var angularFreq = Math.sqrt(stiffness / mass) / 1000;
        if (dampingRatio < 1) {
            this.resolveSpring = function (t) {
                var envelope = Math.exp(-dampingRatio * angularFreq * t);
                var expoDecay = angularFreq * Math.sqrt(1.0 - dampingRatio * dampingRatio);
                return to - envelope * ((initialVelocity + dampingRatio * angularFreq * initialDelta) / expoDecay * Math.sin(expoDecay * t) + initialDelta * Math.cos(expoDecay * t));
            };
            this.resolveVelocity = function (t) {
                var envelope = Math.exp(-dampingRatio * angularFreq * t);
                var expoDecay = angularFreq * Math.sqrt(1.0 - dampingRatio * dampingRatio);
                return dampingRatio * angularFreq * envelope * (Math.sin(expoDecay * t) * (initialVelocity + dampingRatio * angularFreq * initialDelta) / expoDecay + initialDelta * Math.cos(expoDecay * t)) - envelope * (Math.cos(expoDecay * t) * (initialVelocity + dampingRatio * angularFreq * initialDelta) - expoDecay * initialDelta * Math.sin(expoDecay * t));
            };
        } else if (dampingRatio === 1) {
            this.resolveSpring = function (t) {
                var envelope = Math.exp(-angularFreq * t);
                return to - envelope * (initialDelta + (initialVelocity + angularFreq * initialDelta) * t);
            };
            this.resolveVelocity = function () {
                return 0;
            };
        } else {
            var dampedAngularFreq_1 = angularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
            this.resolveSpring = function (t) {
                var envelope = Math.exp(-dampingRatio * angularFreq * t);
                return to - envelope * ((initialVelocity + dampingRatio * angularFreq * initialDelta) * Math.sinh(dampedAngularFreq_1 * t) + dampedAngularFreq_1 * initialDelta * Math.cosh(dampedAngularFreq_1 * t)) / dampedAngularFreq_1;
            };
            this.resolveVelocity = function () {
                return 0;
            };
        }
    };
    SpringAnimator.prototype.update = function (t) {
        var _a = this.options,
            restSpeed = _a.restSpeed,
            restDelta = _a.restDelta,
            to = _a.to;
        var latest = this.resolveSpring(t);
        var velocity = this.resolveVelocity(t) * 1000;
        var isBelowVelocityThreshold = Math.abs(velocity) <= restSpeed;
        var isBelowDisplacementThreshold = Math.abs(to - latest) <= restDelta;
        this.isComplete = isBelowVelocityThreshold && isBelowDisplacementThreshold;
        return this.isComplete ? to : latest;
    };
    SpringAnimator.prototype.updateOptions = function (_a) {
        var _b = _a.from,
            from = _b === void 0 ? 0.0 : _b,
            _c = _a.to,
            to = _c === void 0 ? 0.0 : _c,
            _d = _a.velocity,
            velocity = _d === void 0 ? 0.0 : _d,
            _e = _a.stiffness,
            stiffness = _e === void 0 ? 100 : _e,
            _f = _a.damping,
            damping = _f === void 0 ? 10 : _f,
            _g = _a.mass,
            mass = _g === void 0 ? 1.0 : _g,
            _h = _a.restSpeed,
            restSpeed = _h === void 0 ? 2 : _h,
            restDelta = _a.restDelta;
        if (restDelta === undefined) {
            restDelta = Math.abs(to - from) <= 1 ? 0.01 : 0.4;
        }
        this.options = {
            from: from,
            to: to,
            velocity: velocity,
            stiffness: stiffness,
            damping: damping,
            mass: mass,
            restSpeed: restSpeed,
            restDelta: restDelta
        };
    };
    SpringAnimator.prototype.flipTarget = function () {
        var _a = this.options,
            from = _a.from,
            to = _a.to,
            velocity = _a.velocity;
        this.options.velocity = -velocity;
        this.options.from = to;
        this.options.to = from;
        this.createSpring();
    };
    SpringAnimator.needsInterpolation = function (from, to) {
        return typeof from === "string" || typeof to === "string";
    };
    SpringAnimator.uniqueOptionKeys = /*#__PURE__*/new Set(["velocity", "stiffness", "damping", "mass", "restSpeed", "restDelta"]);
    return SpringAnimator;
}();

var progress = function (from, to, value) {
    var toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

var mix = function (from, to, progress) {
    return -progress * from + progress * to + from;
};

var mixLinearColor = function (from, to, v) {
    var fromExpo = from * from;
    var toExpo = to * to;
    return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};
var colorTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_1__["hex"], style_value_types__WEBPACK_IMPORTED_MODULE_1__["rgba"], style_value_types__WEBPACK_IMPORTED_MODULE_1__["hsla"]];
var getColorType = function (v) {
    return colorTypes.find(function (type) {
        return type.test(v);
    });
};
var notAnimatable = function (color) {
    return "'" + color + "' is not an animatable color. Use the equivalent color code instead.";
};
var mixColor = function (from, to) {
    var fromColorType = getColorType(from);
    var toColorType = getColorType(to);
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_2__["invariant"])(!!fromColorType, notAnimatable(from));
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_2__["invariant"])(!!toColorType, notAnimatable(to));
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_2__["invariant"])(fromColorType.transform === toColorType.transform, 'Both colors must be hex/RGBA, OR both must be HSLA.');
    var fromColor = fromColorType.parse(from);
    var toColor = toColorType.parse(to);
    var blended = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fromColor);
    var mixFunc = fromColorType === style_value_types__WEBPACK_IMPORTED_MODULE_1__["hsla"] ? mix : mixLinearColor;
    return function (v) {
        for (var key in blended) {
            if (key !== 'alpha') {
                blended[key] = mixFunc(fromColor[key], toColor[key], v);
            }
        }
        blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
        return fromColorType.transform(blended);
    };
};

var zeroPoint = {
    x: 0,
    y: 0,
    z: 0
};
var isNum = function (v) {
    return typeof v === 'number';
};

var combineFunctions = function (a, b) {
    return function (v) {
        return b(a(v));
    };
};
var pipe = function () {
    var transformers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        transformers[_i] = arguments[_i];
    }
    return transformers.reduce(combineFunctions);
};

function getMixer(origin, target) {
    if (isNum(origin)) {
        return function (v) {
            return mix(origin, target, v);
        };
    } else if (style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"].test(origin)) {
        return mixColor(origin, target);
    } else {
        return mixComplex(origin, target);
    }
}
var mixArray = function (from, to) {
    var output = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(from);
    var numValues = output.length;
    var blendValue = from.map(function (fromThis, i) {
        return getMixer(fromThis, to[i]);
    });
    return function (v) {
        for (var i = 0; i < numValues; i++) {
            output[i] = blendValue[i](v);
        }
        return output;
    };
};
var mixObject = function (origin, target) {
    var output = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, origin), target);
    var blendValue = {};
    for (var key in output) {
        if (origin[key] !== undefined && target[key] !== undefined) {
            blendValue[key] = getMixer(origin[key], target[key]);
        }
    }
    return function (v) {
        for (var key in blendValue) {
            output[key] = blendValue[key](v);
        }
        return output;
    };
};
function analyse(value) {
    var parsed = style_value_types__WEBPACK_IMPORTED_MODULE_1__["complex"].parse(value);
    var numValues = parsed.length;
    var numNumbers = 0;
    var numRGB = 0;
    var numHSL = 0;
    for (var i = 0; i < numValues; i++) {
        if (numNumbers || typeof parsed[i] === 'number') {
            numNumbers++;
        } else {
            if (parsed[i].hue !== undefined) {
                numHSL++;
            } else {
                numRGB++;
            }
        }
    }
    return { parsed: parsed, numNumbers: numNumbers, numRGB: numRGB, numHSL: numHSL };
}
var mixComplex = function (origin, target) {
    var template = style_value_types__WEBPACK_IMPORTED_MODULE_1__["complex"].createTransformer(target);
    var originStats = analyse(origin);
    var targetStats = analyse(target);
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_2__["invariant"])(originStats.numHSL === targetStats.numHSL && originStats.numRGB === targetStats.numRGB && originStats.numNumbers >= targetStats.numNumbers, "Complex values '" + origin + "' and '" + target + "' too different to mix. Ensure all colors are of the same type.");
    return pipe(mixArray(originStats.parsed, targetStats.parsed), template);
};

var clamp = function (min, max, v) {
    return Math.min(Math.max(v, min), max);
};

var mixNumber = function (from, to) {
    return function (p) {
        return mix(from, to, p);
    };
};
function detectMixerFactory(v) {
    if (typeof v === 'number') {
        return mixNumber;
    } else if (typeof v === 'string') {
        if (style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"].test(v)) {
            return mixColor;
        } else {
            return mixComplex;
        }
    } else if (Array.isArray(v)) {
        return mixArray;
    } else if (typeof v === 'object') {
        return mixObject;
    }
}
function createMixers(output, ease, customMixer) {
    var mixers = [];
    var mixerFactory = customMixer || detectMixerFactory(output[0]);
    var numMixers = output.length - 1;
    for (var i = 0; i < numMixers; i++) {
        var mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            var easingFunction = Array.isArray(ease) ? ease[i] : ease;
            mixer = pipe(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
function fastInterpolate(_a, _b) {
    var from = _a[0],
        to = _a[1];
    var mixer = _b[0];
    return function (v) {
        return mixer(progress(from, to, v));
    };
}
function slowInterpolate(input, mixers) {
    var inputLength = input.length;
    var lastInputIndex = inputLength - 1;
    return function (v) {
        var mixerIndex = 0;
        var foundMixerIndex = false;
        if (v <= input[0]) {
            foundMixerIndex = true;
        } else if (v >= input[lastInputIndex]) {
            mixerIndex = lastInputIndex - 1;
            foundMixerIndex = true;
        }
        if (!foundMixerIndex) {
            var i = 1;
            for (; i < inputLength; i++) {
                if (input[i] > v || i === lastInputIndex) {
                    break;
                }
            }
            mixerIndex = i - 1;
        }
        var progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v);
        return mixers[mixerIndex](progressInRange);
    };
}
function interpolate(input, output, _a) {
    var _b = _a === void 0 ? {} : _a,
        _c = _b.clamp,
        isClamp = _c === void 0 ? true : _c,
        ease = _b.ease,
        mixer = _b.mixer;
    var inputLength = input.length;
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_2__["invariant"])(inputLength === output.length, 'Both input and output ranges must be the same length');
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_2__["invariant"])(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, 'Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.');
    if (input[0] > input[inputLength - 1]) {
        input = [].concat(input);
        output = [].concat(output);
        input.reverse();
        output.reverse();
    }
    var mixers = createMixers(output, ease, mixer);
    var interpolator = inputLength === 2 ? fastInterpolate(input, mixers) : slowInterpolate(input, mixers);
    return isClamp ? function (v) {
        return interpolator(clamp(input[0], input[inputLength - 1], v));
    } : interpolator;
}

var reverseEasing = function (easing) {
    return function (p) {
        return 1 - easing(1 - p);
    };
};
var mirrorEasing = function (easing) {
    return function (p) {
        return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
    };
};
var createExpoIn = function (power) {
    return function (p) {
        return Math.pow(p, power);
    };
};
var createBackIn = function (power) {
    return function (p) {
        return p * p * ((power + 1) * p - power);
    };
};
var createAnticipate = function (power) {
    var backEasing = createBackIn(power);
    return function (p) {
        return (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
    };
};

var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
var BOUNCE_FIRST_THRESHOLD = 4.0 / 11.0;
var BOUNCE_SECOND_THRESHOLD = 8.0 / 11.0;
var BOUNCE_THIRD_THRESHOLD = 9.0 / 10.0;
var linear = function (p) {
    return p;
};
var easeIn = /*#__PURE__*/createExpoIn(2);
var easeOut = /*#__PURE__*/reverseEasing(easeIn);
var easeInOut = /*#__PURE__*/mirrorEasing(easeIn);
var circIn = function (p) {
    return 1 - Math.sin(Math.acos(p));
};
var circOut = /*#__PURE__*/reverseEasing(circIn);
var circInOut = /*#__PURE__*/mirrorEasing(circOut);
var backIn = /*#__PURE__*/createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
var backOut = /*#__PURE__*/reverseEasing(backIn);
var backInOut = /*#__PURE__*/mirrorEasing(backIn);
var anticipate = /*#__PURE__*/createAnticipate(DEFAULT_OVERSHOOT_STRENGTH);
var ca = 4356.0 / 361.0;
var cb = 35442.0 / 1805.0;
var cc = 16061.0 / 1805.0;
var bounceOut = function (p) {
    if (p === 1 || p === 0) return p;
    var p2 = p * p;
    return p < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p2 : p < BOUNCE_SECOND_THRESHOLD ? 9.075 * p2 - 9.9 * p + 3.4 : p < BOUNCE_THIRD_THRESHOLD ? ca * p2 - cb * p + cc : 10.8 * p * p - 20.52 * p + 10.72;
};
var bounceIn = /*#__PURE__*/reverseEasing(bounceOut);
var bounceInOut = function (p) {
    return p < 0.5 ? 0.5 * (1.0 - bounceOut(1.0 - p * 2.0)) : 0.5 * bounceOut(p * 2.0 - 1.0) + 0.5;
};

function defaultEasing(values, easing) {
    return values.map(function () {
        return easing || easeInOut;
    }).splice(0, values.length - 1);
}
function defaultOffset(values) {
    var numValues = values.length;
    return values.map(function (_value, i) {
        return i !== 0 ? i / (numValues - 1) : 0;
    });
}
function convertOffsetToTimes(offset, duration) {
    return offset.map(function (o) {
        return o * duration;
    });
}
var KeyframesAnimator = /*#__PURE__*/function () {
    function KeyframesAnimator(options) {
        this.isComplete = false;
        this.updateOptions(options);
        var _a = this.options,
            from = _a.from,
            to = _a.to;
        this.values = Array.isArray(to) ? to : [from, to];
        this.createInterpolator();
    }
    KeyframesAnimator.prototype.createInterpolator = function () {
        var _a = this.options,
            duration = _a.duration,
            ease = _a.ease,
            offset = _a.offset;
        ease = Array.isArray(ease) ? ease : defaultEasing(this.values, ease);
        offset = offset || defaultOffset(this.values);
        var times = convertOffsetToTimes(offset, duration);
        this.interpolator = interpolate(times, this.values, { ease: ease });
    };
    KeyframesAnimator.prototype.update = function (t) {
        var duration = this.options.duration;
        this.isComplete = t >= duration;
        return this.interpolator(t);
    };
    KeyframesAnimator.prototype.updateOptions = function (_a) {
        var _b = _a.from,
            from = _b === void 0 ? 0 : _b,
            _c = _a.to,
            to = _c === void 0 ? 1 : _c,
            ease = _a.ease,
            offset = _a.offset,
            _d = _a.duration,
            duration = _d === void 0 ? 300 : _d;
        this.options = { from: from, to: to, ease: ease, offset: offset, duration: duration };
    };
    KeyframesAnimator.prototype.flipTarget = function () {
        this.values.reverse();
        this.createInterpolator();
    };
    KeyframesAnimator.needsInterpolation = function () {
        return false;
    };
    KeyframesAnimator.uniqueOptionKeys = /*#__PURE__*/new Set(["duration", "ease"]);
    return KeyframesAnimator;
}();

var DecayAnimator = /*#__PURE__*/function () {
    function DecayAnimator(options) {
        this.isComplete = false;
        this.updateOptions(options);
        var _a = this.options,
            power = _a.power,
            velocity = _a.velocity,
            modifyTarget = _a.modifyTarget,
            from = _a.from;
        var amplitude = power * velocity;
        var idealTarget = from + amplitude;
        var target = typeof modifyTarget === "undefined" ? idealTarget : modifyTarget(idealTarget);
        if (target !== idealTarget) amplitude = target - from;
        this.target = target;
        this.amplitude = amplitude;
    }
    DecayAnimator.prototype.flipTarget = function () {};
    DecayAnimator.prototype.update = function (t) {
        var _a = this.options,
            timeConstant = _a.timeConstant,
            restDelta = _a.restDelta;
        var delta = -this.amplitude * Math.exp(-t / timeConstant);
        this.isComplete = !(delta > restDelta || delta < -restDelta);
        return this.isComplete ? this.target : this.target + delta;
    };
    DecayAnimator.prototype.updateOptions = function (_a) {
        var _b = _a === void 0 ? {} : _a,
            _c = _b.velocity,
            velocity = _c === void 0 ? 0 : _c,
            _d = _b.from,
            from = _d === void 0 ? 0 : _d,
            _e = _b.power,
            power = _e === void 0 ? 0.8 : _e,
            _f = _b.timeConstant,
            timeConstant = _f === void 0 ? 350 : _f,
            _g = _b.restDelta,
            restDelta = _g === void 0 ? 0.5 : _g,
            modifyTarget = _b.modifyTarget;
        this.options = {
            velocity: velocity,
            from: from,
            power: power,
            timeConstant: timeConstant,
            restDelta: restDelta,
            modifyTarget: modifyTarget
        };
    };
    DecayAnimator.needsInterpolation = function () {
        return false;
    };
    DecayAnimator.uniqueOptionKeys = /*#__PURE__*/new Set(["power", "timeConstant", "modifyTarget"]);
    return DecayAnimator;
}();

var animators = [KeyframesAnimator, DecayAnimator, SpringAnimator];
var types = {
    keyframes: KeyframesAnimator,
    spring: SpringAnimator,
    decay: DecayAnimator
};
var numAnimators = animators.length;
function detectAnimationFromOptions(config) {
    if (Array.isArray(config.to)) {
        return KeyframesAnimator;
    } else if (types[config.type]) {
        return types[config.type];
    }
    for (var key in config) {
        for (var i = 0; i < numAnimators; i++) {
            var animator = animators[i];
            if (animator.uniqueOptionKeys.has(key)) return animator;
        }
    }
    return KeyframesAnimator;
}

function loopElapsed(elapsed, duration, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return elapsed - duration - delay;
}
function reverseElapsed(elapsed, duration, delay, isForwardPlayback) {
    if (delay === void 0) {
        delay = 0;
    }
    if (isForwardPlayback === void 0) {
        isForwardPlayback = true;
    }
    return isForwardPlayback ? loopElapsed(duration + -elapsed, duration, delay) : duration - (elapsed - duration) + delay;
}
function hasRepeatDelayElapsed(elapsed, duration, delay, isForwardPlayback) {
    return isForwardPlayback ? elapsed >= duration + delay : elapsed <= -delay;
}

var framesync = function (update) {
    var passTimestamp = function (_a) {
        var delta = _a.delta;
        return update(delta);
    };
    return {
        start: function () {
            return framesync__WEBPACK_IMPORTED_MODULE_3__["default"].update(passTimestamp, true, true);
        },
        stop: function () {
            return framesync__WEBPACK_IMPORTED_MODULE_3__["cancelSync"].update(passTimestamp);
        }
    };
};
function animate(_a) {
    var from = _a.from,
        _b = _a.autoplay,
        autoplay = _b === void 0 ? true : _b,
        _c = _a.driver,
        driver = _c === void 0 ? framesync : _c,
        _d = _a.elapsed,
        elapsed = _d === void 0 ? 0 : _d,
        _e = _a.repeat,
        repeatMax = _e === void 0 ? 0 : _e,
        _f = _a.repeatType,
        repeatType = _f === void 0 ? "loop" : _f,
        _g = _a.repeatDelay,
        repeatDelay = _g === void 0 ? 0 : _g,
        onPlay = _a.onPlay,
        onStop = _a.onStop,
        onComplete = _a.onComplete,
        onRepeat = _a.onRepeat,
        onUpdate = _a.onUpdate,
        options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
    var to = options.to;
    var driverControls;
    var repeatCount = 0;
    var computedDuration = options.duration;
    var latest;
    var isComplete = false;
    var isForwardPlayback = true;
    var interpolateFromNumber;
    var Animator = detectAnimationFromOptions(options);
    if (Animator.needsInterpolation(from, to)) {
        interpolateFromNumber = interpolate([0, 100], [from, to], {
            clamp: false
        });
        from = 0;
        to = 100;
    }
    var animation = new Animator(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { from: from, to: to }));
    function repeat() {
        repeatCount++;
        if (repeatType === "reverse") {
            isForwardPlayback = repeatCount % 2 === 0;
            elapsed = reverseElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback);
        } else {
            elapsed = loopElapsed(elapsed, computedDuration, repeatDelay);
            if (repeatType === "mirror") animation.flipTarget();
        }
        isComplete = false;
        animation.isComplete = false;
        onRepeat && onRepeat();
    }
    function complete() {
        driverControls.stop();
        onComplete && onComplete();
    }
    function update(delta) {
        if (!isForwardPlayback) delta = -delta;
        elapsed += delta;
        if (!isComplete) {
            latest = animation.update(Math.max(0, elapsed));
            if (interpolateFromNumber) latest = interpolateFromNumber(latest);
            isComplete = isForwardPlayback ? animation.isComplete : elapsed <= 0;
        }
        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);
        if (isComplete) {
            if (repeatCount === 0 && computedDuration === undefined) {
                computedDuration = elapsed;
            }
            if (repeatCount < repeatMax) {
                hasRepeatDelayElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
            } else {
                complete();
            }
        }
    }
    function play() {
        onPlay === null || onPlay === void 0 ? void 0 : onPlay();
        driverControls = driver(update);
        driverControls.start();
    }
    autoplay && play();
    return {
        play: play,
        pause: function () {},
        resume: function () {},
        reverse: function () {},
        seek: function () {},
        stop: function () {
            onStop === null || onStop === void 0 ? void 0 : onStop();
            driverControls.stop();
        }
    };
}

function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}

function inertia(_a) {
    var _b = _a.from,
        from = _b === void 0 ? 0 : _b,
        _c = _a.velocity,
        velocity = _c === void 0 ? 0 : _c,
        min = _a.min,
        max = _a.max,
        _d = _a.power,
        power = _d === void 0 ? 0.8 : _d,
        _e = _a.timeConstant,
        timeConstant = _e === void 0 ? 750 : _e,
        _f = _a.bounceStiffness,
        bounceStiffness = _f === void 0 ? 500 : _f,
        _g = _a.bounceDamping,
        bounceDamping = _g === void 0 ? 10 : _g,
        _h = _a.restDelta,
        restDelta = _h === void 0 ? 1 : _h,
        modifyTarget = _a.modifyTarget,
        driver = _a.driver,
        onUpdate = _a.onUpdate,
        onComplete = _a.onComplete;
    var currentAnimation;
    function isOutOfBounds(v) {
        return min !== undefined && v < min || max !== undefined && v > max;
    }
    function boundaryNearest(v) {
        if (min === undefined) return max;
        if (max === undefined) return min;
        return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    }
    function startAnimation(options) {
        currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
        currentAnimation = animate(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { driver: driver, onUpdate: function (v) {
                var _a;
                onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(v);
                (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, v);
            }, onComplete: onComplete }));
    }
    function startSpring(options) {
        startAnimation(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "spring", stiffness: bounceStiffness, damping: bounceDamping, restDelta: restDelta }, options));
    }
    if (isOutOfBounds(from)) {
        startSpring({ from: from, velocity: velocity, to: boundaryNearest(from) });
    } else {
        var target = power * velocity + from;
        if (typeof modifyTarget !== "undefined") target = modifyTarget(target);
        var boundary_1 = boundaryNearest(target);
        var heading_1 = boundary_1 === min ? -1 : 1;
        var prev_1;
        var current_1;
        var checkBoundary = function (v) {
            prev_1 = current_1;
            velocity = velocityPerSecond(v - prev_1, Object(framesync__WEBPACK_IMPORTED_MODULE_3__["getFrameData"])().delta);
            current_1 = v;
            if (!(boundary_1 - v * heading_1 > 0)) {
                startSpring({ from: current_1, to: boundary_1, velocity: velocity });
            }
        };
        startAnimation({
            type: "decay",
            from: from,
            velocity: velocity,
            timeConstant: timeConstant,
            power: power,
            restDelta: restDelta,
            modifyTarget: modifyTarget,
            onUpdate: isOutOfBounds(target) ? checkBoundary : undefined
        });
    }
    return {
        stop: function () {
            return currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
        }
    };
}

var radiansToDegrees = function (radians) {
    return radians * 180 / Math.PI;
};

var angle = function (a, b) {
    if (b === void 0) {
        b = zeroPoint;
    }
    return radiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x));
};

var applyOffset = function (from, to) {
    var hasReceivedFrom = true;
    if (to === undefined) {
        to = from;
        hasReceivedFrom = false;
    }
    return function (v) {
        if (hasReceivedFrom) {
            return v - from + to;
        } else {
            from = v;
            hasReceivedFrom = true;
            return to;
        }
    };
};

var identity = function (v) {
    return v;
};
var createAttractor = function (alterDisplacement) {
    if (alterDisplacement === void 0) {
        alterDisplacement = identity;
    }
    return function (constant, origin, v) {
        var displacement = origin - v;
        var springModifiedDisplacement = -(0 - constant + 1) * (0 - alterDisplacement(Math.abs(displacement)));
        return displacement <= 0 ? origin + springModifiedDisplacement : origin - springModifiedDisplacement;
    };
};
var attract = /*#__PURE__*/createAttractor();
var attractExpo = /*#__PURE__*/createAttractor(Math.sqrt);

var degreesToRadians = function (degrees) {
    return degrees * Math.PI / 180;
};

var isPoint = function (point) {
    return point.hasOwnProperty('x') && point.hasOwnProperty('y');
};

var isPoint3D = function (point) {
    return isPoint(point) && point.hasOwnProperty('z');
};

var distance1D = function (a, b) {
    return Math.abs(a - b);
};
function distance(a, b) {
    if (isNum(a) && isNum(b)) {
        return distance1D(a, b);
    } else if (isPoint(a) && isPoint(b)) {
        var xDelta = distance1D(a.x, b.x);
        var yDelta = distance1D(a.y, b.y);
        var zDelta = isPoint3D(a) && isPoint3D(b) ? distance1D(a.z, b.z) : 0;
        return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
    }
}

var pointFromVector = function (origin, angle, distance) {
    angle = degreesToRadians(angle);
    return {
        x: distance * Math.cos(angle) + origin.x,
        y: distance * Math.sin(angle) + origin.y
    };
};

var toDecimal = function (num, precision) {
    if (precision === void 0) {
        precision = 2;
    }
    precision = Math.pow(10, precision);
    return Math.round(num * precision) / precision;
};

var smoothFrame = function (prevValue, nextValue, duration, smoothing) {
    if (smoothing === void 0) {
        smoothing = 0;
    }
    return toDecimal(prevValue + duration * (nextValue - prevValue) / Math.max(smoothing, duration));
};

var smooth = function (strength) {
    if (strength === void 0) {
        strength = 50;
    }
    var previousValue = 0;
    var lastUpdated = 0;
    return function (v) {
        var currentFramestamp = Object(framesync__WEBPACK_IMPORTED_MODULE_3__["getFrameData"])().timestamp;
        var timeDelta = currentFramestamp !== lastUpdated ? currentFramestamp - lastUpdated : 0;
        var newValue = timeDelta ? smoothFrame(previousValue, v, timeDelta, strength) : previousValue;
        lastUpdated = currentFramestamp;
        previousValue = newValue;
        return newValue;
    };
};

var snap = function (points) {
    if (typeof points === 'number') {
        return function (v) {
            return Math.round(v / points) * points;
        };
    } else {
        var i_1 = 0;
        var numPoints_1 = points.length;
        return function (v) {
            var lastDistance = Math.abs(points[0] - v);
            for (i_1 = 1; i_1 < numPoints_1; i_1++) {
                var point = points[i_1];
                var distance = Math.abs(point - v);
                if (distance === 0) return point;
                if (distance > lastDistance) return points[i_1 - 1];
                if (i_1 === numPoints_1 - 1) return point;
                lastDistance = distance;
            }
        };
    }
};

function velocityPerFrame(xps, frameDuration) {
    return xps / (1000 / frameDuration);
}

var wrap = function (min, max, v) {
    var rangeSize = max - min;
    return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

var a = function (a1, a2) {
    return 1.0 - 3.0 * a2 + 3.0 * a1;
};
var b = function (a1, a2) {
    return 3.0 * a2 - 6.0 * a1;
};
var c = function (a1) {
    return 3.0 * a1;
};
var calcBezier = function (t, a1, a2) {
    return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
};
var getSlope = function (t, a1, a2) {
    return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
};
var subdivisionPrecision = 0.0000001;
var subdivisionMaxIterations = 10;
function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX;
    var currentT;
    var i = 0;
    do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0.0) {
            aB = currentT;
        } else {
            aA = currentT;
        }
    } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
    return currentT;
}
var newtonIterations = 8;
var newtonMinSlope = 0.001;
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < newtonIterations; ++i) {
        var currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0.0) {
            return aGuessT;
        }
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
}
var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
function cubicBezier(mX1, mY1, mX2, mY2) {
    if (mX1 === mY1 && mX2 === mY2) return linear;
    var sampleValues = new Float32Array(kSplineTableSize);
    for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
    function getTForX(aX) {
        var intervalStart = 0.0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;
        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += kSampleStepSize;
        }
        --currentSample;
        var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= newtonMinSlope) {
            return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        } else if (initialSlope === 0.0) {
            return guessForT;
        } else {
            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
    }
    return function (t) {
        return t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
    };
}

var steps = function (steps, direction) {
    if (direction === void 0) {
        direction = 'end';
    }
    return function (progress) {
        progress = direction === 'end' ? Math.min(progress, 0.999) : Math.max(progress, 0.001);
        var expanded = progress * steps;
        var rounded = direction === 'end' ? Math.floor(expanded) : Math.ceil(expanded);
        return clamp(0, 1, rounded / steps);
    };
};




/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/raf/index.js":
/*!***********************************!*\
  !*** ./node_modules/raf/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(/*! performance-now */ "./node_modules/performance-now/lib/performance-now.js")
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf
  object.cancelAnimationFrame = caf
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../next/node_modules/webpack/buildin/global.js */ "./node_modules/next/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-headroom/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-headroom/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _shallowequal = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _raf = __webpack_require__(/*! raf */ "./node_modules/raf/index.js");

var _raf2 = _interopRequireDefault(_raf);

var _shouldUpdate2 = __webpack_require__(/*! ./shouldUpdate */ "./node_modules/react-headroom/dist/shouldUpdate.js");

var _shouldUpdate3 = _interopRequireDefault(_shouldUpdate2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line import/no-unresolved


var noop = function noop() {};

var Headroom = function (_Component) {
  _inherits(Headroom, _Component);

  _createClass(Headroom, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      if (props.disable && state.state !== 'unfixed') {
        return {
          translateY: 0,
          className: 'headroom headroom--unfixed headroom-disable-animation',
          animation: false,
          state: 'unfixed'
        };
      }

      return null;
    }
  }]);

  function Headroom(props) {
    _classCallCheck(this, Headroom);

    // Class variables.
    var _this = _possibleConstructorReturn(this, (Headroom.__proto__ || Object.getPrototypeOf(Headroom)).call(this, props));

    _this.setRef = function (ref) {
      return _this.inner = ref;
    };

    _this.setHeightOffset = function () {
      _this.setState({
        height: _this.inner ? _this.inner.offsetHeight : ''
      });
      _this.resizeTicking = false;
    };

    _this.getScrollY = function () {
      if (_this.props.parent().pageYOffset !== void 0) {
        return _this.props.parent().pageYOffset;
      } else if (_this.props.parent().scrollTop !== void 0) {
        return _this.props.parent().scrollTop;
      } else {
        return (document.documentElement || document.body.parentNode || document.body).scrollTop;
      }
    };

    _this.getViewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    };

    _this.getDocumentHeight = function () {
      var body = document.body;
      var documentElement = document.documentElement;

      return Math.max(body.scrollHeight, documentElement.scrollHeight, body.offsetHeight, documentElement.offsetHeight, body.clientHeight, documentElement.clientHeight);
    };

    _this.getElementPhysicalHeight = function (elm) {
      return Math.max(elm.offsetHeight, elm.clientHeight);
    };

    _this.getElementHeight = function (elm) {
      return Math.max(elm.scrollHeight, elm.offsetHeight, elm.clientHeight);
    };

    _this.getScrollerPhysicalHeight = function () {
      var parent = _this.props.parent();

      return parent === window || parent === document.body ? _this.getViewportHeight() : _this.getElementPhysicalHeight(parent);
    };

    _this.getScrollerHeight = function () {
      var parent = _this.props.parent();

      return parent === window || parent === document.body ? _this.getDocumentHeight() : _this.getElementHeight(parent);
    };

    _this.isOutOfBound = function (currentScrollY) {
      var pastTop = currentScrollY < 0;

      var scrollerPhysicalHeight = _this.getScrollerPhysicalHeight();
      var scrollerHeight = _this.getScrollerHeight();

      var pastBottom = currentScrollY + scrollerPhysicalHeight > scrollerHeight;

      return pastTop || pastBottom;
    };

    _this.handleScroll = function () {
      if (!_this.scrollTicking) {
        _this.scrollTicking = true;
        (0, _raf2.default)(_this.update);
      }
    };

    _this.handleResize = function () {
      if (!_this.resizeTicking) {
        _this.resizeTicking = true;
        (0, _raf2.default)(_this.setHeightOffset);
      }
    };

    _this.unpin = function () {
      _this.props.onUnpin();

      _this.setState({
        translateY: '-100%',
        className: 'headroom headroom--unpinned',
        animation: true,
        state: 'unpinned'
      });
    };

    _this.unpinSnap = function () {
      _this.props.onUnpin();

      _this.setState({
        translateY: '-100%',
        className: 'headroom headroom--unpinned headroom-disable-animation',
        animation: false,
        state: 'unpinned'
      });
    };

    _this.pin = function () {
      _this.props.onPin();

      _this.setState({
        translateY: 0,
        className: 'headroom headroom--pinned',
        animation: true,
        state: 'pinned'
      });
    };

    _this.unfix = function () {
      _this.props.onUnfix();

      _this.setState({
        translateY: 0,
        className: 'headroom headroom--unfixed headroom-disable-animation',
        animation: false,
        state: 'unfixed'
      });
    };

    _this.update = function () {
      _this.currentScrollY = _this.getScrollY();

      if (!_this.isOutOfBound(_this.currentScrollY)) {
        var _shouldUpdate = (0, _shouldUpdate3.default)(_this.lastKnownScrollY, _this.currentScrollY, _this.props, _this.state),
            action = _shouldUpdate.action;

        if (action === 'pin') {
          _this.pin();
        } else if (action === 'unpin') {
          _this.unpin();
        } else if (action === 'unpin-snap') {
          _this.unpinSnap();
        } else if (action === 'unfix') {
          _this.unfix();
        }
      }

      _this.lastKnownScrollY = _this.currentScrollY;
      _this.scrollTicking = false;
    };

    _this.currentScrollY = 0;
    _this.lastKnownScrollY = 0;
    _this.scrollTicking = false;
    _this.resizeTicking = false;
    _this.state = {
      state: 'unfixed',
      translateY: 0,
      className: 'headroom headroom--unfixed'
    };
    return _this;
  }

  _createClass(Headroom, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setHeightOffset();
      if (!this.props.disable) {
        this.props.parent().addEventListener('scroll', this.handleScroll);

        if (this.props.calcHeightOnResize) {
          this.props.parent().addEventListener('resize', this.handleResize);
        }
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _shallowequal2.default)(this.props, nextProps) || !(0, _shallowequal2.default)(this.state, nextState);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // If children have changed, remeasure height.
      if (prevProps.children !== this.props.children) {
        this.setHeightOffset();
      }

      // Add/remove event listeners when re-enabled/disabled
      if (!prevProps.disable && this.props.disable) {
        this.props.parent().removeEventListener('scroll', this.handleScroll);
        this.props.parent().removeEventListener('resize', this.handleResize);

        if (prevState.state !== 'unfixed' && this.state.state === 'unfixed') {
          this.props.onUnfix();
        }
      } else if (prevProps.disable && !this.props.disable) {
        this.props.parent().addEventListener('scroll', this.handleScroll);

        if (this.props.calcHeightOnResize) {
          this.props.parent().addEventListener('resize', this.handleResize);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.parent().removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('scroll', this.handleScroll);
      this.props.parent().removeEventListener('resize', this.handleResize);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          userClassName = _props.className,
          divProps = _objectWithoutProperties(_props, ['className']);

      delete divProps.onUnpin;
      delete divProps.onPin;
      delete divProps.onUnfix;
      delete divProps.disableInlineStyles;
      delete divProps.disable;
      delete divProps.parent;
      delete divProps.children;
      delete divProps.upTolerance;
      delete divProps.downTolerance;
      delete divProps.pinStart;
      delete divProps.calcHeightOnResize;

      var style = divProps.style,
          wrapperStyle = divProps.wrapperStyle,
          rest = _objectWithoutProperties(divProps, ['style', 'wrapperStyle']);

      var innerStyle = {
        position: this.props.disable || this.state.state === 'unfixed' ? 'relative' : 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        WebkitTransform: 'translate3D(0, ' + this.state.translateY + ', 0)',
        MsTransform: 'translate3D(0, ' + this.state.translateY + ', 0)',
        transform: 'translate3D(0, ' + this.state.translateY + ', 0)'
      };

      var className = this.state.className;

      // Don't add css transitions until after we've done the initial
      // negative transform when transitioning from 'unfixed' to 'unpinned'.
      // If we don't do this, the header will flash into view temporarily
      // while it transitions from 0 — -100%.
      if (this.state.animation) {
        innerStyle = _extends({}, innerStyle, {
          WebkitTransition: 'all .2s ease-in-out',
          MozTransition: 'all .2s ease-in-out',
          OTransition: 'all .2s ease-in-out',
          transition: 'all .2s ease-in-out'
        });
        className += ' headroom--scrolled';
      }

      if (!this.props.disableInlineStyles) {
        innerStyle = _extends({}, innerStyle, style);
      } else {
        innerStyle = style;
      }

      var wrapperStyles = _extends({}, wrapperStyle, {
        height: this.state.height ? this.state.height : null
      });

      var wrapperClassName = userClassName ? userClassName + ' headroom-wrapper' : 'headroom-wrapper';

      return _react2.default.createElement(
        'div',
        { style: wrapperStyles, className: wrapperClassName },
        _react2.default.createElement(
          'div',
          _extends({
            ref: this.setRef
          }, rest, {
            style: innerStyle,
            className: className
          }),
          this.props.children
        )
      );
    }
  }]);

  return Headroom;
}(_react.Component);

Headroom.propTypes = {
  className: _propTypes2.default.string,
  parent: _propTypes2.default.func,
  children: _propTypes2.default.any.isRequired,
  disableInlineStyles: _propTypes2.default.bool,
  disable: _propTypes2.default.bool,
  upTolerance: _propTypes2.default.number,
  downTolerance: _propTypes2.default.number,
  onPin: _propTypes2.default.func,
  onUnpin: _propTypes2.default.func,
  onUnfix: _propTypes2.default.func,
  wrapperStyle: _propTypes2.default.object,
  pinStart: _propTypes2.default.number,
  style: _propTypes2.default.object,
  calcHeightOnResize: _propTypes2.default.bool
};
Headroom.defaultProps = {
  parent: function parent() {
    return window;
  },
  disableInlineStyles: false,
  disable: false,
  upTolerance: 5,
  downTolerance: 0,
  onPin: noop,
  onUnpin: noop,
  onUnfix: noop,
  wrapperStyle: {},
  pinStart: 0,
  calcHeightOnResize: true
};
exports.default = Headroom;

/***/ }),

/***/ "./node_modules/react-headroom/dist/shouldUpdate.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-headroom/dist/shouldUpdate.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var lastKnownScrollY = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  var currentScrollY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var props = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var state = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};

  var scrollDirection = currentScrollY >= lastKnownScrollY ? 'down' : 'up';
  var distanceScrolled = Math.abs(currentScrollY - lastKnownScrollY);

  // We're disabled
  if (props.disable) {
    return {
      action: 'none',
      scrollDirection: scrollDirection,
      distanceScrolled: distanceScrolled
      // We're at the top and not fixed yet.
    };
  } else if (currentScrollY <= props.pinStart && state.state !== 'unfixed') {
    return {
      action: 'unfix',
      scrollDirection: scrollDirection,
      distanceScrolled: distanceScrolled
      // We're unfixed and headed down. Carry on.
    };
  } else if (currentScrollY <= state.height && scrollDirection === 'down' && state.state === 'unfixed') {
    return {
      action: 'none',
      scrollDirection: scrollDirection,
      distanceScrolled: distanceScrolled
    };
  } else if (currentScrollY > state.height + props.pinStart && scrollDirection === 'down' && state.state === 'unfixed') {
    return {
      action: 'unpin-snap',
      scrollDirection: scrollDirection,
      distanceScrolled: distanceScrolled
      // We're past the header and scrolling down.
      // We transition to "unpinned" if necessary.
    };
  } else if (scrollDirection === 'down' && ['pinned', 'unfixed'].indexOf(state.state) >= 0 && currentScrollY > state.height + props.pinStart && distanceScrolled > props.downTolerance) {
    return {
      action: 'unpin',
      scrollDirection: scrollDirection,
      distanceScrolled: distanceScrolled
      // We're scrolling up, we transition to "pinned"
    };
  } else if (scrollDirection === 'up' && distanceScrolled > props.upTolerance && ['pinned', 'unfixed'].indexOf(state.state) < 0) {
    return {
      action: 'pin',
      scrollDirection: scrollDirection,
      distanceScrolled: distanceScrolled
      // We're scrolling up, and inside the header.
      // We transition to pin regardless of upTolerance
    };
  } else if (scrollDirection === 'up' && currentScrollY <= state.height && ['pinned', 'unfixed'].indexOf(state.state) < 0) {
    return {
      action: 'pin',
      scrollDirection: scrollDirection,
      distanceScrolled: distanceScrolled
    };
  } else {
    return {
      action: 'none',
      scrollDirection: scrollDirection,
      distanceScrolled: distanceScrolled
    };
  }
};

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-use-clipboard/dist/react-use-clipboard.m.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-use-clipboard/dist/react-use-clipboard.m.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! copy-to-clipboard */ "./node_modules/copy-to-clipboard/index.js");
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony default export */ __webpack_exports__["default"] = (function(o,e){var i,u=function(r){if(Array.isArray(r))return r}(i=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!1))||function(r,t){var n=[],o=!0,e=!1,i=void 0;try{for(var u,a=r[Symbol.iterator]();!(o=(u=a.next()).done)&&(n.push(u.value),2!==n.length);o=!0);}catch(r){e=!0,i=r}finally{try{o||null==a.return||a.return()}finally{if(e)throw i}}return n}(i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}(),a=u[0],c=u[1],f=e&&e.successDuration;return Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function(){if(a&&f){var r=setTimeout(function(){c(!1)},f);return function(){clearTimeout(r)}}},[a,f]),[a,function(){var r=copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default()(o);c(r)}]});
//# sourceMappingURL=react-use-clipboard.m.js.map


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/style-value-types/dist/style-value-types.es.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-value-types/dist/style-value-types.es.js ***!
  \*********************************************************************/
/*! exports provided: alpha, color, complex, degrees, hex, hsla, number, percent, progressPercentage, px, rgbUnit, rgba, scale, vh, vw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return alpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complex", function() { return complex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degrees", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex", function() { return hex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsla", function() { return hsla; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "number", function() { return number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percent", function() { return percent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressPercentage", function() { return progressPercentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "px", function() { return px; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbUnit", function() { return rgbUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgba", function() { return rgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vh", function() { return vh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vw", function() { return vw; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


var clamp = function (min, max) { return function (v) {
    return Math.max(Math.min(v, max), min);
}; };
var sanitize = function (v) { return (v % 1 ? Number(v.toFixed(5)) : v); };
var floatRegex = /(-)?(\d[\d\.]*)/g;
var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;

var number = {
    test: function (v) { return typeof v === 'number'; },
    parse: parseFloat,
    transform: function (v) { return v; }
};
var alpha = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, number), { transform: clamp(0, 1) });
var scale = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, number), { default: 1 });

var createUnitType = function (unit) { return ({
    test: function (v) {
        return typeof v === 'string' && v.endsWith(unit) && v.split(' ').length === 1;
    },
    parse: parseFloat,
    transform: function (v) { return "" + v + unit; }
}); };
var degrees = createUnitType('deg');
var percent = createUnitType('%');
var px = createUnitType('px');
var vh = createUnitType('vh');
var vw = createUnitType('vw');
var progressPercentage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, percent), { parse: function (v) { return percent.parse(v) / 100; }, transform: function (v) { return percent.transform(v * 100); } });

var getValueFromFunctionString = function (value) {
    return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
};
var clampRgbUnit = clamp(0, 255);
var isRgba = function (v) { return v.red !== undefined; };
var isHsla = function (v) { return v.hue !== undefined; };
function getValuesAsArray(value) {
    return getValueFromFunctionString(value)
        .replace(/(,|\/)/g, ' ')
        .split(/ \s*/);
}
var splitColorValues = function (terms) {
    return function (v) {
        if (typeof v !== 'string')
            return v;
        var values = {};
        var valuesArray = getValuesAsArray(v);
        for (var i = 0; i < 4; i++) {
            values[terms[i]] =
                valuesArray[i] !== undefined ? parseFloat(valuesArray[i]) : 1;
        }
        return values;
    };
};
var rgbaTemplate = function (_a) {
    var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha = _b === void 0 ? 1 : _b;
    return "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";
};
var hslaTemplate = function (_a) {
    var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha = _b === void 0 ? 1 : _b;
    return "hsla(" + hue + ", " + saturation + ", " + lightness + ", " + alpha + ")";
};
var rgbUnit = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, number), { transform: function (v) { return Math.round(clampRgbUnit(v)); } });
function isColorString(color, colorType) {
    return color.startsWith(colorType) && singleColorRegex.test(color);
}
var rgba = {
    test: function (v) { return (typeof v === 'string' ? isColorString(v, 'rgb') : isRgba(v)); },
    parse: splitColorValues(['red', 'green', 'blue', 'alpha']),
    transform: function (_a) {
        var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha$1 = _b === void 0 ? 1 : _b;
        return rgbaTemplate({
            red: rgbUnit.transform(red),
            green: rgbUnit.transform(green),
            blue: rgbUnit.transform(blue),
            alpha: sanitize(alpha.transform(alpha$1))
        });
    }
};
var hsla = {
    test: function (v) { return (typeof v === 'string' ? isColorString(v, 'hsl') : isHsla(v)); },
    parse: splitColorValues(['hue', 'saturation', 'lightness', 'alpha']),
    transform: function (_a) {
        var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha$1 = _b === void 0 ? 1 : _b;
        return hslaTemplate({
            hue: Math.round(hue),
            saturation: percent.transform(sanitize(saturation)),
            lightness: percent.transform(sanitize(lightness)),
            alpha: sanitize(alpha.transform(alpha$1))
        });
    }
};
var hex = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, rgba), { test: function (v) { return typeof v === 'string' && isColorString(v, '#'); }, parse: function (v) {
        var r = '';
        var g = '';
        var b = '';
        if (v.length > 4) {
            r = v.substr(1, 2);
            g = v.substr(3, 2);
            b = v.substr(5, 2);
        }
        else {
            r = v.substr(1, 1);
            g = v.substr(2, 1);
            b = v.substr(3, 1);
            r += r;
            g += g;
            b += b;
        }
        return {
            red: parseInt(r, 16),
            green: parseInt(g, 16),
            blue: parseInt(b, 16),
            alpha: 1
        };
    } });
var color = {
    test: function (v) {
        return (typeof v === 'string' && singleColorRegex.test(v)) ||
            isRgba(v) ||
            isHsla(v);
    },
    parse: function (v) {
        if (rgba.test(v)) {
            return rgba.parse(v);
        }
        else if (hsla.test(v)) {
            return hsla.parse(v);
        }
        else if (hex.test(v)) {
            return hex.parse(v);
        }
        return v;
    },
    transform: function (v) {
        if (isRgba(v)) {
            return rgba.transform(v);
        }
        else if (isHsla(v)) {
            return hsla.transform(v);
        }
        return v;
    }
};

var COLOR_TOKEN = '${c}';
var NUMBER_TOKEN = '${n}';
var convertNumbersToZero = function (v) {
    return typeof v === 'number' ? 0 : v;
};
var complex = {
    test: function (v) {
        if (typeof v !== 'string' || !isNaN(v))
            return false;
        var numValues = 0;
        var foundNumbers = v.match(floatRegex);
        var foundColors = v.match(colorRegex);
        if (foundNumbers)
            numValues += foundNumbers.length;
        if (foundColors)
            numValues += foundColors.length;
        return numValues > 0;
    },
    parse: function (v) {
        var input = v;
        var parsed = [];
        var foundColors = input.match(colorRegex);
        if (foundColors) {
            input = input.replace(colorRegex, COLOR_TOKEN);
            parsed.push.apply(parsed, foundColors.map(color.parse));
        }
        var foundNumbers = input.match(floatRegex);
        if (foundNumbers) {
            parsed.push.apply(parsed, foundNumbers.map(number.parse));
        }
        return parsed;
    },
    createTransformer: function (prop) {
        var template = prop;
        var token = 0;
        var foundColors = prop.match(colorRegex);
        var numColors = foundColors ? foundColors.length : 0;
        if (foundColors) {
            for (var i = 0; i < numColors; i++) {
                template = template.replace(foundColors[i], COLOR_TOKEN);
                token++;
            }
        }
        var foundNumbers = template.match(floatRegex);
        var numNumbers = foundNumbers ? foundNumbers.length : 0;
        if (foundNumbers) {
            for (var i = 0; i < numNumbers; i++) {
                template = template.replace(foundNumbers[i], NUMBER_TOKEN);
                token++;
            }
        }
        return function (v) {
            var output = template;
            for (var i = 0; i < token; i++) {
                output = output.replace(i < numColors ? COLOR_TOKEN : NUMBER_TOKEN, i < numColors ? color.transform(v[i]) : sanitize(v[i]));
            }
            return output;
        };
    },
    getAnimatableNone: function (target) {
        var parsedTarget = complex.parse(target);
        var targetTransformer = complex.createTransformer(target);
        return targetTransformer(parsedTarget.map(convertNumbersToZero));
    }
};




/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, __PRIVATE__, createGlobalStyle, css, isStyledComponent, keyframes, useTheme, version, withTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return ServerStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() { return StyleSheetConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() { return StyleSheetContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return StyleSheetManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return ThemeConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__PRIVATE__", function() { return __PRIVATE__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return createGlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return isStyledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return useTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);








function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

// 
var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

// 
var isPlainObject = (function (x) {
  return x !== null && typeof x === 'object' && (x.toString ? x.toString() : Object.prototype.toString.call(x)) === '[object Object]' && !Object(react_is__WEBPACK_IMPORTED_MODULE_0__["typeOf"])(x);
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 
function isFunction(test) {
  return typeof test === 'function';
}

// 
function getComponentName(target) {
  return ( true ? typeof target === 'string' && target : undefined) || // $FlowFixMe
  target.displayName || // $FlowFixMe
  target.name || 'Component';
}

// 
function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
}

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

// 
var SC_ATTR = typeof process !== 'undefined' && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || 'data-styled';
var SC_ATTR_ACTIVE = 'active';
var SC_ATTR_VERSION = 'data-styled-version';
var SC_VERSION = "5.1.1";
var SPLITTER = '/*!sc*/\n';
var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;
var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && (process.env.REACT_APP_SC_DISABLE_SPEEDY || process.env.SC_DISABLE_SPEEDY) || "development" !== 'production'; // Shared empty execution context when generating static styles

var STATIC_EXECUTION_CONTEXT = {};

// 

/* eslint-disable camelcase, no-undef */
var getNonce = function getNonce() {
  return  true ? __webpack_require__.nc : undefined;
};

var errorMap = {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
  "14": "ThemeProvider: \"theme\" prop is required.\n\n",
  "15": "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
  "16": "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
  "17": "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"
};

// 
var ERRORS =  true ? errorMap : undefined;
/**
 * super basic version of sprintf
 */

function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(c < 0 || arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */


function throwStyledComponentsError(code) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (false) {} else {
    throw new Error(format.apply(void 0, [ERRORS[code]].concat(interpolations)).trim());
  }
}

// 
var ELEMENT_TYPE = 1;
/* Node.ELEMENT_TYPE */

/** Find last style element if any inside target */

var findLastStyleTag = function findLastStyleTag(target) {
  var childNodes = target.childNodes;

  for (var i = childNodes.length; i >= 0; i--) {
    var child = childNodes[i];

    if (child && child.nodeType === ELEMENT_TYPE && child.hasAttribute(SC_ATTR)) {
      return child;
    }
  }

  return undefined;
};
/** Create a style element inside `target` or <head> after the last */


var makeStyleTag = function makeStyleTag(target) {
  var head = document.head;
  var parent = target || head;
  var style = document.createElement('style');
  var prevStyle = findLastStyleTag(parent);
  var nextSibling = prevStyle !== undefined ? prevStyle.nextSibling : null;
  style.setAttribute(SC_ATTR, SC_ATTR_ACTIVE);
  style.setAttribute(SC_ATTR_VERSION, SC_VERSION);
  var nonce = getNonce();
  if (nonce) style.setAttribute('nonce', nonce);
  parent.insertBefore(style, nextSibling);
  return style;
};
/** Get the CSSStyleSheet instance for a given style element */

var getSheet = function getSheet(tag) {
  if (tag.sheet) {
    return tag.sheet;
  } // Avoid Firefox quirk where the style element might not have a sheet property


  var _document = document,
      styleSheets = _document.styleSheets;

  for (var i = 0, l = styleSheets.length; i < l; i++) {
    var sheet = styleSheets[i];

    if (sheet.ownerNode === tag) {
      return sheet;
    }
  }

  throwStyledComponentsError(17);
  return undefined;
};

// 
/** Create a CSSStyleSheet-like tag depending on the environment */

var makeTag = function makeTag(_ref) {
  var isServer = _ref.isServer,
      useCSSOMInjection = _ref.useCSSOMInjection,
      target = _ref.target;

  if (isServer) {
    return new VirtualTag(target);
  } else if (useCSSOMInjection) {
    return new CSSOMTag(target);
  } else {
    return new TextTag(target);
  }
};
var CSSOMTag = /*#__PURE__*/function () {
  function CSSOMTag(target) {
    var element = this.element = makeStyleTag(target); // Avoid Edge bug where empty style elements don't create sheets

    element.appendChild(document.createTextNode(''));
    this.sheet = getSheet(element);
    this.length = 0;
  }

  var _proto = CSSOMTag.prototype;

  _proto.insertRule = function insertRule(index, rule) {
    try {
      this.sheet.insertRule(rule, index);
      this.length++;
      return true;
    } catch (_error) {
      return false;
    }
  };

  _proto.deleteRule = function deleteRule(index) {
    this.sheet.deleteRule(index);
    this.length--;
  };

  _proto.getRule = function getRule(index) {
    var rule = this.sheet.cssRules[index]; // Avoid IE11 quirk where cssText is inaccessible on some invalid rules

    if (rule !== undefined && typeof rule.cssText === 'string') {
      return rule.cssText;
    } else {
      return '';
    }
  };

  return CSSOMTag;
}();
/** A Tag that emulates the CSSStyleSheet API but uses text nodes */

var TextTag = /*#__PURE__*/function () {
  function TextTag(target) {
    var element = this.element = makeStyleTag(target);
    this.nodes = element.childNodes;
    this.length = 0;
  }

  var _proto2 = TextTag.prototype;

  _proto2.insertRule = function insertRule(index, rule) {
    if (index <= this.length && index >= 0) {
      var node = document.createTextNode(rule);
      var refNode = this.nodes[index];
      this.element.insertBefore(node, refNode || null);
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  _proto2.deleteRule = function deleteRule(index) {
    this.element.removeChild(this.nodes[index]);
    this.length--;
  };

  _proto2.getRule = function getRule(index) {
    if (index < this.length) {
      return this.nodes[index].textContent;
    } else {
      return '';
    }
  };

  return TextTag;
}();
/** A completely virtual (server-side) Tag that doesn't manipulate the DOM */

var VirtualTag = /*#__PURE__*/function () {
  function VirtualTag(_target) {
    this.rules = [];
    this.length = 0;
  }

  var _proto3 = VirtualTag.prototype;

  _proto3.insertRule = function insertRule(index, rule) {
    if (index <= this.length) {
      this.rules.splice(index, 0, rule);
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  _proto3.deleteRule = function deleteRule(index) {
    this.rules.splice(index, 1);
    this.length--;
  };

  _proto3.getRule = function getRule(index) {
    if (index < this.length) {
      return this.rules[index];
    } else {
      return '';
    }
  };

  return VirtualTag;
}();

// 
/** Create a GroupedTag with an underlying Tag implementation */

var makeGroupedTag = function makeGroupedTag(tag) {
  return new DefaultGroupedTag(tag);
};
var BASE_SIZE = 1 << 9;

var DefaultGroupedTag = /*#__PURE__*/function () {
  function DefaultGroupedTag(tag) {
    this.groupSizes = new Uint32Array(BASE_SIZE);
    this.length = BASE_SIZE;
    this.tag = tag;
  }

  var _proto = DefaultGroupedTag.prototype;

  _proto.indexOfGroup = function indexOfGroup(group) {
    var index = 0;

    for (var i = 0; i < group; i++) {
      index += this.groupSizes[i];
    }

    return index;
  };

  _proto.insertRules = function insertRules(group, rules) {
    if (group >= this.groupSizes.length) {
      var oldBuffer = this.groupSizes;
      var oldSize = oldBuffer.length;
      var newSize = oldSize;

      while (group >= newSize) {
        newSize <<= 1;

        if (newSize < 0) {
          throwStyledComponentsError(16, "" + group);
        }
      }

      this.groupSizes = new Uint32Array(newSize);
      this.groupSizes.set(oldBuffer);
      this.length = newSize;

      for (var i = oldSize; i < newSize; i++) {
        this.groupSizes[i] = 0;
      }
    }

    var ruleIndex = this.indexOfGroup(group + 1);

    for (var _i = 0, l = rules.length; _i < l; _i++) {
      if (this.tag.insertRule(ruleIndex, rules[_i])) {
        this.groupSizes[group]++;
        ruleIndex++;
      }
    }
  };

  _proto.clearGroup = function clearGroup(group) {
    if (group < this.length) {
      var length = this.groupSizes[group];
      var startIndex = this.indexOfGroup(group);
      var endIndex = startIndex + length;
      this.groupSizes[group] = 0;

      for (var i = startIndex; i < endIndex; i++) {
        this.tag.deleteRule(startIndex);
      }
    }
  };

  _proto.getGroup = function getGroup(group) {
    var css = '';

    if (group >= this.length || this.groupSizes[group] === 0) {
      return css;
    }

    var length = this.groupSizes[group];
    var startIndex = this.indexOfGroup(group);
    var endIndex = startIndex + length;

    for (var i = startIndex; i < endIndex; i++) {
      css += "" + this.tag.getRule(i) + SPLITTER;
    }

    return css;
  };

  return DefaultGroupedTag;
}();

// 
var MAX_SMI = 1 << 31 - 1;
var groupIDRegister = new Map();
var reverseRegister = new Map();
var nextFreeGroup = 1;
var getGroupForId = function getGroupForId(id) {
  if (groupIDRegister.has(id)) {
    return groupIDRegister.get(id);
  }

  var group = nextFreeGroup++;

  if ( true && ((group | 0) < 0 || group > MAX_SMI)) {
    throwStyledComponentsError(16, "" + group);
  }

  groupIDRegister.set(id, group);
  reverseRegister.set(group, id);
  return group;
};
var getIdForGroup = function getIdForGroup(group) {
  return reverseRegister.get(group);
};
var setGroupForId = function setGroupForId(id, group) {
  if (group >= nextFreeGroup) {
    nextFreeGroup = group + 1;
  }

  groupIDRegister.set(id, group);
  reverseRegister.set(group, id);
};

// 
var SELECTOR = "style[" + SC_ATTR + "][" + SC_ATTR_VERSION + "=\"" + SC_VERSION + "\"]";
var MARKER_RE = new RegExp("^" + SC_ATTR + "\\.g(\\d+)\\[id=\"([\\w\\d-]+)\"\\].*?\"([^\"]*)");
var outputSheet = function outputSheet(sheet) {
  var tag = sheet.getTag();
  var length = tag.length;
  var css = '';

  for (var group = 0; group < length; group++) {
    var id = getIdForGroup(group);
    if (id === undefined) continue;
    var names = sheet.names.get(id);
    var rules = tag.getGroup(group);
    if (names === undefined || rules.length === 0) continue;
    var selector = SC_ATTR + ".g" + group + "[id=\"" + id + "\"]";
    var content = '';

    if (names !== undefined) {
      names.forEach(function (name) {
        if (name.length > 0) {
          content += name + ",";
        }
      });
    } // NOTE: It's easier to collect rules and have the marker
    // after the actual rules to simplify the rehydration


    css += "" + rules + selector + "{content:\"" + content + "\"}" + SPLITTER;
  }

  return css;
};

var rehydrateNamesFromContent = function rehydrateNamesFromContent(sheet, id, content) {
  var names = content.split(',');
  var name;

  for (var i = 0, l = names.length; i < l; i++) {
    // eslint-disable-next-line
    if (name = names[i]) {
      sheet.registerName(id, name);
    }
  }
};

var rehydrateSheetFromTag = function rehydrateSheetFromTag(sheet, style) {
  var parts = style.innerHTML.split(SPLITTER);
  var rules = [];

  for (var i = 0, l = parts.length; i < l; i++) {
    var part = parts[i].trim();
    if (!part) continue;
    var marker = part.match(MARKER_RE);

    if (marker) {
      var group = parseInt(marker[1], 10) | 0;
      var id = marker[2];

      if (group !== 0) {
        // Rehydrate componentId to group index mapping
        setGroupForId(id, group); // Rehydrate names and rules
        // looks like: data-styled.g11[id="idA"]{content:"nameA,"}

        rehydrateNamesFromContent(sheet, id, marker[3]);
        sheet.getTag().insertRules(group, rules);
      }

      rules.length = 0;
    } else {
      rules.push(part);
    }
  }
};

var rehydrateSheet = function rehydrateSheet(sheet) {
  var nodes = document.querySelectorAll(SELECTOR);

  for (var i = 0, l = nodes.length; i < l; i++) {
    var node = nodes[i];

    if (node && node.getAttribute(SC_ATTR) !== SC_ATTR_ACTIVE) {
      rehydrateSheetFromTag(sheet, node);

      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    }
  }
};

var SHOULD_REHYDRATE = IS_BROWSER;
var defaultOptions = {
  isServer: !IS_BROWSER,
  useCSSOMInjection: !DISABLE_SPEEDY
};
/** Contains the main stylesheet logic for stringification and caching */

var StyleSheet = /*#__PURE__*/function () {
  /** Register a group ID to give it an index */
  StyleSheet.registerId = function registerId(id) {
    return getGroupForId(id);
  };

  function StyleSheet(options, globalStyles, names) {
    if (options === void 0) {
      options = defaultOptions;
    }

    if (globalStyles === void 0) {
      globalStyles = {};
    }

    this.options = _extends({}, defaultOptions, {}, options);
    this.gs = globalStyles;
    this.names = new Map(names); // We rehydrate only once and use the sheet that is created first

    if (!this.options.isServer && IS_BROWSER && SHOULD_REHYDRATE) {
      SHOULD_REHYDRATE = false;
      rehydrateSheet(this);
    }
  }

  var _proto = StyleSheet.prototype;

  _proto.reconstructWithOptions = function reconstructWithOptions(options) {
    return new StyleSheet(_extends({}, this.options, {}, options), this.gs, this.names);
  };

  _proto.allocateGSInstance = function allocateGSInstance(id) {
    return this.gs[id] = (this.gs[id] || 0) + 1;
  }
  /** Lazily initialises a GroupedTag for when it's actually needed */
  ;

  _proto.getTag = function getTag() {
    return this.tag || (this.tag = makeGroupedTag(makeTag(this.options)));
  }
  /** Check whether a name is known for caching */
  ;

  _proto.hasNameForId = function hasNameForId(id, name) {
    return this.names.has(id) && this.names.get(id).has(name);
  }
  /** Mark a group's name as known for caching */
  ;

  _proto.registerName = function registerName(id, name) {
    getGroupForId(id);

    if (!this.names.has(id)) {
      var groupNames = new Set();
      groupNames.add(name);
      this.names.set(id, groupNames);
    } else {
      this.names.get(id).add(name);
    }
  }
  /** Insert new rules which also marks the name as known */
  ;

  _proto.insertRules = function insertRules(id, name, rules) {
    this.registerName(id, name);
    this.getTag().insertRules(getGroupForId(id), rules);
  }
  /** Clears all cached names for a given group ID */
  ;

  _proto.clearNames = function clearNames(id) {
    if (this.names.has(id)) {
      this.names.get(id).clear();
    }
  }
  /** Clears all rules for a given group ID */
  ;

  _proto.clearRules = function clearRules(id) {
    this.getTag().clearGroup(getGroupForId(id));
    this.clearNames(id);
  }
  /** Clears the entire tag which deletes all rules but not its names */
  ;

  _proto.clearTag = function clearTag() {
    // NOTE: This does not clear the names, since it's only used during SSR
    // so that we can continuously output only new rules
    this.tag = undefined;
  }
  /** Outputs the current sheet as a CSS string with markers for SSR */
  ;

  _proto.toString = function toString() {
    return outputSheet(this);
  };

  return StyleSheet;
}();

// 

/* eslint-disable */
var SEED = 5381; // When we have separate strings it's useful to run a progressive
// version of djb2 where we pretend that we're still looping over
// the same string

var phash = function phash(h, x) {
  var i = x.length;

  while (i) {
    h = h * 33 ^ x.charCodeAt(--i);
  }

  return h;
}; // This is a djb2 hashing function

var hash = function hash(x) {
  return phash(SEED, x);
};

/**
 * MIT License
 *
 * Copyright (c) 2016 Sultan Tarimo
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/* eslint-disable */
function insertRulePlugin (insertRule) {
  var delimiter = '/*|*/';
  var needle = delimiter + "}";

  function toSheet(block) {
    if (block) {
      try {
        insertRule(block + "}");
      } catch (e) {}
    }
  }

  return function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
    switch (context) {
      // property
      case 1:
        // @import
        if (depth === 0 && content.charCodeAt(0) === 64) return insertRule(content + ";"), '';
        break;
      // selector

      case 2:
        if (ns === 0) return content + delimiter;
        break;
      // at-rule

      case 3:
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            return insertRule(selectors[0] + content), '';

          default:
            return content + (at === 0 ? delimiter : '');
        }

      case -2:
        content.split(needle).forEach(toSheet);
    }
  };
}

var COMMENT_REGEX = /^\s*\/\/.*$/gm;
function createStylisInstance(_temp) {
  var _ref = _temp === void 0 ? EMPTY_OBJECT : _temp,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? EMPTY_OBJECT : _ref$options,
      _ref$plugins = _ref.plugins,
      plugins = _ref$plugins === void 0 ? EMPTY_ARRAY : _ref$plugins;

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](options); // Wrap `insertRulePlugin to build a list of rules,
  // and then make our own plugin to return the rules. This
  // makes it easier to hook into the existing SSR architecture

  var parsingRules = []; // eslint-disable-next-line consistent-return

  var returnRulesPlugin = function returnRulesPlugin(context) {
    if (context === -2) {
      var parsedRules = parsingRules;
      parsingRules = [];
      return parsedRules;
    }
  };

  var parseRulesPlugin = insertRulePlugin(function (rule) {
    parsingRules.push(rule);
  });

  var _componentId;

  var _selector;

  var _selectorRegexp;

  var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
    if ( // the first self-ref is always untouched
    offset > 0 && // there should be at least two self-refs to do a replacement (.b > .b)
    string.slice(0, offset).indexOf(_selector) !== -1 && // no consecutive self refs (.b.b); that is a precedence boost and treated differently
    string.slice(offset - _selector.length, offset) !== _selector) {
      return "." + _componentId;
    }

    return match;
  };
  /**
   * When writing a style like
   *
   * & + & {
   *   color: red;
   * }
   *
   * The second ampersand should be a reference to the static component class. stylis
   * has no knowledge of static class so we have to intelligently replace the base selector.
   *
   * https://github.com/thysultan/stylis.js#plugins <- more info about the context phase values
   * "2" means this plugin is taking effect at the very end after all other processing is complete
   */


  var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
    if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
      // eslint-disable-next-line no-param-reassign
      selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
    }
  };

  stylis.use([].concat(plugins, [selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]));

  function stringifyRules(css, selector, prefix, componentId) {
    if (componentId === void 0) {
      componentId = '&';
    }

    var flatCSS = css.replace(COMMENT_REGEX, '');
    var cssStr = selector && prefix ? prefix + " " + selector + " { " + flatCSS + " }" : flatCSS; // stylis has no concept of state to be passed to plugins
    // but since JS is single=threaded, we can rely on that to ensure
    // these properties stay in sync with the current stylis run

    _componentId = componentId;
    _selector = selector;
    _selectorRegexp = new RegExp("\\" + _selector + "\\b", 'g');
    return stylis(prefix || !selector ? '' : selector, cssStr);
  }

  stringifyRules.hash = plugins.length ? plugins.reduce(function (acc, plugin) {
    if (!plugin.name) {
      throwStyledComponentsError(15);
    }

    return phash(acc, plugin.name);
  }, SEED).toString() : '';
  return stringifyRules;
}

// 
var StyleSheetContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var StyleSheetConsumer = StyleSheetContext.Consumer;
var StylisContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var StylisConsumer = StylisContext.Consumer;
var masterSheet = new StyleSheet();
var masterStylis = createStylisInstance();
function useStyleSheet() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(StyleSheetContext) || masterSheet;
}
function useStylis() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(StylisContext) || masterStylis;
}
function StyleSheetManager(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.stylisPlugins),
      plugins = _useState[0],
      setPlugins = _useState[1];

  var contextStyleSheet = useStyleSheet();
  var styleSheet = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var sheet = contextStyleSheet;

    if (props.sheet) {
      // eslint-disable-next-line prefer-destructuring
      sheet = props.sheet;
    } else if (props.target) {
      sheet = sheet.reconstructWithOptions({
        target: props.target
      });
    }

    if (props.disableCSSOMInjection) {
      sheet = sheet.reconstructWithOptions({
        useCSSOMInjection: false
      });
    }

    return sheet;
  }, [props.disableCSSOMInjection, props.sheet, props.target]);
  var stylis = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return createStylisInstance({
      options: {
        prefix: !props.disableVendorPrefixes
      },
      plugins: plugins
    });
  }, [props.disableVendorPrefixes, plugins]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(plugins, props.stylisPlugins)) setPlugins(props.stylisPlugins);
  }, [props.stylisPlugins]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyleSheetContext.Provider, {
    value: styleSheet
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StylisContext.Provider, {
    value: stylis
  },  true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.only(props.children) : undefined));
}

// 

var Keyframes = /*#__PURE__*/function () {
  function Keyframes(name, stringifyArgs) {
    var _this = this;

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.insertRules(_this.id, _this.name, masterStylis.apply(void 0, _this.stringifyArgs));
      }
    };

    this.toString = function () {
      return throwStyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.id = "sc-keyframes-" + name;
    this.stringifyArgs = stringifyArgs;
  }

  var _proto = Keyframes.prototype;

  _proto.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */
var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */

function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

// 

function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__["default"])) {
    return value + "px"; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}

// 
/**
 * It's falsish not falsy because 0 is allowed.
 */

var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);
  keys.forEach(function (key) {
    if (!isFalsish(obj[key])) {
      if (isPlainObject(obj[key])) {
        rules.push.apply(rules, objToCssArray(obj[key], key));
        return rules;
      } else if (isFunction(obj[key])) {
        rules.push(hyphenateStyleName(key) + ":", obj[key], ';');
        return rules;
      }

      rules.push(hyphenateStyleName(key) + ": " + addUnitIfNeeded(key, obj[key]) + ";");
    }

    return rules;
  });
  return prevKey ? [prevKey + " {"].concat(rules, ['}']) : rules;
};
function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);
      if (result === '') continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return '';
  }
  /* Handle other components */


  if (isStyledComponent(chunk)) {
    return "." + chunk.styledComponentId;
  }
  /* Either execute or defer the function */


  if (isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if ( true && Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isElement"])(_result)) {
        // eslint-disable-next-line no-console
        console.warn(getComponentName(chunk) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.");
      }

      return flatten(_result, executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }
  /* Handle objects */


  return isPlainObject(chunk) ? objToCssArray(chunk) : chunk.toString();
}

// 
function css(styles) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  if (interpolations.length === 0 && styles.length === 1 && typeof styles[0] === "string") {
    // $FlowFixMe
    return styles;
  } // $FlowFixMe


  return flatten(interleave(styles, interpolations));
}

function constructWithOptions(componentConstructor, tag, options) {
  if (options === void 0) {
    options = EMPTY_OBJECT;
  }

  if (!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isValidElementType"])(tag)) {
    return throwStyledComponentsError(1, String(tag));
  }
  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments


  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(void 0, arguments));
  };
  /* If config methods are called, wrap up a new template function and merge options */


  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {}, config));
  };
  /* Modify/inject new props at runtime */


  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}

/* eslint-disable */

/**
  mixin-deep; https://github.com/jonschlinkert/mixin-deep
  Inlined such that it will be consistently transpiled to an IE-compatible syntax.

  The MIT License (MIT)

  Copyright (c) 2014-present, Jon Schlinkert.

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
var isObject = function isObject(val) {
  return typeof val === 'function' || typeof val === 'object' && val !== null && !Array.isArray(val);
};

var isValidKey = function isValidKey(key) {
  return key !== '__proto__' && key !== 'constructor' && key !== 'prototype';
};

function mixin(target, val, key) {
  var obj = target[key];

  if (isObject(val) && isObject(obj)) {
    mixinDeep(obj, val);
  } else {
    target[key] = val;
  }
}

function mixinDeep(target) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  for (var _i = 0, _rest = rest; _i < _rest.length; _i++) {
    var obj = _rest[_i];

    if (isObject(obj)) {
      for (var key in obj) {
        if (isValidKey(key)) {
          mixin(target, obj[key], key);
        }
      }
    }
  }

  return target;
}

// 

/* eslint-disable no-bitwise */
var AD_REPLACER_R = /(a)(d)/gi;
/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */

var charsLength = 52;
/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */

var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};
/* input a number, usually a hash and convert it to base-52 */


function generateAlphabeticName(code) {
  var name = '';
  var x;
  /* get a char and divide by alphabet-length */

  for (x = Math.abs(code); x > charsLength; x = x / charsLength | 0) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return (getAlphabeticChar(x % charsLength) + name).replace(AD_REPLACER_R, '$1-$2');
}

// 
function isStaticRules(rules) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  return true;
}

// 
/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */

var ComponentStyle = /*#__PURE__*/function () {
  function ComponentStyle(rules, componentId) {
    this.rules = rules;
    this.staticRulesId = '';
    this.isStatic =  false && false;
    this.componentId = componentId;
    this.baseHash = hash(componentId); // NOTE: This registers the componentId, which ensures a consistent order
    // for this component's styles compared to others

    StyleSheet.registerId(componentId);
  }
  /*
   * Flattens a rule set into valid CSS
   * Hashes it, wraps the whole chunk in a .hash1234 {}
   * Returns the hash to be injected on render()
   * */


  var _proto = ComponentStyle.prototype;

  _proto.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet, stylis) {
    var componentId = this.componentId; // force dynamic classnames if user-supplied stylis plugins are in use

    if (this.isStatic && !stylis.hash) {
      if (this.staticRulesId && styleSheet.hasNameForId(componentId, this.staticRulesId)) {
        return this.staticRulesId;
      }

      var cssStatic = flatten(this.rules, executionContext, styleSheet).join('');
      var name = generateAlphabeticName(phash(this.baseHash, cssStatic.length) >>> 0);

      if (!styleSheet.hasNameForId(componentId, name)) {
        var cssStaticFormatted = stylis(cssStatic, "." + name, undefined, componentId);
        styleSheet.insertRules(componentId, name, cssStaticFormatted);
      }

      this.staticRulesId = name;
      return name;
    } else {
      var length = this.rules.length;
      var dynamicHash = phash(this.baseHash, stylis.hash);
      var css = '';

      for (var i = 0; i < length; i++) {
        var partRule = this.rules[i];

        if (typeof partRule === 'string') {
          css += partRule;
          if (true) dynamicHash = phash(dynamicHash, partRule + i);
        } else {
          var partChunk = flatten(partRule, executionContext, styleSheet);
          var partString = Array.isArray(partChunk) ? partChunk.join('') : partChunk;
          dynamicHash = phash(dynamicHash, partString + i);
          css += partString;
        }
      }

      var _name = generateAlphabeticName(dynamicHash >>> 0);

      if (!styleSheet.hasNameForId(componentId, _name)) {
        var cssFormatted = stylis(css, "." + _name, undefined, componentId);
        styleSheet.insertRules(componentId, _name, cssFormatted);
      }

      return _name;
    }
  };

  return ComponentStyle;
}();

// 
var LIMIT = 200;
var createWarnTooManyClasses = (function (displayName, componentId) {
  var generatedClasses = {};
  var warningSeen = false;
  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;

      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.

        /* eslint-disable no-console, prefer-template */
        var parsedIdString = componentId ? " with the id of \"" + componentId + "\"" : '';
        console.warn("Over " + LIMIT + " classes were generated for component " + displayName + parsedIdString + ".\n" + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs(props => ({\n' + '    style: {\n' + '      background: props.background,\n' + '    },\n' + '  }))`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 
var invalidHookCallRe = /invalid hook call/i;
var seen = new Set();
var checkDynamicCreation = function checkDynamicCreation(displayName, componentId) {
  if (true) {
    var parsedIdString = componentId ? " with the id of \"" + componentId + "\"" : '';
    var message = "The component " + displayName + parsedIdString + " has been created dynamically.\n" + 'You may see this warning because you\'ve called styled inside another component.\n' + 'To resolve this only create new StyledComponents outside of any render method and function component.';

    try {
      // We purposefully call `useRef` outside of a component and expect it to throw
      // If it doesn't, then we're inside another component.
      // eslint-disable-next-line react-hooks/rules-of-hooks
      Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

      if (!seen.has(message)) {
        // eslint-disable-next-line no-console
        console.warn(message);
        seen.add(message);
      }
    } catch (error) {
      // The error here is expected, since we're expecting anything that uses `checkDynamicCreation` to
      // be called outside of a React component.
      if (invalidHookCallRe.test(error.message)) {
        // This shouldn't happen, but resets `warningSeen` if we had this error happen intermittently
        seen["delete"](message);
      }
    }
  }
};

// 
var determineTheme = (function (props, providedTheme, defaultProps) {
  if (defaultProps === void 0) {
    defaultProps = EMPTY_OBJECT;
  }

  return props.theme !== defaultProps.theme && props.theme || providedTheme || defaultProps.theme;
});

// 
// Source: https://www.w3.org/TR/cssom-1/#serialize-an-identifier
// Control characters and non-letter first symbols are not supported
var escapeRegex = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var dashesAtEnds = /(^-|-$)/g;
/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */

function escape(str) {
  return str // Replace all possible CSS selectors
  .replace(escapeRegex, '-') // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 
function isTag(target) {
  return typeof target === 'string' && ( true ? target.charAt(0) === target.charAt(0).toLowerCase() : undefined);
}

// 
function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? "styled." + target : "Styled(" + getComponentName(target) + ")";
}

// 
var generateComponentId = (function (str) {
  return generateAlphabeticName(hash(str) >>> 0);
});

/**
 * Convenience function for joining strings to form className chains
 */
function joinStrings(a, b) {
  return a && b ? a + " " + b : a || b;
}

var ThemeContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var ThemeConsumer = ThemeContext.Consumer;

function mergeTheme(theme, outerTheme) {
  if (!theme) {
    return throwStyledComponentsError(14);
  }

  if (isFunction(theme)) {
    var mergedTheme = theme(outerTheme);

    if ( true && (mergedTheme === null || Array.isArray(mergedTheme) || typeof mergedTheme !== 'object')) {
      return throwStyledComponentsError(7);
    }

    return mergedTheme;
  }

  if (Array.isArray(theme) || typeof theme !== 'object') {
    return throwStyledComponentsError(8);
  }

  return outerTheme ? _extends({}, outerTheme, {}, theme) : theme;
}
/**
 * Provide a theme to an entire react component tree via context
 */


function ThemeProvider(props) {
  var outerTheme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
  var themeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return mergeTheme(props.theme, outerTheme);
  }, [props.theme, outerTheme]);

  if (!props.children) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ThemeContext.Provider, {
    value: themeContext
  }, props.children);
}

/* global $Call */

var identifiers = {};
/* We depend on components having unique IDs */

function generateId(displayName, parentComponentId) {
  var name = typeof displayName !== 'string' ? 'sc' : escape(displayName); // Ensure that no displayName can lead to duplicate componentIds

  identifiers[name] = (identifiers[name] || 0) + 1;
  var componentId = name + "-" + generateComponentId(name + identifiers[name]);
  return parentComponentId ? parentComponentId + "-" + componentId : componentId;
}

function useResolvedAttrs(theme, props, attrs) {
  if (theme === void 0) {
    theme = EMPTY_OBJECT;
  }

  // NOTE: can't memoize this
  // returns [context, resolvedAttrs]
  // where resolvedAttrs is only the things injected by the attrs themselves
  var context = _extends({}, props, {
    theme: theme
  });

  var resolvedAttrs = {};
  attrs.forEach(function (attrDef) {
    var resolvedAttrDef = attrDef;
    var key;

    if (isFunction(resolvedAttrDef)) {
      resolvedAttrDef = resolvedAttrDef(context);
    }
    /* eslint-disable guard-for-in */


    for (key in resolvedAttrDef) {
      context[key] = resolvedAttrs[key] = key === 'className' ? joinStrings(resolvedAttrs[key], resolvedAttrDef[key]) : resolvedAttrDef[key];
    }
    /* eslint-enable guard-for-in */

  });
  return [context, resolvedAttrs];
}

function useInjectedStyle(componentStyle, hasAttrs, resolvedAttrs, warnTooManyClasses) {
  var styleSheet = useStyleSheet();
  var stylis = useStylis(); // statically styled-components don't need to build an execution context object,
  // and shouldn't be increasing the number of class names

  var isStatic = componentStyle.isStatic && !hasAttrs;
  var className = isStatic ? componentStyle.generateAndInjectStyles(EMPTY_OBJECT, styleSheet, stylis) : componentStyle.generateAndInjectStyles(resolvedAttrs, styleSheet, stylis);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(className);

  if ( true && !isStatic && warnTooManyClasses) {
    warnTooManyClasses(className);
  }

  return className;
}

function useStyledComponentImpl(forwardedComponent, props, forwardedRef) {
  var componentAttrs = forwardedComponent.attrs,
      componentStyle = forwardedComponent.componentStyle,
      defaultProps = forwardedComponent.defaultProps,
      foldedComponentIds = forwardedComponent.foldedComponentIds,
      shouldForwardProp = forwardedComponent.shouldForwardProp,
      styledComponentId = forwardedComponent.styledComponentId,
      target = forwardedComponent.target;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(styledComponentId); // NOTE: the non-hooks version only subscribes to this when !componentStyle.isStatic,
  // but that'd be against the rules-of-hooks. We could be naughty and do it anyway as it
  // should be an immutable value, but behave for now.

  var theme = determineTheme(props, Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext), defaultProps);

  var _useResolvedAttrs = useResolvedAttrs(theme || EMPTY_OBJECT, props, componentAttrs),
      context = _useResolvedAttrs[0],
      attrs = _useResolvedAttrs[1];

  var generatedClassName = useInjectedStyle(componentStyle, componentAttrs.length > 0, context,  true ? forwardedComponent.warnTooManyClasses : undefined);
  var refToForward = forwardedRef;
  var elementToBeCreated = attrs.$as || props.$as || attrs.as || props.as || target;
  var isTargetTag = isTag(elementToBeCreated);
  var computedProps = attrs !== props ? _extends({}, props, {}, attrs) : props;
  var propFilterFn = shouldForwardProp || isTargetTag && _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"];
  var propsForElement = {}; // eslint-disable-next-line guard-for-in

  for (var key in computedProps) {
    if (key[0] === '$' || key === 'as') continue;else if (key === 'forwardedAs') {
      propsForElement.as = computedProps[key];
    } else if (!propFilterFn || propFilterFn(key, _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"])) {
      // Don't pass through non HTML tags through to HTML elements
      propsForElement[key] = computedProps[key];
    }
  }

  if (props.style && attrs.style !== props.style) {
    propsForElement.style = _extends({}, props.style, {}, attrs.style);
  }

  propsForElement.className = Array.prototype.concat(foldedComponentIds, styledComponentId, generatedClassName !== styledComponentId ? generatedClassName : null, props.className, attrs.className).filter(Boolean).join(' ');
  propsForElement.ref = refToForward;
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(elementToBeCreated, propsForElement);
}

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isCompositeComponent = !isTag(target);
  var _options$displayName = options.displayName,
      displayName = _options$displayName === void 0 ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === void 0 ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
      _options$attrs = options.attrs,
      attrs = _options$attrs === void 0 ? EMPTY_ARRAY : _options$attrs;
  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + "-" + options.componentId : options.componentId || componentId; // fold the underlying StyledComponent attrs up (implicit extend)

  var finalAttrs = // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs; // eslint-disable-next-line prefer-destructuring

  var shouldForwardProp = options.shouldForwardProp; // $FlowFixMe

  if (isTargetStyledComp && target.shouldForwardProp) {
    if (shouldForwardProp) {
      // compose nested shouldForwardProp calls
      shouldForwardProp = function shouldForwardProp(prop, filterFn) {
        return (// $FlowFixMe
          target.shouldForwardProp(prop, filterFn) && options.shouldForwardProp(prop, filterFn)
        );
      };
    } else {
      // eslint-disable-next-line prefer-destructuring
      shouldForwardProp = target.shouldForwardProp;
    }
  }

  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, styledComponentId);
  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */

  var WrappedStyledComponent; // eslint-disable-next-line react-hooks/rules-of-hooks

  var forwardRef = function forwardRef(props, ref) {
    return useStyledComponentImpl(WrappedStyledComponent, props, ref);
  };

  forwardRef.displayName = displayName; // $FlowFixMe this is a forced cast to merge it StyledComponentWrapperProperties

  WrappedStyledComponent = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(forwardRef);
  WrappedStyledComponent.attrs = finalAttrs;
  WrappedStyledComponent.componentStyle = componentStyle;
  WrappedStyledComponent.displayName = displayName;
  WrappedStyledComponent.shouldForwardProp = shouldForwardProp; // this static is used to preserve the cascade of static classes for component selector
  // purposes; this is especially important with usage of the css prop

  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;
  WrappedStyledComponent.styledComponentId = styledComponentId; // fold the underlying StyledComponent target up since we folded the styles

  WrappedStyledComponent.target = isTargetStyledComp ? // $FlowFixMe
  target.target : target; // $FlowFixMe

  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = _objectWithoutPropertiesLoose(options, ["componentId"]);

    var newComponentId = previousComponentId && previousComponentId + "-" + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId
    });

    return createStyledComponent(tag, newOptions, rules);
  }; // $FlowFixMe


  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
    get: function get() {
      return this._foldedDefaultProps;
    },
    set: function set(obj) {
      // $FlowFixMe
      this._foldedDefaultProps = isTargetStyledComp ? mixinDeep({}, target.defaultProps, obj) : obj;
    }
  });

  if (true) {
    checkDynamicCreation(displayName, styledComponentId);
    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName, styledComponentId);
  } // $FlowFixMe


  WrappedStyledComponent.toString = function () {
    return "." + WrappedStyledComponent.styledComponentId;
  };

  if (isCompositeComponent) {
    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      shouldForwardProp: true,
      self: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
}

// 
// Thanks to ReactDOMFactories for this handy list!
var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
}; // Shorthands for all valid HTML Elements


domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
});

// 

var GlobalStyle = /*#__PURE__*/function () {
  function GlobalStyle(rules, componentId) {
    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules);
  }

  var _proto = GlobalStyle.prototype;

  _proto.createStyles = function createStyles(instance, executionContext, styleSheet, stylis) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stylis(flatCSS.join(''), '');
    var id = this.componentId + instance; // NOTE: We use the id as a name as well, since these rules never change

    styleSheet.insertRules(id, id, css);
  };

  _proto.removeStyles = function removeStyles(instance, styleSheet) {
    styleSheet.clearRules(this.componentId + instance);
  };

  _proto.renderStyles = function renderStyles(instance, executionContext, styleSheet, stylis) {
    StyleSheet.registerId(this.componentId + instance); // NOTE: Remove old styles, then inject the new ones

    this.removeStyles(instance, styleSheet);
    this.createStyles(instance, executionContext, styleSheet, stylis);
  };

  return GlobalStyle;
}();

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(void 0, [strings].concat(interpolations));
  var styledComponentId = "sc-global-" + generateComponentId(JSON.stringify(rules));
  var globalStyle = new GlobalStyle(rules, styledComponentId);

  if (true) {
    checkDynamicCreation(styledComponentId);
  }

  function GlobalStyleComponent(props) {
    var styleSheet = useStyleSheet();
    var stylis = useStylis();
    var theme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
    var instanceRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

    if (instanceRef.current === null) {
      instanceRef.current = styleSheet.allocateGSInstance(styledComponentId);
    }

    var instance = instanceRef.current;

    if ( true && react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.count(props.children)) {
      // eslint-disable-next-line no-console
      console.warn("The global style component " + styledComponentId + " was given child JSX. createGlobalStyle does not render children.");
    }

    if ( true && rules.some(function (rule) {
      return typeof rule === 'string' && rule.indexOf('@import') !== -1;
    })) {
      console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app.");
    }

    if (globalStyle.isStatic) {
      globalStyle.renderStyles(instance, STATIC_EXECUTION_CONTEXT, styleSheet, stylis);
    } else {
      var context = _extends({}, props, {
        theme: determineTheme(props, theme, GlobalStyleComponent.defaultProps)
      });

      globalStyle.renderStyles(instance, context, styleSheet, stylis);
    }

    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      return function () {
        return globalStyle.removeStyles(instance, styleSheet);
      };
    }, EMPTY_ARRAY);
    return null;
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(GlobalStyleComponent);
}

// 
function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    // eslint-disable-next-line no-console
    console.warn('`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.');
  }

  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(void 0, [strings].concat(interpolations)).join('');
  var name = generateComponentId(rules);
  return new Keyframes(name, [rules, name, '@keyframes']);
}

var ServerStyleSheet = /*#__PURE__*/function () {
  function ServerStyleSheet() {
    var _this = this;

    this._emitSheetCSS = function () {
      var css = _this.instance.toString();

      var nonce = getNonce();
      var attrs = [nonce && "nonce=\"" + nonce + "\"", SC_ATTR + "=\"true\"", SC_ATTR_VERSION + "=\"" + SC_VERSION + "\""];
      var htmlAttr = attrs.filter(Boolean).join(' ');
      return "<style " + htmlAttr + ">" + css + "</style>";
    };

    this.getStyleTags = function () {
      if (_this.sealed) {
        return throwStyledComponentsError(2);
      }

      return _this._emitSheetCSS();
    };

    this.getStyleElement = function () {
      var _props;

      if (_this.sealed) {
        return throwStyledComponentsError(2);
      }

      var props = (_props = {}, _props[SC_ATTR] = '', _props[SC_ATTR_VERSION] = SC_VERSION, _props.dangerouslySetInnerHTML = {
        __html: _this.instance.toString()
      }, _props);
      var nonce = getNonce();

      if (nonce) {
        props.nonce = nonce;
      } // v4 returned an array for this fn, so we'll do the same for v5 for backward compat


      return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", _extends({}, props, {
        key: "sc-0-0"
      }))];
    };

    this.seal = function () {
      _this.sealed = true;
    };

    this.instance = new StyleSheet({
      isServer: true
    });
    this.sealed = false;
  }

  var _proto = ServerStyleSheet.prototype;

  _proto.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      return throwStyledComponentsError(2);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyleSheetManager, {
      sheet: this.instance
    }, children);
  };

  // eslint-disable-next-line consistent-return
  _proto.interleaveWithNodeStream = function interleaveWithNodeStream(input) {
    {
      return throwStyledComponentsError(3);
    }
  };

  return ServerStyleSheet;
}();

// export default <Config: { theme?: any }, Instance>(
//  Component: AbstractComponent<Config, Instance>
// ): AbstractComponent<$Diff<Config, { theme?: any }> & { theme?: any }, Instance>
//
// but the old build system tooling doesn't support the syntax

var withTheme = (function (Component) {
  // $FlowFixMe This should be React.forwardRef<Config, Instance>
  var WithTheme = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (props, ref) {
    var theme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext); // $FlowFixMe defaultProps isn't declared so it can be inferrable

    var defaultProps = Component.defaultProps;
    var themeProp = determineTheme(props, theme, defaultProps);

    if ( true && themeProp === undefined) {
      // eslint-disable-next-line no-console
      console.warn("[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class \"" + getComponentName(Component) + "\"");
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, props, {
      theme: themeProp,
      ref: ref
    }));
  });
  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(WithTheme, Component);
  WithTheme.displayName = "WithTheme(" + getComponentName(Component) + ")";
  return WithTheme;
});

// 

var useTheme = function useTheme() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
};

// 
var __PRIVATE__ = {
  StyleSheet: StyleSheet,
  masterSheet: masterSheet
};

// 
/* Define bundle version for export */

var version = "5.1.1";
/* Warning if you've imported this file on React Native */

if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}
/* Warning if there are several instances of styled-components */


if ( true && typeof window !== 'undefined') {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process, ' + 'missing theme prop, and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

/* harmony default export */ __webpack_exports__["default"] = (styled);

//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/toggle-selection/index.js":
/*!************************************************!*\
  !*** ./node_modules/toggle-selection/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./components/index.ts");
/* harmony import */ var react_headroom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-headroom */ "./node_modules/react-headroom/dist/index.js");
/* harmony import */ var react_headroom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_headroom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks */ "./hooks/index.ts");
/* harmony import */ var _globalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globalStyles */ "./globalStyles/index.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "C:\\Workspace\\Projects\\my-portfolio\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];







var App = function App() {
  var logoAnimationEnds = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useTimeout"])(4000);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Ilyass Ben Hakim")), __jsx(_globalStyles__WEBPACK_IMPORTED_MODULE_4__["GlobalStyle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx(react_headroom__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  })), __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["SocialMedia"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), logoAnimationEnds && __jsx("div", {
    style: {
      transform: "translate3d(0,10vh,0)"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["Vstack"], {
    space: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["FrontendDev"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["Minimalist"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["Contact"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./utils/breakpoints.ts":
/*!******************************!*\
  !*** ./utils/breakpoints.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n          @media only screen and (min-width: ", "px) {\n            ", "\n          }\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      ", "\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


/* harmony default export */ __webpack_exports__["default"] = (function (style) {
  if (typeof style === "object") {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject(), Object.keys(style).map(function (objKey, _) {
      //  Wrapp breakpoints
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2(), [objKey], Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(style[objKey]));
    }));
  }

  return style;
});

/***/ }),

/***/ "./utils/helpers.ts":
/*!**************************!*\
  !*** ./utils/helpers.ts ***!
  \**************************/
/*! exports provided: makeMin, makeMax, makeProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMin", function() { return makeMin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMax", function() { return makeMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeProps", function() { return makeProps; });
// utils
var makeDistance = function makeDistance(coefficient) {
  return 500 * coefficient;
};

var makeGap = function makeGap(coefficient) {
  return 700 * coefficient;
}; // return 0 or a gap


var makeMin = function makeMin(coefficient) {
  return coefficient === 0 ? 0 : makeDistance(coefficient) + makeGap(coefficient);
}; // return a distance from min

var makeMax = function makeMax(coefficient) {
  return coefficient === 0 ? makeDistance(coefficient + 1) : makeMin(coefficient) + 500;
}; // wrap props

var makeProps = function makeProps(coefficient, max) {
  return {
    min: makeMin(coefficient),
    max: max ? makeMax(max) : makeMax(coefficient)
  };
};

/***/ }),

/***/ "./utils/index.ts":
/*!************************!*\
  !*** ./utils/index.ts ***!
  \************************/
/*! exports provided: makeMin, makeMax, makeProps, breakpoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./utils/helpers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeMin", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__["makeMin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeMax", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__["makeMax"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeProps", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__["makeProps"]; });

/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakpoints */ "./utils/breakpoints.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return _breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ 2:
/*!*******************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CWorkspace%5CProjects%5Cmy-portfolio%5Cpages%5Cindex.tsx ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CWorkspace%5CProjects%5Cmy-portfolio%5Cpages%5Cindex.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CWorkspace%5CProjects%5Cmy-portfolio%5Cpages%5Cindex.tsx!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map