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

const config = exports.config = {
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
                color: _colors2.default.red2,
                backgroundColor: _colors2.default.white,
                borderColor: _colors2.default.red2
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

const StyledDiv = exports.StyledDiv = _styledComponents2.default.div`
    font-family: ${props => props.theme.font};
`;

const DefaultTheme = (_ref) => {
    let { children } = _ref,
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

const StyledH2 = _styledComponents2.default.h2`
    margin: 0 0 30px;

    &.in-header {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0 0 0 20px;
        line-height: 50px;
    }
`;

const ColumnTitle = (_ref) => {
    let { children, inHeader } = _ref,
        rest = _objectWithoutProperties(_ref, ['children', 'inHeader']);

    const classes = (0, _classnames2.default)({
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
    inHeader: _propTypes2.default.bool
};

ColumnTitle.defaultProps = {
    inHeader: false
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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledDiv = _styledComponents2.default.div`
    font-size: ${props => props.theme.form.hint.fontSize};
    color: ${props => props.theme.form.hint.color};
    background-color: ${props => props.theme.form.hint.backgroundColor};
    margin: ${props => props.theme.form.hint.margin};
    padding: ${props => props.theme.form.hint.padding};
`;

const InputHint = props => _react2.default.createElement(StyledDiv, _extends({ className: 'help-block' }, props));

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

const config = exports.config = _lodash2.default.merge({}, _Default.config, {
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

const RedTheme = (_ref) => {
    let { children } = _ref,
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

const contexts = ['info', 'success', 'warning', 'danger'];

const colorsStyle = props => contexts.reduce((reducedStyles, context) => {
    const colors = props.theme.alert[context];

    return `
        ${reducedStyles}

        &.alert-${context} {
            color: ${colors.color};
            background-color: ${colors.backgroundColor};
            border-color: ${colors.borderColor};

            a {
                color: ${colors.color};
                text-decoration: underline;
            }

            a:hover, a:focus, a:active {
                color: ${colors.color};
                text-decoration: none;
            }
        }
    `;
}, '');

const StyledDiv = _styledComponents2.default.div`
    border-radius: ${props => props.theme.borderRadius};
    ${props => colorsStyle(props)}
`;

const Alert = (_ref) => {
    let {
        context
    } = _ref,
        props = _objectWithoutProperties(_ref, ['context']);

    const classes = (0, _classnames2.default)({
        alert: true,
        [`alert-${context}`]: true
    });

    return _react2.default.createElement(StyledDiv, _extends({ className: classes }, props));
};

Alert.propTypes = {
    context: _propTypes2.default.oneOf(contexts)
};

Alert.defaultProps = {
    context: 'info'
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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const StyledDiv = _styledComponents2.default.div`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const AppCanvas = props => _react2.default.createElement(StyledDiv, props);

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

const contexts = ['default', 'primary', 'info', 'success', 'warning', 'danger', 'link'];

const colorsStyle = props => contexts.reduce((reducedStyles, context) => {
    const colors = context === 'default' ? props.theme.form.button : props.theme.form.button[context];

    return `
        ${reducedStyles}

        &.btn-${context} {
            font-weight: ${colors.fontWeight};
            color: ${colors.color};
            background-color: ${colors.backgroundColor};
            border-color: ${colors.borderColor};

            &:hover {
                color: ${colors.color};
                background-color: ${colors.hoverBackgroundColor};
                border-color: ${colors.hoverBorderColor};
            }

            &:focus {
                color: ${colors.color};
                background-color: ${colors.focusBackgroundColor};
                border-color: ${colors.focusBorderColor};
            }

            &:active, .active {
                color: ${colors.color};
                background-color: ${colors.activeBackgroundColor};
                border-color: ${colors.activeBorderColor};
            }
        }
    `;
}, '');

const StyledButton = _styledComponents2.default.button`
    ${props => colorsStyle(props)}
`;

const StyledAnchor = _styledComponents2.default.a`
    ${colorsStyle}
`;

const Button = (_ref) => {
    let {
        type,
        context,
        size,
        block,
        active,
        disabled
    } = _ref,
        props = _objectWithoutProperties(_ref, ['type', 'context', 'size', 'block', 'active', 'disabled']);

    const classes = (0, _classnames2.default)({
        btn: true,
        [`btn-${context}`]: true,
        [`btn-${size}`]: true,
        'btn-block': block,
        active,
        disabled
    });

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
    disabled: _propTypes2.default.bool
};

Button.defaultProps = {
    type: 'button',
    context: 'default',
    size: 'md',
    block: false,
    active: false,
    disabled: false
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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactFontawesome = __webpack_require__(39);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _Title = __webpack_require__(7);

var _Title2 = _interopRequireDefault(_Title);

var _Loader = __webpack_require__(4);

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const StyledAside = _styledComponents2.default.aside`
    top: 0;
    max-width: 100%;
    height: 100%;
    overflow-y: auto;
    transition: all 0.25s ease-out;

    color: ${props => props.theme.color};
    background: ${props => props.theme.backgroundColor};
    border-color: ${props => props.theme.borderColor};
    border-style: ${props => props.theme.borderStyle};
    border-width: 0;

    &.scroll-content {
        display: flex;
        flex-direction: column;
        overflow-y: none;
    }

    &.container-parent { position: absolute; }
    &.container-root   { position: fixed; }

    &.xs { width: 150px; }
    &.sm { width: 250px; }
    &.md { width: 400px; }
    &.lg { width: 600px; }
    &.maximized { width: 100%; }

    &.left {
        left: 0;
        transform: translate(-150%, 0);
        border-right-width: ${props => props.theme.borderWidth};
    }

    &.right {
        right: 0;
        transform: translate(150%, 0);
        border-left-width: ${props => props.theme.borderWidth};
    }

    &.left.maximized,
    &.right.maximized {
        border-width: 0;
    }

    &.opened {
        transform: translate(0, 0);
    }

    .back-btn,
    .close-btn {
        color: ${props => props.theme.controlColor};
        background: transparent;
        border-width: 0;
        width: 50px;
        height: 50px;
        padding: 0;

        &:hover {
            color: ${props => props.theme.hoverControlColor};
        }
    }

    .back-btn {
        float: left;
        margin-right: 5px;
    }

    .close-btn {
        float: right;
        margin-left: 5px;
    }

    &.scroll-content .header {
        margin-bottom: 20px;
    }

    .content {
        padding: 20px;
    }

    &.scroll-content .content {
        overflow-y: auto;
        border-color: ${props => props.theme.borderColor};
        border-style: ${props => props.theme.borderStyle};
        border-width: 1px 0 1px 0;

        &::after {
            content: '';
            margin-top: 20px;
            display: block;
        }
    }

    .content.loading {
        display: none;
    }

    &.scroll-content .footer {
        margin-top: 20px;
    }
`;

class Column extends _react2.default.Component {
    constructor(props) {
        super(props);

        this.state = {
            opened: props.opened
        };
    }

    componentDidMount() {
        if (this.props.opened === true) {
            this._triggerCallback('onOpen');
        }

        if (this.props.maximized === true) {
            this.props.onMaximize();
        }
    }

    componentWillReceiveProps(nextProps) {
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

    _triggerCallback(name) {
        if (this.props[name] !== null) {
            this.props[name]();
        }
    }

    _handleBackClick() {
        this._triggerCallback('onBack');
    }

    _handleCloseClick() {
        this.setState({ opened: false });
        this._triggerCallback('onClose');
    }

    render() {
        const _props = this.props,
              {
            title,
            header,
            footer,
            children,
            loading,
            loaderLabel,
            position,
            width,
            maximized,
            container,
            scrollContent
        } = _props,
              rest = _objectWithoutProperties(_props, ['title', 'header', 'footer', 'children', 'loading', 'loaderLabel', 'position', 'width', 'maximized', 'container', 'scrollContent']);

        const asideClasses = (0, _classnames2.default)({
            [position]: true,
            [width]: true,
            opened: this.state.opened,
            maximized,
            [`container-${container}`]: true,
            'scroll-content': scrollContent
        });

        const contentClasses = (0, _classnames2.default)({
            content: true,
            loading
        });

        return _react2.default.createElement(
            StyledAside,
            _extends({ className: asideClasses }, rest),
            _react2.default.createElement(
                'header',
                { className: 'header' },
                this.props.onBack && _react2.default.createElement(
                    'button',
                    { className: 'back-btn', onClick: () => this._handleBackClick() },
                    _react2.default.createElement(_reactFontawesome2.default, { name: 'chevron-left', size: 'lg' })
                ),
                _react2.default.createElement(
                    'button',
                    { className: 'close-btn', onClick: () => this._handleCloseClick() },
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
}

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
    onUnmaximize: _propTypes2.default.func
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
    onUnmaximize: null
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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const StyledDiv = _styledComponents2.default.div`
    padding: 20px 20px;
    border-color: ${props => props.theme.borderColor};
    border-style: ${props => props.theme.borderStyle};
    border-width: 1px 0 0 0;
`;

const ColumnFooter = (_ref) => {
    let { children } = _ref,
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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const StyledDiv = _styledComponents2.default.div`
    padding: 15px 20px 0;
`;

const ColumnHeader = (_ref) => {
    let { children } = _ref,
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

const Form = props => _react2.default.createElement('form', props);

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

const contexts = ['', 'success', 'warning', 'error'];

const colorsStyle = props => contexts.reduce((reducedStyles, context) => {
    if (!context) {
        return reducedStyles;
    }

    const controlColors = props.theme.form.input[context];
    const hintColors = props.theme.form.hint[context];

    return `
        ${reducedStyles}

        &.has-${context} {
            .form-control {
                background-color: ${controlColors.backgroundColor};
                border-color: ${controlColors.borderColor};
            }

            .help-block {
                background-color: ${hintColors.backgroundColor};
                color: ${hintColors.color};
            }
        }
    `;
}, '');

const StyledDiv = _styledComponents2.default.div`
    ${props => colorsStyle(props)}

    margin-bottom: 40px;
`;

const FormGroup = (_ref) => {
    let {
        context
    } = _ref,
        props = _objectWithoutProperties(_ref, ['context']);

    const classes = (0, _classnames2.default)({
        'form-group': true,
        [`has-${context}`]: context !== ''
    });

    return _react2.default.createElement(StyledDiv, _extends({ className: classes }, props));
};

FormGroup.propTypes = {
    context: _propTypes2.default.oneOf(contexts)
};

FormGroup.defaultProps = {
    context: ''
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

const StyledInput = _styledComponents2.default.input`
    opacity: ${props => props.theme.form.input.opacity};
    background-color: ${props => props.theme.form.input.backgroundColor};
    border-color: ${props => props.theme.form.input.borderColor};
    border-width: ${props => props.theme.form.input.borderWidth};
    border-radius: ${props => props.theme.form.input.borderRadius};
    box-shadow: ${props => props.theme.form.input.boxShadow};

    &:focus,
    &.form-control:focus {
        opacity: ${props => props.theme.form.input.focusOpacity};
        background-color: ${props => props.theme.form.input.focusBackgroundColor};
        border-color: ${props => props.theme.form.input.focusBorderColor};
        box-shadow: ${props => props.theme.form.input.focusBoxShadow};
    }
`;

const Input = (_ref) => {
    let {
        type,
        disabled,
        hint
    } = _ref,
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

const StyledLabel = _styledComponents2.default.label`
    color: ${props => props.theme.color}
    margin-bottom: 6px;
    font-size: 1.1em;
    font-weight: 400;
`;

const Label = (_ref) => {
    let {
        htmlFor
    } = _ref,
        props = _objectWithoutProperties(_ref, ['htmlFor']);

    const classes = (0, _classnames2.default)({
        'control-label': true
    });

    return _react2.default.createElement(StyledLabel, _extends({ htmlFor: htmlFor, className: classes }, props));
};

Label.propTypes = {
    htmlFor: _propTypes2.default.string
};

Label.defaultProps = {
    htmlFor: ''
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

const StyledSelect = (0, _styledComponents2.default)(_reactVirtualizedSelect2.default)`
    .Select-control {
        opacity: ${props => props.theme.form.input.opacity};
        background-color: ${props => props.theme.form.input.backgroundColor};
        border-color: ${props => props.theme.form.input.borderColor};
        border-width: ${props => props.theme.form.input.borderWidth};
        border-radius: ${props => props.theme.form.input.borderRadius};
        box-shadow: none;
    }

    &.is-focused .Select-control,
    &.is-focused:not(.is-open) > .Select-control {
        opacity: ${props => props.theme.form.input.focusOpacity};
        background-color: ${props => props.theme.form.input.focusBackgroundColor};
        border-color: ${props => props.theme.form.input.focusBorderColor};
        box-shadow: none;
    }

    .Select-placeholder {
        padding-left: 15px;
    }

    .Select-input > input {
        padding: 0;
        line-height: 34px;
    }

    .Select-menu-outer {
        margin-top: 0;
        border-top-width: 0;
    }

    .VirtualizedSelectOption {
        cursor: default;
        padding: 5px 10px;
    }

    .VirtualizedSelectFocusedOption {
        color: ${props => props.theme.form.select.optionColor};
        background-color: ${props => props.theme.form.select.optionBackgroundColor};
    }
`;

class Select extends _react2.default.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(StyledSelect, _extends({
                onChange: selectValue => this.setState({ selectValue }),
                value: this.state.selectValue
            }, this.props))
        );
    }
}

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

const StyledTextArea = _styledComponents2.default.textarea`
    opacity: ${props => props.theme.form.input.opacity};
    resize: ${props => props.resize};
    background-color: ${props => props.theme.form.input.backgroundColor};
    border-color: ${props => props.theme.form.input.borderColor};
    border-width: ${props => props.theme.form.input.borderWidth};
    border-radius: ${props => props.theme.form.input.borderRadius};
    box-shadow: ${props => props.theme.form.input.boxShadow};

    &:focus,
    &.form-control:focus {
        opacity: ${props => props.theme.form.input.focusOpacity};
        background-color: ${props => props.theme.form.input.focusBackgroundColor};
        border-color: ${props => props.theme.form.input.focusBorderColor};
        box-shadow: ${props => props.theme.form.input.focusBoxShadow};
    }
`;

const Textarea = (_ref) => {
    let {
        rows,
        disabled,
        hint
    } = _ref,
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

const rotate360 = _styledComponents.keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Spinner = _styledComponents2.default.div`
    width: ${props => props.spinnerSize}px;
    height: ${props => props.spinnerSize}px;
    margin: 0 auto;
    border: 3px solid ${props => props.theme.loaderColor};
    border-radius: 50%;
    border-left-color: transparent;
    border-bottom-color: transparent;
    border-right-color: transparent;
    animation: ${rotate360} 650ms infinite linear;
`;

const Wrapper = _styledComponents2.default.div`
    text-align: center;

    &.centered {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const Label = _styledComponents2.default.div`
    color: ${props => props.theme.loaderColor};
    margin-top: 15px;
`;

const Loader = (_ref) => {
    let {
        centered,
        spinnerSize,
        label
    } = _ref,
        rest = _objectWithoutProperties(_ref, ['centered', 'spinnerSize', 'label']);

    const classes = (0, _classnames2.default)({
        centered
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
    label: _propTypes2.default.string
};

Loader.defaultProps = {
    centered: false,
    spinnerSize: 40,
    label: ''
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

const StyledMap = _styledComponents2.default.div`
    .leaflet-bar {
        border: none;
    }

    .leaflet-bar a {
        color: ${props => props.theme.map.controlColor};
        background: ${props => props.theme.map.controlBackgroundColor};
        border: none;
        width: 50px;
        height: 50px;
        line-height: 50px;
        transition: all 0.1s ease-out;

        &:hover,
        &:focus,
        &:active {
            color: ${props => props.theme.map.hoverControlColor};
            background: ${props => props.theme.map.hoverControlBackgroundColor};
        }

        &:active {
            box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
        }
    }
`;

class Map extends _react2.default.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.locate === true) {
            this.locateControl = _leaflet2.default.control.locate();
            this.map.addControl(this.locateControl);
        } else if (this.locateControl) {
            this.map.removeControl(this.locateControl);
        }
    }

    handleRef(map) {
        if (map !== null) {
            this.map = map.leafletElement;
        }
    }

    render() {
        const _props = this.props,
              {
            children
        } = _props,
              rest = _objectWithoutProperties(_props, ['children']);

        return _react2.default.createElement(
            StyledMap,
            null,
            _react2.default.createElement(
                _reactLeaflet.Map,
                _extends({
                    ref: map => this.handleRef(map)
                }, rest),
                children
            )
        );
    }
}

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