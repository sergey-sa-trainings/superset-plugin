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
import { ChartProps, DataRecord, GenericDataType, getNumberFormatter, getTimeFormatter } from '@superset-ui/core';
import {
  FilterClauseType,
  FilterData,
  FilterDataType,
  FilterExpressionType,
  GenericObjectType,
  MetricSettings,
  TransformedDataRecord
} from '../types';
import { DEFAULT_NUMBER_FORMAT } from '@superset-ui/chart-controls';
import { CUSTOM_TIME_DEFAULT_FORMAT } from '../constants/Formatting';

export default function transformProps(chartProps: ChartProps) {
  const {
    width,
    height,
    formData,
    queriesData,
    datasource: { verboseMap },
  } = chartProps;
  const { adhocFilters, metricConfig, printFilters } = formData;
  const { colnames, coltypes } = queriesData[0] || {};
  const data: DataRecord[] = queriesData[0].data;

  const filterWhereData: FilterData = [];
  const filterHavingData: FilterData = [];

  // Simple type expression
  const handleSimpleExpression: (item: GenericObjectType) => void =
    item => {
      const filter: string[] = [];
      const subject: string = item['subject'];
      const subjectName = verboseMap?.[subject] || subject;
      filter.push(subjectName);
      const operator: string = item['operator'];
      filter.push(operator);
      if (item['comparator']) {
        const comparator: string = JSON.stringify(item['comparator']);
        filter.push(comparator);
      }
      const filterDataItem: FilterDataType =
      {
        key: subject,
        value: filter.join(' ')
      };
      filterWhereData.push(filterDataItem);
    };

  // Sql type expression
  const handleSqlExpression: (item: GenericObjectType, clauseType: FilterClauseType) => void =
    (item, clauseType) => {
      const filter: string[] = [];
      const sqlExpression: string = item['sqlExpression'];
      const sqlExpressionParts: string[] = sqlExpression.split(' ');
      if (sqlExpressionParts.length > 0) {
        const subject: string = sqlExpressionParts[0];
        const subjectName = verboseMap?.[subject] || subject;
        filter.push(subjectName);
        const operatorComparator: string[] = sqlExpressionParts.slice(1);
        filter.push(operatorComparator.join(' '));
        const filterDataItem: FilterDataType =
        {
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
        };
      }
    };

  // Prepare data for FilterComponent
  if (printFilters) {
    adhocFilters.forEach((item: GenericObjectType) => {
      switch (true) {
        // Where clause and Simple type
        case item['clause'] === FilterClauseType.Where &&
          item['expressionType'] === FilterExpressionType.Simple:
          handleSimpleExpression(item);
          break;

        // Where clause and Sql type
        case item['clause'] === FilterClauseType.Where &&
          item['expressionType'] === FilterExpressionType.Sql:
          handleSqlExpression(item, FilterClauseType.Where);
          break;

        // Having clause. Always Sql type expected
        case item['clause'] === FilterClauseType.Having:
          handleSqlExpression(item, FilterClauseType.Having);
          break;
      }
    });
  }

  // Prepare data for MainComponent
  const transformedData: TransformedDataRecord[] = [[]];

  colnames.forEach((key: string) => {
    const { metricVerboseName }: MetricSettings = metricConfig?.[key] || {};
    const name = metricVerboseName || verboseMap?.[key] || key;
    transformedData[0].push({
      key: name,
      value: name,
    });
  });

  data.forEach(item => {
    const transformedDataRecord: TransformedDataRecord = [];
    colnames.forEach((key: string, indx: number) => {
      const { metricFormat }: MetricSettings = metricConfig?.[key] || {};
      const dataType = coltypes[indx];
      const isNumber = dataType === GenericDataType.NUMERIC;
      const isTime = dataType === GenericDataType.TEMPORAL;
      const numberFormatter = getNumberFormatter(metricFormat || DEFAULT_NUMBER_FORMAT);
      const timeFormatter = getTimeFormatter(CUSTOM_TIME_DEFAULT_FORMAT);

      let value = item[key];

      transformedDataRecord.push({
        key,
        value: String(
          isNumber ?
            numberFormatter(Number(value)) :
            (isTime ? timeFormatter(Number(value)) : item[key])
        ),
      });
    });
    transformedData.push(transformedDataRecord);
  });

  return {
    width,
    height,
    filterWhereData,
    filterHavingData,
    transformedData,
  };
}
