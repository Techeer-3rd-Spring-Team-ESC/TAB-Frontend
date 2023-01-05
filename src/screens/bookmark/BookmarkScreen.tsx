import React from "react";
import {View, Text} from 'react-native';
import InformationTag from '../../components/community/InformationTag';
import QuestionTag from '../../components/community/QuestionTag';
import PostList from '../../components/community/PostList';
import Profile from '../../components/community/Profile';
import LikeButton from '../../components/community/LikeButton';
import CommentButton from '../../components/community/CommentButton';
import styles from '../../styles/screens/Community';
import homeStyles from '../../styles/screens/Home';
import titleStyles from '../../styles/home/TitleText';
import LeftPageButton from '../../components/home/LeftPageButton';
import RightPageButton from '../../components/home/RightPageButton';
import bookmarkStyles from '../../styles/screens/Bookmark';
import ActivatedBookmarkButton from "../../components/bookmark/ActivatedBookmarkButton";
import LogoReturnButton from "../../components/bookmark/LogoReturnButton";
import BookmarkLogo from "../../components/bookmark/BookmarkLogo";

function BookmarkScreen() {
    return (
        <View style = {styles.container}>
            <View style = {bookmarkStyles.returnbutton}>
                <LogoReturnButton/>
            </View>
            <View style = {bookmarkStyles.bookmarkcontainer}>
                <Text style = {titleStyles.bookmarktext}>
                    북마크 게시물
                </Text>
                <View style = {bookmarkStyles.logo}>
                    <BookmarkLogo/>
                </View>
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
                <View style = {styles.verticleLine}/>

                <QuestionTag/>
                <PostList/>
                <View style = {styles.postcontainer}> 
                    <Profile/>
                    <ActivatedBookmarkButton/>
                    <LikeButton/>
                    <CommentButton/>
                </View>
                <View style = {styles.verticleLine}/> 
                <InformationTag/>
                <PostList/>
                <View style = {styles.postcontainer}> 
                    <Profile/>
                    <ActivatedBookmarkButton/>
                    <LikeButton/>
                    <CommentButton/>
                </View>
                <View style = {styles.verticleLine}/>

                <QuestionTag/>
                <PostList/>
                <View style = {styles.postcontainer}> 
                    <Profile/>
                    <ActivatedBookmarkButton/>
                    <LikeButton/>
                    <CommentButton/>
                </View>
                <View style = {styles.verticleLine}/> 
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