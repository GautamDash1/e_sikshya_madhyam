import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const noauth = (user) => {
  return axios.post(`${BASE_URL}/register`, user);
};

export default noauth ;
