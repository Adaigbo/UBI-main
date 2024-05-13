import requests from './httpService';

const AuthServices = {
  login(body) {
    return requests.post(`/auth/login`, body);
  },
  logout(body) {
    return requests.post(`/auth/logout`, body);
  },
};

export default AuthServices;
