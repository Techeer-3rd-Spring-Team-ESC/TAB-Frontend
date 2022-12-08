import React from 'react';
import {View, StyleSheet, Platform, Text,  Image} from 'react-native';

const ArticleImage = () => {
    const styles = StyleSheet.create({
        titleContainer: {
            backgroundColor: 'white'
        },

        image: {
            width: '90%',
            height: Platform.OS == 'ios' ? 245 : 200,
            marginTop: Platform.OS == 'ios' ? 30 : 20,
            marginLeft: 20,
            borderWidth: 1, 
            borderRadius: 8,
            borderColor: 'black'
        },

        imageSubtitle: {
            marginTop: Platform.OS == 'ios' ? 15 : 10,
            textAlign: 'center',
            color: 'gray',
            fontSize: Platform.OS == 'ios' ? 12 : 10,
            fontFamily: 'GmarketSansTTFLight'
        }
    });

    return (
        <View style = {styles.titleContainer}>
            <Image style = {styles.image}
                resizeMode = "contain"
                source = {require("../../../assets/images/mainImage.png")}
            />
            <Text style = {styles.imageSubtitle}>
                Photo by Rubaitul Azad on Unsplash
            </Text>
        </View>
    );
};

export default ArticleImage;