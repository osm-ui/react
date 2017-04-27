(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("styled-components"), require("prop-types"), require("classnames"), require("bootstrap"), require("bootstrap/dist/css/bootstrap.min.css"), require("font-awesome/css/font-awesome.min.css"), require("jquery"), require("react-fontawesome"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "styled-components", "prop-types", "classnames", "bootstrap", "bootstrap/dist/css/bootstrap.min.css", "font-awesome/css/font-awesome.min.css", "jquery", "react-fontawesome"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("styled-components"), require("prop-types"), require("classnames"), require("bootstrap"), require("bootstrap/dist/css/bootstrap.min.css"), require("font-awesome/css/font-awesome.min.css"), require("jquery"), require("react-fontawesome")) : factory(root["react"], root["styled-components"], root["prop-types"], root["classnames"], root["bootstrap"], root["bootstrap/dist/css/bootstrap.min.css"], root["font-awesome/css/font-awesome.min.css"], root["jquery"], root["react-fontawesome"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_20__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

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

const StyledDiv = _styledComponents2.default.div`
    text-align: center;

    .loader-label {
        color: ${props => props.theme.loaderColor};
        margin-top: 15px;
    }
`;

const Loader = (_ref) => {
    let { spinnerSize, label } = _ref,
        rest = _objectWithoutProperties(_ref, ['spinnerSize', 'label']);

    return _react2.default.createElement(
        StyledDiv,
        rest,
        _react2.default.createElement(Spinner, { spinnerSize: spinnerSize }),
        label && _react2.default.createElement(
            'div',
            { className: 'loader-label' },
            label
        )
    );
};

Loader.propTypes = {
    spinnerSize: _propTypes2.default.number,
    label: _propTypes2.default.string
};

Loader.defaultProps = {
    spinnerSize: 40,
    label: ''
};

Loader.displayName = 'Loader';

exports.default = Loader;

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

    form: {
        button: {
            backgroundColor: _colors2.default.white,
            borderColor: _colors2.default.gray3,
            hoverBackgroundColor: _colors2.default.gray5,
            hoverBorderColor: _colors2.default.gray3,
            focusBackgroundColor: _colors2.default.gray5,
            focusBorderColor: _colors2.default.gray3,
            activeBackgroundColor: _colors2.default.gray5,
            activeBorderColor: _colors2.default.gray3,

            primary: {
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
    font-size: 16px;
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
/* 8 */
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
/* 9 */
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
            color: ${colors.color};
            background-color: ${colors.backgroundColor};
            border-color: ${colors.borderColor};

            &:hover {
                background-color: ${colors.hoverBackgroundColor};
                border-color: ${colors.hoverBorderColor};
            }

            &:focus {
                background-color: ${colors.focusBackgroundColor};
                border-color: ${colors.focusBorderColor};
            }

            &:active, .active {
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
/* 10 */
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

var _reactFontawesome = __webpack_require__(20);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _loader = __webpack_require__(4);

var _loader2 = _interopRequireDefault(_loader);

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

    .title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0 0 30px;
    }

    .content {
        position: relative;
        padding: 20px;
    }

    .content.loading {
        display: none;
    }

    .loader {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        margin-top: -25px;
        text-align: center;
        visibility: visible;
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
            children,
            loading,
            loaderLabel,
            position,
            width,
            maximized,
            container
        } = _props,
              rest = _objectWithoutProperties(_props, ['title', 'children', 'loading', 'loaderLabel', 'position', 'width', 'maximized', 'container']);

        const asideClasses = (0, _classnames2.default)({
            [position]: true,
            [width]: true,
            opened: this.state.opened,
            maximized,
            [`container-${container}`]: true
        });

        const contentClasses = (0, _classnames2.default)({
            content: true,
            loading
        });

        return _react2.default.createElement(
            StyledAside,
            _extends({ className: asideClasses }, rest),
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
            _react2.default.createElement('div', { className: 'clearfix' }),
            _react2.default.createElement(
                'div',
                { className: contentClasses },
                title && _react2.default.createElement(
                    'h2',
                    { className: 'title' },
                    title
                ),
                children
            ),
            loading && _react2.default.createElement(_loader2.default, { className: 'loader', label: loaderLabel })
        );
    }
}

Column.propTypes = {
    title: _propTypes2.default.string,
    children: _propTypes2.default.element.isRequired,
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
    onOpen: _propTypes2.default.func,
    onClose: _propTypes2.default.func,
    onBack: _propTypes2.default.func,
    onMaximize: _propTypes2.default.func,
    onUnmaximize: _propTypes2.default.func
};

Column.defaultProps = {
    title: '',
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
    onOpen: null,
    onClose: null,
    onBack: null,
    onMaximize: null,
    onUnmaximize: null
};

Column.displayName = 'Column';

exports.default = Column;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _formGroup = __webpack_require__(18);

var _formGroup2 = _interopRequireDefault(_formGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Form = props => _react2.default.createElement('form', props);

Form.propTypes = {};

Form.defaultProps = {};

Form.displayName = 'Form';

Form.Group = _formGroup2.default;

Form.Group.displayName = 'Form.Group';

exports.default = Form;

/***/ }),
/* 12 */
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

var _inputHint = __webpack_require__(19);

var _inputHint2 = _interopRequireDefault(_inputHint);

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
            _inputHint2.default,
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

Textarea.displayName = 'Textarea';

exports.default = Textarea;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.config = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(1);

var _default = __webpack_require__(5);

var _colors = __webpack_require__(6);

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const config = exports.config = _extends({}, _default.config, {
    color: _colors2.default.white,
    backgroundColor: _colors2.default.red2,
    borderColor: _colors2.default.red1,
    dimmerBackgroundColor: _colors2.default.red2,
    loaderColor: _colors2.default.white,
    controlColor: _colors2.default.red1,
    hoverControlColor: _colors2.default.white
});

const RedTheme = (_ref) => {
    let { children } = _ref,
        rest = _objectWithoutProperties(_ref, ['children']);

    return _react2.default.createElement(
        _styledComponents.ThemeProvider,
        { theme: config },
        _react2.default.createElement(
            _default.StyledDiv,
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
/* 14 */
/***/ (function(module, exports) {

module.exports = require("bootstrap");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("bootstrap/dist/css/bootstrap.min.css");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("font-awesome/css/font-awesome.min.css");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 18 */
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

FormGroup.displayName = 'FormGroup';

exports.default = FormGroup;

/***/ }),
/* 19 */
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

InputHint.displayName = 'InputHint';

exports.default = InputHint;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-fontawesome");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = exports.Textarea = exports.Form = exports.Button = exports.Alert = exports.Loader = exports.AppCanvas = exports.RedTheme = exports.DefaultTheme = undefined;

__webpack_require__(17);

__webpack_require__(15);

__webpack_require__(14);

__webpack_require__(16);

var _default = __webpack_require__(5);

var _default2 = _interopRequireDefault(_default);

var _red = __webpack_require__(13);

var _red2 = _interopRequireDefault(_red);

var _appCanvas = __webpack_require__(8);

var _appCanvas2 = _interopRequireDefault(_appCanvas);

var _loader = __webpack_require__(4);

var _loader2 = _interopRequireDefault(_loader);

var _alert = __webpack_require__(7);

var _alert2 = _interopRequireDefault(_alert);

var _button = __webpack_require__(9);

var _button2 = _interopRequireDefault(_button);

var _form = __webpack_require__(11);

var _form2 = _interopRequireDefault(_form);

var _textarea = __webpack_require__(12);

var _textarea2 = _interopRequireDefault(_textarea);

var _column = __webpack_require__(10);

var _column2 = _interopRequireDefault(_column);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.DefaultTheme = _default2.default;
exports.RedTheme = _red2.default;
exports.AppCanvas = _appCanvas2.default;
exports.Loader = _loader2.default;
exports.Alert = _alert2.default;
exports.Button = _button2.default;
exports.Form = _form2.default;
exports.Textarea = _textarea2.default;
exports.Column = _column2.default;

/***/ })
/******/ ]);
});