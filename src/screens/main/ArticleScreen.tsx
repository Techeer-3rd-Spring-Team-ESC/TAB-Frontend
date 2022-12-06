import React from 'react';
import {Platform, View, StyleSheet, Text} from 'react-native';
import WriterProfile from '../../components/article/WriterProfile';
import InformationTag from '../../components/community/InformationTag';
import BookmarkButton from '../../components/community/BookmarkButton';
import LikeButton from '../../components/community/LikeButton';
import CommentButton from '../../components/community/CommentButton';
import ArticleTitle from '../../components/article/ArticleTitle';


function ArticleScreen() {
    const styles = StyleSheet.create({
        container: {
            height: 1000,
            backgroundColor: 'white'
        },

        profilecontainer:{
            marginTop: Platform.OS == 'ios' ? 80 : 20,
            marginLeft: 20
        },

        postcontainer:{
            flexDirection: 'row',
        },

        image: {
            width: 130,
            height: 100,
            marginTop: Platform.OS == 'ios' ? 30 : 0,
            resizeMode: 'contain',
        },
      
    });

    return (
        <View style={styles.container}>
            <View style={styles.profilecontainer}>
                <WriterProfile/>
                <View style={styles.postcontainer}> 
                    <InformationTag/>
                    <BookmarkButton/>
                    <LikeButton/>
                    <CommentButton/>
                </View>
            </View>
        
            
            
            <ArticleTitle/>
            
        </View>
    );
}
export default ArticleScreen;