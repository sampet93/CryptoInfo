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
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', { name: item.name })} style={styles.cryptoContainer}>
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