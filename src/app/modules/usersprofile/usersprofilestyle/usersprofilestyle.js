import styled from "styled-components";

export const UsersProfileTitleText = styled.h1``;

export const UsersProfileWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  background-color: white;
  position: relative;
  .ant-table-pagination-right {
    display: flex;
    justify-content: center;
  }
  .ant-table-wrapper {
    width: 100%;
    overflow: scroll;
    /* 가로 스크롤 */
    overflow: auto;
    white-space: nowrap;
    padding: none;
    background-color: none;
    ::-webkit-scrollbar-thumb {
      background-color: balck;
    }
    scrollbar-width: auto;
    ::-webkit-scrollbar {
      height: 20px;
    }
  }
  .ant-spin-nested-loading {
    width: 2000px;
  }
`;

export const UsersProfileFindEditor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const UsersProfileFindEditorFirstBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const UsersProfileFindEditorFirstBoxLeft = styled.p`
  font-size: 18px;
  font-weight: bolder;
  margin: 30px;
  color: black;
`;

export const UsersProfileFindEditorFirstBoxRight = styled.div`
  font-size: 15px;
  font-weight: bolder;
  margin: 30px;
  color: white;
  background-color: black;
  padding: 7px 15px 7px 15px;
  border-radius: 3px;
  cursor: pointer;
`;

export const UsersProfileFindEditorSecondBox = styled.div`
  width: 100%;
  .ant-descriptions-view {
    border: solid 1px rgba(0, 0, 0, 0.06);
  }
  th {
    max-width: 200px;
    min-width: 106px;
    width: 10%;
  }
  .ant-descriptions-item-label {
    background-color: #fafafa;
    border: solid 1px rgba(0, 0, 0, 0.06);
  }
  .ant-descriptions-row {
    border: solid 1px rgba(0, 0, 0, 0.06);
  }

  .css-wc1354-ValueContainer {
    height: 32px;
  }
`;

export const UsersProfileFindEditorThirdBox = styled.div`
  display: flex;
`;
