import React from "react";
import ReactECharts from "echarts-for-react";

const Page = ({ buckets, allBuckets }) => {
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
      data: bucketsdate(),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        type: "line",
        stack: "Total",
        data: bucketscount(),
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  const allBucketsForIn = () => {
    if (!Array.isArray(allBuckets.daily_channel_user_count)) {
      const allBucketscount = []; //['push', 'popup', 'fb']
      const allBucketData = {}; //{push: Array(13), popup: Array(13)}

      for (const property in allBuckets.daily_channel_user_count) {
        allBucketscount.push(property);
      }
      for (const element of allBucketscount) {
        allBucketData[element] = allBuckets.daily_channel_user_count[element];
      }

      const bucketsdate = () => {
        const arr = [];
        if (Array.isArray(allBucketData[allBucketscount[0]])) {
          allBucketData[allBucketscount[0]].map((res) => arr.push(res.date));
        }
        return arr;
      };

      const seriesALLData = () => {
        const seriesData = [];
        allBucketscount.map((res) => {
          const bucketscount = () => {
            const arr = [];
            if (Array.isArray(allBucketData[allBucketscount[0]])) {
              allBucketData[res].map((result) => arr.push(result.completed));
            }
            return arr;
          };
          seriesData.push({
            name: res,
            type: "line",
            stack: "Total",
            data: bucketscount(),
          });
        });
        return seriesData;
      };

      //return seriesALLData(); //(2) [{…}, {…}]
      const makeoptions = {
        legend: {
          data: allBucketscount,
        },
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
          type: "category",
          data: bucketsdate(),
        },
        yAxis: {
          type: "value",
        },
        series: seriesALLData(),
        tooltip: {
          trigger: "axis",
        },
      };
      return makeoptions;
    }
  };
  //console.log(allBucketsForIn()); echarts 공식문서 notMerge={true}로 해결

  const bucketsdate2 = () => {
    const arr = [];
    if (Array.isArray(allBuckets.daily_channel_user_count.push)) {
      allBuckets.daily_channel_user_count.push.map((res) => arr.push(res.date));
    }
    return arr;
  };

  const bucketscount2 = () => {
    const arr = [];
    if (Array.isArray(allBuckets.daily_channel_user_count.push)) {
      allBuckets.daily_channel_user_count.push.map((res) =>
        arr.push(res.completed)
      );
    }
    return arr;
  };

  const options2 = {
    legend: {
      data: ["push"],
    },
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: "category",
      data: bucketsdate2(),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "push",
        type: "line",
        stack: "Total",
        data: bucketscount2(),
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return (
    <>
      {Array.isArray(allBuckets.daily_channel_user_count) ? (
        <ReactECharts option={options} notMerge={true} /> //true
      ) : (
        <ReactECharts option={allBucketsForIn()} notMerge={true} /> //false
      )}
    </>
  );
};

export default Page;
