import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import PostButton from '../../components/community/PostButton';
import Searchbox from '../../components/community/Searchbox';


function CommunityScreen() {
    const styles = StyleSheet.create({
        container: {
            height: 1000,
            backgroundColor: 'white'
        },
        
        icon: {
            width: 1,
            height: 1,
            marginTop: 20,
            marginRight: 600,
        },
        
        search: {
            marginTop: 50,
            marginLeft: 100,
            marginRight: 20,
            fontFamily: 'GmarketSansTTFLight',
            fontSize: 10,
            paddingHorizontal: 10,
            borderRadius: 10,
            borderColor: 'gray',
            borderWidth: 1
        },

        post: {
            marginTop: 300,
            marginLeft: 200
        }
      
    });

    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <Image
                source={require('../../../assets/images/tab.png')}
                />
            </View>
            <View style={styles.search}>
                <Searchbox/>
            </View>
            
            <View style={styles.post}>
                <PostButton/>
            </View>
        </View>
    );
}

export default CommunityScreen;