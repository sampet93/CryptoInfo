import axios from 'axios';

const apiKey = '9aab0f8b-f1f2-48dd-9cef-f2b9f05be43e';

export default axios.create({
    baseURL: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
});