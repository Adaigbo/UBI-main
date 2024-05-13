import requests from './httpService';

const PermissionsServices = {
  get() {
    return requests.get(`/permission`);
  },
  toggle(role, permission) {
    return requests.post('/permission/toggle', { role, permission });
  }
};

export default PermissionsServices;
  