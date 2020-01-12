import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';


//Custom component imports
import TopCryptoList from '../components/TopCryptoList';

const HomeScreen = () => {

    //const [results, setResults] = useState([]);

    // const options = {
    //     method: 'GET',
    //     params: {
    //         'id': '1,2'
    //     },
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json;charset=UTF-8',
    //         'X-CMC_PRO_API_KEY': '9aab0f8b-f1f2-48dd-9cef-f2b9f05be43e'
    //     },
    //     json: true,
    //     gzip: true
    //   };
      
    // const getResults = () => {
    //     try {
    //         axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', options)
    //         .then(response => {
    //             setResults(response.data.data);
                
    //     });
    //     } catch (error) {
    //         console.log(error);
            
    //     }
    // }

    // useEffect(() => {
    //     getResults();
    // }, [])

    return (
        <View>
            <Text style={styles.headerStyle}>Top cryptocurrencies</Text>
            <TopCryptoList></TopCryptoList>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 22,
        fontWeight: 'bold'
    }
});

export default HomeScreen;