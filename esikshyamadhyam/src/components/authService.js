import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
// Base url to call backend API
// "http://localhost:1200/esikshya/api/v1/accounts"
const noauth = (user) => {
  return axios.post(`${BASE_URL}/register`, user);
};

export default noauth ;
