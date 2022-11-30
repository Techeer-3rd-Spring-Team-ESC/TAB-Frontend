import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AnonymousCheck from '../../components/post/AnonymousCheck';
import InformationCheck from '../../components/post/InformationCheck';
import QuestionCheck from '../../components/post/QuestionCheck';
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

        posttext: {
            marginTop: 100,
            fontFamily: 'GmarketSansTTFMedium',
            fontSize: 20,
            textAlign: "center",
            color: "black"
        },

        anonymous:{
            marginTop: 50,
        },

        category:{
            marginTop: 20,
            flexDirection: 'row'
        },

        dividingline:{
            width: 500,
            height: 200,
            marginTop: 20,
            marginBottom: 20,
            color: '#2BC63B',
            
        },

        hashtag: {

        },

        title: {

        },

        textbox: {

        },
      
        buttoncontainer: {
            marginTop: 400,
            flexDirection: 'row'
        },
    });


    return (
        <View style={styles.container}>
            <Text style = {styles.posttext}>
                게시물 작성
            </Text>
            <View style ={styles.anonymous}>
                <AnonymousCheck/>
            </View>
            <View style ={styles.category}>
                <InformationCheck/>
                <QuestionCheck/>
            </View>
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