import React from "react";
import {View, ScrollView, Text} from 'react-native';
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
import LeftPageButton from '../../components/community/LeftPageButton';
import RightPageButton from '../../components/community/RightPageButton';
import LogoButton from "../../components/community/LogoButton";
import PostButton from "../../components/community/PostButton";
import MainReturnButton from "../../components/community/MainReturnButton";

function CommunityScreen() {
    return (
        <View style = {styles.container}>
            <MainReturnButton/>
            <View style = {styles.searchcontainer}>
                <LogoButton/>
                <View style = {styles.search}>
                    <SearchBox/>
                    <SearchButton/>
                </View>
            </View>
            <ScrollView stickyHeaderIndices={[4]} style = {styles.listcontainer}>
                <View>
                    <InformationTag/>
                    <PostList/>
                    <View style = {styles.postcontainer}> 
                        <Profile/>
                        <BookmarkButton/>
                        <LikeButton/>
                        <CommentButton/>
                    </View>
                    <View style = {styles.verticleLine}/>
                </View>
                
                <View>
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
                
                <View>
                    <InformationTag/>
                    <PostList/>
                    <View style = {styles.postcontainer}> 
                        <Profile/>
                        <BookmarkButton/>
                        <LikeButton/>
                        <CommentButton/>
                    </View>
                    <View style = {styles.verticleLine}/>
                </View>
                
                <View>
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
                <View>
                    <InformationTag/>
                    <PostList/>
                    <View style = {styles.postcontainer}> 
                        <Profile/>
                        <BookmarkButton/>
                        <LikeButton/>
                        <CommentButton/>
                    </View>
                    <View style = {styles.verticleLine}/>
                </View>
                
                <View>
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
                <View>
                    <InformationTag/>
                    <PostList/>
                    <View style = {styles.postcontainer}> 
                        <Profile/>
                        <BookmarkButton/>
                        <LikeButton/>
                        <CommentButton/>
                    </View>
                    <View style = {styles.verticleLine}/>
                </View>
                
                <View>
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
                <View>
                    <InformationTag/>
                    <PostList/>
                    <View style = {styles.postcontainer}> 
                        <Profile/>
                        <BookmarkButton/>
                        <LikeButton/>
                        <CommentButton/>
                    </View>
                    <View style = {styles.verticleLine}/>
                </View>
                
                <View>
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

                <View>
                    <InformationTag/>
                    <PostList/>
                    <View style = {styles.postcontainer}> 
                        <Profile/>
                        <BookmarkButton/>
                        <LikeButton/>
                        <CommentButton/>
                    </View>
                    <View style = {styles.verticleLine}/>
                </View>
                
                <View>
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