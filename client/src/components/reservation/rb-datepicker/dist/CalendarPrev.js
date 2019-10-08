"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Table = require("./Table");

var CalendarPrev =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(CalendarPrev, _React$Component);

  function CalendarPrev() {
    (0, _classCallCheck2["default"])(this, CalendarPrev);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(CalendarPrev).apply(this, arguments));
  }

  (0, _createClass2["default"])(CalendarPrev, [{
    key: "handlePrev",
    value: function handlePrev(calendar) {
      var handlePrev = this.props.handlePrev;

      if (handlePrev) {
        handlePrev(calendar);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prev = _this$props.prev,
          calendar = _this$props.calendar;
      var className = (0, _classnames["default"])({
        prev: prev,
        available: prev
      });
      var onClick = calendar ? this.handlePrev.bind(this, calendar) : function () {};
      var Span = prev ? _react["default"].createElement("span", null) : null;
      var prevProps = {
        className: className,
        onClick: onClick
      };
      return _react["default"].createElement(_Table.Th, prevProps, Span);
    }
  }]);
  return CalendarPrev;
}(_react["default"].Component);

exports["default"] = CalendarPrev;
(0, _defineProperty2["default"])(CalendarPrev, "defaultProps", {
  prev: true,
  locale: {}
});