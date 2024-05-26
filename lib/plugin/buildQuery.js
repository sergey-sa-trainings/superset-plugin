"use strict";

exports.__esModule = true;
exports.default = buildQuery;

var _core = require("@superset-ui/core");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function buildQuery(formData) {
  var {
    cols: groupby
  } = formData;
  return (0, _core.buildQueryContext)(formData, baseQueryObject => [_extends({}, baseQueryObject, {
    groupby
  })]);
}