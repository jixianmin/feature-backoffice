import React, { useEffect, useState, useCallback } from 'react';
import { getPrereservationApi } from 'src/api/user/get';
import StatusReservation from './statusreservation/StatusReservation';
import * as PreReservationStyle from './prereservationstyle/PreReservationStyle';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const PreReservation = () => {
  const [filters, setFilters] = useState({
    top_rank_count: 10,
    time_zone: 'KTC',
    channels: '',
    start_at: '2022-05-30',
    end_at: '2022-08-28',
  });
  const [totalPage, setTotalPage] = useState(0);
  const [buckets, setBuckets] = useState([]);

  const fetchData = useCallback(async () => {
    await getPrereservationApi(filters)
      .then(({ data }) => {
        console.log(data);
        setBuckets(data.daily_user_count);
      })
      .catch((e) => {});
  }, [filters]);

  useEffect(() => {
    fetchData();
  }, []);

  //   const onChange = (key) => {
  //     console.log(key);
  //   };

  return (
    <>
      <PreReservationStyle.PreReservationWrapper>
        <div className='card-container'>
          <Tabs type='card'>
            <TabPane tab='신청현황' key='1'>
              <StatusReservation buckets={buckets} />
            </TabPane>
            <TabPane tab='신청리스트' key='2'>
              <p>Content of Tab Pane 2</p>
              <p>Content of Tab Pane 2</p>
              <p>Content of Tab Pane 2</p>
            </TabPane>
            <TabPane tab='랭킹리스트' key='3'>
              <p>Content of Tab Pane 3</p>
              <p>Content of Tab Pane 3</p>
              <p>Content of Tab Pane 3</p>
            </TabPane>
            <TabPane tab='채널' key='4'>
              <p>Content of Tab Pane 4</p>
              <p>Content of Tab Pane 4</p>
              <p>Content of Tab Pane 4</p>
            </TabPane>
          </Tabs>
        </div>
      </PreReservationStyle.PreReservationWrapper>
    </>
  );
};
export default PreReservation;
