import React from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';

const ArticleSubtitle = () => {
    const styles = StyleSheet.create({
        subtitleContainer: {
            backgroundColor: 'white',
            flexDirection: 'row'
        },

        verticleLine: {
            width: 5,
            height: Platform.OS == 'ios' ? '70%' : '80%',
            marginTop: Platform.OS == 'ios' ? 15 : 10,
            marginLeft: 20,
            backgroundColor: 'black'
        },

        subtitleText: {
            width: '90%',
            marginTop: Platform.OS == 'ios' ? 10 : 5,
            marginLeft: 10,
            color: "black",
            fontSize: Platform.OS == 'ios' ? 12 : 11,
            fontFamily: 'GmarketSansTTFBold',
            lineHeight: Platform.OS == 'ios' ? 30 : 25
        }
    });

    return (
        <View style = {styles.subtitleContainer}>
            <View style = {styles.verticleLine}/>
            <Text style = {styles.subtitleText}>
                Are you looking for a new, creative project? {'\n'}
                What about building your own Telegram bot in Python? {'\n'}
                Sounds fun and challenging, right? {'\n'}
                If you think so, read on to discover all the details. {'\n'}
            </Text>
        </View>
    );
};

export default ArticleSubtitle;