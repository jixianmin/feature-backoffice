import React, { useEffect, useState } from "react";
import StatusEcharts from "./StatusEcharts";
import StatusEditor from "./StatusEditor";
import * as PreReservationStyle from "../prereservationstyle/PreReservationStyle";
import { Table } from "antd";

const columns = [
  {
    title: "날짜",
    dataIndex: "date",
    width: "20%",
  },
  {
    title: "신청",
    dataIndex: "count",
    width: "20%",
  },
  {
    title: "완료",
    dataIndex: "completed",
    width: "20%",
  },
  {
    title: "대기",
    dataIndex: "waiting",
    width: "20%",
  },
  {
    title: "전환율",
    dataIndex: "ratio",
    width: "20%",
  },
];

const UserProfileList = ({
  buckets,
  allBuckets,
  descriptions,
  setDescriptions,
  datePickerValue,
  setDatePickerValue,
}) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <StatusEcharts buckets={buckets} />
      {allBuckets.length === 0 ? (
        ""
      ) : (
        <StatusEditor
          allBuckets={allBuckets}
          descriptions={descriptions}
          setDescriptions={setDescriptions}
          datePickerValue={datePickerValue}
          setDatePickerValue={setDatePickerValue}
        />
      )}
      <PreReservationStyle.StatusEditorSearch>
        조회
      </PreReservationStyle.StatusEditorSearch>
      <Table
        columns={columns}
        rowKey={(record) => record.date}
        dataSource={buckets}
        loading={loading}
        pagination={false}
      />
    </>
  );
};

export default UserProfileList;
