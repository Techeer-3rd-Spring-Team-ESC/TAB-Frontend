import React from "react";
import {View, Text, StyleSheet, Platform} from "react-native";

const ArticleTitle = () => {
    const styles = StyleSheet.create({
        titlecontainer: {
            backgroundColor: 'white',
        },

        titletext: {
            marginTop: Platform.OS == "ios" ? 10 : 5,
            marginLeft: 20,
            marginRight: 10,
            color: "black",
            fontSize: Platform.OS == "ios" ? 17 : 14,
            fontFamily: 'GmarketSansTTFBold',
            lineHeight: 20
        },

        subtext: {
            marginTop: Platform.OS == "ios" ? 10 : 5,
            marginLeft: 20,
            color: "gray",
            fontSize: Platform.OS == "ios" ? 15 : 12,
            fontFamily: 'GmarketSansTTFMedium',
        },
    });

    return (
        <View style={styles.titlecontainer}>
            <Text style={styles.titletext}>
            How to Create a Telegram Bot Using Python Making $300 Per Month
            </Text>
            <Text style={styles.subtext}>
                A Step-by-Step Guide
            </Text>
        </View>
    );
};

export default ArticleTitle;