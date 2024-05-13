import requests from './httpService';

const DashboardServices = {
    get() {
        return requests.get('/dashboard');
    }
}

export default DashboardServices;