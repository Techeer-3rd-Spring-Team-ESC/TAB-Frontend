import React from 'react';
import {Platform, View, Text, StyleSheet} from 'react-native';
import AnonymousCheck from '../../components/post/AnonymousCheck';
import CategoryCheck from '../../components/post/CategoryCheck';
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

        anonymoustext:{
            marginTop: Platform.OS == "ios" ? 80 : 20,
            marginLeft: 20,
            fontFamily: 'GmarketSansTTFMedium',
            fontSize: Platform.OS == "ios" ? 25 : 20,
            color: "#2BC63B"
        },

        anonymous:{
            marginLeft: 5,
            flexDirection: 'row'
        },

        categorytext:{
            marginLeft: 20,
            fontFamily: 'GmarketSansTTFMedium',
            fontSize: Platform.OS == "ios" ? 25 : 20,
            color: "#2BC63B"
        },

        category:{
            marginLeft: Platform.OS == "ios" ? 5 : 10,
            flexDirection: 'row'
        },

        dividingline:{
            height: 10,
            marginBottom: 20,
            color: '#2BC63B',
            borderRadius: 20,
            borderWidth: 2, 
            borderColor: '#2BC63B',
            alignSelf: "center"
        },

        title: {
            // marginTop: Platform.OS == "ios" ? 20 : 10,
            marginLeft: 10,
            marginRight: 10,
            color: '#2BC63B',
            borderRadius: 8,
            borderWidth: 2, 
            borderColor: '#2BC63B',
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

        hashtag: { // 해쉬태그 밑으로 내리기
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
            <Text style = {styles.anonymoustext}>
                공개여부
            </Text>
            <View style = {styles.anonymous}>
                <AnonymousCheck/>
            </View>
            <Text style = {styles.categorytext}>
                카테고리
            </Text>
            <View style = {styles.category}>
                <CategoryCheck/>
            </View>
            <View style = {styles.title}>
                <TitleInputbox/>
            </View>    
            <View style = {styles.textbox}>
                <TextInputbox/>
            </View>
            <View style = {styles.hashtag}>
                <HashtagInputbox/>
            </View>
            <View style= {styles.buttoncontainer}>
                <ImageButton/>
                <LinkButton/>
                <CancelButton/>
                <UploadButton/>
            </View>
        </View>
    );
}
export default PostScreen;