import React, {useEffect, useState} from "react";
import {View, ScrollView, Text, TouchableOpacity, Image, Platform} from 'react-native';
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
import rightStyles from "../../styles/community/RightPageButton";
import leftStyles from "../../styles/community/LeftPageButton";

type BookmarkScreenProp = StackNavigationProp<RootStackParamList, 'Community'>;

function CommunityScreen() {
    const navigation = useNavigation<BookmarkScreenProp>();
    const [page, setPage] = useState(1);
    const [postList, setPostList] = useState([{
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
            'http://10.0.2.2:8080/api/v1/post',
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
                setPostList(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
        }
    }, []);

    function minus() {
        if (page >= 2) {
            setPage(page - 1)
        }
    }

    return (
        <ScrollView 
            stickyHeaderIndices={[0]}  
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
                {postList?.map((e) =>
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
                                    {e.memberId}
                                </Text>
                                <TouchableOpacity style = {emojiButtonStyles.buttonStyle}>
                                    <FontAwesome 
                                        name = 'eye'
                                        size = {20} 
                                        color = 'gray'
                                    />
                                </TouchableOpacity>
                                <Text style = {emojiButtonStyles.likeCountStyle}>
                                    {e.views}
                                </Text>
                                <LikeButton/>
                                <Text style = {emojiButtonStyles.likeCountStyle}>
                                    {e.likeNumbers}
                                </Text>
                                <CommentButton/>
                            </View>
                        </TouchableOpacity>
                        <View style = {articleTextStyles.communityVerticleLine}/>
                    </View>
                )}
                <View style = {homeStyles.page}>
                    <TouchableOpacity 
                        style = {leftStyles.buttonStyle}
                        onPress={() => {minus()}}
                        >
                        <FontAwesome
                            name = 'caret-left'
                            size = {Platform.OS == 'ios' ? 30 : 20} 
                            color = 'green'
                        />
                    </TouchableOpacity>
                    <Text style = {titleStyles.pagetext}>
                        {page}
                    </Text>
                    <TouchableOpacity 
                        style = {rightStyles.buttonStyle}
                        onPress={() => {setPage(page + 1)}}
                    >
                        <FontAwesome 
                            name = 'caret-right'
                            size = {Platform.OS == 'ios' ? 30 : 20} 
                            color = 'green'
                        />
                    </TouchableOpacity>
                        <PostButton/>
                </View>
            </View>
        </ScrollView>
    );
};

export default CommunityScreen;