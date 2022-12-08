import React from 'react';
import {View, StyleSheet, Platform, Image} from 'react-native';
import PostButton from '../../components/community/PostButton';
import Searchbox from '../../components/community/Searchbox';
import InformationTag from '../../components/community/InformationTag';
import QuestionTag from '../../components/community/QuestionTag';
import PostList from '../../components/community/PostList';
import Profile from '../../components/community/Profile';
import BookmarkButton from '../../components/community/BookmarkButton';
import LikeButton from '../../components/community/LikeButton';
import CommentButton from '../../components/community/CommentButton';
import SearchButton from '../../components/community/SearchButton';


function CommunityScreen() {
    const styles = StyleSheet.create({
        container: {
            height: 1000,
            backgroundColor: 'white'
        },
        
        searchcontainer: {
            marginTop: Platform.OS == 'ios' ? 20 : 0,
            flexDirection: 'row',
        },

        image: {
            width: 130,
            height: 60,
            marginTop: Platform.OS == 'ios' ? 50 : 20,
            resizeMode: 'contain',
        },
        
        search: {
            height: 60,
            marginTop: Platform.OS == 'ios' ? 50 : 20,
            marginRight: 50,
            fontFamily: 'GmarketSansTTFLight',
            fontSize: 10,
            paddingHorizontal: 10,
            borderRadius: 10,
            borderColor: 'gray',
            borderWidth: 1,
            flexDirection: 'row',
        },

        postcontainer:{
            flexDirection: 'row',
        },

        verticleLine: {
            marginTop: Platform.OS == 'ios' ? 10 : 0,
            width: '91%',
            height: 2,
            marginLeft: 20,
            backgroundColor: '#909090',
        },

        post: {
            marginLeft: Platform.OS == 'ios' ? 220 : 200,
        }
      
    });

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
                    <Searchbox/>
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
}

export default CommunityScreen;