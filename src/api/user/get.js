import axios from 'axios';
const url = process.env.REACT_APP_PUBLIC_API_URL;

//회원 조회
export async function getUsersApi(payload) {
  return await axios.get(url + '/user', { params: payload });
}

//회원 포인트조회
export async function getUserPointApi(payload) {
  return await axios.get(url + '/point_history', { params: payload });
}

//회원 스코어조회
export async function getUserScoreApi(payload) {
  return await axios.get(url + '/user/score/list', { params: payload });
}

//회원정보

export async function getUserProfile(payload) {
  return await axios.get(url + '/user', { params: payload });
}

//사전예약

export async function getPrereservationApi(payload) {
  return await axios.get(url + '/pre-reservation/advance', { params: payload });
}

//https://api.game.tiadev.net/api/pre-reservation/advance?
