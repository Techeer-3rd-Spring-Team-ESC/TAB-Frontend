import React from "react";
import {View, Text, StyleSheet, Image, Platform} from "react-native";

const PostList = () => {
    const styles = StyleSheet.create({
        profilecontainer: {
            backgroundColor: 'white',
            flexDirection: 'row',
        },

        profiletext: {
            marginTop: Platform.OS == 'ios' ? 11 : 13,
            marginLeft: 20,
            padding: 4
        },

        profilename: {
            color: 'black', 
            fontSize: Platform.OS == 'ios' ? 20 : 15,
            fontFamily: 'GmarketSansTTFBold',
        },

        profilemessage: {
            color: 'black', 
            fontSize: Platform.OS == 'ios' ? 15 : 13,
            fontFamily: 'GmarketSansTTFLight',
        },

        profileimage: {
            width: 50,
            height: 50,
            marginTop: 5,
            marginLeft: 10,
            borderWidth: 1, 
            borderColor: 'black',
            borderRadius: 50
        }


        
    });

    return (
        <View style={styles.profilecontainer}>
            <Image style={styles.profileimage}
                source={require('../../../assets/images/tab.png')}
            />
            <Text style={styles.profiletext}>
                <Text style={styles.profilename}>
                    loana Mircea{"\n"}
                </Text>
                <Text style={styles.profilemessage}>
                    Aug 29. 6 min read. Member-only
                </Text>
            </Text>
        </View>
    );
};

export default PostList;