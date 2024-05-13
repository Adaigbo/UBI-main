import requests from './httpService';

const OfferServices = {
    get(id, params) {
        id = id ? id : '';
        return requests.get(`/offer/${id}`, { params });
    },
    insert(body) {
        return requests.post(`/offer`, body);
    },
    update(id, body) {
        return requests.put(`/offer/${id}`, body);
    },
    delete(id) {
        return requests.delete(`/offer/${id}`);
    },
};

export default OfferServices;
