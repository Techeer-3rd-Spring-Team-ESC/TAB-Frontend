import React, { useEffect, useState } from "react";
import {View, Text, TouchableOpacity, ScrollView, SafeAreaView, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import InformationTag from '../../components/community/InformationTag';
import QuestionTag from '../../components/community/QuestionTag';
import PostList from '../../components/community/PostList';
import Profile from '../../components/community/Profile';
import LikeButton from '../../components/community/LikeButton';
import CommentButton from '../../components/community/CommentButton';
import styles from '../../styles/screens/Community';
import homeStyles from '../../styles/screens/Home';
import titleStyles from '../../styles/home/TitleText';
import LeftPageButton from '../../components/community/LeftPageButton';
import RightPageButton from '../../components/community/RightPageButton';
import BookmarkLogo from "../../components/bookmark/BookmarkLogo";
import backButtonStyles from "../../styles/community/BackButton";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import articleTextStyles from "../../styles/article/ArticleText";
import emojiButtonStyles from "../../styles/community/EmojiButton";
import communityStyles from "../../styles/screens/Community";
import profileStyles from "../../styles/community/Profile";
import postListStyles from "../../styles/community/PostList";
import axios from "axios";

type BookmarkScreenProp = StackNavigationProp<RootStackParamList, 'Bookmark'>;

function BookmarkScreen() {
    const navigation = useNavigation<BookmarkScreenProp>();

    const list = [
        {
            category: '정보',
            title: '안녕1',
            author: 'loana Mircea',
            image: '../../../assets/images/tab.png',
            likeCount: 1,
        },
        {
            category: '정보',
            title: '안녕2',
            author: 'loana Mircea',
            image: '../../../assets/images/tab.png',
            likeCount: 1,
        },
        {
            category: '정보',
            title: '안녕3',
            author: 'loana Mircea',
            image: '../../../assets/images/tab.png',
            likeCount: 1,
        },
        {
            category: '정보',
            title: '안녕4',
            author: 'loana Mircea',
            image: '../../../assets/images/tab.png',
            likeCount: 1,
        },
        {
            category: '정보',
            title: '안녕5',
            author: 'loana Mircea',
            image: '../../../assets/images/tab.png',
            likeCount: 1,
        },
        {
            category: '정보',
            title: '안녕6',
            author: 'loana Mircea',
            image: '../../../assets/images/tab.png',
            likeCount: 1,
        },
        {
            category: '정보',
            title: '안녕7',
            author: 'loana Mircea',
            image: '../../../assets/images/tab.png',
            likeCount: 1,
        },
        {
            category: '정보',
            title: '안녕8',
            author: 'loana Mircea',
            image: '../../../assets/images/tab.png',
            likeCount: 1,
        },
        {
            category: '정보',
            title: '안녕9',
            author: 'loana Mircea',
            image: '../../../assets/images/tab.png',
            likeCount: 1,
        },
        {
            category: '정보',
            title: '안녕10',
            author: 'loana Mircea',
            image: '../../../assets/images/tab.png',
            likeCount: 1,
        },
    ];

    const [bookmarkList, setBookmarkList] = useState([{
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
        createdAt: ""
    }]);
    
    useEffect(() => {
        try {
            const response = axios.get(
            'http://10.0.2.2:8080/api/v1/bookmark',
            {
                headers: {
                    page: 1,
                    size: 10,
                    direction: "ASC"
                }
            },
            )
            .then(function (response) {
                console.log(response.data)
                setBookmarkList(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <ScrollView 
            stickyHeaderIndices={[0]}
            style = {communityStyles.container}
        >
            <SafeAreaView style = {styles.bookmarkTitleContainer}>
                <TouchableOpacity
                    style = {backButtonStyles.bookmarkBackButton}
                    onPress = {() => navigation.navigate('Main')}
                >
                    <FontAwesome 
                        name = 'chevron-left' 
                        size = {Platform.OS == 'ios' ? 25 : 20} 
                        color = 'gray'
                    />
                </TouchableOpacity>
                <Text style = {titleStyles.bookmarkTitletext}>
                    북마크
                </Text>
                <BookmarkLogo/>
            </SafeAreaView>
            <View style = {communityStyles.listcontainer}>
                {list?.map((e) =>
                    <View>
                        <TouchableOpacity
                            key = {e.title}
                            onPress = {() => navigation.navigate('Article')}
                        >
                            <Text style = {profileStyles.profileText}>
                                {e.category}
                            </Text>
                            <View style = {postListStyles.buttonStyle}>
                                <Text
                                    style = {postListStyles.listTitle}
                                    numberOfLines={2} 
                                >
                                    {e.title}
                                </Text>
                            </View>
                            <View style = {communityStyles.postcontainer}> 
                                <Text style = {profileStyles.profileText}>
                                    {e.author}
                                </Text>
                                <TouchableOpacity style = {emojiButtonStyles.buttonStyle}>
                                    <FontAwesome 
                                        name = 'eye'
                                        size = {20} 
                                        color = 'gray'
                                    />
                                </TouchableOpacity>
                                <Text style = {emojiButtonStyles.likeCountStyle}>
                                    {e.likeCount}
                                </Text>
                                <LikeButton/>
                                <Text style = {emojiButtonStyles.likeCountStyle}>
                                    {e.likeCount}
                                </Text>
                                <CommentButton/>
                            </View>
                        </TouchableOpacity>
                        <View style = {articleTextStyles.communityVerticleLine}/>
                    </View>
                )}
                <View style = {homeStyles.page}>
                        <LeftPageButton/>
                            <Text style = {titleStyles.pagetext}>
                            1
                            </Text>
                        <RightPageButton/>
                </View>
            </View>
        </ScrollView>
    );
};

export default BookmarkScreen;