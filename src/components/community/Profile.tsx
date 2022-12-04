import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";

const PostList = () => {
    const styles = StyleSheet.create({
        profilecontainer: {
            backgroundColor: 'white',
            flexDirection: 'row',
        },

        profiletext: {
            marginTop: 10,
            marginLeft: 20,
            color: 'black', 
            fontSize: 15,
            fontFamily: 'GmarketSansTTFBold',
        },

        profileimage: {
            width: 30,
            height: 30,
            marginTop: 5,
            marginLeft: 10,
            borderWidth: 1, 
            borderColor: 'black',
            borderRadius: 50
        }


        
    });

    return (
        <View style={styles.profilecontainer}>
            <Text style={styles.profiletext}>
                loana Mircea
            </Text>
            <Image style={styles.profileimage}
                source={require('../../../assets/images/tab.png')}
            />
        </View>
    );
};

export default PostList;