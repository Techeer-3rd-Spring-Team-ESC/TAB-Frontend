import React, {useState} from "react";
import {View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import postStyles from '../../styles/screens/Post';
import communityStyles from "../../styles/screens/Community";
import backButtonStyles from "../../styles/community/BackButton";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import titleStyles from "../../styles/home/TitleText";
import searchButtonStyles from "../../styles/community/SearchButton";
import { TextInput } from "react-native-gesture-handler";
import articleTextStyles from "../../styles/article/ArticleText";

type PostScreenProp = StackNavigationProp <RootStackParamList, 'Post'>;

function PostScreen() {
    const navigation = useNavigation<PostScreenProp>();
    const [anonymousChecked, setAnonymousChecked] = useState('first');
    const [categoryChecked, setCategoryChecked] = useState('first');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [hashtag, setHashtag] = useState('');

    return (
        <View style={postStyles.container}>
            <View style = {communityStyles.titleContainer}>
                <TouchableOpacity
                    style = {backButtonStyles.communityBackButton}
                    onPress = {() => navigation.navigate('Community')}
                >
                    <FontAwesome 
                        name = 'chevron-left' 
                        size = {20} 
                        color = 'gray'
                    />
                </TouchableOpacity>
                <Text style = {titleStyles.communityTitletext}>
                    커뮤니티
                </Text>
                <TouchableOpacity
                    style = {searchButtonStyles.screenButtonStyle}
                    onPress = {() => navigation.navigate('Community')}
                >
                    <Text style = {titleStyles.postText}>
                        등록
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TextInput
                    style = {postStyles.title}
                    placeholder="제목"
                    onChangeText={(text) => {setTitle(text)}}
                />
                <View style = {articleTextStyles.verticleLine}/>
                <View style = {postStyles.textbox}>
                    <TextInput
                        style = {postStyles.inputStyle}
                        placeholder = "다른사람들과 공유하고싶은이야기를 적어주세요. &#13;&#10;링크나 사진등을 업로드할수있습니다."
                        placeholderTextColor={'#D9D9D9'}
                        multiline = {true} // 아이폰 텍스트 상단정렬
                        onChangeText={(text) => {setText(text)}}
                    />
                </View>
            </View>
        </View>
    );
}
export default PostScreen;