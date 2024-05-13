import requests from './httpService';

const RolesServices = {
  get(id) {
    id = id ? id : '';
    return requests.get(`/roles/${id}`);
  },
};

export default RolesServices;
