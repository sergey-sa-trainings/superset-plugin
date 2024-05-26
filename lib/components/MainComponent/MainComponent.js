"use strict";

exports.__esModule = true;
exports.MainComponent = void 0;

var _react = _interopRequireDefault(require("react"));

var _Styles = _interopRequireDefault(require("./Styles"));

var _MainComponentDataRecord = require("./MainComponentDataRecord");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainComponent = _ref => {
  var {
    data
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement(_Styles.default, null, data.map(item => {
    var record = Array.from(item.values());
    var keys = [];
    record.forEach(recordItem => {
      keys.push(recordItem.value);
    });
    var listKey = keys.join();
    return /*#__PURE__*/_react.default.createElement(_MainComponentDataRecord.MainComponentDataRecord, {
      key: listKey,
      record: item
    });
  })));
};

exports.MainComponent = MainComponent;