import { Descriptions } from "antd";
import React from "react";
import DatePicker from "./statuseditor/DatePicker";
import TimeZone from "./statuseditor/TimeZone";
import Channel from "./statuseditor/Channel";

const App = ({
  allBuckets,
  descriptions,
  setDescriptions,
  datePickerValue,
  setDatePickerValue,
}) => {
  console.log(allBuckets);
  return (
    <div>
      <Descriptions
        title="Responsive Descriptions"
        bordered
        column={{
          xxl: 4,
          xl: 3,
          lg: 3,
          md: 3,
          sm: 2,
          xs: 1,
        }}
      >
        <Descriptions.Item label="사전신청 완료">
          {allBuckets.ratio.completion_count}
        </Descriptions.Item>
        <Descriptions.Item label="코드발송">
          {allBuckets.ratio.all_count}
        </Descriptions.Item>
        <Descriptions.Item label="전환율">
          {allBuckets.ratio.completion_per}
        </Descriptions.Item>
        <Descriptions.Item label="타임존">
          <TimeZone />
        </Descriptions.Item>
        <Descriptions.Item label="시작/종료일">
          <DatePicker
            descriptions={descriptions}
            setDescriptions={setDescriptions}
            datePickerValue={datePickerValue}
            setDatePickerValue={setDatePickerValue}
          />
        </Descriptions.Item>
        <Descriptions.Item label="채널">
          <Channel />
        </Descriptions.Item>
        <Descriptions.Item label="합계">
          신청&ensp;:&ensp;
          {allBuckets.ratio.all_count}
          <br />
          완료&ensp;:&ensp;
          {allBuckets.ratio.completion_count}
          <br />
          대기&ensp;:&ensp;
          {allBuckets.ratio.wait_count}
          <br />
          전환율&ensp;:&ensp;
          {allBuckets.ratio.completion_per}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default App;
