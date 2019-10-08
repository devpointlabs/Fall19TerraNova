"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/esm/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Table = require("./Table");

var _CalendarNext = _interopRequireDefault(require("./CalendarNext"));

var _CalendarPrev = _interopRequireDefault(require("./CalendarPrev"));

var _CalendarTitle = _interopRequireDefault(require("./CalendarTitle"));

var CalendarHeader =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(CalendarHeader, _React$Component);

  function CalendarHeader() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, CalendarHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(CalendarHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "createNextProps", function () {
      var _this$props = _this.props,
          showNext = _this$props.showNext,
          calendar = _this$props.calendar,
          nextDate = _this$props.nextDate,
          handleNext = _this$props.handleNext;
      var date = nextDate(calendar);
      return {
        next: showNext,
        calendar: date,
        handleNext: handleNext
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "createPrevProps", function () {
      var _this$props2 = _this.props,
          showPrev = _this$props2.showPrev,
          calendar = _this$props2.calendar,
          prevDate = _this$props2.prevDate,
          handlePrev = _this$props2.handlePrev;
      var date = prevDate(calendar);
      return {
        prev: showPrev,
        calendar: date,
        handlePrev: handlePrev
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderTitle", function () {
      var _this$props3 = _this.props,
          showISOWeekNumbers = _this$props3.showISOWeekNumbers,
          showWeekNumbers = _this$props3.showWeekNumbers,
          calendar = _this$props3.calendar,
          locale = _this$props3.locale,
          showDropdowns = _this$props3.showDropdowns,
          handleSelected = _this$props3.handleSelected;
      var colSpan = showISOWeekNumbers || showWeekNumbers ? 6 : 5;
      var props = {
        colSpan: colSpan,
        calendar: calendar,
        locale: locale,
        showDropdowns: showDropdowns,
        handleSelected: handleSelected
      };
      return _react["default"].createElement(_CalendarTitle["default"], props);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderNext", function () {
      var props = _this.createNextProps();

      return _react["default"].createElement(_CalendarNext["default"], props);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderPrev", function () {
      var props = _this.createPrevProps();

      return _react["default"].createElement(_CalendarPrev["default"], props);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderWeeks", function () {
      var _this$props4 = _this.props,
          showWeekNumbers = _this$props4.showWeekNumbers,
          showISOWeekNumbers = _this$props4.showISOWeekNumbers,
          locale = _this$props4.locale;
      var weekNames = locale.weekNames,
          weekLabel = locale.weekLabel;
      var showWeeks = showISOWeekNumbers || showWeekNumbers;
      var weeks = showWeeks ? [weekLabel].concat(weekNames) : weekNames;
      var WeekData = weeks.map(function (children, key) {
        var className = (0, _classnames["default"])({
          week: !!(key === 0 && showWeeks)
        });
        var thProps = {
          children: children,
          className: className,
          key: key
        };
        return _react["default"].createElement(_Table.Th, thProps);
      });
      return _react["default"].createElement(_Table.Tr, null, WeekData);
    });
    return _this;
  }

  (0, _createClass2["default"])(CalendarHeader, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_Table.THead, null, _react["default"].createElement(_Table.Tr, null, this.renderPrev(), this.renderTitle(), this.renderNext()), this.renderWeeks());
    }
  }]);
  return CalendarHeader;
}(_react["default"].Component);

exports["default"] = CalendarHeader;
(0, _defineProperty2["default"])(CalendarHeader, "defaultProps", {
  showISOWeekNumbers: false,
  showWeekNumbers: false,
  showNext: true,
  showPrev: true,
  nextDate: function nextDate(calendar) {
    return calendar.add(1, "month");
  },
  prevDate: function prevDate(calendar) {
    return calendar.subtract(1, "month");
  }
});