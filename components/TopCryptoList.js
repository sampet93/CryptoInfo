import React from 'react';
import { View, Text, FlatList, StyleSheet, TextBase } from 'react-native';
import { createAppContainer } from 'react-navigation';
import useResults from '../hooks/useResults';

const TopCryptoList = ( ) => {

    const [searchCrypto, results] = useResults();

    console.log("THIS WE HAVE: " + results);
    
    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={ results }
                keyExtractor={( item ) => item.id}
                renderItem={({ item }) => {
                    return (
                        <Text key={item.id} style={styles.item}>{item.name}</Text>
                    );
                }}
            />
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        margin: 25
    },
    item: {
        paddingVertical: 10,
        fontSize: 20,
        textAlign: 'left',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'black'
        
    }
})

export default TopCryptoList;