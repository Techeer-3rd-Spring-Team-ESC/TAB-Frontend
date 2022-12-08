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
            marginTop: Platform.OS == 'ios' ? 80 : 20,
            marginLeft: 20,
            fontFamily: 'GmarketSansTTFMedium',
            fontSize: Platform.OS == 'ios' ? 25 : 20,
            color:'#CECECE'
        },

        anonymous:{
            marginLeft: 5,
            flexDirection: 'row'
        },

        categorytext:{
            marginTop: Platform.OS == 'ios' ? 20 : 20,
            marginLeft: 20,
            fontFamily: 'GmarketSansTTFMedium',
            fontSize: Platform.OS == 'ios' ? 25 : 20,
            color: '#CECECE'
        },

        category:{
            marginLeft: Platform.OS == 'ios' ? 5 : 10,
            flexDirection: 'row'
        },

        verticleLine: {
            width: '91%',
            height: 3,
            marginLeft: 20,
            borderRadius: 50,
            backgroundColor: '#CECECE',
        },

        title: {
            marginLeft: 10,
            marginRight: 10,
        },

        textbox: {
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 8,
            borderWidth: 2, 
            borderColor: '#909090',
        },

        hashtag: {
            marginTop: Platform.OS == 'ios' ? 10 : 0,
            marginLeft: 10,
            marginRight: 10,
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
            <View style = {styles.verticleLine}>
            </View>
            <Text style = {styles.categorytext}>
                카테고리
            </Text>
            <View style = {styles.category}>
                <CategoryCheck/>
            </View>
            <View style = {styles.verticleLine}>
            </View>
            <View style = {styles.title}>
                <TitleInputbox/>
            </View>
            <View style = {styles.verticleLine}>
            </View>    
            <View style = {styles.textbox}>
                <TextInputbox/>
            </View>
            <View style = {styles.hashtag}>
                <HashtagInputbox/>
            </View>
            <View style = {styles.verticleLine}/>
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