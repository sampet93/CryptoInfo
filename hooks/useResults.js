import { useEffect, useState } from 'react';
import axios from 'axios';

export default () => {
    
    const [results, setResults] = useState([]);

    // Tekemällä async function voidaan käyttää await komentoa. Await odottaa vastausta
    const options = {
        method: 'GET',
        params: {
            //'id': '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17',
            'limit': '20'
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'X-CMC_PRO_API_KEY': '9aab0f8b-f1f2-48dd-9cef-f2b9f05be43e'
        },
        json: true,
        gzip: true
      };
      
    const searchCrypto = async () => {
        try {
            const response =  await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', options);
            const responseArray = [];
            Object.keys(response.data.data).map( (key, index ) => {
                responseArray.push(response.data.data[key]);
            });
            setResults(responseArray);
        } catch (error) {
            console.log(error);        
        }
    }

    useEffect(() => {
        searchCrypto();
    }, [])

    return [searchCrypto, results];
}