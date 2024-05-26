function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import { GenericDataType, t, validateNonEmpty } from '@superset-ui/core';
import { D3_FORMAT_OPTIONS, sections, sharedControls } from '@superset-ui/chart-controls';
var metricFormat = {
  name: 'metricFormat',
  config: {
    controlType: 'Select',
    options: D3_FORMAT_OPTIONS,
    label: t('Формат'),
    description: t('Числовой формат представления метрики'),
    width: 400,
    placeholder: t('Выберите формат')
  }
};
var metricVerboseName = {
  name: 'metricVerboseName',
  config: {
    controlType: 'Input',
    label: t('Название'),
    description: t('Название метрики'),
    width: 200
  }
};
var config = {
  controlPanelSections: [sections.legacyRegularTime, {
    label: t('Query'),
    expanded: true,
    controlSetRows: [[{
      name: 'cols',
      config: _extends({}, sharedControls.groupby, {
        label: t('Columns'),
        description: t('Columns to group by')
      })
    }], [{
      name: 'metrics',
      config: _extends({}, sharedControls.metrics, {
        validators: [validateNonEmpty]
      })
    }], ['adhoc_filters'], [{
      name: 'row_limit',
      config: sharedControls.row_limit
    }]]
  }, {
    label: t('Metrics settings'),
    expanded: true,
    controlSetRows: [[{
      name: 'metric_config',
      config: {
        type: 'ColumnConfigControl',
        label: t('Внешний вид метрик'),
        description: t('Настроить отображение метрик'),
        renderTrigger: true,
        configFormLayout: {
          [GenericDataType.NUMERIC]: [[metricVerboseName], [metricFormat]]
        },

        shouldMapStateToProps() {
          return true;
        },

        mapStateToProps(explore, _, chart) {
          var _ref, _explore$controls, _explore$controls$met, _chart$queriesRespons;

          var metricValues = (_ref = explore == null ? void 0 : (_explore$controls = explore.controls) == null ? void 0 : (_explore$controls$met = _explore$controls.metrics) == null ? void 0 : _explore$controls$met.value) != null ? _ref : [];
          var metricColumnNames = metricValues.map(value => {
            if (typeof value === 'string') {
              return value;
            }

            return value.label;
          });
          return {
            queryResponse: chart == null ? void 0 : (_chart$queriesRespons = chart.queriesResponse) == null ? void 0 : _chart$queriesRespons[0],
            appliedColumnNames: metricColumnNames
          };
        }

      }
    }], [{
      name: 'print_filters',
      config: {
        type: 'CheckboxControl',
        renderTrigger: true,
        label: t('Вывести фильтры'),
        description: t('Вывести в плагин значения примененных к нему фильтров'),
        default: false
      }
    }]]
  }]
};
export default config;