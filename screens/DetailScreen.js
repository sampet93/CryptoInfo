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
                    <Text style={styles.headingTextStyle}>Rank</Text>
                    <Text style={styles.detailTextStyle}>{cryptoRank}. </Text>
                </View>
            </View>
            <View style={styles.boxesContainer}>
                <View style={styles.boxStyle}>
                    <Text style={styles.headingTextStyle}>Value</Text>
                    <Text style={styles.detailTextStyle}>{cryptoValue} $</Text>
                </View>
            </View>
            <View style={styles.boxesContainer}>
                <View style={styles.boxStyle}>
                    <Text style={styles.headingTextStyle}>Market Cap</Text>
                    <Text style={styles.detailTextStyle}>{cryptoMarketCap} $ </Text>
                </View>
            </View>
            <View style={styles.boxesContainer}>
                <View style={styles.boxStyle}>
                    <Text style={styles.headingTextStyle}>Last 1h</Text>
                    <Text style={styles.detailTextStyle}>{change1h} %</Text>
                </View>
                <View style={styles.boxStyle}>
                    <Text style={styles.headingTextStyle}>Last 24h</Text>
                    <Text style={styles.detailTextStyle}>{change24h} %</Text>
                </View>
                <View style={styles.boxStyle}>
                    <Text style={styles.headingTextStyle}>Last 7d</Text>
                    <Text style={styles.detailTextStyle}>{change7d} %</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingTextStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 4,
        color: 'white',
        backgroundColor: 'rgb(225, 57, 57)',
        borderRadius: 7
    },
    detailTextStyle: {
        textAlign: 'center',
        fontSize: 24, 
        marginVertical: 4,
        color: 'rgb(225, 57, 57)'
    },
    boxStyle: {
        flex: 1,
        padding: 10,
        margin: 5,
        //backgroundColor: 'rgb(225, 57, 57)',
        //borderRadius: 7
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    boxesContainer: {
        flexDirection: 'row',
    }
});

export default DetailScreen;