import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';


//Custom component imports
import TopCryptoList from '../components/TopCryptoList';

const HomeScreen = () => {
    return (
        <View style={{ flex: 1 }}>
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