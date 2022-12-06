import React from "react";
import {View, Text, StyleSheet, Platform} from "react-native";

const ArticleText = () => {
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
            Are you looking for a new, creative project?
            What about building your own Telegram bot in Python?
            Sounds fun and challenging, right?
            If you think so, read on to discover all the details.
            </Text>
        </View>
    );
};

export default ArticleText;