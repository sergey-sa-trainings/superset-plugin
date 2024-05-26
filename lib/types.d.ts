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
export declare enum FilterClauseType {
    Having = "HAVING",
    Where = "WHERE"
}
export declare enum FilterExpressionType {
    Simple = "SIMPLE",
    Sql = "SQL"
}
export interface SupersetPluginChartMyFirstStylesProps {
    height: number;
    width: number;
}
export declare type SupersetPluginChartMyFirstQueryFormData = QueryFormData & SupersetPluginChartMyFirstStylesProps;
export declare type SupersetPluginChartMyFirstProps = SupersetPluginChartMyFirstStylesProps & {
    filterWhereData: FilterData;
    filterHavingData: FilterData;
    transformedData: TransformedDataRecord[];
};
export declare type GenericObjectType = Record<string, any>;
export declare type FilterDataType = {
    key: string;
    value: string;
};
export declare type FilterData = FilterDataType[];
export declare type TransformedDataType = {
    key: string;
    value: string;
};
export declare type TransformedDataRecord = TransformedDataType[];
export interface MetricSettings {
    metricFormat?: string;
    metricVerboseName?: string;
}
export declare type FilterComponentHeaderPropsType = {
    header: string;
};
export declare type FilterComponentDataPropsType = FilterDataType;
export declare type FilterComponentPropsType = FilterComponentHeaderPropsType & {
    filterData: FilterData;
};
export declare type MainComponentPropsType = {
    data: TransformedDataRecord[];
};
export declare type MainComponentDataListPropsType = {
    record: TransformedDataRecord;
};
export declare type MainComponentDataPropsType = {
    data: TransformedDataType;
};
//# sourceMappingURL=types.d.ts.map