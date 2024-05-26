var _templateObject;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React, { createRef } from 'react';
import { styled } from '@superset-ui/core';
import { FilterComponent } from './components/FilterComponent/FilterComponent';
import { MainComponent } from './components/MainComponent/MainComponent';
import { FILTER_HAVING_HEADER, FILTER_WHERE_HEADER } from './constants/Literals';
var Styles = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  padding: ", "px;\n  border-radius: ", "px;\n  height: ", "px;\n  width: ", "px;\n  overflow-y: scroll;\n"])), _ref => {
  var {
    theme
  } = _ref;
  return theme.gridUnit * 2;
}, _ref2 => {
  var {
    theme
  } = _ref2;
  return theme.gridUnit * 2;
}, _ref3 => {
  var {
    height
  } = _ref3;
  return height;
}, _ref4 => {
  var {
    width
  } = _ref4;
  return width;
});
export default function SupersetPluginChartMyFirst(props) {
  var {
    filterWhereData,
    filterHavingData,
    transformedData,
    height,
    width
  } = props;
  var rootElem = /*#__PURE__*/createRef();
  return /*#__PURE__*/React.createElement(Styles, {
    ref: rootElem,
    height: height,
    width: width
  }, Boolean(filterWhereData.length) && /*#__PURE__*/React.createElement(FilterComponent, {
    header: FILTER_WHERE_HEADER,
    filterData: filterWhereData
  }), Boolean(filterHavingData.length) && /*#__PURE__*/React.createElement(FilterComponent, {
    header: FILTER_HAVING_HEADER,
    filterData: filterHavingData
  }), Boolean(transformedData.length) && /*#__PURE__*/React.createElement(MainComponent, {
    data: transformedData
  }));
}