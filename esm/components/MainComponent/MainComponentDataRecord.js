import React from 'react';
import { DataRecord } from './Styles';
import { MainComponentData } from './MainComponentData';
export var MainComponentDataRecord = _ref => {
  var {
    record
  } = _ref;
  return /*#__PURE__*/React.createElement(DataRecord, null, record.map(item => /*#__PURE__*/React.createElement(MainComponentData, {
    key: item.key,
    data: item
  })));
};