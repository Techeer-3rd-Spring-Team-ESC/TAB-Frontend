import React, { useEffect, useState } from "react";
import {View, ScrollView, TouchableOpacity, Text, Image, KeyboardAvoidingView, Button, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import ArticleImage from '../../components/article/ArticleImage';
import styles from '../../styles/screens/Article';
import backButtonStyles from "../../styles/community/BackButton";
import communityStyles from "../../styles/screens/Community";
import titleStyles from "../../styles/home/TitleText";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import profileStyles from "../../styles/community/Profile";
import articleTitleStyles from "../../styles/article/ArticleTitle";
import articleTextStyles from "../../styles/article/ArticleText";
import emojiButtonStyles from "../../styles/community/EmojiButton";
import postListStyles from "../../styles/community/PostList";
import { TextInput } from "react-native-gesture-handler";
import articleStyles from "../../styles/screens/Article";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

type BookmarkScreenProp = StackNavigationProp<RootStackParamList, 'Article'>;

function ArticleScreen() {
    const navigation = useNavigation<BookmarkScreenProp>();
    const [id, setId] = useState(0);
    const [memberId, setmemberId] = useState(0);
    const [memberName, setmemberName] = useState('loana Mircea');
    const [category, setCategory] = useState('정보');
    const [title, setTitle] = useState('How to Create a Telegram Bot Using Python Making $300 Per Month');
    const [content, setContent] = useState('Bot development has become one of the most popular activities for developers as well as users in recent time.');
    const [file, setFile] = useState('');
    const [image, setImage] = useState('');
    const [hashtags, setHashtags] = useState('');
    const [likeNumbers, setLikeNumbers] = useState(10);
    const [views, setViews] = useState(3000);
    const [creacted, setCreated] = useState(Date);
    const [anonymous, setAnonymous] = useState(true);
    const [postId, setPostId] = useState(0);
    const [postName, setPostName] = useState('');
    const [commentContent, setCommentContent] = useState('');
    const [layer, setLayer] = useState(0);
    const [commentAnonymous, setCommentAnonymous] = useState(true);

    const [modal, setModal] = useState(false);
    const [articleList, setArticleList] = useState([{
        id: 0,
        memberId: 0,
        category: "",
        title: "",
        content: "",
        file: "",
        image: "",
        hashtags: "",
        isAnonymous: false,
        likeNumbers: 0,
        views: 0,
        createdAt: Date
    }]);


    new Intl.DateTimeFormat('kr').format(new Date());
    const TIME_ZONE = 3240 * 10000;
    const d = new Date();
    const date = new Date(+d + TIME_ZONE).toISOString().split('T')[0];
    const time = d.toTimeString().split(' ')[0];

    const commentList = [
        {
            postName: '철수',
            commentContent: 'A Step-by-Step Guid -- Are you looking for a new, creative project? What about building your own Telegram bot in Python? Sounds fun',
            author: 'loana Mircea',
            image: '../../../assets/images/tab.png',
            likeCount: 1,
        },

        {
            postName: '영희',
            commentContent: 'A Step-by-Step Guid -- Are you looking for a new, creative project? What about building your own Telegram bot in Python? Sounds fun',
            author: 'loana Mircea',
            image: '../../../assets/images/tab.png',
            likeCount: 1,
        },

        {
            postName: '미음',
            commentContent: 'ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ',
            author: 'loana Mircea',
            image: '../../../assets/images/tab.png',
            likeCount: 1,
        },
    ];

    const comment2List = [
        {
            postName: '내 덧글',
            commentContent: 'A Step-by-Step Guid -- Are you looking for a new, creative project? What about building your own Telegram bot in Python? Sounds fun',
            author: 'loana Mircea',
            image: '../../../assets/images/tab.png',
            likeCount: 1,
        },
    ];

    const hashtagList = [
        {
            hashtag: '#안녕하세요'
        },
        {
            hashtag: '#반갑습니다'
        },
        {
            hashtag: '#잘부탁해요'
        },
    ];

    async function articleAPI() {
        try {
            const response = axios.get(
            'http://10.0.2.2:8080/api/v1/post',
            {
                headers: {
                    page: 1,
                    size: 10,
                    direction: "ASC",
                    // Authorization: await AsyncStorage.getItem('accessToken')
                }
            },
            )
            .then(function (response) {
                console.log(response.data)
                setArticleList(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        articleAPI()
    }, []);

    return (
        <ScrollView 
            stickyHeaderIndices={[0]}  
            style = {styles.container}
        >
            <View style = {communityStyles.articleContainer}>
                <TouchableOpacity
                    style = {backButtonStyles.articleBackButton}
                    onPress = {() => navigation.navigate('Community')}
                >
                    <FontAwesome
                        name = 'chevron-left'
                        size = {Platform.OS == 'ios' ? 25 : 20} 
                        color = 'gray'
                    />
                </TouchableOpacity>
                <Text style = {titleStyles.articleTitletext}>
                    게시글
                </Text>
            </View>

            <Text style = {profileStyles.profileText}>
                    {articleList[0].category}
            </Text>
            <View style = {articleTitleStyles.titleContainer}>
                <Text style = {articleTitleStyles.titleText}>
                    {articleList[0].title}
                </Text>
                <View style = {styles.articleContainer}>
                    <Text style = {profileStyles.profileText}>
                        {memberName}
                    </Text>
                    <Text style = {profileStyles.creactedText}>
                        {date + ' ' + time}
                    </Text>
                    <TouchableOpacity style = {emojiButtonStyles.articleButtonStyle}>
                        <FontAwesome 
                            name = 'eye'
                            size = {20} 
                            color = 'gray'
                        />
                    </TouchableOpacity>
                    <Text style = {emojiButtonStyles.articleLikeCountStyle}>
                        {articleList[0].views}
                    </Text>
                </View>
                <View style = {styles.articleContainer}>
                    {articleList?.map((e) =>
                        <View key = {e.hashtags}>
                            <View style={articleStyles.hashtag}>
                                <Text style={articleTextStyles.hashtagText}>
                                    {e.hashtags}
                                </Text>
                            </View>
                        </View>
                    )}
                </View>
            </View>
            <ArticleImage/>
            <View style = {articleTextStyles.titleContainer}>
                <Text style = {articleTextStyles.articleText}>
                    {articleList[0].content}
                </Text>
            </View>
            
            <View style = {articleStyles.newButtoncontainer}>
                <TouchableOpacity style = {articleStyles.heartButton}>
                    <FontAwesome 
                        name = 'heart'
                        size = {30} 
                        color = '#DD4A4A'
                    />
                    <Text style = {articleTextStyles.likeText}>
                        {articleList[0].likeNumbers}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {articleStyles.bookmarkButton}>
                    <FontAwesome 
                        name = 'bookmark'
                        size = {40} 
                        color = 'green'
                    />
                    <Text style = {articleTextStyles.bookmarkText}>
                        저장
                    </Text>
                </TouchableOpacity>
            </View>

            <View style = {articleTitleStyles.commentContainer}>
                {commentList?.map((e) =>
                    <View>
                        <TouchableOpacity 
                            key = {e.postName}
                            onPress={() => {setModal(!modal)}}>
                            <View style = {articleTextStyles.verticleLine}/>
                            <Text style = {profileStyles.profileText}>
                                {e.postName}
                            </Text>
                            <View style = {postListStyles.buttonStyle}>
                                <Text
                                    style = {postListStyles.listTitle}
                                    numberOfLines={5} 
                                >
                                    {e.commentContent}
                                </Text>
                            </View>
                            {modal === true ? 
                            <View>
                                <View style = {articleTextStyles.verticleLine}/>
                                <Text style = {profileStyles.profileText}>
                                    ┗ {e.postName}
                                </Text>
                                <View style = {articleStyles.comment2Container}>
                                    <TextInput style = {articleTextStyles.commentText}
                                        placeholder="덧글을 입력하세요"
                                    />
                                    <TouchableOpacity
                                        style = {articleStyles.comment2Button}
                                    >
                                        <FontAwesome 
                                            name = 'send'
                                            size = {20} 
                                            color = 'green'
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>: null}
                        </TouchableOpacity>
                        <View style = {articleTitleStyles.comment2Container}>
                            {comment2List?.map((e) =>
                                <View key = {e.postName}>
                                    <View style = {articleTextStyles.commentVerticleLine}/>
                                    <Text style = {profileStyles.commentProfileText}>
                                        ┗ {e.postName}
                                    </Text>
                                    <View style = {postListStyles.buttonStyle}>
                                        <Text
                                            style = {postListStyles.listTitle}
                                            numberOfLines={5} 
                                        >
                                            {e.commentContent}
                                        </Text>
                                    </View>
                                    <View style = {communityStyles.postcontainer}> 
                                    </View>
                                </View>
                            )}
                        </View>
                    </View>
                )}
            </View>
            <View style = {articleTextStyles.postVerticleLine}/>
            <View style = {articleStyles.commentContainer}>
                <TextInput style = {articleTextStyles.commentText}
                    placeholder="댓글을 입력하세요"
                />
                <TouchableOpacity 
                    style = {articleStyles.commentButton}
                >
                    <FontAwesome 
                        name = 'send'
                        size = {20} 
                        color = 'green'
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default ArticleScreen;