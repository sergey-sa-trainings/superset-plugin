"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@superset-ui/core");

var _chartControls = require("@superset-ui/chart-controls");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var metricFormat = {
  name: 'metricFormat',
  config: {
    controlType: 'Select',
    options: _chartControls.D3_FORMAT_OPTIONS,
    label: (0, _core.t)('Формат'),
    description: (0, _core.t)('Числовой формат представления метрики'),
    width: 400,
    placeholder: (0, _core.t)('Выберите формат')
  }
};
var metricVerboseName = {
  name: 'metricVerboseName',
  config: {
    controlType: 'Input',
    label: (0, _core.t)('Название'),
    description: (0, _core.t)('Название метрики'),
    width: 200
  }
};
var config = {
  controlPanelSections: [_chartControls.sections.legacyRegularTime, {
    label: (0, _core.t)('Query'),
    expanded: true,
    controlSetRows: [[{
      name: 'cols',
      config: _extends({}, _chartControls.sharedControls.groupby, {
        label: (0, _core.t)('Columns'),
        description: (0, _core.t)('Columns to group by')
      })
    }], [{
      name: 'metrics',
      config: _extends({}, _chartControls.sharedControls.metrics, {
        validators: [_core.validateNonEmpty]
      })
    }], ['adhoc_filters'], [{
      name: 'row_limit',
      config: _chartControls.sharedControls.row_limit
    }]]
  }, {
    label: (0, _core.t)('Metrics settings'),
    expanded: true,
    controlSetRows: [[{
      name: 'metric_config',
      config: {
        type: 'ColumnConfigControl',
        label: (0, _core.t)('Внешний вид метрик'),
        description: (0, _core.t)('Настроить отображение метрик'),
        renderTrigger: true,
        configFormLayout: {
          [_core.GenericDataType.NUMERIC]: [[metricVerboseName], [metricFormat]]
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
        label: (0, _core.t)('Вывести фильтры'),
        description: (0, _core.t)('Вывести в плагин значения примененных к нему фильтров'),
        default: false
      }
    }]]
  }]
};
var _default = config;
exports.default = _default;