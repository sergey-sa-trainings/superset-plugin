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
import { ChartDataResponseResult, GenericDataType, QueryFormMetric, t, validateNonEmpty } from '@superset-ui/core';
import {
  ControlFormItemSpec,
  ControlPanelConfig,
  D3_FORMAT_OPTIONS,
  sections,
  sharedControls,
} from '@superset-ui/chart-controls';

const metricFormat: { name: string; config: ControlFormItemSpec } = {
  name: 'metricFormat',
  config: {
    controlType: 'Select',
    options: D3_FORMAT_OPTIONS,
    label: t('Формат'),
    description: t(
      'Числовой формат представления метрики',
    ),
    width: 400,
    placeholder: t('Выберите формат'),
  },
};

const metricVerboseName: { name: string; config: ControlFormItemSpec } = {
  name: 'metricVerboseName',
  config: {
    controlType: 'Input',
    label: t('Название'),
    description: t(
      'Название метрики',
    ),
    width: 200,
  },
};

const config: ControlPanelConfig = {
  controlPanelSections: [
    sections.legacyRegularTime,
    {
      label: t('Query'),
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'cols',
            config: {
              ...sharedControls.groupby,
              label: t('Columns'),
              description: t('Columns to group by'),
            },
          },
        ],
        [
          {
            name: 'metrics',
            config: {
              ...sharedControls.metrics,
              validators: [validateNonEmpty],
            },
          },
        ],
        ['adhoc_filters'],
        [
          {
            name: 'row_limit',
            config: sharedControls.row_limit,
          },
        ],
      ],
    },
    {
      label: t('Metrics settings'),
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'metric_config',
            config: {
              type: 'ColumnConfigControl',
              label: t('Внешний вид метрик'),
              description: t('Настроить отображение метрик'),
              renderTrigger: true,
              configFormLayout: {
                [GenericDataType.NUMERIC]: [[metricVerboseName], [metricFormat]],
              },
              shouldMapStateToProps() {
                return true;
              },
              mapStateToProps(explore, _, chart) {
                const metricValues =
                  (explore?.controls?.metrics?.value as QueryFormMetric[]) ??
                  [];
                const metricColumnNames = metricValues.map(value => {
                  if (typeof value === 'string') {
                    return value;
                  }
                  return value.label;
                });
                return {
                  queryResponse: chart?.queriesResponse?.[0] as
                    | ChartDataResponseResult
                    | undefined,
                  appliedColumnNames: metricColumnNames,
                };
              },
            },
          },
        ],
        [
          {
            name: 'print_filters',
            config: {
              type: 'CheckboxControl',
              renderTrigger: true,
              label: t('Вывести фильтры'),
              description: t(
                'Вывести в плагин значения примененных к нему фильтров',
              ),
              default: false,
            },
          },
        ],
      ],
    },
  ],
};

export default config;
