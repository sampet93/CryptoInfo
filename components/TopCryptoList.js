import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import useResults from '../hooks/useResults';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

const TopCryptoList = ( { navigation } ) => {

    const [searchCrypto, results] = useResults();

    const valueToDecimals = ( value, decimals ) => {
        let newValue = value.toFixed(decimals);
        return newValue;
    }

    const cryptoPressed = () => {
        navigation.navigate('Detail');
    }
    
    return (
        <View style={styles.mainContainer}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={ results }
                keyExtractor={( item ) => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', { 
                            name: item.name,
                            rank: item.cmc_rank,
                            value: valueToDecimals(item.quote.USD.price, 3),
                            symbol: item.symbol,
                            marketCap: valueToDecimals(item.quote.USD.market_cap, 0),
                            change1h: valueToDecimals(item.quote.USD.percent_change_1h, 2),
                            change24h: valueToDecimals(item.quote.USD.percent_change_24h, 2),
                            change7d: valueToDecimals(item.quote.USD.percent_change_7d, 2)
                            })} style={styles.cryptoContainer}>
                            <Text style={styles.cryptoName}>{item.cmc_rank}.  {item.name}</Text>
                            <Text style={styles.cryptoValue}>{valueToDecimals(item.quote.USD.price, 3)} $</Text>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    ) 
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        margin: 25
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
        fontSize: 16,
        textAlign: 'left',
    },
    cryptoValue: {
        flex: 1,
        fontSize: 18,
        textAlign: 'right'
    }
})

export default withNavigation(TopCryptoList);