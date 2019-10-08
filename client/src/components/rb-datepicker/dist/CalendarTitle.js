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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _Table = require("./Table");

var _utils = require("./utils");

var CalendarTitle =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(CalendarTitle, _React$Component);

  function CalendarTitle(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, CalendarTitle);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(CalendarTitle).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function () {
      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          monthSelect = _assertThisInitialize.monthSelect.current,
          yearSelect = _assertThisInitialize.yearSelect.current;

      var options = [parseInt(yearSelect.value), parseInt(monthSelect.value) + 1];
      var newCalendar = (0, _utils.dayjs)(options);
      var handleSelected = _this.props.handleSelected;

      if (handleSelected) {
        handleSelected(newCalendar);
      }
    });
    _this.monthSelect = _react["default"].createRef();
    _this.yearSelect = _react["default"].createRef();
    return _this;
  }

  (0, _createClass2["default"])(CalendarTitle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          calendar = _this$props.calendar,
          colSpan = _this$props.colSpan,
          className = _this$props.className,
          locale = _this$props.locale,
          showDropdowns = _this$props.showDropdowns;
      var month = calendar.month();
      var year = calendar.year();
      var titleProps = {
        colSpan: colSpan,
        className: className
      };
      var label = calendar.format("MMM YYYY");

      if (showDropdowns) {
        var monthNames = locale.monthNames,
            yearNames = locale.yearNames;
        label = [_react["default"].createElement("select", {
          className: "monthselect",
          key: 0,
          ref: this.monthSelect,
          value: month,
          onChange: this.handleChange
        }, monthNames.map(function (name, key) {
          return _react["default"].createElement("option", {
            key: key,
            value: key
          }, name);
        })), _react["default"].createElement("select", {
          className: "yearselect",
          key: 1,
          ref: this.yearSelect,
          value: year,
          onChange: this.handleChange
        }, yearNames.map(function (name, key) {
          return _react["default"].createElement("option", {
            key: key,
            value: name
          }, name);
        }))];
      }

      return _react["default"].createElement(_Table.Th, titleProps, label);
    }
  }]);
  return CalendarTitle;
}(_react["default"].Component);

exports["default"] = CalendarTitle;
(0, _defineProperty2["default"])(CalendarTitle, "defaultProps", {
  className: "month"
});