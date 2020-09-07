webpackHotUpdate("static\\development\\pages\\index.js",{

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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 30px;\n  position: absolute;\n  padding: 0 8px;\n  box-shadow: 0px 0px 40px rgba(9, 9, 9, 0.97);\n  color: #fff;\n  border-radius: 8px;\n  z-index: 200;\n  bottom: 50px;\n  line-height: 30px;\n  background-color: #000;\n  user-select: none;\n  font-size: 12px;\n"]);

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
  src: "/linkedin.svg",
  alt: "LinkedIn",
  href: "https://www.linkedin.com/in/ilyass-ben-hakim-%E2%9A%9B%EF%B8%8F-859480160/"
}];
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject());
var CopyIndicator = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div)(_templateObject2());
/* harmony default export */ __webpack_exports__["default"] = (SocialMedia);

/***/ })

})
//# sourceMappingURL=index.js.0487c08e34be044f2ce6.hot-update.js.map