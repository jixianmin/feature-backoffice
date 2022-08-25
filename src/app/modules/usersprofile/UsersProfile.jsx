import React, { useEffect } from "react";
import * as UsersProfileStyle from "./usersprofilestyle/usersprofilestyle";
import { Badge, Descriptions } from "antd";
import AdminSelect from "./userprofilesearch/AdminSelect";
import UserName from "./userprofilesearch/UserName";
import Block from "./userprofilesearch/Block";
import CountrySelector from "./userprofilesearch/Countryselector";
import DatePicker from "./userprofilesearch/DatePicker";
import UserProfileList from "./userprofilelist/UserProfileList";

const UsersProfile = () => {
  const token = localStorage.getItem("login-token") || "";
  useEffect(() => {
    fetch(
      "https://api.game.tiadev.netapi/user?page=1&pageLimit=10&pagination=Y&order=&nickname=bot&sort=",
      {
        method: "Get",
        headers: {
          Authorization: token,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  }, []);

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
              <Descriptions.Item label="권한">
                <AdminSelect />
              </Descriptions.Item>
              <Descriptions.Item label="이름">
                <UserName />
              </Descriptions.Item>
              <Descriptions.Item label="닉네임">
                <UserName />
              </Descriptions.Item>
              <Descriptions.Item label="이메일">
                <UserName />
              </Descriptions.Item>
              <Descriptions.Item label="전화번호">
                <UserName />
              </Descriptions.Item>
              <Descriptions.Item label="추천코드">
                <UserName />
              </Descriptions.Item>
              <Descriptions.Item label="국가">
                <CountrySelector />
              </Descriptions.Item>
              <Descriptions.Item label="차단여부">
                <Block />
              </Descriptions.Item>
              <Descriptions.Item label="가입일">
                <DatePicker />
              </Descriptions.Item>
            </Descriptions>
          </UsersProfileStyle.UsersProfileFindEditorSecondBox>
          <UsersProfileStyle.UsersProfileFindEditorThirdBox>
            <UsersProfileStyle.UsersProfileFindEditorFirstBoxRight>
              조회
            </UsersProfileStyle.UsersProfileFindEditorFirstBoxRight>
            <UsersProfileStyle.UsersProfileFindEditorFirstBoxRight>
              초기화
            </UsersProfileStyle.UsersProfileFindEditorFirstBoxRight>
          </UsersProfileStyle.UsersProfileFindEditorThirdBox>
        </UsersProfileStyle.UsersProfileFindEditor>
        <UserProfileList />
      </UsersProfileStyle.UsersProfileWrapper>
    </>
  );
};

export default UsersProfile;
