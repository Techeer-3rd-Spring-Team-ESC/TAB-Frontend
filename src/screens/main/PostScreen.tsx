import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AnonymousCheck from '../../components/post/AnonymousCheck';
import InformationCheck from '../../components/post/InformationCheck';
import QuestionCheck from '../../components/post/QuestionCheck';
import HashtagInputbox from '../../components/post/HashtagInputbox';
import TitleInputbox from '../../components/post/TitleInputbox';
import TextInputbox from '../../components/post/TextInputbox';
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
            marginTop: 60,
            fontFamily: 'GmarketSansTTFMedium',
            fontSize: 20,
            textAlign: "center",
            color: "black"
        },

        anonymous:{
            flexDirection: 'row'
        },

        category:{
            marginLeft: 7,
            flexDirection: 'row',
            justifyContent: 'space-around'
        },

        dividingline:{
            height: 10,
            marginTop: 20,
            marginBottom: 20,
            color: '#2BC63B',
            borderRadius: 20,
            borderWidth: 2, 
            borderColor: '#2BC63B',
            alignSelf: "center"
        },

        hashtag: {

        },

        title: {

        },

        textbox: {
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            color: '#2BC63B',
            borderRadius: 8,
            borderWidth: 2, 
            borderColor: '#2BC63B',
        },
      
        buttoncontainer: {
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
            <View style ={styles.textbox}>
                <HashtagInputbox/>
            </View>
            <View style ={styles.textbox}>
                <TitleInputbox/>
            </View>    
            <View style ={styles.textbox}>
                <TextInputbox/>
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