"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDefaultState = getDefaultState;

var _dayjs = _interopRequireDefault(require("dayjs"));

var _index = require("./index");

function getDefaultState() {
  var calendar = (0, _dayjs["default"])();
  var startOfWeek = calendar.startOf("week");
  var endOfWeek = calendar.endOf("week");
  var startDate = calendar.clone();
  var endDate = calendar.clone().add(1, "month");
  var range = endDate || startDate;
  var minDate = calendar.clone().subtract(5, "year");
  var maxDate = calendar.clone().add(5, "year");
  var maxSpan = {
    years: 5
  };
  var autoApply = false;
  var singleDatePicker = false;
  var showDropdowns = true;
  var closedOrOpen = _index.interval.CLOSED;
  var minYear = calendar.clone().subtract(70, "year").format("YYYY");
  var maxYear = calendar.clone().add(70, "year").format("YYYY");
  var showWeekNumbers = true;
  var showISOWeekNumbers = false;
  var showCustomRangeLabel = true;
  var timePicker = false;
  var timePicker24Hour = false;
  var timePickerIncrement = 1;
  var timePickerSeconds = false;
  var alwaysShowCalendars = false;
  var ranges = {};
  var opens = "left";
  var drops = "down";
  var buttonClasses = "btn btn-sm";
  var applyButtonClasses = "btn-primary";
  var cancelButtonClasses = "btn-default";

  var isInvalidDate = function isInvalidDate() {
    return false;
  };

  var isCustomDate = function isCustomDate() {
    return [];
  };

  var weekLabel = "W";
  var linkedCalendars = true;
  var weekNames = [];

  for (var s = startOfWeek; s <= endOfWeek;) {
    weekNames.push(s.format("dd"));
    s = s.add(1, "day");
  }

  var language = (0, _index.getNavigatorLanguage)();
  var monthNames = (0, _index.getMonthNamesForLocale)(language);
  var sY = parseInt(minYear);
  var eY = parseInt(maxYear);
  var yearNames = [];

  for (; sY < eY; sY++) {
    yearNames.push(sY);
  }

  var locale = {
    weekNames: weekNames,
    language: language,
    monthNames: monthNames,
    weekLabel: weekLabel,
    yearNames: yearNames
  };
  return {
    locale: locale,
    calendar: calendar,
    startDate: startDate,
    endDate: endDate,
    minDate: minDate,
    maxDate: maxDate,
    maxSpan: maxSpan,
    showDropdowns: showDropdowns,
    minYear: minYear,
    maxYear: maxYear,
    showWeekNumbers: showWeekNumbers,
    showISOWeekNumbers: showISOWeekNumbers,
    timePicker: timePicker,
    timePickerIncrement: timePickerIncrement,
    timePicker24Hour: timePicker24Hour,
    timePickerSeconds: timePickerSeconds,
    ranges: ranges,
    showCustomRangeLabel: showCustomRangeLabel,
    alwaysShowCalendars: alwaysShowCalendars,
    opens: opens,
    drops: drops,
    singleDatePicker: singleDatePicker,
    linkedCalendars: linkedCalendars,
    buttonClasses: buttonClasses,
    applyButtonClasses: applyButtonClasses,
    cancelButtonClasses: cancelButtonClasses,
    autoApply: autoApply,
    isInvalidDate: isInvalidDate,
    isCustomDate: isCustomDate,
    weekLabel: weekLabel,
    closedOrOpen: closedOrOpen,
    range: range
  };
}