import React from 'react';
import ReactECharts from 'echarts-for-react';
//import * as echarts from "echarts/core";

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
      type: 'category',
      //data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      //data: [buckets.date],
      //data: [buckets.map((res) => res.date)],
      data: bucketsdate(),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        // data: [
        //   820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330,
        //   1320,
        // ],
        //data: [buckets.count],
        //data: [buckets.map((res) => res.count)],
        type: 'line',
        stack: 'Total',
        data: bucketscount(),
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  //console.log(allBuckets);
  console.log(allBuckets.daily_channel_user_count); //{push:Array(13), fb:Array(13)} 객체 리터럴(object)
  //console.log(Array.isArray(allBuckets.daily_channel_user_count)); //boolean 맨처음 true 채널 넣으면 false
  //  for...in문 사용하기
  const allBucketsForIn = () => {
    if (!Array.isArray(allBuckets.daily_channel_user_count)) {
      for (const property in allBuckets.daily_channel_user_count) {
        console.log(
          `${property}: ${allBuckets.daily_channel_user_count[property]}`
        );
      }
    }
  };

  console.log(allBucketsForIn());

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
      data: ['push'],
    },
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: bucketsdate2(),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'push',
        type: 'line',
        stack: 'Total',
        data: bucketscount2(),
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return (
    <>
      {Array.isArray(allBuckets.daily_channel_user_count) ? (
        <ReactECharts option={options} /> //true
      ) : (
        <ReactECharts option={options2} /> //false
      )}
    </>
  );
};

export default Page;
