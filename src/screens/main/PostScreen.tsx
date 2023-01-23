import React, {useState} from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import AnonymousCheck from '../../components/post/AnonymousCheck';
import CategoryCheck from '../../components/post/CategoryCheck';
import HashtagInputbox from '../../components/post/HashtagInputbox';
import TitleInputbox from '../../components/post/TitleInputbox';
import TextInputbox from '../../components/post/TextInputbox';
import ImageButton from '../../components/post/ImageButton';
import LinkButton from '../../components/post/LinkButton';
import CancelButton from '../../components/post/CancelButton';
import UploadButton from '../../components/post/UploadButton';
import postStyles from '../../styles/screens/Post';
import styles from '../../styles/post/UploadButton';

type PostScreenProp = StackNavigationProp <RootStackParamList, 'Post'>;

function PostScreen() {
    const navigation = useNavigation<PostScreenProp>();
    const [anonymousChecked, setAnonymousChecked] = useState('first');
    const [categoryChecked, setCategoryChecked] = useState('first');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [hashtag, setHashtag] = useState('');

    function userPost() {
        console.log("익명여부: " + anonymousChecked)
        console.log("카테고리: " + categoryChecked)
        console.log("제목: " + title)
        console.log("내용: " + text)
        console.log("해쉬태그: " + hashtag)
      }

    return (
        <View style={postStyles.container}>
            <Text style = {postStyles.anonymoustext}>
                공개여부
            </Text>
            <View style = {postStyles.anonymous}>
                <AnonymousCheck
                    setAnonymousChecked={setAnonymousChecked}
                />
            </View>
            <View style = {postStyles.verticleLine}>
            </View>
            <Text style = {postStyles.categorytext}>
                카테고리
            </Text>
            <View style = {postStyles.category}>
                <CategoryCheck/>
            </View>
            <View style = {postStyles.verticleLine}>
            </View>
            <View style = {postStyles.title}>
                <TitleInputbox
                    setTitle={setTitle}
                />
            </View>
            <View style = {postStyles.verticleLine}>
            </View>    
            <View style = {postStyles.textbox}>
                <TextInputbox
                    setText={setText}
                />
            </View>
            <View style = {postStyles.hashtag}>
                <HashtagInputbox/>
            </View>
            <View style = {postStyles.verticleLine}/>
            <View style= {postStyles.buttoncontainer}>
                <ImageButton/>
                <LinkButton/>
                <CancelButton/>
                <TouchableOpacity
                    style = {styles.buttonStyle}
                    onPress={() => navigation.navigate('Main')}
                >
                    <Text style = {styles.buttonTitle}>
                        등록
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default PostScreen;