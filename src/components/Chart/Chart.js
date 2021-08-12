import "./Chart.css";
import React from "react";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(datapoint => datapoint.value)
    const totalmax = Math.max(...dataPointValues)
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.id}
          value={datapoint.value}
          maxValue={totalmax}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
