"use strict";

exports.__esModule = true;
exports.MainComponentDataRecord = void 0;

var _react = _interopRequireDefault(require("react"));

var _Styles = require("./Styles");

var _MainComponentData = require("./MainComponentData");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainComponentDataRecord = _ref => {
  var {
    record
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Styles.DataRecord, null, record.map(item => /*#__PURE__*/_react.default.createElement(_MainComponentData.MainComponentData, {
    key: item.key,
    data: item
  })));
};

exports.MainComponentDataRecord = MainComponentDataRecord;