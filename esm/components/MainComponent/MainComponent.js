import React from 'react';
import Styles from './Styles';
import { MainComponentDataRecord } from './MainComponentDataRecord';
export var MainComponent = _ref => {
  var {
    data
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(Styles, null, data.map(item => {
    var record = Array.from(item.values());
    var keys = [];
    record.forEach(recordItem => {
      keys.push(recordItem.value);
    });
    var listKey = keys.join();
    return /*#__PURE__*/React.createElement(MainComponentDataRecord, {
      key: listKey,
      record: item
    });
  })));
};