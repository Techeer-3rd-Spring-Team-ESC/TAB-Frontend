import React from 'react';
import {View, StyleSheet, Platform, Text, Image} from 'react-native';

const PostList = () => {
    const styles = StyleSheet.create({
        profileContainer: {
            backgroundColor: 'white',
            flexDirection: 'row',
        },

        profileText: {
            marginTop: Platform.OS == 'ios' ? 11 : 13,
            marginLeft: 20,
            color: 'black', 
            fontSize: Platform.OS == 'ios' ? 15 : 12,
            fontFamily: 'GmarketSansTTFBold',
        },

        profileImage: {
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
        <View style = {styles.profileContainer}>
            <Text style = {styles.profileText}>
                loana Mircea
            </Text>
            <Image style = {styles.profileImage}
                source = {require('../../../assets/images/tab.png')}
            />
        </View>
    );
};

export default PostList;