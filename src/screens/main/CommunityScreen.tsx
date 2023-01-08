import React from "react";
import {View, Image, Text} from 'react-native';
import SearchBox from '../../components/community/SearchBox';
import InformationTag from '../../components/community/InformationTag';
import QuestionTag from '../../components/community/QuestionTag';
import PostList from '../../components/community/PostList';
import Profile from '../../components/community/Profile';
import BookmarkButton from '../../components/community/BookmarkButton';
import LikeButton from '../../components/community/LikeButton';
import CommentButton from '../../components/community/CommentButton';
import SearchButton from '../../components/community/SearchButton';
import styles from '../../styles/screens/Community';
import homeStyles from '../../styles/screens/Home';
import titleStyles from '../../styles/home/TitleText';
import LeftPageButton from '../../components/home/LeftPageButton';
import RightPageButton from '../../components/home/RightPageButton';
import LogoButton from "../../components/community/LogoButton";

function CommunityScreen() {
    return (
        <View style = {styles.container}>
            <View style = {styles.searchcontainer}>
                <LogoButton/>
                <View style = {styles.search}>
                    <SearchBox/>
                    <SearchButton/>
                </View>
            </View>

            <Text style = {titleStyles.titletext}>
                전체 게시물
            </Text> 

            <View style = {styles.listcontainer}>
                <InformationTag/>
                <PostList/>
                <View style = {styles.postcontainer}> 
                    <Profile/>
                    <BookmarkButton/>
                    <LikeButton/>
                    <CommentButton/>
                </View>
                <View style = {styles.verticleLine}/>

                <QuestionTag/>
                <PostList/>
                <View style = {styles.postcontainer}> 
                    <Profile/>
                    <BookmarkButton/>
                    <LikeButton/>
                    <CommentButton/>
                </View>
                <View style = {styles.verticleLine}/> 
                <InformationTag/>
                <PostList/>
                <View style = {styles.postcontainer}> 
                    <Profile/>
                    <BookmarkButton/>
                    <LikeButton/>
                    <CommentButton/>
                </View>
                <View style = {styles.verticleLine}/>

                <QuestionTag/>
                <PostList/>
                <View style = {styles.postcontainer}> 
                    <Profile/>
                    <BookmarkButton/>
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

export default CommunityScreen;