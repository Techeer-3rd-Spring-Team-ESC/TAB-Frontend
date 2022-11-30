import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageButton from '../../components/post/ImageButton';
import LinkButton from '../../components/post/LinkButton';
import CancelButton from '../../components/post/CancelButton';
import UploadButton from '../../components/post/UploadButton';


function PostScreen() {
    const styles = StyleSheet.create({
        container: {
            height: 1000,
            backgroundColor: 'white'
        },
        
        buttoncontainer: {
            marginTop: 600,
            flexDirection: 'row',
        },

        posttext: {
            marginTop: 100,
            fontFamily: 'GmarketSansTTFMedium',
            fontSize: 20,
            textAlign: "center",
            color: "black"
        },

        anonymous:{

        },

        category:{

        },

        dividingline:{

        },

        hashtag: {

        },

        title: {

        },

        textbox: {

        }
      
    });


    return (
        <View style={styles.container}>
            <Text style = {styles.posttext}>
                게시물 작성
            </Text>
            <View style={styles.buttoncontainer}>
                <ImageButton/>
                <LinkButton/>
                <CancelButton/>
                <UploadButton/>
            </View>
            
        </View>
    );
}
export default PostScreen;