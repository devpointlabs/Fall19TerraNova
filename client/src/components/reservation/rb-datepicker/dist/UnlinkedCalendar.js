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

var UnlinkedCalendar =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(UnlinkedCalendar, _React$Component);

  function UnlinkedCalendar() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, UnlinkedCalendar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(UnlinkedCalendar)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      leftCalendar: (0, _utils.dayjs)(),
      rightCalendar: (0, _utils.dayjs)().add(1, "month")
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "createProps", function () {
      var _this$state = _this.state,
          leftCalendar = _this$state.leftCalendar,
          rightCalendar = _this$state.rightCalendar;
      var leftState = Object.assign({}, _this.props, {
        calendar: leftCalendar
      });
      var rightState = Object.assign({}, _this.props, {
        calendar: rightCalendar
      });

      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          handlePrev = _assertThisInitialize.handlePrev,
          handleNext = _assertThisInitialize.handleNext;

      return {
        leftProps: (0, _objectSpread2["default"])({
          handlePrev: handlePrev,
          handleNext: handlePrev,
          handleSelected: handlePrev
        }, leftState),
        rightProps: (0, _objectSpread2["default"])({
          handleSelected: handleNext,
          handlePrev: handleNext,
          handleNext: handleNext
        }, rightState)
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handlePrev", function (leftCalendar) {
      _this.setState({
        leftCalendar: leftCalendar
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleNext", function (rightCalendar) {
      _this.setState({
        rightCalendar: rightCalendar
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderTable", function () {
      var props = _this.createProps();

      var leftProps = props.leftProps,
          rightProps = props.rightProps;
      var className = (0, _classnames["default"])({
        "drp-calendar": true,
        left: true
      });
      return [_react["default"].createElement("div", {
        className: className,
        key: 0
      }, _react["default"].createElement("div", {
        className: "calendar-table"
      }, _react["default"].createElement(_Table.Table, {
        className: "table-condensed"
      }, _react["default"].createElement(_CalendarHead["default"], leftProps), _react["default"].createElement(_CalendarBody["default"], leftProps)))), _react["default"].createElement("div", {
        className: className,
        key: 1
      }, _react["default"].createElement("div", {
        className: "calendar-table"
      }, _react["default"].createElement(_Table.Table, {
        className: "table-condensed"
      }, _react["default"].createElement(_CalendarHead["default"], rightProps), _react["default"].createElement(_CalendarBody["default"], rightProps))))];
    });
    return _this;
  }

  (0, _createClass2["default"])(UnlinkedCalendar, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          opens = _this$props.opens,
          children = _this$props.children;
      var className = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "opens".concat(opens), true), (0, _defineProperty2["default"])(_classNames, "daterangepicker ltr show-calendar", true), _classNames));
      return _react["default"].createElement("div", {
        className: className,
        style: {
          left: "auto",
          display: "block"
        }
      }, this.renderTable(), children);
    }
  }]);
  return UnlinkedCalendar;
}(_react["default"].Component);

(0, _defineProperty2["default"])(UnlinkedCalendar, "defaultProps", {
  position: "left"
});

var UnlinkedCalendarUI =
/*#__PURE__*/
function (_React$Component2) {
  (0, _inherits2["default"])(UnlinkedCalendarUI, _React$Component2);

  function UnlinkedCalendarUI() {
    (0, _classCallCheck2["default"])(this, UnlinkedCalendarUI);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf3["default"])(UnlinkedCalendarUI).apply(this, arguments));
  }

  (0, _createClass2["default"])(UnlinkedCalendarUI, [{
    key: "render",
    value: function render() {
      var uiProps = (0, _objectSpread2["default"])({}, this.props, {
        component: UnlinkedCalendar
      });
      return _react["default"].createElement(_PickerUI["default"], uiProps);
    }
  }]);
  return UnlinkedCalendarUI;
}(_react["default"].Component);

exports["default"] = UnlinkedCalendarUI;