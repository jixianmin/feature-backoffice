import React, { useEffect } from "react";
import * as UsersProfileStyle from "./usersprofilestyle/usersprofilestyle";
import { Badge, Descriptions } from "antd";
import AdminSelect from "./userprofilesearch/AdminSelect";
import UserName from "./userprofilesearch/UserName";
import Block from "./userprofilesearch/Block";
import CountrySelector from "./userprofilesearch/Countryselector";
import DatePicker from "./userprofilesearch/DatePicker";
import UserProfileList from "./userprofilelist/UserProfileList";
import { getUserProfile } from "src/api/user/get";

const UsersProfile = () => {
  const token = localStorage.getItem("login-token") || "";
  // const token =
  //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMmVmNzdlNjBjMWE4YTg1NTdlZDgxNDBkNjMyNDhmOTEwNTI4ZGIyZWM2YjQ1ZWU0MjJkMjJlNTYzY2UyMDE5OTEzODlmMmQ5MzhlYWM5NjIiLCJpYXQiOiIxNjYxNDE0MzQ3LjgzMTA1OCIsIm5iZiI6IjE2NjE0MTQzNDcuODMxMDYxIiwiZXhwIjoiMTY2MTUwMDc0Ny44MjE3MDkiLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.M9iq9XSukGh5Ee65IIKScMexbPpOj1C-gpuA_X_uiuiWQ4_09JYJp1nR48NSLSSWQcpZuvcFUUEZgD1R4enNlCpdYuaoEqkByQOvhmaMnmwDCwl38uNnrqsJWTHUgwVIrT9s29yq7OTts9uBtgnQvq-78Js3jLhX20-EFa0Y3VJdQGHX2lyDPY49gVsV24bLDwPcrObYZzFyNOZs7aFkSaziSug_DP4fgcd35F9zsN98PgIjZQJR8c26Cm6P5mOkGPgzAs75-eKHqqINs8kIJxkn6KA2pwqLfPC_A1tCsf_-ylrCqbr3iyw6t4HoofwTq_xiwpV3l0_Gd4AhzjGmlJS_T1mhGsGjpsi6iJdv8ojeHcY8F6DBDmVpoRw9BCTIgPJLXtEi6S7pQ23T3Q9E9qBBYbXdDpLabTCdNzpPm3FwljVpqncCQyj7PIE4XuJ6ssp8fvgE7wBs3gabZ32UrexsO7-MBJV_DxwNNJid5pmi-FfvC-05ia2NZXLIC_G914oonOf1grndBt50BH1Dvx8b9W80RLXsxP2_AgNzc1VmKCMOM-g_UFVjQ15IevQPVcmlw4VVld_riVgJDLQlGoTvKTSEp78ICcnJmB-sUbb5Jx6K6tjevPr5Ygiv8190BGOaDotROp_CKTAKoaNxODisD1zZWSRe1ULml2D8kok";
  useEffect(() => {
    fetch(
      "https://api.game.tiadev.net/api/user?page=1&pageLimit=10&pagination=Y&order=&nickname=bot&sort=",
      {
        method: "Get",
        headers: {
          Authorization: "Bearer " + token,
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
        <UserProfileList
          style={{ margin: "10px", backgroundColor: "red", color: "red" }}
        />
      </UsersProfileStyle.UsersProfileWrapper>
    </>
  );
};

export default UsersProfile;
