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

var _Table = require("./Table");

var _Cell = require("./Cell");

var _utils = require("./utils");

var CalendarBody =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(CalendarBody, _React$Component);

  function CalendarBody() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, CalendarBody);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(CalendarBody)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderCells", function () {
      var _this$props = _this.props,
          startDate = _this$props.startDate,
          endDate = _this$props.endDate,
          range = _this$props.range,
          minDate = _this$props.minDate,
          maxDate = _this$props.maxDate,
          showWeekNumbers = _this$props.showWeekNumbers,
          showISOWeekNumbers = _this$props.showISOWeekNumbers,
          calendar = _this$props.calendar,
          onDayClick = _this$props.onDayClick,
          onDayMouseEnter = _this$props.onDayMouseEnter;
      var startOfMonth = calendar.startOf("month");
      var startOfWeek = startOfMonth.startOf("week");
      var endOfMonth = calendar.endOf("month");
      var endOfWeek = endOfMonth.endOf("week");
      var data = [];
      var s = startOfWeek.clone();

      for (; s <= endOfWeek;) {
        data.push(s);
        s = s.add(1, "day");
      }

      if (data.length < 42) {
        var fill = data.length;

        for (; fill < 42; fill++) {
          data.push(s);
          s = s.add(1, "day");
        }
      }

      var resolvedData = [];

      for (var cxi = 0; cxi < 6; cxi++) {
        var rows = [];
        var rxi = cxi * 7;
        var rxiDay = data[rxi];

        if (showISOWeekNumbers || showWeekNumbers) {
          var week = showISOWeekNumbers ? _utils.dates.isoWeek(rxiDay.toDate()) : rxiDay.week();
          rows.push({
            unitType: _utils.unitType.WEEK,
            key: 0,
            week: week
          });
        }

        var initLength = rows.length;

        for (var cxj = 0; cxj < 7; cxj++) {
          var key = rxi + cxj;
          var day = data[key];
          var props = {
            unitType: _utils.unitType.DAY,
            key: key + initLength,
            minDate: minDate,
            maxDate: maxDate,
            day: day,
            calendar: calendar,
            startDate: startDate,
            range: range,
            endDate: endDate,
            onDayMouseEnter: onDayMouseEnter,
            onDayClick: onDayClick
          };
          rows.push(props);
        }

        resolvedData.push(rows);
      }

      return resolvedData.map(function (rows, rowKey) {
        var cell = rows.map(function (props) {
          var Component = _Cell.cellMapper[props.unitType];
          return _react["default"].createElement(Component, props);
        });
        return _react["default"].createElement(_Table.Tr, {
          key: rowKey
        }, cell);
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(CalendarBody, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_Table.TBody, null, this.renderCells());
    }
  }]);
  return CalendarBody;
}(_react["default"].Component);

exports["default"] = CalendarBody;