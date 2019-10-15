"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/esm/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("./utils");

var _Table = require("./Table");

var _CalendarBody = _interopRequireDefault(require("./CalendarBody"));

var _CalendarHead = _interopRequireDefault(require("./CalendarHead"));

var _PickerUI = _interopRequireDefault(require("./PickerUI"));

var Calendar =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Calendar, _React$Component);

  function Calendar() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Calendar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Calendar)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      calendar: (0, _utils.dayjs)()
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleSelected", function (calendar) {
      _this.setState({
        calendar: calendar
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "createProps", function () {
      var assignedState = Object.assign({}, _this.props, _this.state);

      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          handlePrev = _assertThisInitialize.handlePrev,
          handleNext = _assertThisInitialize.handleNext,
          handleSelected = _assertThisInitialize.handleSelected;

      return (0, _objectSpread2["default"])({
        handlePrev: handlePrev,
        handleNext: handleNext,
        handleSelected: handleSelected
      }, assignedState);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleNext", function (calendar) {
      _this.setState({
        calendar: calendar
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handlePrev", function (calendar) {
      _this.setState({
        calendar: calendar
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderTable", function () {
      var props = _this.createProps();

      var position = props.position;
      var className = (0, _classnames["default"])((0, _defineProperty2["default"])({
        "drp-calendar": true
      }, position, true));
      return _react["default"].createElement("div", {
        className: className
      }, _react["default"].createElement("div", {
        className: "calendar-table"
      }, _react["default"].createElement(_Table.Table, {
        className: "table-condensed"
      }, _react["default"].createElement(_CalendarHead["default"], props), _react["default"].createElement(_CalendarBody["default"], props))));
    });
    return _this;
  }

  (0, _createClass2["default"])(Calendar, [{
    key: "render",
    value: function render() {
      var _classNames2;

      var _this$props = this.props,
          opens = _this$props.opens,
          children = _this$props.children;
      var className = (0, _classnames["default"])((_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "opens".concat(opens), true), (0, _defineProperty2["default"])(_classNames2, "daterangepicker ltr show-calendar", true), _classNames2));
      return _react["default"].createElement("div", {
        className: className,
        style: {
          left: "auto",
          display: "block"
        }
      }, this.renderTable(), children);
    }
  }]);
  return Calendar;
}(_react["default"].Component);

(0, _defineProperty2["default"])(Calendar, "defaultProps", {
  position: "left"
});

var CalendarUI =
/*#__PURE__*/
function (_React$Component2) {
  (0, _inherits2["default"])(CalendarUI, _React$Component2);

  function CalendarUI() {
    (0, _classCallCheck2["default"])(this, CalendarUI);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf3["default"])(CalendarUI).apply(this, arguments));
  }

  (0, _createClass2["default"])(CalendarUI, [{
    key: "render",
    value: function render() {
      var uiProps = (0, _objectSpread2["default"])({}, this.props, {
        component: Calendar
      });
      return _react["default"].createElement(_PickerUI["default"], uiProps);
    }
  }]);
  return CalendarUI;
}(_react["default"].Component);

exports["default"] = CalendarUI;