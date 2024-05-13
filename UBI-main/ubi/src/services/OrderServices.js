import requests from './httpService';

const OrderServices = {
    get(id, params) {
        id = id ? id : '';
        return requests.get(`/order/${id}`, { params });
    },
    insert(body) {
        return requests.post(`/order`, body);
    },
    update(id, body) {
        return requests.put(`/order/${id}`, body);
    },
    delete(id) {
        return requests.delete(`/order/${id}`);
    },
    fulfil(id) {
        return requests.get(`fulfil/${id}`);
    },
    myOrders() {
        return requests.get('myorders');
    }
};

export default OrderServices;
