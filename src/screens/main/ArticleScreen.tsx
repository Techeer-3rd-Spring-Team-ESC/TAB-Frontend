import React from "react";
import {View, ScrollView} from 'react-native';
import WriterProfile from '../../components/article/WriterProfile';
import InformationTag from '../../components/community/InformationTag';
import BookmarkButton from '../../components/community/BookmarkButton';
import LikeButton from '../../components/community/LikeButton';
import CommentButton from '../../components/community/CommentButton';
import ArticleTitle from '../../components/article/ArticleTitle';
import ArticleImage from '../../components/article/ArticleImage';
import ArticleSubtitle from '../../components/article/ArticleSubtitle';
import ArticleText from '../../components/article/ArticleText';
import styles from '../../styles/screens/Article';

function ArticleScreen() {
    return (
        <ScrollView style = {styles.container}>
            <View style = {styles.profilecontainer}>
                <WriterProfile/>
            </View>
            <View style = {styles.postcontainer}> 
                    <InformationTag/>
                    <View style = {styles.buttoncontainer}> 
                        <BookmarkButton/>
                        <LikeButton/>
                        <CommentButton/>
                    </View>
            </View>

            <ArticleTitle/>
            <ArticleImage/>
            <ArticleSubtitle/>
            <ArticleText/>
        </ScrollView>
    );
};

export default ArticleScreen;