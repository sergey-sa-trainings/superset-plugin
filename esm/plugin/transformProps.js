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
import { GenericDataType, getNumberFormatter, getTimeFormatter } from '@superset-ui/core';
import { FilterClauseType, FilterExpressionType } from '../types';
import { DEFAULT_NUMBER_FORMAT } from '@superset-ui/chart-controls';
import { CUSTOM_TIME_DEFAULT_FORMAT } from '../constants/Formatting';
export default function transformProps(chartProps) {
  var {
    width,
    height,
    formData,
    queriesData,
    datasource: {
      verboseMap
    }
  } = chartProps;
  var {
    adhocFilters,
    metricConfig,
    printFilters
  } = formData;
  var {
    colnames,
    coltypes
  } = queriesData[0] || {};
  var data = queriesData[0].data;
  var filterWhereData = [];
  var filterHavingData = []; // Simple type expression

  var handleSimpleExpression = item => {
    var filter = [];
    var subject = item['subject'];
    var subjectName = (verboseMap == null ? void 0 : verboseMap[subject]) || subject;
    filter.push(subjectName);
    var operator = item['operator'];
    filter.push(operator);

    if (item['comparator']) {
      var comparator = JSON.stringify(item['comparator']);
      filter.push(comparator);
    }

    var filterDataItem = {
      key: subject,
      value: filter.join(' ')
    };
    filterWhereData.push(filterDataItem);
  }; // Sql type expression


  var handleSqlExpression = (item, clauseType) => {
    var filter = [];
    var sqlExpression = item['sqlExpression'];
    var sqlExpressionParts = sqlExpression.split(' ');

    if (sqlExpressionParts.length > 0) {
      var subject = sqlExpressionParts[0];
      var subjectName = (verboseMap == null ? void 0 : verboseMap[subject]) || subject;
      filter.push(subjectName);
      var operatorComparator = sqlExpressionParts.slice(1);
      filter.push(operatorComparator.join(' '));
      var filterDataItem = {
        key: subject,
        value: filter.join(' ')
      };

      switch (clauseType) {
        case FilterClauseType.Where:
          filterWhereData.push(filterDataItem);
          break;

        case FilterClauseType.Having:
          filterHavingData.push(filterDataItem);
          break;
      }

      ;
    }
  }; // Prepare data for FilterComponent


  if (printFilters) {
    adhocFilters.forEach(item => {
      switch (true) {
        // Where clause and Simple type
        case item['clause'] === FilterClauseType.Where && item['expressionType'] === FilterExpressionType.Simple:
          handleSimpleExpression(item);
          break;
        // Where clause and Sql type

        case item['clause'] === FilterClauseType.Where && item['expressionType'] === FilterExpressionType.Sql:
          handleSqlExpression(item, FilterClauseType.Where);
          break;
        // Having clause. Always Sql type expected

        case item['clause'] === FilterClauseType.Having:
          handleSqlExpression(item, FilterClauseType.Having);
          break;
      }
    });
  } // Prepare data for MainComponent


  var transformedData = [[]];
  colnames.forEach(key => {
    var {
      metricVerboseName
    } = (metricConfig == null ? void 0 : metricConfig[key]) || {};
    var name = metricVerboseName || (verboseMap == null ? void 0 : verboseMap[key]) || key;
    transformedData[0].push({
      key: name,
      value: name
    });
  });
  data.forEach(item => {
    var transformedDataRecord = [];
    colnames.forEach((key, indx) => {
      var {
        metricFormat
      } = (metricConfig == null ? void 0 : metricConfig[key]) || {};
      var dataType = coltypes[indx];
      var isNumber = dataType === GenericDataType.NUMERIC;
      var isTime = dataType === GenericDataType.TEMPORAL;
      var numberFormatter = getNumberFormatter(metricFormat || DEFAULT_NUMBER_FORMAT);
      var timeFormatter = getTimeFormatter(CUSTOM_TIME_DEFAULT_FORMAT);
      var value = item[key];
      transformedDataRecord.push({
        key,
        value: String(isNumber ? numberFormatter(Number(value)) : isTime ? timeFormatter(Number(value)) : item[key])
      });
    });
    transformedData.push(transformedDataRecord);
  });
  return {
    width,
    height,
    filterWhereData,
    filterHavingData,
    transformedData
  };
}