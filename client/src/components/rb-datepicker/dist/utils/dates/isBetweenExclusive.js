"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isBetweenExclusive;

function isBetweenExclusive(startDate, endDate, day) {
  return startDate && endDate && day > startDate && day < endDate;
}