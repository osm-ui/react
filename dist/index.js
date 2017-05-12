(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("styled-components"), require("prop-types"), require("classnames"), require("bootstrap"), require("font-awesome/css/font-awesome.min.css"), require("jquery"), require("leaflet.locatecontrol/dist/L.Control.Locate.css"), require("leaflet/dist/leaflet.css"), require("leaflet"), require("leaflet.locatecontrol"), require("lodash"), require("react-fontawesome"), require("react-leaflet"), require("react-select/dist/react-select.css"), require("react-virtualized-select"), require("react-virtualized-select/styles.css"), require("react-virtualized/styles.css"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "styled-components", "prop-types", "classnames", "bootstrap", "font-awesome/css/font-awesome.min.css", "jquery", "leaflet.locatecontrol/dist/L.Control.Locate.css", "leaflet/dist/leaflet.css", "leaflet", "leaflet.locatecontrol", "lodash", "react-fontawesome", "react-leaflet", "react-select/dist/react-select.css", "react-virtualized-select", "react-virtualized-select/styles.css", "react-virtualized/styles.css"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("styled-components"), require("prop-types"), require("classnames"), require("bootstrap"), require("font-awesome/css/font-awesome.min.css"), require("jquery"), require("leaflet.locatecontrol/dist/L.Control.Locate.css"), require("leaflet/dist/leaflet.css"), require("leaflet"), require("leaflet.locatecontrol"), require("lodash"), require("react-fontawesome"), require("react-leaflet"), require("react-select/dist/react-select.css"), require("react-virtualized-select"), require("react-virtualized-select/styles.css"), require("react-virtualized/styles.css")) : factory(root["react"], root["styled-components"], root["prop-types"], root["classnames"], root["bootstrap"], root["font-awesome/css/font-awesome.min.css"], root["jquery"], root["leaflet.locatecontrol/dist/L.Control.Locate.css"], root["leaflet/dist/leaflet.css"], root["leaflet"], root["leaflet.locatecontrol"], root["lodash"], root["react-fontawesome"], root["react-leaflet"], root["react-select/dist/react-select.css"], root["react-virtualized-select"], root["react-virtualized-select/styles.css"], root["react-virtualized/styles.css"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_40__, __WEBPACK_EXTERNAL_MODULE_41__, __WEBPACK_EXTERNAL_MODULE_42__, __WEBPACK_EXTERNAL_MODULE_43__, __WEBPACK_EXTERNAL_MODULE_44__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Loader = __webpack_require__(34);

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Loader2.default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StyledDiv = exports.config = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    font-family: ', ';\n'], ['\n    font-family: ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _colors = __webpack_require__(6);

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var config = exports.config = {
    font: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    color: _colors2.default.anthracite1,
    backgroundColor: _colors2.default.white,
    borderColor: _colors2.default.gray4,
    dimmerBackgroundColor: _colors2.default.white,
    loaderColor: _colors2.default.gray1,
    borderStyle: 'solid',
    borderWidth: '4px',
    borderRadius: 0,
    controlColor: _colors2.default.gray4,
    hoverControlColor: _colors2.default.gray1,

    map: {
        controlColor: _colors2.default.anthracite1,
        controlBackgroundColor: _colors2.default.white,
        hoverControlColor: _colors2.default.white,
        hoverControlBackgroundColor: _colors2.default.blue2
    },
    form: {
        select: {
            optionColor: _colors2.default.white,
            optionBackgroundColor: _colors2.default.blue2
        },
        button: {
            fontWeight: 700,
            color: _colors2.default.anthracite2,
            backgroundColor: _colors2.default.white,
            borderColor: _colors2.default.gray3,
            hoverBackgroundColor: _colors2.default.gray5,
            hoverBorderColor: _colors2.default.gray3,
            focusBackgroundColor: _colors2.default.gray5,
            focusBorderColor: _colors2.default.gray3,
            activeBackgroundColor: _colors2.default.gray5,
            activeBorderColor: _colors2.default.gray3,

            primary: {
                fontWeight: 700,
                color: _colors2.default.white,
                backgroundColor: _colors2.default.blue2,
                borderColor: _colors2.default.blue2,
                hoverBackgroundColor: _colors2.default.blue3,
                hoverBorderColor: _colors2.default.blue3,
                focusBackgroundColor: _colors2.default.blue3,
                focusBorderColor: _colors2.default.blue3,
                activeBackgroundColor: _colors2.default.blue3,
                activeBorderColor: _colors2.default.blue3
            },

            info: {
                fontWeight: 700,
                color: _colors2.default.white,
                backgroundColor: _colors2.default.turquoise2,
                borderColor: _colors2.default.turquoise2,
                hoverBackgroundColor: _colors2.default.turquoise3,
                hoverBorderColor: _colors2.default.turquoise3,
                focusBackgroundColor: _colors2.default.turquoise3,
                focusBorderColor: _colors2.default.turquoise3,
                activeBackgroundColor: _colors2.default.turquoise3,
                activeBorderColor: _colors2.default.turquoise3
            },

            success: {
                fontWeight: 700,
                color: _colors2.default.white,
                backgroundColor: _colors2.default.green2,
                borderColor: _colors2.default.green2,
                hoverBackgroundColor: _colors2.default.green3,
                hoverBorderColor: _colors2.default.green3,
                focusBackgroundColor: _colors2.default.green3,
                focusBorderColor: _colors2.default.green3,
                activeBackgroundColor: _colors2.default.green3,
                activeBorderColor: _colors2.default.green3
            },

            warning: {
                fontWeight: 700,
                color: _colors2.default.white,
                backgroundColor: _colors2.default.orange2,
                borderColor: _colors2.default.orange2,
                hoverBackgroundColor: _colors2.default.orange3,
                hoverBorderColor: _colors2.default.orange3,
                focusBackgroundColor: _colors2.default.orange3,
                focusBorderColor: _colors2.default.orange3,
                activeBackgroundColor: _colors2.default.orange3,
                activeBorderColor: _colors2.default.orange3
            },

            danger: {
                fontWeight: 700,
                color: _colors2.default.white,
                backgroundColor: _colors2.default.red2,
                borderColor: _colors2.default.red2,
                hoverBackgroundColor: _colors2.default.red3,
                hoverBorderColor: _colors2.default.red3,
                focusBackgroundColor: _colors2.default.red3,
                focusBorderColor: _colors2.default.red3,
                activeBackgroundColor: _colors2.default.red3,
                activeBorderColor: _colors2.default.red3
            },

            link: {
                fontWeight: 400,
                color: _colors2.default.blue2,
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                hoverBackgroundColor: 'transparent',
                hoverBorderColor: 'transparent',
                focusBackgroundColor: 'transparent',
                focusBorderColor: 'transparent',
                activeBackgroundColor: 'transparent',
                activeBorderColor: 'transparent'
            }
        },
        input: {
            borderWidth: '2px',
            borderRadius: 0,
            boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
            opacity: 0.8,
            backgroundColor: _colors2.default.white,
            borderColor: _colors2.default.gray3,

            focusOpacity: 1,
            focusBackgroundColor: _colors2.default.white,
            focusBorderColor: _colors2.default.blue2,
            focusBoxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',

            success: {
                color: _colors2.default.green2,
                backgroundColor: _colors2.default.white,
                borderColor: _colors2.default.green2
            },

            warning: {
                color: _colors2.default.orange2,
                backgroundColor: _colors2.default.white,
                borderColor: _colors2.default.orange2
            },

            error: {
                color: _colors2.default.red1,
                backgroundColor: _colors2.default.white,
                borderColor: _colors2.default.red2
            }
        },
        label: {
            color: _colors2.default.anthracite1,
            fontSize: '1.1em',
            fontWeight: 400,

            success: {
                color: _colors2.default.green1
            },

            warning: {
                color: _colors2.default.orange1
            },

            error: {
                color: _colors2.default.red1
            }
        },
        hint: {
            fontSize: '0.9em',
            margin: 0,
            padding: '5px 10px',

            backgroundColor: _colors2.default.gray5,
            color: _colors2.default.anthracite2,

            success: {
                color: _colors2.default.white,
                backgroundColor: _colors2.default.green2
            },

            warning: {
                color: _colors2.default.white,
                backgroundColor: _colors2.default.orange2
            },

            error: {
                color: _colors2.default.white,
                backgroundColor: _colors2.default.red2
            }
        }
    },
    alert: {
        info: {
            color: _colors2.default.turquoise1,
            backgroundColor: _colors2.default.turquoise5,
            borderColor: _colors2.default.turquoise5
        },

        success: {
            color: _colors2.default.green1,
            backgroundColor: _colors2.default.green5,
            borderColor: _colors2.default.green5
        },

        warning: {
            color: _colors2.default.orange1,
            backgroundColor: _colors2.default.orange5,
            borderColor: _colors2.default.orange5
        },

        danger: {
            color: _colors2.default.red1,
            backgroundColor: _colors2.default.red5,
            borderColor: _colors2.default.red5
        }
    }
};

var StyledDiv = exports.StyledDiv = _styledComponents2.default.div(_templateObject, function (props) {
    return props.theme.font;
});

var DefaultTheme = function DefaultTheme(_ref) {
    var children = _ref.children,
        rest = _objectWithoutProperties(_ref, ['children']);

    return _react2.default.createElement(
        _styledComponents.ThemeProvider,
        _extends({ theme: config }, rest),
        _react2.default.createElement(
            StyledDiv,
            null,
            children
        )
    );
};

DefaultTheme.propTypes = {
    children: _propTypes2.default.node.isRequired
};

DefaultTheme.displayName = 'DefaultTheme';

exports.default = DefaultTheme;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * This file is a json representation of the palette.svg file.
 * Thank you to not modify it without updating the svg reference.
 */

/* eslint-disable */

exports.default = {
    white: '#ffffff',
    black: '#000000',

    anthracite1: '#3b3f45',
    anthracite2: '#707377',
    anthracite3: '#b7b9bb',
    anthracite4: '#c9cacc',
    anthracite5: '#dbdcdd',

    gray1: '#7a8888',
    gray2: '#adb8b9',
    gray3: '#d0d6d7',
    gray4: '#dce1e1',
    gray5: '#eff1f1',

    yellow1: '#e3b900',
    yellow2: '#ffde08',
    yellow3: '#fffa66',
    yellow4: '#ffffb5',
    yellow5: '#ffffcf',

    orange1: '#de8c00',
    orange2: '#ffb600',
    orange3: '#ffd761',
    orange4: '#ffecb3',
    orange5: '#fff2ce',

    brown1: '#965c00',
    brown2: '#ba7200',
    brown3: '#d3a65d',
    brown4: '#dcbd8b',
    brown5: '#ead7b9',

    red1: '#c92d2d',
    red2: '#f44336',
    red3: '#f8877f',
    red4: '#f9a7a1',
    red5: '#ffcdd2',

    rose1: '#b81756',
    rose2: '#e91e63',
    rose3: '#f06292',
    rose4: '#f48caf',
    rose5: '#f8bbd0',

    purple1: '#894ba1',
    purple2: '#b46dd0',
    purple3: '#ca99de',
    purple4: '#d9b6e7',
    purple5: '#e8d3f1',

    blue1: '#186fc5',
    blue2: '#2196f3',
    blue3: '#71bcf7',
    blue4: '#97cef9',
    blue5: '#c2e2fb',

    turquoise1: '#00948d',
    turquoise2: '#00c6bc',
    turquoise3: '#5cd7d1',
    turquoise4: '#8be2de',
    turquoise5: '#b9eeeb',

    green1: '#348538',
    green2: '#4caf50',
    green3: '#7cc47f',
    green4: '#9fd4a1',
    green5: '#c8e6c9'
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    margin: 0 0 30px;\n\n    &.in-header {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        margin: 0 0 0 20px;\n        line-height: 50px;\n    }\n'], ['\n    margin: 0 0 30px;\n\n    &.in-header {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        margin: 0 0 0 20px;\n        line-height: 50px;\n    }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledH2 = _styledComponents2.default.h2(_templateObject);

var ColumnTitle = function ColumnTitle(_ref) {
    var children = _ref.children,
        inHeader = _ref.inHeader,
        className = _ref.className,
        rest = _objectWithoutProperties(_ref, ['children', 'inHeader', 'className']);

    var classes = (0, _classnames2.default)(className, {
        'column-title': true,
        'in-header': inHeader
    });

    return _react2.default.createElement(
        StyledH2,
        _extends({ className: classes }, rest),
        children
    );
};

ColumnTitle.propTypes = {
    children: _propTypes2.default.node.isRequired,
    inHeader: _propTypes2.default.bool,
    className: _propTypes2.default.string
};

ColumnTitle.defaultProps = {
    inHeader: false,
    className: ''
};

ColumnTitle.displayName = 'Column.Title';

exports.default = ColumnTitle;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    font-size: ', ';\n    color: ', ';\n    background-color: ', ';\n    margin: ', ';\n    padding: ', ';\n'], ['\n    font-size: ', ';\n    color: ', ';\n    background-color: ', ';\n    margin: ', ';\n    padding: ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDiv = _styledComponents2.default.div(_templateObject, function (props) {
    return props.theme.form.hint.fontSize;
}, function (props) {
    return props.theme.form.hint.color;
}, function (props) {
    return props.theme.form.hint.backgroundColor;
}, function (props) {
    return props.theme.form.hint.margin;
}, function (props) {
    return props.theme.form.hint.padding;
});

var InputHint = function InputHint(props) {
    return _react2.default.createElement(StyledDiv, _extends({ className: 'help-block' }, props));
};

InputHint.displayName = 'Form.InputHint';

exports.default = InputHint;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Alert = __webpack_require__(22);

var _Alert2 = _interopRequireDefault(_Alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Alert2.default;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AppCanvas = __webpack_require__(23);

var _AppCanvas2 = _interopRequireDefault(_AppCanvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AppCanvas2.default;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Button = __webpack_require__(24);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Button2.default;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Column = __webpack_require__(25);

var _Column2 = _interopRequireDefault(_Column);

var _Title = __webpack_require__(7);

var _Title2 = _interopRequireDefault(_Title);

var _Header = __webpack_require__(27);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(26);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Column2.default.Title = _Title2.default;
_Column2.default.Header = _Header2.default;
_Column2.default.Footer = _Footer2.default;

exports.default = _Column2.default;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Form = __webpack_require__(28);

var _Form2 = _interopRequireDefault(_Form);

var _FormGroup = __webpack_require__(29);

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _Label = __webpack_require__(31);

var _Label2 = _interopRequireDefault(_Label);

var _Input = __webpack_require__(30);

var _Input2 = _interopRequireDefault(_Input);

var _Textarea = __webpack_require__(33);

var _Textarea2 = _interopRequireDefault(_Textarea);

var _Select = __webpack_require__(32);

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Form2.default.Group = _FormGroup2.default;
_Form2.default.Label = _Label2.default;
_Form2.default.Input = _Input2.default;
_Form2.default.Textarea = _Textarea2.default;
_Form2.default.Select = _Select2.default;

exports.default = _Form2.default;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Map = __webpack_require__(35);

var _Map2 = _interopRequireDefault(_Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Map2.default;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.config = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _lodash = __webpack_require__(38);

var _lodash2 = _interopRequireDefault(_lodash);

var _Default = __webpack_require__(5);

var _colors = __webpack_require__(6);

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var config = exports.config = _lodash2.default.merge({}, _Default.config, {
    color: _colors2.default.white,
    backgroundColor: _colors2.default.red2,
    borderColor: _colors2.default.red1,
    dimmerBackgroundColor: _colors2.default.red2,
    loaderColor: _colors2.default.white,
    controlColor: _colors2.default.red1,
    hoverControlColor: _colors2.default.white,

    form: {
        button: {
            color: _colors2.default.white,
            backgroundColor: _colors2.default.red2,
            borderColor: _colors2.default.red5,
            hoverBackgroundColor: _colors2.default.red3,
            hoverBorderColor: _colors2.default.red5,
            focusBackgroundColor: _colors2.default.red3,
            focusBorderColor: _colors2.default.red5,
            activeBackgroundColor: _colors2.default.red3,
            activeBorderColor: _colors2.default.red5,

            primary: {
                color: _colors2.default.red2,
                backgroundColor: _colors2.default.white,
                borderColor: _colors2.default.white,
                hoverBackgroundColor: _colors2.default.gray5,
                hoverBorderColor: _colors2.default.gray5,
                focusBackgroundColor: _colors2.default.gray5,
                focusBorderColor: _colors2.default.gray5,
                activeBackgroundColor: _colors2.default.gray5,
                activeBorderColor: _colors2.default.gray5
            },

            danger: {
                color: _colors2.default.white,
                backgroundColor: _colors2.default.red1,
                borderColor: _colors2.default.red1,
                hoverBackgroundColor: _colors2.default.red3,
                hoverBorderColor: _colors2.default.red3,
                focusBackgroundColor: _colors2.default.red3,
                focusBorderColor: _colors2.default.red3,
                activeBackgroundColor: _colors2.default.red3,
                activeBorderColor: _colors2.default.red3
            }
        }
    }
});

var RedTheme = function RedTheme(_ref) {
    var children = _ref.children,
        rest = _objectWithoutProperties(_ref, ['children']);

    return _react2.default.createElement(
        _styledComponents.ThemeProvider,
        { theme: config },
        _react2.default.createElement(
            _Default.StyledDiv,
            rest,
            children
        )
    );
};

RedTheme.propTypes = {
    children: _propTypes2.default.node.isRequired
};

RedTheme.displayName = 'RedTheme';

exports.default = RedTheme;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("bootstrap");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("font-awesome/css/font-awesome.min.css");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("leaflet.locatecontrol/dist/L.Control.Locate.css");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("leaflet/dist/leaflet.css");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    border-radius: ', ';\n    ', '\n'], ['\n    border-radius: ', ';\n    ', '\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(3);

var _classnames3 = _interopRequireDefault(_classnames2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var contexts = ['info', 'success', 'warning', 'danger'];

var colorsStyle = function colorsStyle(props) {
    return contexts.reduce(function (reducedStyles, context) {
        var colors = props.theme.alert[context];

        return '\n        ' + reducedStyles + '\n\n        &.alert-' + context + ' {\n            color: ' + colors.color + ';\n            background-color: ' + colors.backgroundColor + ';\n            border-color: ' + colors.borderColor + ';\n\n            a {\n                color: ' + colors.color + ';\n                text-decoration: underline;\n            }\n\n            a:hover, a:focus, a:active {\n                color: ' + colors.color + ';\n                text-decoration: none;\n            }\n        }\n    ';
    }, '');
};

var StyledDiv = _styledComponents2.default.div(_templateObject, function (props) {
    return props.theme.borderRadius;
}, function (props) {
    return colorsStyle(props);
});

var Alert = function Alert(_ref) {
    var context = _ref.context,
        className = _ref.className,
        props = _objectWithoutProperties(_ref, ['context', 'className']);

    var classes = (0, _classnames3.default)(className, _defineProperty({
        alert: true
    }, 'alert-' + context, true));

    return _react2.default.createElement(StyledDiv, _extends({ className: classes }, props));
};

Alert.propTypes = {
    context: _propTypes2.default.oneOf(contexts),
    className: _propTypes2.default.string
};

Alert.defaultProps = {
    context: 'info',
    className: ''
};

Alert.displayName = 'Alert';

exports.default = Alert;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n\n    color: ', ';\n    background-color: ', ';\n'], ['\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n\n    color: ', ';\n    background-color: ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDiv = _styledComponents2.default.div(_templateObject, function (props) {
    return props.theme.color;
}, function (props) {
    return props.theme.backgroundColor;
});

var AppCanvas = function AppCanvas(props) {
    return _react2.default.createElement(StyledDiv, props);
};

AppCanvas.propTypes = {};

AppCanvas.defaultProps = {};

AppCanvas.displayName = 'AppCanvas';

exports.default = AppCanvas;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n'], ['\n    ', '\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(3);

var _classnames3 = _interopRequireDefault(_classnames2);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var contexts = ['default', 'primary', 'info', 'success', 'warning', 'danger', 'link'];

var colorsStyle = function colorsStyle(props) {
    return contexts.reduce(function (reducedStyles, context) {
        var colors = context === 'default' ? props.theme.form.button : props.theme.form.button[context];

        return '\n        ' + reducedStyles + '\n\n        &.btn-' + context + ' {\n            font-weight: ' + colors.fontWeight + ';\n            color: ' + colors.color + ';\n            background-color: ' + colors.backgroundColor + ';\n            border-color: ' + colors.borderColor + ';\n\n            &:hover {\n                color: ' + colors.color + ';\n                background-color: ' + colors.hoverBackgroundColor + ';\n                border-color: ' + colors.hoverBorderColor + ';\n            }\n\n            &:focus {\n                color: ' + colors.color + ';\n                background-color: ' + colors.focusBackgroundColor + ';\n                border-color: ' + colors.focusBorderColor + ';\n            }\n\n            &:active, .active {\n                color: ' + colors.color + ';\n                background-color: ' + colors.activeBackgroundColor + ';\n                border-color: ' + colors.activeBorderColor + ';\n            }\n        }\n    ';
    }, '');
};

var StyledButton = _styledComponents2.default.button(_templateObject, function (props) {
    return colorsStyle(props);
});

var StyledAnchor = _styledComponents2.default.a(_templateObject, colorsStyle);

var Button = function Button(_ref) {
    var _classnames;

    var type = _ref.type,
        context = _ref.context,
        size = _ref.size,
        block = _ref.block,
        active = _ref.active,
        disabled = _ref.disabled,
        className = _ref.className,
        props = _objectWithoutProperties(_ref, ['type', 'context', 'size', 'block', 'active', 'disabled', 'className']);

    var classes = (0, _classnames3.default)(className, (_classnames = {
        btn: true
    }, _defineProperty(_classnames, 'btn-' + context, true), _defineProperty(_classnames, 'btn-' + size, true), _defineProperty(_classnames, 'btn-block', block), _defineProperty(_classnames, 'active', active), _defineProperty(_classnames, 'disabled', disabled), _classnames));

    if (type === 'anchor') {
        return _react2.default.createElement(StyledAnchor, _extends({ className: classes, role: 'button' }, props));
    }

    return _react2.default.createElement(StyledButton, _extends({ className: classes, type: type, disabled: disabled }, props));
};

Button.propTypes = {
    type: _propTypes2.default.string,
    context: _propTypes2.default.oneOf(contexts),
    size: _propTypes2.default.oneOf(['lg', 'md', 'sm', 'xs']),
    block: _propTypes2.default.bool,
    active: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    className: _propTypes2.default.string
};

Button.defaultProps = {
    type: 'button',
    context: 'default',
    size: 'md',
    block: false,
    active: false,
    disabled: false,
    className: ''
};

Button.displayName = 'Button';

exports.default = Button;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    top: 0;\n    max-width: 100%;\n    height: 100%;\n    overflow-y: auto;\n    transition: all 0.25s ease-out;\n\n    color: ', ';\n    background: ', ';\n    border-color: ', ';\n    border-style: ', ';\n    border-width: 0;\n\n    &.scroll-content {\n        display: flex;\n        flex-direction: column;\n        overflow-y: none;\n    }\n\n    &.container-parent { position: absolute; }\n    &.container-root   { position: fixed; }\n\n    &.xs { width: 150px; }\n    &.sm { width: 250px; }\n    &.md { width: 400px; }\n    &.lg { width: 600px; }\n    &.maximized { width: 100%; }\n\n    &.left {\n        left: 0;\n        transform: translate(-150%, 0);\n        border-right-width: ', ';\n    }\n\n    &.right {\n        right: 0;\n        transform: translate(150%, 0);\n        border-left-width: ', ';\n    }\n\n    &.left.maximized,\n    &.right.maximized {\n        border-width: 0;\n    }\n\n    &.opened {\n        transform: translate(0, 0);\n    }\n\n    .back-btn,\n    .close-btn {\n        color: ', ';\n        background: transparent;\n        border-width: 0;\n        width: 50px;\n        height: 50px;\n        padding: 0;\n\n        &:hover {\n            color: ', ';\n        }\n    }\n\n    .back-btn {\n        float: left;\n        margin-right: 5px;\n    }\n\n    .close-btn {\n        float: right;\n        margin-left: 5px;\n    }\n\n    &.scroll-content .header {\n        margin-bottom: 20px;\n    }\n\n    .content {\n        padding: 20px;\n    }\n\n    &.scroll-content .content {\n        overflow-y: auto;\n        border-color: ', ';\n        border-style: ', ';\n        border-width: 1px 0 1px 0;\n\n        &::after {\n            content: \'\';\n            margin-top: 20px;\n            display: block;\n        }\n    }\n\n    .content.loading {\n        display: none;\n    }\n\n    &.scroll-content .footer {\n        margin-top: 20px;\n    }\n'], ['\n    top: 0;\n    max-width: 100%;\n    height: 100%;\n    overflow-y: auto;\n    transition: all 0.25s ease-out;\n\n    color: ', ';\n    background: ', ';\n    border-color: ', ';\n    border-style: ', ';\n    border-width: 0;\n\n    &.scroll-content {\n        display: flex;\n        flex-direction: column;\n        overflow-y: none;\n    }\n\n    &.container-parent { position: absolute; }\n    &.container-root   { position: fixed; }\n\n    &.xs { width: 150px; }\n    &.sm { width: 250px; }\n    &.md { width: 400px; }\n    &.lg { width: 600px; }\n    &.maximized { width: 100%; }\n\n    &.left {\n        left: 0;\n        transform: translate(-150%, 0);\n        border-right-width: ', ';\n    }\n\n    &.right {\n        right: 0;\n        transform: translate(150%, 0);\n        border-left-width: ', ';\n    }\n\n    &.left.maximized,\n    &.right.maximized {\n        border-width: 0;\n    }\n\n    &.opened {\n        transform: translate(0, 0);\n    }\n\n    .back-btn,\n    .close-btn {\n        color: ', ';\n        background: transparent;\n        border-width: 0;\n        width: 50px;\n        height: 50px;\n        padding: 0;\n\n        &:hover {\n            color: ', ';\n        }\n    }\n\n    .back-btn {\n        float: left;\n        margin-right: 5px;\n    }\n\n    .close-btn {\n        float: right;\n        margin-left: 5px;\n    }\n\n    &.scroll-content .header {\n        margin-bottom: 20px;\n    }\n\n    .content {\n        padding: 20px;\n    }\n\n    &.scroll-content .content {\n        overflow-y: auto;\n        border-color: ', ';\n        border-style: ', ';\n        border-width: 1px 0 1px 0;\n\n        &::after {\n            content: \'\';\n            margin-top: 20px;\n            display: block;\n        }\n    }\n\n    .content.loading {\n        display: none;\n    }\n\n    &.scroll-content .footer {\n        margin-top: 20px;\n    }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames2 = __webpack_require__(3);

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactFontawesome = __webpack_require__(39);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _Title = __webpack_require__(7);

var _Title2 = _interopRequireDefault(_Title);

var _Loader = __webpack_require__(4);

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledAside = _styledComponents2.default.aside(_templateObject, function (props) {
    return props.theme.color;
}, function (props) {
    return props.theme.backgroundColor;
}, function (props) {
    return props.theme.borderColor;
}, function (props) {
    return props.theme.borderStyle;
}, function (props) {
    return props.theme.borderWidth;
}, function (props) {
    return props.theme.borderWidth;
}, function (props) {
    return props.theme.controlColor;
}, function (props) {
    return props.theme.hoverControlColor;
}, function (props) {
    return props.theme.borderColor;
}, function (props) {
    return props.theme.borderStyle;
});

var Column = function (_React$Component) {
    _inherits(Column, _React$Component);

    function Column(props) {
        _classCallCheck(this, Column);

        var _this = _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).call(this, props));

        _this.state = {
            opened: props.opened
        };
        return _this;
    }

    _createClass(Column, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.opened === true) {
                this._triggerCallback('onOpen');
            }

            if (this.props.maximized === true) {
                this.props.onMaximize();
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                opened: nextProps.opened
            });

            if (this.props.opened !== nextProps.opened) {
                if (nextProps.opened === true) {
                    this._triggerCallback('onOpen');
                } else {
                    this._triggerCallback('onClose');
                }
            }

            if (this.props.maximized !== nextProps.maximized) {
                if (nextProps.maximized === true) {
                    this._triggerCallback('onMaximize');
                } else {
                    this._triggerCallback('onUnmaximize');
                }
            }
        }
    }, {
        key: '_triggerCallback',
        value: function _triggerCallback(name) {
            if (this.props[name] !== null) {
                this.props[name]();
            }
        }
    }, {
        key: '_handleBackClick',
        value: function _handleBackClick() {
            this._triggerCallback('onBack');
        }
    }, {
        key: '_handleCloseClick',
        value: function _handleCloseClick() {
            this.setState({ opened: false });
            this._triggerCallback('onClose');
        }
    }, {
        key: 'render',
        value: function render() {
            var _classnames,
                _this2 = this;

            var _props = this.props,
                title = _props.title,
                header = _props.header,
                footer = _props.footer,
                children = _props.children,
                loading = _props.loading,
                loaderLabel = _props.loaderLabel,
                position = _props.position,
                width = _props.width,
                maximized = _props.maximized,
                container = _props.container,
                scrollContent = _props.scrollContent,
                className = _props.className,
                rest = _objectWithoutProperties(_props, ['title', 'header', 'footer', 'children', 'loading', 'loaderLabel', 'position', 'width', 'maximized', 'container', 'scrollContent', 'className']);

            var asideClasses = (0, _classnames3.default)(className, (_classnames = {}, _defineProperty(_classnames, position, true), _defineProperty(_classnames, width, true), _defineProperty(_classnames, 'opened', this.state.opened), _defineProperty(_classnames, 'maximized', maximized), _defineProperty(_classnames, 'container-' + container, true), _defineProperty(_classnames, 'scroll-content', scrollContent), _classnames));

            var contentClasses = (0, _classnames3.default)({
                content: true,
                loading: loading
            });

            return _react2.default.createElement(
                StyledAside,
                _extends({ className: asideClasses }, rest),
                _react2.default.createElement(
                    'header',
                    { className: 'header' },
                    this.props.onBack && _react2.default.createElement(
                        'button',
                        { className: 'back-btn', onClick: function onClick() {
                                return _this2._handleBackClick();
                            } },
                        _react2.default.createElement(_reactFontawesome2.default, { name: 'chevron-left', size: 'lg' })
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'close-btn', onClick: function onClick() {
                                return _this2._handleCloseClick();
                            } },
                        _react2.default.createElement(_reactFontawesome2.default, { name: 'close', size: 'lg' })
                    ),
                    title && _react2.default.createElement(
                        _Title2.default,
                        { inHeader: true },
                        title
                    ),
                    _react2.default.createElement('div', { className: 'clearfix' }),
                    !loading && header && header
                ),
                _react2.default.createElement(
                    'div',
                    { className: contentClasses },
                    children
                ),
                !loading && footer && footer,
                loading && _react2.default.createElement(_Loader2.default, { centered: true, label: loaderLabel })
            );
        }
    }]);

    return Column;
}(_react2.default.Component);

Column.propTypes = {
    title: _propTypes2.default.string,
    header: _propTypes2.default.node,
    footer: _propTypes2.default.node,
    children: _propTypes2.default.node.isRequired,
    opened: _propTypes2.default.bool,
    loading: _propTypes2.default.bool,
    loaderLabel: _propTypes2.default.node,
    position: _propTypes2.default.oneOf(['left', 'right']),
    // animation: PropTypes.oneOf(['linear', 'bubble', 'bubble-inverse']),
    // show-animation: PropTypes.oneOf(['linear', 'bubble', 'bubble-inverse']),
    // close-animation: PropTypes.oneOf(['linear', 'bubble', 'bubble-inverse']),
    width: _propTypes2.default.oneOf(['xs', 'sm', 'md', 'lg']),
    maximized: _propTypes2.default.bool,
    container: _propTypes2.default.oneOf(['parent', 'root']),
    scrollContent: _propTypes2.default.bool,
    onOpen: _propTypes2.default.func,
    onClose: _propTypes2.default.func,
    onBack: _propTypes2.default.func,
    onMaximize: _propTypes2.default.func,
    onUnmaximize: _propTypes2.default.func,
    className: _propTypes2.default.string
};

Column.defaultProps = {
    title: '',
    header: '',
    footer: '',
    opened: false,
    loading: false,
    loaderLabel: '',
    position: 'left',
    // animation: 'linear',
    // show-animation: 'linear',
    // close-animation: 'linear',
    width: 'md',
    maximized: false,
    container: 'parent',
    scrollContent: false,
    onOpen: null,
    onClose: null,
    onBack: null,
    onMaximize: null,
    onUnmaximize: null,
    className: ''
};

Column.displayName = 'Column';

exports.default = Column;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    padding: 20px 20px;\n    border-color: ', ';\n    border-style: ', ';\n    border-width: 1px 0 0 0;\n'], ['\n    padding: 20px 20px;\n    border-color: ', ';\n    border-style: ', ';\n    border-width: 1px 0 0 0;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDiv = _styledComponents2.default.div(_templateObject, function (props) {
    return props.theme.borderColor;
}, function (props) {
    return props.theme.borderStyle;
});

var ColumnFooter = function ColumnFooter(_ref) {
    var children = _ref.children,
        rest = _objectWithoutProperties(_ref, ['children']);

    return _react2.default.createElement(
        StyledDiv,
        _extends({ className: 'column-footer' }, rest),
        children
    );
};

ColumnFooter.propTypes = {
    children: _propTypes2.default.node.isRequired
};

ColumnFooter.displayName = 'Column.Footer';

exports.default = ColumnFooter;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    padding: 15px 20px 0;\n'], ['\n    padding: 15px 20px 0;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledDiv = _styledComponents2.default.div(_templateObject);

var ColumnHeader = function ColumnHeader(_ref) {
    var children = _ref.children,
        rest = _objectWithoutProperties(_ref, ['children']);

    return _react2.default.createElement(
        StyledDiv,
        _extends({ className: 'column-header' }, rest),
        children
    );
};

ColumnHeader.propTypes = {
    children: _propTypes2.default.node.isRequired
};

ColumnHeader.displayName = 'Column.Header';

exports.default = ColumnHeader;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = function Form(props) {
    return _react2.default.createElement('form', props);
};

Form.propTypes = {};

Form.defaultProps = {};

Form.displayName = 'Form';

exports.default = Form;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n\n    margin-bottom: 40px;\n'], ['\n    ', '\n\n    margin-bottom: 40px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames2 = __webpack_require__(3);

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var contexts = ['', 'success', 'warning', 'error'];

var colorsStyle = function colorsStyle(props) {
    return contexts.reduce(function (reducedStyles, context) {
        if (!context) {
            return reducedStyles;
        }

        var labelColors = props.theme.form.label[context];
        var inputColors = props.theme.form.input[context];
        var hintColors = props.theme.form.hint[context];

        return '\n        ' + reducedStyles + '\n\n        &.has-' + context + ' {\n            .control-label {\n                color: ' + labelColors.color + ';\n            }\n\n            .Select-control,\n            .form-control {\n                background-color: ' + inputColors.backgroundColor + ';\n                border-color: ' + inputColors.borderColor + ';\n            }\n\n            .help-block {\n                background-color: ' + hintColors.backgroundColor + ';\n                color: ' + hintColors.color + ';\n            }\n        }\n    ';
    }, '');
};

var StyledDiv = _styledComponents2.default.div(_templateObject, function (props) {
    return colorsStyle(props);
});

var FormGroup = function FormGroup(_ref) {
    var context = _ref.context,
        className = _ref.className,
        props = _objectWithoutProperties(_ref, ['context', 'className']);

    var classes = (0, _classnames3.default)(className, _defineProperty({
        'form-group': true
    }, 'has-' + context, context !== ''));

    return _react2.default.createElement(StyledDiv, _extends({ className: classes }, props));
};

FormGroup.propTypes = {
    context: _propTypes2.default.oneOf(contexts),
    className: _propTypes2.default.string
};

FormGroup.defaultProps = {
    context: '',
    className: ''
};

FormGroup.displayName = 'Form.Group';

exports.default = FormGroup;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    opacity: ', ';\n    background-color: ', ';\n    border-color: ', ';\n    border-width: ', ';\n    border-radius: ', ';\n    box-shadow: ', ';\n\n    &:focus,\n    &.form-control:focus {\n        opacity: ', ';\n        background-color: ', ';\n        border-color: ', ';\n        box-shadow: ', ';\n    }\n'], ['\n    opacity: ', ';\n    background-color: ', ';\n    border-color: ', ';\n    border-width: ', ';\n    border-radius: ', ';\n    box-shadow: ', ';\n\n    &:focus,\n    &.form-control:focus {\n        opacity: ', ';\n        background-color: ', ';\n        border-color: ', ';\n        box-shadow: ', ';\n    }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _InputHint = __webpack_require__(8);

var _InputHint2 = _interopRequireDefault(_InputHint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledInput = _styledComponents2.default.input(_templateObject, function (props) {
    return props.theme.form.input.opacity;
}, function (props) {
    return props.theme.form.input.backgroundColor;
}, function (props) {
    return props.theme.form.input.borderColor;
}, function (props) {
    return props.theme.form.input.borderWidth;
}, function (props) {
    return props.theme.form.input.borderRadius;
}, function (props) {
    return props.theme.form.input.boxShadow;
}, function (props) {
    return props.theme.form.input.focusOpacity;
}, function (props) {
    return props.theme.form.input.focusBackgroundColor;
}, function (props) {
    return props.theme.form.input.focusBorderColor;
}, function (props) {
    return props.theme.form.input.focusBoxShadow;
});

var Input = function Input(_ref) {
    var type = _ref.type,
        disabled = _ref.disabled,
        hint = _ref.hint,
        props = _objectWithoutProperties(_ref, ['type', 'disabled', 'hint']);

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(StyledInput, _extends({
            className: 'form-control',
            type: type,
            disabled: disabled
        }, props)),
        hint && _react2.default.createElement(
            _InputHint2.default,
            null,
            hint
        )
    );
};

Input.propTypes = {
    type: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    hint: _propTypes2.default.string
};

Input.defaultProps = {
    type: 'text',
    disabled: false,
    hint: ''
};

Input.displayName = 'Form.Input';

exports.default = Input;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    color: ', '\n    margin-bottom: 6px;\n    font-size: ', ';\n    font-weight: ', ';\n'], ['\n    color: ', '\n    margin-bottom: 6px;\n    font-size: ', ';\n    font-weight: ', ';\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledLabel = _styledComponents2.default.label(_templateObject, function (props) {
    return props.theme.form.label.color;
}, function (props) {
    return props.theme.form.label.fontSize;
}, function (props) {
    return props.theme.form.label.fontWeight;
});

var Label = function Label(_ref) {
    var htmlFor = _ref.htmlFor,
        className = _ref.className,
        props = _objectWithoutProperties(_ref, ['htmlFor', 'className']);

    var classes = (0, _classnames2.default)(className, {
        'control-label': true
    });

    return _react2.default.createElement(StyledLabel, _extends({ htmlFor: htmlFor, className: classes }, props));
};

Label.propTypes = {
    htmlFor: _propTypes2.default.string,
    className: _propTypes2.default.string
};

Label.defaultProps = {
    htmlFor: '',
    className: ''
};

Label.displayName = 'Form.Label';

exports.default = Label;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    .Select-control {\n        opacity: ', ';\n        background-color: ', ';\n        border-color: ', ';\n        border-width: ', ';\n        border-radius: ', ';\n        box-shadow: none;\n    }\n\n    &.is-focused .Select-control,\n    &.is-focused:not(.is-open) > .Select-control {\n        opacity: ', ';\n        background-color: ', ';\n        border-color: ', ';\n        box-shadow: none;\n    }\n\n    .Select-placeholder {\n        padding-left: 15px;\n    }\n\n    .Select-input > input {\n        padding: 0;\n        line-height: 34px;\n    }\n\n    .Select-menu-outer {\n        margin-top: 0;\n        border-top-width: 0;\n    }\n\n    .VirtualizedSelectOption {\n        cursor: default;\n        padding: 5px 10px;\n    }\n\n    .VirtualizedSelectFocusedOption {\n        color: ', ';\n        background-color: ', ';\n    }\n'], ['\n    .Select-control {\n        opacity: ', ';\n        background-color: ', ';\n        border-color: ', ';\n        border-width: ', ';\n        border-radius: ', ';\n        box-shadow: none;\n    }\n\n    &.is-focused .Select-control,\n    &.is-focused:not(.is-open) > .Select-control {\n        opacity: ', ';\n        background-color: ', ';\n        border-color: ', ';\n        box-shadow: none;\n    }\n\n    .Select-placeholder {\n        padding-left: 15px;\n    }\n\n    .Select-input > input {\n        padding: 0;\n        line-height: 34px;\n    }\n\n    .Select-menu-outer {\n        margin-top: 0;\n        border-top-width: 0;\n    }\n\n    .VirtualizedSelectOption {\n        cursor: default;\n        padding: 5px 10px;\n    }\n\n    .VirtualizedSelectFocusedOption {\n        color: ', ';\n        background-color: ', ';\n    }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

__webpack_require__(41);

__webpack_require__(44);

__webpack_require__(43);

var _reactVirtualizedSelect = __webpack_require__(42);

var _reactVirtualizedSelect2 = _interopRequireDefault(_reactVirtualizedSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSelect = (0, _styledComponents2.default)(_reactVirtualizedSelect2.default)(_templateObject, function (props) {
    return props.theme.form.input.opacity;
}, function (props) {
    return props.theme.form.input.backgroundColor;
}, function (props) {
    return props.theme.form.input.borderColor;
}, function (props) {
    return props.theme.form.input.borderWidth;
}, function (props) {
    return props.theme.form.input.borderRadius;
}, function (props) {
    return props.theme.form.input.focusOpacity;
}, function (props) {
    return props.theme.form.input.focusBackgroundColor;
}, function (props) {
    return props.theme.form.input.focusBorderColor;
}, function (props) {
    return props.theme.form.select.optionColor;
}, function (props) {
    return props.theme.form.select.optionBackgroundColor;
});

var Select = function (_React$Component) {
    _inherits(Select, _React$Component);

    function Select(props) {
        _classCallCheck(this, Select);

        var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Select, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(StyledSelect, _extends({
                    onChange: function onChange(selectValue) {
                        return _this2.setState({ selectValue: selectValue });
                    },
                    value: this.state.selectValue
                }, this.props))
            );
        }
    }]);

    return Select;
}(_react2.default.Component);

Select.propTypes = _extends({}, _reactVirtualizedSelect2.default.PropTypes);

Select.defaultProps = _extends({}, _reactVirtualizedSelect2.default.defaultProps);

Select.displayName = 'Form.Select';

exports.default = Select;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    opacity: ', ';\n    resize: ', ';\n    background-color: ', ';\n    border-color: ', ';\n    border-width: ', ';\n    border-radius: ', ';\n    box-shadow: ', ';\n\n    &:focus,\n    &.form-control:focus {\n        opacity: ', ';\n        background-color: ', ';\n        border-color: ', ';\n        box-shadow: ', ';\n    }\n'], ['\n    opacity: ', ';\n    resize: ', ';\n    background-color: ', ';\n    border-color: ', ';\n    border-width: ', ';\n    border-radius: ', ';\n    box-shadow: ', ';\n\n    &:focus,\n    &.form-control:focus {\n        opacity: ', ';\n        background-color: ', ';\n        border-color: ', ';\n        box-shadow: ', ';\n    }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _InputHint = __webpack_require__(8);

var _InputHint2 = _interopRequireDefault(_InputHint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledTextArea = _styledComponents2.default.textarea(_templateObject, function (props) {
    return props.theme.form.input.opacity;
}, function (props) {
    return props.resize;
}, function (props) {
    return props.theme.form.input.backgroundColor;
}, function (props) {
    return props.theme.form.input.borderColor;
}, function (props) {
    return props.theme.form.input.borderWidth;
}, function (props) {
    return props.theme.form.input.borderRadius;
}, function (props) {
    return props.theme.form.input.boxShadow;
}, function (props) {
    return props.theme.form.input.focusOpacity;
}, function (props) {
    return props.theme.form.input.focusBackgroundColor;
}, function (props) {
    return props.theme.form.input.focusBorderColor;
}, function (props) {
    return props.theme.form.input.focusBoxShadow;
});

var Textarea = function Textarea(_ref) {
    var rows = _ref.rows,
        disabled = _ref.disabled,
        hint = _ref.hint,
        props = _objectWithoutProperties(_ref, ['rows', 'disabled', 'hint']);

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(StyledTextArea, _extends({
            className: 'form-control',
            rows: rows,
            disabled: disabled
        }, props)),
        hint && _react2.default.createElement(
            _InputHint2.default,
            null,
            hint
        )
    );
};

Textarea.propTypes = {
    rows: _propTypes2.default.number,
    disabled: _propTypes2.default.bool,
    hint: _propTypes2.default.string,
    resize: _propTypes2.default.oneOf(['none', 'vertical', 'horizontal'])
};

Textarea.defaultProps = {
    rows: 6,
    disabled: false,
    hint: '',
    resize: 'vertical'
};

Textarea.displayName = 'Form.Textarea';

exports.default = Textarea;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    from {\n        transform: rotate(0deg);\n    }\n\n    to {\n        transform: rotate(360deg);\n    }\n'], ['\n    from {\n        transform: rotate(0deg);\n    }\n\n    to {\n        transform: rotate(360deg);\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width: ', 'px;\n    height: ', 'px;\n    margin: 0 auto;\n    border: 3px solid ', ';\n    border-radius: 50%;\n    border-left-color: transparent;\n    border-bottom-color: transparent;\n    border-right-color: transparent;\n    animation: ', ' 650ms infinite linear;\n'], ['\n    width: ', 'px;\n    height: ', 'px;\n    margin: 0 auto;\n    border: 3px solid ', ';\n    border-radius: 50%;\n    border-left-color: transparent;\n    border-bottom-color: transparent;\n    border-right-color: transparent;\n    animation: ', ' 650ms infinite linear;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    text-align: center;\n\n    &.centered {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n'], ['\n    text-align: center;\n\n    &.centered {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    color: ', ';\n    margin-top: 15px;\n'], ['\n    color: ', ';\n    margin-top: 15px;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var rotate360 = (0, _styledComponents.keyframes)(_templateObject);

var Spinner = _styledComponents2.default.div(_templateObject2, function (props) {
    return props.spinnerSize;
}, function (props) {
    return props.spinnerSize;
}, function (props) {
    return props.theme.loaderColor;
}, rotate360);

var Wrapper = _styledComponents2.default.div(_templateObject3);

var Label = _styledComponents2.default.div(_templateObject4, function (props) {
    return props.theme.loaderColor;
});

var Loader = function Loader(_ref) {
    var centered = _ref.centered,
        spinnerSize = _ref.spinnerSize,
        label = _ref.label,
        className = _ref.className,
        rest = _objectWithoutProperties(_ref, ['centered', 'spinnerSize', 'label', 'className']);

    var classes = (0, _classnames2.default)(className, {
        centered: centered
    });

    return _react2.default.createElement(
        Wrapper,
        _extends({ className: classes }, rest),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(Spinner, { spinnerSize: spinnerSize }),
            label && _react2.default.createElement(
                Label,
                null,
                label
            )
        )
    );
};

Loader.propTypes = {
    centered: _propTypes2.default.bool,
    spinnerSize: _propTypes2.default.number,
    label: _propTypes2.default.string,
    className: _propTypes2.default.string
};

Loader.defaultProps = {
    centered: false,
    spinnerSize: 40,
    label: '',
    className: ''
};

Loader.displayName = 'Loader';

exports.default = Loader;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    .leaflet-bar {\n        border: none;\n    }\n\n    .leaflet-bar a {\n        color: ', ';\n        background: ', ';\n        border: none;\n        width: 50px;\n        height: 50px;\n        line-height: 50px;\n        transition: all 0.1s ease-out;\n\n        &:hover,\n        &:focus,\n        &:active {\n            color: ', ';\n            background: ', ';\n        }\n\n        &:active {\n            box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n        }\n    }\n'], ['\n    .leaflet-bar {\n        border: none;\n    }\n\n    .leaflet-bar a {\n        color: ', ';\n        background: ', ';\n        border: none;\n        width: 50px;\n        height: 50px;\n        line-height: 50px;\n        transition: all 0.1s ease-out;\n\n        &:hover,\n        &:focus,\n        &:active {\n            color: ', ';\n            background: ', ';\n        }\n\n        &:active {\n            box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n        }\n    }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _leaflet = __webpack_require__(36);

var _leaflet2 = _interopRequireDefault(_leaflet);

var _reactLeaflet = __webpack_require__(40);

__webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledMap = _styledComponents2.default.div(_templateObject, function (props) {
    return props.theme.map.controlColor;
}, function (props) {
    return props.theme.map.controlBackgroundColor;
}, function (props) {
    return props.theme.map.hoverControlColor;
}, function (props) {
    return props.theme.map.hoverControlBackgroundColor;
});

var Map = function (_React$Component) {
    _inherits(Map, _React$Component);

    function Map() {
        _classCallCheck(this, Map);

        return _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).apply(this, arguments));
    }

    _createClass(Map, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.locate === true) {
                this.locateControl = _leaflet2.default.control.locate();
                this.map.addControl(this.locateControl);
            } else if (this.locateControl) {
                this.map.removeControl(this.locateControl);
            }
        }
    }, {
        key: 'handleRef',
        value: function handleRef(map) {
            if (map !== null) {
                this.map = map.leafletElement;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                children = _props.children,
                rest = _objectWithoutProperties(_props, ['children']);

            return _react2.default.createElement(
                StyledMap,
                null,
                _react2.default.createElement(
                    _reactLeaflet.Map,
                    _extends({
                        ref: function ref(map) {
                            return _this2.handleRef(map);
                        }
                    }, rest),
                    children
                )
            );
        }
    }]);

    return Map;
}(_react2.default.Component);

Map.propTypes = {
    locate: _propTypes2.default.bool,
    children: _propTypes2.default.node.isRequired
};

Map.defaultProps = {
    locate: false
};

Map.displayName = 'Map';

exports.default = Map;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("leaflet");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("leaflet.locatecontrol");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-fontawesome");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("react-leaflet");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("react-select/dist/react-select.css");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("react-virtualized-select");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("react-virtualized-select/styles.css");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("react-virtualized/styles.css");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Map = exports.Column = exports.Form = exports.Button = exports.Alert = exports.Loader = exports.AppCanvas = exports.RedTheme = exports.DefaultTheme = undefined;

__webpack_require__(19);

__webpack_require__(17);

__webpack_require__(18);

__webpack_require__(21);

__webpack_require__(20);

__webpack_require__(16);

var _Default = __webpack_require__(5);

var _Default2 = _interopRequireDefault(_Default);

var _Red = __webpack_require__(15);

var _Red2 = _interopRequireDefault(_Red);

var _AppCanvas2 = __webpack_require__(10);

var _AppCanvas3 = _interopRequireDefault(_AppCanvas2);

var _Loader2 = __webpack_require__(4);

var _Loader3 = _interopRequireDefault(_Loader2);

var _Alert2 = __webpack_require__(9);

var _Alert3 = _interopRequireDefault(_Alert2);

var _Button2 = __webpack_require__(11);

var _Button3 = _interopRequireDefault(_Button2);

var _Form2 = __webpack_require__(13);

var _Form3 = _interopRequireDefault(_Form2);

var _Column2 = __webpack_require__(12);

var _Column3 = _interopRequireDefault(_Column2);

var _Map2 = __webpack_require__(14);

var _Map3 = _interopRequireDefault(_Map2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.DefaultTheme = _Default2.default;
exports.RedTheme = _Red2.default;
exports.AppCanvas = _AppCanvas3.default;
exports.Loader = _Loader3.default;
exports.Alert = _Alert3.default;
exports.Button = _Button3.default;
exports.Form = _Form3.default;
exports.Column = _Column3.default;
exports.Map = _Map3.default;

/***/ })
/******/ ]);
});