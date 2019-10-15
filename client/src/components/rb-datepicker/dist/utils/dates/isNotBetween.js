"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isNotBetween;

function isNotBetween(minDate, maxDate, selectedDay) {
  return minDate != null && selectedDay.isBefore(minDate, 'day') || maxDate != null && selectedDay.isAfter(maxDate, 'day');
}