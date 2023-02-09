import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
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
import bookmarkStyles from '../../styles/screens/Bookmark';
import ActivatedBookmarkButton from "../../components/bookmark/ActivatedBookmarkButton";
import BookmarkLogo from "../../components/bookmark/BookmarkLogo";
import MainReturnButton from "../../components/community/MainReturnButton";
import backButtonStyles from "../../styles/community/BackButton";
import FontAwesome from "react-native-vector-icons/FontAwesome";

type BookmarkScreenProp = StackNavigationProp<RootStackParamList, 'Bookmark'>;

function BookmarkScreen() {
    const navigation = useNavigation<BookmarkScreenProp>();

    return (
        <View style = {styles.container}>
            <View style = {styles.titleContainer}>
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
                <Text style = {titleStyles.searchTitletext}>
                    북마크
                </Text>
                <BookmarkLogo/>
            </View>
            <View style = {styles.listcontainer}>
                <InformationTag/>
                <PostList/>
                <View style = {styles.postcontainer}> 
                    <Profile/>
                    <ActivatedBookmarkButton/>
                    <LikeButton/>
                    <CommentButton/>
                </View>
            </View>
            <View style = {homeStyles.page}>
                <LeftPageButton/>
                    <Text style = {titleStyles.pagetext}>
                    1
                    </Text>
                <RightPageButton/>
            </View>
        </View>
    );
};

export default BookmarkScreen;