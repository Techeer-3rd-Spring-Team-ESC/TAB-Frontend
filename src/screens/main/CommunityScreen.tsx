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

type BookmarkScreenProp = StackNavigationProp<RootStackParamList, 'Community'>;

function CommunityScreen() {
    const navigation = useNavigation<BookmarkScreenProp>();
    const [writerName, setWriterName] = useState("");

    const list = [
        {
            category: '정보',
            title: 'A Step-by-Step Guid -- Are you looking for a new, creative project? What about building your own Telegram bot in Python? Sounds fun',
            author: 'loana Mircea',
            image: '../../../assets/images/tab.png',
            likeCount: 1,
        },
    ];

    useEffect(() => {
    }, []);

    return (
        <View style = {communityStyles.container}>
            <View style = {communityStyles.titleContainer}>
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
            </View>
            <ScrollView 
                stickyHeaderIndices={[-1]} 
                style = {communityStyles.listcontainer}
            >
                {list?.map((e) =>
                    <TouchableOpacity
                        key = {e.category}
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
                            <LikeButton/>
                            <Text style = {emojiButtonStyles.likeCountStyle}>
                                {e.likeCount}
                            </Text>
                            <CommentButton/>
                        </View>
                    </TouchableOpacity>
                )}
            <View style = {homeStyles.page}>
                    <LeftPageButton/>
                        <Text style = {titleStyles.pagetext}>
                        1
                        </Text>
                    <RightPageButton/>
                    <PostButton/>
            </View>
            </ScrollView>
        </View>
    );
};

export default CommunityScreen;