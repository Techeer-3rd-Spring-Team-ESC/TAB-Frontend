import React from 'react';
import {Platform, View, StyleSheet, ScrollView} from 'react-native';
import WriterProfile from '../../components/article/WriterProfile';
import InformationTag from '../../components/community/InformationTag';
import BookmarkButton from '../../components/community/BookmarkButton';
import LikeButton from '../../components/community/LikeButton';
import CommentButton from '../../components/community/CommentButton';
import ArticleTitle from '../../components/article/ArticleTitle';
import ArticleImage from '../../components/article/ArticleImage';


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
            marginTop: Platform.OS == 'ios' ? 0 : 5,
            flexDirection: 'row',
        },

        buttoncontainer:{
            marginLeft: 160,
            marginTop: Platform.OS == 'ios' ? 3 : 0,
            flexDirection: 'row',
        },
      
    });

    return (
        <ScrollView style={styles.container}>
            <View style={styles.profilecontainer}>
                <WriterProfile/>
            </View>
            <View style={styles.postcontainer}> 
                    <InformationTag/>
                    <View style={styles.buttoncontainer}> 
                        <BookmarkButton/>
                        <LikeButton/>
                        <CommentButton/>
                    </View>
            </View>

            <ArticleTitle/>
            <ArticleImage/>

        </ScrollView>
    );
}
export default ArticleScreen;