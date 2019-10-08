"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = exports.THead = exports.Td = exports.TBody = exports.Th = exports.Tr = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inherits"));

var _react = _interopRequireDefault(require("react"));

var Tr =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Tr, _React$Component);

  function Tr() {
    (0, _classCallCheck2["default"])(this, Tr);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Tr).apply(this, arguments));
  }

  (0, _createClass2["default"])(Tr, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          onClick = _this$props.onClick,
          style = _this$props.style,
          children = _this$props.children;
      return _react["default"].createElement("tr", {
        style: style,
        onClick: onClick,
        className: className
      }, children);
    }
  }]);
  return Tr;
}(_react["default"].Component);

exports.Tr = Tr;

var Th =
/*#__PURE__*/
function (_React$Component2) {
  (0, _inherits2["default"])(Th, _React$Component2);

  function Th() {
    (0, _classCallCheck2["default"])(this, Th);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Th).apply(this, arguments));
  }

  (0, _createClass2["default"])(Th, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          onClick = _this$props2.onClick,
          style = _this$props2.style,
          children = _this$props2.children,
          colSpan = _this$props2.colSpan,
          onMouseDown = _this$props2.onMouseDown;
      return _react["default"].createElement("th", {
        style: style,
        onClick: onClick,
        colSpan: colSpan,
        onMouseDown: onMouseDown,
        className: className
      }, children);
    }
  }]);
  return Th;
}(_react["default"].Component);

exports.Th = Th;

var TBody =
/*#__PURE__*/
function (_React$Component3) {
  (0, _inherits2["default"])(TBody, _React$Component3);

  function TBody() {
    (0, _classCallCheck2["default"])(this, TBody);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TBody).apply(this, arguments));
  }

  (0, _createClass2["default"])(TBody, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          className = _this$props3.className,
          style = _this$props3.style,
          children = _this$props3.children;
      return _react["default"].createElement("tbody", {
        style: style,
        className: className
      }, children);
    }
  }]);
  return TBody;
}(_react["default"].Component);

exports.TBody = TBody;

var Td =
/*#__PURE__*/
function (_React$Component4) {
  (0, _inherits2["default"])(Td, _React$Component4);

  function Td() {
    (0, _classCallCheck2["default"])(this, Td);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Td).apply(this, arguments));
  }

  (0, _createClass2["default"])(Td, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          className = _this$props4.className,
          style = _this$props4.style,
          children = _this$props4.children;
      return _react["default"].createElement("td", {
        style: style,
        className: className
      }, children);
    }
  }]);
  return Td;
}(_react["default"].Component);

exports.Td = Td;

var THead =
/*#__PURE__*/
function (_React$Component5) {
  (0, _inherits2["default"])(THead, _React$Component5);

  function THead() {
    (0, _classCallCheck2["default"])(this, THead);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(THead).apply(this, arguments));
  }

  (0, _createClass2["default"])(THead, [{
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          className = _this$props5.className,
          style = _this$props5.style,
          children = _this$props5.children;
      return _react["default"].createElement("thead", {
        style: style,
        className: className
      }, children);
    }
  }]);
  return THead;
}(_react["default"].Component);

exports.THead = THead;

var Table =
/*#__PURE__*/
function (_React$Component6) {
  (0, _inherits2["default"])(Table, _React$Component6);

  function Table() {
    (0, _classCallCheck2["default"])(this, Table);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Table).apply(this, arguments));
  }

  (0, _createClass2["default"])(Table, [{
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          className = _this$props6.className,
          style = _this$props6.style,
          children = _this$props6.children;
      return _react["default"].createElement("table", {
        style: style,
        className: className
      }, children);
    }
  }]);
  return Table;
}(_react["default"].Component);

exports.Table = Table;