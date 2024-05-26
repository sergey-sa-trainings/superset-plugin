"use strict";

exports.__esModule = true;
exports.FilterComponent = void 0;

var _react = _interopRequireDefault(require("react"));

var _FilterComponentHeader = require("./FilterComponentHeader");

var _FilterComponentData = require("./FilterComponentData");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FilterComponent = _ref => {
  var {
    header,
    filterData
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_FilterComponentHeader.FilterComponentHeader, {
    header: header
  }), filterData.map(item => /*#__PURE__*/_react.default.createElement(_FilterComponentData.FilterComponentData, {
    key: item.key,
    value: item.value
  })));
};

exports.FilterComponent = FilterComponent;