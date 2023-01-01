import React from "react";
import {View, Text} from 'react-native';
import AnonymousCheck from '../../components/post/AnonymousCheck';
import CategoryCheck from '../../components/post/CategoryCheck';
import HashtagInputbox from '../../components/post/HashtagInputbox';
import TitleInputbox from '../../components/post/TitleInputbox';
import TextInputbox from '../../components/post/TextInputbox';
import ImageButton from '../../components/post/ImageButton';
import LinkButton from '../../components/post/LinkButton';
import CancelButton from '../../components/post/CancelButton';
import UploadButton from '../../components/post/UploadButton';
import styles from '../../styles/screens/Post';

function PostScreen() {
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