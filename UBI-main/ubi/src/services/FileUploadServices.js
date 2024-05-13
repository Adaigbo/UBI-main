import requests from './httpService';

const FileUploadServices = {
  save(body) {
    return requests.post(`/file`, body);
  },
};

export default FileUploadServices;
