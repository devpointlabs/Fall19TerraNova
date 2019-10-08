"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = cx;

var _classnames = _interopRequireDefault(require("classnames"));

var dates = _interopRequireWildcard(require("./dates"));

function cx(props) {
  var day = props.day,
      calendar = props.calendar,
      startDate = props.startDate,
      endDate = props.endDate,
      range = props.range,
      maxDate = props.maxDate,
      minDate = props.minDate;
  var weekend = dates.isWeekend(day);
  var inRange = dates.isBetweenExclusive(startDate, endDate, day) || dates.isBetweenExclusive(startDate, range, day);
  var isEndDate = endDate && day.format("YYYY-MM-DD") === endDate.format("YYYY-MM-DD");
  var isStartDate = startDate && day.format("YYYY-MM-DD") === startDate.format("YYYY-MM-DD");
  var active = isStartDate || isEndDate;
  var off = calendar.month() !== day.month() || dates.isNotBetween(minDate, maxDate, day);
  var disabled = dates.isNotBetween(minDate, maxDate, day);
  var available = !disabled;
  return (0, _classnames["default"])({
    weekend: weekend,
    "in-range": inRange,
    "end-date": isEndDate,
    "start-date": isStartDate,
    active: active,
    off: off,
    disabled: disabled,
    available: available
  });
}