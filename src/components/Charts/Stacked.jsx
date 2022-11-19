import React from 'react';
import {Category, SeriesCollectionDirective, SeriesDirective,ChartComponent, Inject, Legend, StackingColumnSeries, Tooltip} from "@syncfusion/ej2-react-charts";
import {stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis} from "../../data/dummy";

const Stacked = ({width, height}) => {
    return (
        <ChartComponent
            width={width}
            height={height}
            id="charts"
            primaryXAxis={stackedPrimaryXAxis}
            primaryYAxis={stackedPrimaryYAxis}
            seriesCollection={stackedCustomSeries}
            chartArea={{ border: {width: 0}}}
            tooltip={{ enable: true}}
            LegendSettings={{ background: 'white'}}
        >
            <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]}/>
            <SeriesCollectionDirective>
                {stackedCustomSeries.map((item, index) =>
                    <SeriesDirective
                        key={index} {...item}
                    />
                )}
            </SeriesCollectionDirective>
        </ChartComponent>
    );
};

export default Stacked;