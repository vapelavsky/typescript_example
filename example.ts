export interface IWidgetConfigCustomizableClassificationTable
    extends IWidgetConfigGeneric<
        IWidgetTemplateCustomizableClassificationTable,
        WIDGET_TYPE.CUSTOMIZABLE_CLASSIFICATION_TABLE
    > {}

export interface IWidgetTemplateCustomizableClassificationTable extends IWidgetTemplate {
    nodeSelectionList: IWidgetChartLine[];
    timePeriod: DYNAMIC_OR_STATIC_TIME_PERIOD;
    comparisonTimePeriod: DYNAMIC_OR_STATIC_TIME_PERIOD;
    granularity: CUSTOMIZABLE_DASHBOARD_GRANULARITY;
    decimalPlaces: DECIMAL_PLACES_OPTIONS;
    yRowPosition: Option<IYRowPosition>;
    isShowTextBox?: Option<boolean>;
    description: Option<string>;
    dateFormat: Option<string>;
    startOfCalendarMonth: number;
}

export interface ICustomizableClassificationTableModel extends ICustomizableModelBase<WIDGET_TYPE.CUSTOMIZABLE_CLASSIFICATION_TABLE, ICustomizableClassificationTablePropertyBag> {
    nodeSelection: INodeSelectionNodeList[];
}

export interface ICustomizableClassificationTablePropertyBag {
    granularity: CUSTOMIZABLE_DASHBOARD_GRANULARITY;
    timePeriod: DYNAMIC_OR_STATIC_TIME_PERIOD;
    comparisonTimePeriod: DYNAMIC_OR_STATIC_TIME_PERIOD;
    decimalPlaces: DECIMAL_PLACES_OPTIONS;
    customHeight: Option<number>;
    isShowTextBox?: Option<boolean>;
    description: Option<string>;
    dateFormat: Option<string>;
    yRowPosition: Immutable<IYRowPosition>;
    startOfCalendarMonth?: number;
}

export const VALID_CUSTOMIZABLE_CLASSIFICATION_TABLE_WIDGET_QUERY_RESULT = [] as const;

export type ValidCustomizableClassificationTableWidgetQueryResult = GetQueryResultByType<typeof VALID_CUSTOMIZABLE_CLASSIFICATION_TABLE_WIDGET_QUERY_RESULT[number]>;

export const CUSTOMIZABLE_CLASSIFICATION_TABLE_WIDGET_TEMPLATE: Immutable<IWidgetConfigClassificationTable> = {
    id: asWidgetConfigId("classification_table"),
    isVolatile: true,
    widgetType: WIDGET_TYPE.CLASSIFICATION_TABLE,
    libWidgetTemplate: {
        placement: null,
        currentTimePeriod: null,
        decimalPlaces: DECIMAL_PLACES_OPTIONS.OFF,
        nodeSelectionList: [],
        colorRating: {
            lower: null,
            upper: null,
        },
        isShowTextBox: true,
        description: "",
        dateFormat: null,
        yRowPosition: {position: Y_ROW_POSITION.HORIZONTAL},
    },
    eventList: [],
    seriesTemplateList: [],
};