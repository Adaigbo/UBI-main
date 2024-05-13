import requests from './httpService';

const UsersServices = {
  get(id, params) {
    id = id ? id : '';
    return requests.get(`/users/${id}`, { params });
  },
  insert(body) {
    return requests.post(`/users`, body);
  },
  update(id, body) {
    return requests.put(`/users/${id}`, body);
  },
  delete(id) {
    return requests.delete(`/users/${id}`);
  },
  activate(id) {
    return requests.delete(`/user/activate/${id}`);
  },
  register(body) {
    return requests.post(`/register`, body);
  },

  /* for self requests */
  me() {
    return requests.get(`/user/me`);
  },
  myUpdatePassword(body) {
    return requests.put(`/myUpdatePassword`, body);
  },
};

export default UsersServices;
