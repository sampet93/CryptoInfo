import React from 'react';
import { View, Text, FlatList, StyleSheet, TextBase } from 'react-native';
import { createAppContainer } from 'react-navigation';
import useResults from '../hooks/useResults';

const TopCryptoList = ( ) => {

    const [searchCrypto, results] = useResults();

    const valueToDecimals = ( value, decimals ) => {
        let newValue = value.toFixed(decimals);
        return newValue;
    }
    
    return (
        <View style={styles.mainContainer}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={ results }
                keyExtractor={( item ) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.cryptoContainer}>
                            <Text style={styles.cryptoName}>{item.cmc_rank}.  {item.name}</Text>
                            <Text style={styles.cryptoValue}>{valueToDecimals(item.quote.USD.price, 2)} $</Text>
                        </View>
                    );
                }}
            />
        </View>
    ) 
}

const styles = StyleSheet.create({
    mainContainer: {
        margin: 25,
        justifyContent: 'space-around'
    },
    cryptoContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'black'   
    },
    cryptoName: {
        flex: 1,
        fontSize: 18,
        textAlign: 'left',
    },
    cryptoValue: {
        flex: 1,
        fontSize: 18,
        textAlign: 'right'
    }
})

export default TopCryptoList;