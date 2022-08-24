import React from "react";
import * as UsersProfileStyle from "./usersprofilestyle/usersprofilestyle";
import { Badge, Descriptions } from "antd";
import styled from "styled-components";

const UsersProfile = () => {
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
            <Descriptions bordered>
              <Descriptions.Item label="권한" span={1.5}>
                가나다
              </Descriptions.Item>
              <Descriptions.Item label="이름" span={1.5}>
                가나다
              </Descriptions.Item>
              <Descriptions.Item label="닉네임" span={1.5}>
                가나다
              </Descriptions.Item>
              <Descriptions.Item label="이메일" span={1.5}>
                가나다
              </Descriptions.Item>
              <Descriptions.Item label="전화번호" span={1.5}>
                가나다
              </Descriptions.Item>
              <Descriptions.Item label="추천코드" span={1.5}>
                가나다
              </Descriptions.Item>
              <Descriptions.Item label="국가" span={1.5}>
                가나다
              </Descriptions.Item>
              <Descriptions.Item label="차단여부" span={1.5}>
                가나다
              </Descriptions.Item>
              <Descriptions.Item label="가입일" span={3}>
                <Badge status="processing" text="Running" />
              </Descriptions.Item>

              <Descriptions.Item label="Config Info">
                Data disk type: MongoDB
                <br />
                Database version: 3.4
                <br />
                Package: dds.mongo.mid
                <br />
                Storage space: 10 GB
                <br />
                Replication factor: 3
                <br />
                Region: East China 1<br />
              </Descriptions.Item>
            </Descriptions>
          </UsersProfileStyle.UsersProfileFindEditorSecondBox>
        </UsersProfileStyle.UsersProfileFindEditor>
      </UsersProfileStyle.UsersProfileWrapper>
    </>
  );
};

export default UsersProfile;
