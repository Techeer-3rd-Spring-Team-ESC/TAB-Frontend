import React, {useEffect, useState} from "react";
import {View, ScrollView, Text, TouchableOpacity, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import PostList from '../../components/community/PostList';
import LikeButton from '../../components/community/LikeButton';
import CommentButton from '../../components/community/CommentButton';
import homeStyles from '../../styles/screens/Home';
import titleStyles from '../../styles/home/TitleText';
import LeftPageButton from '../../components/community/LeftPageButton';
import RightPageButton from '../../components/community/RightPageButton';
import PostButton from "../../components/community/PostButton";

import searchButtonStyles from "../../styles/community/SearchButton";
import backButtonStyles from "../../styles/community/BackButton";
import profileStyles from '../../styles/community/Profile';
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import communityStyles from "../../styles/screens/Community";
import postListStyles from "../../styles/community/PostList";
import emojiButtonStyles from "../../styles/community/EmojiButton";
import articleTextStyles from "../../styles/article/ArticleText";
import { SafeAreaView } from "react-native-safe-area-context";

type BookmarkScreenProp = StackNavigationProp<RootStackParamList, 'Community'>;

function CommunityScreen() {
    const navigation = useNavigation<BookmarkScreenProp>();
    const [writerName, setWriterName] = useState("");

    const list = [
        {
            category: '정보',
            title: 'Hello',
            author: 'loana Mircea',
            image: '../../../assets/images/tab.png',
            likeCount: 1,
        },
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

    useEffect(() => {
    }, []);

    return (
        <ScrollView 
            stickyHeaderIndices={[10]}  
            style = {communityStyles.container}
        >
            <SafeAreaView style = {communityStyles.titleContainer}>
                <TouchableOpacity
                    style = {backButtonStyles.communityBackButton}
                    onPress = {() => navigation.navigate('Main')}
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
                    onPress = {() => navigation.navigate('Search')}
                >
                    <FontAwesome 
                        name = 'search' 
                        size = {20} 
                        color = 'gray'
                    />
                </TouchableOpacity>
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
                    <PostButton/>
            </View>
            </View>
        </ScrollView>
    );
};

export default CommunityScreen;