import React, {useEffect, useState} from "react";
import {View, Text, TouchableOpacity, PermissionsAndroid, KeyboardAvoidingView, Platform, Alert} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import articleStyles from "../../styles/screens/Article";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import axios from "axios";

type PostScreenProp = StackNavigationProp <RootStackParamList, 'Post'>;

function PostScreen() {
    const navigation = useNavigation<PostScreenProp>();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [hashtag, setHashtag] = useState('');
    const [file, setFile] = useState('');
    const [image, setImage] = useState('');
    const [isChecked, setisChecked] = useState(false);
    const [postList, setPostList] = useState([{
        memberId: 0,
        category: "",
        title: '',
        content: '',
        file: '',
        image: '',
        hashtags: '',
        anonymous: false
    }]);
    const [photo, setPhoto] = useState(undefined);

    const showPicker = async () => {
        Alert.alert(
            "뭘로 올릴래?",
            "선택해",
            [
              {
                text: "카메라로 찍기",
                onPress: async() =>{
                  const result = await launchCamera({
                    mediaType : 'photo', 
                    cameraType : 'back', 
                  });
                    if (result.didCancel){ 
                      return null;
                    }
                    const localUri = result.assets[0].uri;
                    const uriPath = localUri.split("//").pop();
                    const imageName = localUri.split("/").pop();
                    setPhoto("file://"+uriPath);
                    console.log(result)
                }
              },
              {
                text: "앨범에서 선택",
                onPress: async() =>{
                  const result = await launchImageLibrary();
                  if (result.didCancel){
                    return null;
                  } 
                  const localUri = result.assets[0].uri;
                  const uriPath = localUri.split("//").pop();
                  const imageName = localUri.split("/").pop();
                  setPhoto(result.assets[0].uri);
                }
              },
            ],
            {cancelable: false}
          );
    }
    
        async function postArticle() {
            try {
                const response = axios.post(
                'http://10.0.2.2:8080/api/v1/post',
                    {
                        memberId: 1,
                        category: "Backend",
                        title: title,
                        content: content,
                        // file: file,
                        image: photo,
                        hashtags: hashtag,
                        anonymous: isChecked
                    })
                .then(function (response) {
                    navigation.navigate('Community')
                    console.log(response.data)
                    setPostList(response.data)
                })
                .catch(function (error) {
                    console.log(error.response.data);
                });
            } catch (error) {
                console.log(error);
            }
        }

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{ flex: 1}}
            extraScrollHeight={20}
        >
            <View style={postStyles.container}>
                <View style = {communityStyles.titleContainer}>
                    <TouchableOpacity
                        style = {backButtonStyles.communityBackButton}
                        onPress = {() => navigation.navigate('Community')}
                    >
                        <FontAwesome 
                            name = 'chevron-left' 
                            size = {Platform.OS == 'ios' ? 25 : 20} 
                            color = 'gray'
                        />
                    </TouchableOpacity>
                    <Text style = {titleStyles.postTitletext}>
                        글쓰기
                    </Text>
                    <TouchableOpacity
                        style = {postStyles.postButtonStyle}
                        onPress = {() => postArticle()}
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
                    <View style = {postStyles.verticleLine}/>
                        <View style = {postStyles.textbox}>
                            <TextInput
                                style = {postStyles.inputStyle}
                                placeholder = "다른사람들과 공유하고싶은이야기를 적어주세요. &#13;&#10;링크나 사진등을 업로드할수있습니다."
                                placeholderTextColor={'#D9D9D9'}
                                multiline = {true} // 아이폰 텍스트 상단정렬
                                onChangeText={(content) => {setContent(content)}}
                                // onSubmitEditing={onPress}
                                returnKeyType="done"
                            />
                        </View>
                </View>
                <KeyboardAvoidingView 
                    style = {postStyles.bottomContainer}
                    behavior="position" enabled
                >
                    <View style = {postStyles.postVerticleLine}/>
                    <View
                        style = {articleStyles.comment2Container}
                    >
                        <TouchableOpacity
                            style = {postStyles.postButton}
                            onPress={showPicker}
                        >
                            <FontAwesome 
                                name = 'image'
                                size = {30} 
                                color = 'gray'
                            />
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style = {postStyles.postButton}
                        >
                            <FontAwesome 
                                name = 'link'
                                size = {30} 
                                color = 'gray'
                            />
                        </TouchableOpacity>
                        <Text style = {titleStyles.anonymousText}>
                            익명
                        </Text>
                        <BouncyCheckbox
                            style = {postStyles.anonymousButton}
                            size={25}
                            fillColor="green"
                            unfillColor="white"
                            onPress={() => {isChecked}}
                        />
                    </View>
                    <View style = {postStyles.postVerticleLine}/>
                    <View style = {articleStyles.commentContainer}>
                        <TextInput 
                        style = {postStyles.hashtag}
                            placeholder="해쉬태그를 입력하세요"
                            onChangeText={(text) => {setHashtag(text)}}
                        />
                    </View>
                </KeyboardAvoidingView>
            </View>
        </KeyboardAwareScrollView>
    );
}
export default PostScreen;