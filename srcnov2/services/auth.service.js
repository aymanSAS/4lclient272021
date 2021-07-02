import axios from 'axios';
import { API_URL } from './variables.js'
// import http from "../http-common";
//const API_URL = 'http://192.168.43.8:3090/api/auth/';
//const API_URL = 'https://mserver.egyptiot.com/api/auth/';
class AuthService {
  login(user) {
    return axios
      .post(API_URL + '/api/auth/' + 'signin', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + '/api/auth/'+ 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();

