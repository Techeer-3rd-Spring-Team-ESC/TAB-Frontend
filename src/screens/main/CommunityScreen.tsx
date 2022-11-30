import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import PostButton from '../../components/community/PostButton';
import Searchbox from '../../components/community/Searchbox';
import SearchButton from '../../components/community/SearchButton';

function CommunityScreen() {
    const styles = StyleSheet.create({
        container: {
            height: 1000,
            backgroundColor: 'white'
        },
        
        searchcontainer: {
            marginTop: 80,
            flexDirection: 'row',
        },

        image: {
            width: 130,
            height: 100,
            marginTop: 30,
            resizeMode: 'contain',
        },
        
        search: {
            marginTop: 50,
            marginRight: 20,
            marginBottom: 50,
            fontFamily: 'GmarketSansTTFLight',
            fontSize: 10,
            paddingHorizontal: 10,
            borderRadius: 10,
            borderColor: 'gray',
            borderWidth: 1,
            flexDirection: 'row',
        },

        post: {
            marginTop: 300,
            marginLeft: 200
        }
      
    });

    return (
        <View style={styles.container}>
            <View style={styles.searchcontainer}>
                <View>                
                    <Image style={styles.image}
                    source={require('../../../assets/images/tab.png')}
                    />
                </View>
                <View style={styles.search}>
                    <Searchbox/>
                    <SearchButton/>
                </View>
            </View>
            <View style={styles.post}>
                <PostButton/>
            </View>
        </View>
    );
}

export default CommunityScreen;