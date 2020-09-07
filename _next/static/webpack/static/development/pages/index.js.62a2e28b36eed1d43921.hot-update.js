webpackHotUpdate("static\\development\\pages\\index.js",{

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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0 auto !important;\n  text-align: center;\n  width: 100%;\n  height: 500px;\n  max-width: 517px;\n  padding-bottom: 40px;\n  z-index: 99;\n  ", "\n"]);

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

/***/ })

})
//# sourceMappingURL=index.js.62a2e28b36eed1d43921.hot-update.js.map