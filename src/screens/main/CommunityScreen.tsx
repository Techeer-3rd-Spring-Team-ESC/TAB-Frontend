import React, {Component} from "react";
import {View, Image} from 'react-native';
import PostButton from '../../components/community/PostButton';
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

class CommunityScreen extends Component {
    render () {
        return (
            <View style = {styles.container}>
                <View style = {styles.searchcontainer}>
                    <View>                
                        <Image 
                        style = {styles.image}
                        source = {require('../../../assets/images/tab.png')}
                        />
                    </View>
                    <View style = {styles.search}>
                        <SearchBox/>
                        <SearchButton/>
                    </View>
                </View>

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

                <View style = {styles.post}>
                    <PostButton/>
                </View>
            </View>
        );
    };
};

export default CommunityScreen;