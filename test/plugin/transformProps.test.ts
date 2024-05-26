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
import { ChartProps, GenericDataType, supersetTheme } from '@superset-ui/core';
import transformProps from '../../src/plugin/transformProps';
import { FilterClauseType, FilterExpressionType } from '../../src/types';
import { DEFAULT_NUMBER_FORMAT } from '@superset-ui/chart-controls';

describe('SupersetPluginChartMyFirst transformProps', () => {
  const formData = {
    colorScheme: 'bnbColors',
    datasource: '3__table',
    granularity_sqla: 'ds',
    metric: 'sum__num',
    series: 'name',
    adhocFilters: [{
      clause: FilterClauseType.Where,
      expressionType: FilterExpressionType.Simple,
      subject: 'sales',
      operator: '=',
      comparator: 1,
    }],
    metricConfig: {
      'sum__num': {
        metricFormat: DEFAULT_NUMBER_FORMAT,
        metricVerboseName: 'sumnum',
      }
    },
    printFilters: true
  };
  const chartProps = new ChartProps({
    formData,
    width: 800,
    height: 600,
    theme: supersetTheme,
    queriesData: [{
      colnames: ['sum__num'],
      coltypes: [GenericDataType.NUMERIC],
      data: [{ sum__num: 1 }],
    }],
  });

  it('should transform chart props for viz', () => {
    expect(transformProps(chartProps)).toEqual({
      width: 800,
      height: 600,
      filterWhereData: [{
        key: 'sales',
        value: 'sales = 1'
      }],
      filterHavingData: [],
      transformedData: [
        [{ key: 'sumnum', value: 'sumnum' }],
        [{ key: 'sum__num', value: '1' }],
      ],
    });
  });
});
