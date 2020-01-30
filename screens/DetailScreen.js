import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailScreen = ({ navigation }) => {
    
    const cryptoName = navigation.getParam('name');

    DetailScreen.navigationOptions = {
        alignSelf: 'center',
        title: `${cryptoName}`,
       
    };

    return (
        <View>
            <Text>Detail Screen {cryptoName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default DetailScreen;