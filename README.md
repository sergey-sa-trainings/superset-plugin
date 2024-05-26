### Description

Разработан Custom Visualization Plugin для Superset.

Superset выполняет запрос на основе датасета, накладывая группировки, указанные в настройках, и применяя агрегатные функции метрик.
Исходя из этого в плагин выводятся группировки(columns) и метрики (metrics) на закладке DATA в настройках плагина.

Реализована возможность задавать наименование и формат представления для каждой метрики - настройки плагина / закладка CUSTOMIZE / пункт Metrics settings.
Если наименование метрики/столбца в настройках плагина не задано, пробуем получить его из поля Label в настройках метрики/столбца на форме редактирования датасета.

Реализована возможность вывода в плагин значениий примененных к нему фильтров - настройки плагина / закладка CUSTOMIZE / галочка 'Вывести фильтры'.
Если в настройках метрики/столбца в поле Label на форме редактирования датасета задано значение, то оно будет выведено в качестве наименования фильтра.
Списки фильтров для секций Where и Having визуально разделены.
В списке фильтров для секции Where отображаются только фильтры, заданные в настройках плагина на закладке DATA. Фильтры, заданные в дашборде, в данный список не попадают, т.к. их и так видно на панели фильтров дашборда.

### Usage

To build the plugin, run the following commands:

```
npm ci
npm run build
```

Alternatively, to run the plugin in development mode (=rebuilding whenever changes are made), start the dev server with the following command:

```
npm run dev
```

To add the package to Superset, go to the `superset-frontend` subdirectory in your Superset source folder (assuming both the `superset-plugin-chart-my-first` plugin and `superset` repos are in the same root directory) and run
```
npm i -S ../../superset-plugin-chart-my-first
```

If your Superset plugin exists in the `superset-frontend` directory and you wish to resolve TypeScript errors about `@superset-ui/core` not being resolved correctly, add the following to your `tsconfig.json` file:

```
"references": [
  {
    "path": "../../packages/superset-ui-chart-controls"
  },
  {
    "path": "../../packages/superset-ui-core"
  }
]
```

You may also wish to add the following to the `include` array in `tsconfig.json` to make Superset types available to your plugin:

```
"../../types/**/*"
```

Finally, if you wish to ensure your plugin `tsconfig.json` is aligned with the root Superset project, you may add the following to your `tsconfig.json` file:

```
"extends": "../../tsconfig.json",
```

After this edit the `superset-frontend/src/visualizations/presets/MainPreset.js` and make the following changes:

```js
import { SupersetPluginChartMyFirst } from 'superset-plugin-chart-my-first';
```

to import the plugin and later add the following to the array that's passed to the `plugins` property:
```js
new SupersetPluginChartMyFirst().configure({ key: 'superset-plugin-chart-my-first' }),
```

After that the plugin should show up when you run Superset, e.g. the development server:

```
npm run dev-server
```
