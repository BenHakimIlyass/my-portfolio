webpackHotUpdate("static\\development\\pages\\index.js",{

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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0 auto !important;\n  z-index: 99 !important;\n  text-align: center;\n  width: 100%;\n  max-width: 517px;\n  height: 500px;\n  height: fit-content;\n  min-width: 400px;\n  min-height: 400px;\n  ", "\n"]);

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

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), Object(_utils__WEBPACK_IMPORTED_MODULE_8__["breakpoints"])({}));
/* harmony default export */ __webpack_exports__["default"] = (Imgs);

/***/ })

})
//# sourceMappingURL=index.js.9f7194348581be98581e.hot-update.js.map