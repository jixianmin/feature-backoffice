import React from "react";
import ReactECharts from "echarts-for-react";
//import * as echarts from "echarts/core";

const Page = ({ buckets }) => {
  const bucketsdate = () => {
    const arr = [];
    buckets.map((res) => arr.push(res.date));
    return arr;
  };

  const bucketscount = () => {
    const arr = [];
    buckets.map((res) => arr.push(res.count));
    return arr;
  };

  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: "category",
      //data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      //data: [buckets.date],
      //data: [buckets.map((res) => res.date)],
      data: bucketsdate(),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        // data: [
        //   820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330,
        //   1320,
        // ],
        //data: [buckets.count],
        //data: [buckets.map((res) => res.count)],
        type: "line",
        stack: "Total",
        data: bucketscount(),
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return <ReactECharts option={options} />;
};

export default Page;
