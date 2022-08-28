import React, { useEffect, useState, useCallback } from 'react';
import AdminSelect from './userprofilesearch/AdminSelect';
import UserName from './userprofilesearch/UserName';
import Nickname from './userprofilesearch/Nickname';
import Email from './userprofilesearch/Email';
import Hp from './userprofilesearch/Hp';
import Code from './userprofilesearch/Code';
import Blind from './userprofilesearch/Blind';
import CountrySelector from './userprofilesearch/Countryselector';
import DatePicker from './userprofilesearch/DatePicker';
import UserProfileList from './userprofilelist/UserProfileList';
import { getUserProfile } from 'src/api/user/get';
import * as UsersProfileStyle from './usersprofilestyle/usersprofilestyle';
import { Badge, Descriptions } from 'antd';

const UsersProfile = () => {
  const [filters, setFilters] = useState({
    level: '',
    name: '',
    nickname: '',
    email: '',
    hp: '',
    code: '',
    nation: '',
    start_at: '',
    end_at: '',
    blind: '',
    page: 1,
    //pageLimit: 20,
    perPage: 20,
    pagination: 'Y',
  });
  const [totalPage, setTotalPage] = useState(0);
  const [buckets, setBuckets] = useState([]);

  const fetchData = useCallback(async () => {
    await getUserProfile(filters)
      .then(({ data }) => {
        if (data.success) {
          setBuckets(data.data.data);
          setTotalPage(data.data.total);
        }
      })
      .catch((e) => {});
  }, [filters]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
    console.log(filters);
  }, [filters]);

  const [descriptions, setDescriptions] = useState({});

  const handleChangeDescriptions = () => {
    setFilters({ ...filters, ...descriptions });
  };

  const [adminValue, setAdminValue] = useState('전체');
  const [blindValue, setBlindValue] = useState('전체');
  const [datePickerValue, setDatePickerValue] = useState(null);

  const handleChangeDeleteDescriptions = () => {
    setDescriptions({
      ...descriptions,
      start_at: '',
      end_at: '',
      level: '',
      name: '',
      nickname: '',
      email: '',
      hp: '',
      code: '',
      nation: '',
      blind: '',
    });
    setFilters({ ...filters });
    setAdminValue('전체');
    setBlindValue('전체');
    setDatePickerValue(null);
  };

  return (
    <>
      <UsersProfileStyle.UsersProfileTitleText>
        회원정보
      </UsersProfileStyle.UsersProfileTitleText>
      <UsersProfileStyle.UsersProfileWrapper>
        <UsersProfileStyle.UsersProfileFindEditor>
          <UsersProfileStyle.UsersProfileFindEditorFirstBox>
            <UsersProfileStyle.UsersProfileFindEditorFirstBoxLeft>
              검색 조건
            </UsersProfileStyle.UsersProfileFindEditorFirstBoxLeft>
            <UsersProfileStyle.UsersProfileFindEditorFirstBoxRight>
              등록
            </UsersProfileStyle.UsersProfileFindEditorFirstBoxRight>
          </UsersProfileStyle.UsersProfileFindEditorFirstBox>
          <UsersProfileStyle.UsersProfileFindEditorSecondBox>
            <Descriptions bordered span={3}>
              <Descriptions.Item label='권한'>
                <AdminSelect
                  descriptions={descriptions}
                  setDescriptions={setDescriptions}
                  adminValue={adminValue}
                  setAdminValue={setAdminValue}
                />
              </Descriptions.Item>
              <Descriptions.Item label='이름'>
                <UserName
                  descriptions={descriptions}
                  setDescriptions={setDescriptions}
                />
              </Descriptions.Item>
              <Descriptions.Item label='닉네임'>
                <Nickname
                  descriptions={descriptions}
                  setDescriptions={setDescriptions}
                />
              </Descriptions.Item>
              <Descriptions.Item label='이메일'>
                <Email
                  descriptions={descriptions}
                  setDescriptions={setDescriptions}
                />
              </Descriptions.Item>
              <Descriptions.Item label='전화번호'>
                <Hp
                  descriptions={descriptions}
                  setDescriptions={setDescriptions}
                />
              </Descriptions.Item>
              <Descriptions.Item label='추천코드'>
                <Code
                  descriptions={descriptions}
                  setDescriptions={setDescriptions}
                />
              </Descriptions.Item>
              <Descriptions.Item label='국가'>
                <CountrySelector />
              </Descriptions.Item>
              <Descriptions.Item label='차단여부'>
                <Blind
                  descriptions={descriptions}
                  setDescriptions={setDescriptions}
                  blindValue={blindValue}
                  setBlindValue={setBlindValue}
                />
              </Descriptions.Item>
              <Descriptions.Item label='가입일'>
                <DatePicker
                  descriptions={descriptions}
                  setDescriptions={setDescriptions}
                  datePickerValue={datePickerValue}
                  setDatePickerValue={setDatePickerValue}
                />
              </Descriptions.Item>
            </Descriptions>
          </UsersProfileStyle.UsersProfileFindEditorSecondBox>
          <UsersProfileStyle.UsersProfileFindEditorThirdBox>
            <UsersProfileStyle.UsersProfileFindEditorFirstBoxRight
              onClick={handleChangeDescriptions}
            >
              조회
            </UsersProfileStyle.UsersProfileFindEditorFirstBoxRight>
            <UsersProfileStyle.UsersProfileFindEditorFirstBoxRight
              onClick={handleChangeDeleteDescriptions}
            >
              초기화
            </UsersProfileStyle.UsersProfileFindEditorFirstBoxRight>
          </UsersProfileStyle.UsersProfileFindEditorThirdBox>
        </UsersProfileStyle.UsersProfileFindEditor>
        <UserProfileList
          buckets={buckets}
          setBuckets={setBuckets}
          fetchData={fetchData}
          totalPage={totalPage}
          filters={filters}
          setFilters={setFilters}
        />
      </UsersProfileStyle.UsersProfileWrapper>
    </>
  );
};

export default UsersProfile;
