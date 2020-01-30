import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailScreen = ({ navigation }) => {
    
    const cryptoName = navigation.getParam('name');
    const cryptoValue = navigation.getParam('value');
    const cryptoRank = navigation.getParam('rank');
    const cryptoSymbol = navigation.getParam('symbol');
    const cryptoMarketCap = navigation.getParam('marketCap');
    const change1h = navigation.getParam('change1h');
    const change24h = navigation.getParam('change24h');
    const change7d = navigation.getParam('change7d');

    DetailScreen.navigationOptions = {
        title: `${cryptoName} - ${String(cryptoSymbol).toUpperCase()}`  
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.boxesContainer}>
                <View style={styles.boxStyle}>
                    <Text style={styles.captionStyle}>Rank</Text>
                    <Text style={styles.detailStyle}>{cryptoRank}. </Text>
                </View>
            </View>
            <View style={styles.boxesContainer}>
                <View style={styles.boxStyle}>
                    <Text style={styles.captionStyle}>VALUE</Text>
                    <Text style={styles.detailStyle}>{cryptoValue} $</Text>
                </View>
                <View style={styles.boxStyle}>
                    <Text style={styles.captionStyle}>Market Cap</Text>
                    <Text style={styles.detailStyle}>{cryptoMarketCap} $ </Text>
                </View>
            </View>
            <View style={styles.boxesContainer}>
                <View style={styles.boxStyle}>
                    <Text style={styles.captionStyle}>Last 1h</Text>
                    <Text style={styles.detailStyle}>{change1h} %</Text>
                </View>
                <View style={styles.boxStyle}>
                    <Text style={styles.captionStyle}>Last 24h</Text>
                    <Text style={styles.detailStyle}>{change24h} %</Text>
                </View>
                <View style={styles.boxStyle}>
                    <Text style={styles.captionStyle}>Last 7d</Text>
                    <Text style={styles.detailStyle}>{change7d} %</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    captionStyle: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 4
    },
    detailStyle: {
        textAlign: 'center',
        fontSize: 16, 
        marginVertical: 4
    },
    boxStyle: {
        borderWidth: 1,
        flex: 1,
        padding: 10,
        margin: 5
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    boxesContainer: {
        flexDirection: 'row'
    }
});

export default DetailScreen;