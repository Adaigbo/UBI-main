import requests from './httpService';

const RolePermissionsServices = {
  delete(params) { // it's delete that takes parameters (role.id and permission.id) to remove the record
    return requests.delete(`/role_permissions`, { params });
  },
  insert(body) {
    return requests.post(`/role_permissions`, body);
  },
};

export default RolePermissionsServices;
