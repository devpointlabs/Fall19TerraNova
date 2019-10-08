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

var CalendarNext =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(CalendarNext, _React$Component);

  function CalendarNext() {
    (0, _classCallCheck2["default"])(this, CalendarNext);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(CalendarNext).apply(this, arguments));
  }

  (0, _createClass2["default"])(CalendarNext, [{
    key: "handleNext",
    value: function handleNext(calendar) {
      var handleNext = this.props.handleNext;

      if (handleNext) {
        handleNext(calendar);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          next = _this$props.next,
          calendar = _this$props.calendar;
      var className = (0, _classnames["default"])({
        next: next,
        available: next
      });
      var onClick = calendar ? this.handleNext.bind(this, calendar) : function () {};
      var Span = next ? _react["default"].createElement("span", null) : null;
      var nextProps = {
        className: className,
        onClick: onClick
      };
      return _react["default"].createElement(_Table.Th, nextProps, Span);
    }
  }]);
  return CalendarNext;
}(_react["default"].Component);

exports["default"] = CalendarNext;
(0, _defineProperty2["default"])(CalendarNext, "defaultProps", {
  next: true
});