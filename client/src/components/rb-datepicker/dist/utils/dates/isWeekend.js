"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isWeekend;

function isWeekend(day) {
  return day.day() > 5 || day.day() < 1;
}