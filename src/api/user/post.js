import axios from "axios";
const url = process.env.REACT_APP_PUBLIC_API_URL;

//회원 등록
export async function storeUserApi(payload) {
  return await axios.post(url + "/user", payload);
}

//회원정보 변경
export async function updateUserApi(payload) {
  return await axios.post(url + "/user_update", payload);
}

//회원 비밀번호 변경
export async function updateUserPasswordApi(payload) {
  return await axios.post(url + "/change_password", payload);
}
