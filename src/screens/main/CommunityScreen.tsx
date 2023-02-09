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
            commentCount: 1,
        },

        {
            category: '질문',
            title: 'A Step-by-Step Guid -- Are you looking for a new, creative project? What about building your own Telegram bot in Python? Sounds fun',
            author: 'loana Mircea',
            image: '../../../assets/images/tab.png',
            likeCount: 3,
            commentCount: 4,
        }
    ]

    useEffect(() => {
        // async function mapData() {
        //     try {
        //         const response = await axios.post(
        //             'http://15.164.28.246:8000/api/v1/stores/search/',
        //             {
        //                 token: await AsyncStorage.getItem('FCMToken'),
        //                 latitude: myLocation.latitude, 
        //                 longitude: myLocation.longitude
        //             },
        //             { headers : {Authorization: await AsyncStorage.getItem('accessToken')}},)
        //     .then(function (response) {
        //         setStoreList(response.data);
        //         setMyStoreList(storeList["data"])
        //     })
        //     .catch(function (error) {
        //         console.log(error)
        //     });
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }
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
                    <View>
                        <Text style = {profileStyles.profileText}>
                            {e.category}
                        </Text>
                        <TouchableOpacity
                            style = {postListStyles.buttonStyle}
                            onPress = {() => navigation.navigate('Article')}
                        >
                            <Text
                                style = {postListStyles.listTitle}
                                numberOfLines={2} 
                            >
                                {e.title}
                            </Text>
                        </TouchableOpacity>
                        <View style = {profileStyles.profileContainer}>
                            <Text style = {profileStyles.profileText}>
                                {e.author}
                            </Text>
                            <Image style = {profileStyles.profileImage}
                                source = {require('../../../assets/images/tab.png')}
                            />
                        </View>
                        <View style = {communityStyles.postcontainer}> 
                            <LikeButton/>
                            <Text>
                                {e.likeCount}
                            </Text>
                            <CommentButton/>
                            <Text>
                                {e.commentCount}
                            </Text>
                        </View>
                    </View>
                )}
            </ScrollView>
            <View style = {homeStyles.page}>
                    <LeftPageButton/>
                        <Text style = {titleStyles.pagetext}>
                        1
                        </Text>
                    <RightPageButton/>
                    <PostButton/>
            </View>
        </View>
    );
};

export default CommunityScreen;