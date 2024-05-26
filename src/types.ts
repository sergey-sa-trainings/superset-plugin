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
import { QueryFormData } from '@superset-ui/core';

export enum FilterClauseType {
  Having = 'HAVING',
  Where = 'WHERE',
}

export enum FilterExpressionType {
  Simple = 'SIMPLE',
  Sql = 'SQL',
}

export interface SupersetPluginChartMyFirstStylesProps {
  height: number;
  width: number;
}

export type SupersetPluginChartMyFirstQueryFormData = QueryFormData &
  SupersetPluginChartMyFirstStylesProps;

export type SupersetPluginChartMyFirstProps = SupersetPluginChartMyFirstStylesProps &
{
  filterWhereData: FilterData;
  filterHavingData: FilterData;
  transformedData: TransformedDataRecord[];
};

export type GenericObjectType = Record<string, any>;

export type FilterDataType = {
  key: string;
  value: string;
};

export type FilterData = FilterDataType[];

export type TransformedDataType = {
  key: string;
  value: string;
};

export type TransformedDataRecord = TransformedDataType[];

export interface MetricSettings {
  metricFormat?: string;
  metricVerboseName?: string;
}

export type FilterComponentHeaderPropsType = {
  header: string;
};

export type FilterComponentDataPropsType = FilterDataType;

export type FilterComponentPropsType = FilterComponentHeaderPropsType & {
  filterData: FilterData;
};

export type MainComponentPropsType = {
  data: TransformedDataRecord[];
};

export type MainComponentDataListPropsType = {
  record: TransformedDataRecord;
};

export type MainComponentDataPropsType = {
  data: TransformedDataType;
};