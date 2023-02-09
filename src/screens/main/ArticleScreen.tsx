import React from "react";
import {View, ScrollView, TouchableOpacity, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import WriterProfile from '../../components/article/WriterProfile';
import InformationTag from '../../components/community/InformationTag';
import BookmarkButton from '../../components/community/BookmarkButton';
import LikeButton from '../../components/article/LikeButton';
import CommentButton from '../../components/article/CommentButton';
import ArticleTitle from '../../components/article/ArticleTitle';
import ArticleImage from '../../components/article/ArticleImage';
import ArticleSubtitle from '../../components/article/ArticleSubtitle';
import ArticleText from '../../components/article/ArticleText';
import styles from '../../styles/screens/Article';
import backButtonStyles from "../../styles/community/BackButton";
import communityStyles from "../../styles/screens/Community";
import titleStyles from "../../styles/home/TitleText";
import searchButtonStyles from "../../styles/community/SearchButton";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import profileStyles from "../../styles/community/Profile";
import PostList from "../../components/community/PostList";
import articleTitleStyles from "../../styles/article/ArticleTitle";

type BookmarkScreenProp = StackNavigationProp<RootStackParamList, 'Article'>;

function ArticleScreen() {
    const navigation = useNavigation<BookmarkScreenProp>();

    return (
        <View>
            <View style = {communityStyles.titleContainer}>
                    <TouchableOpacity
                        style = {backButtonStyles.communityBackButton}
                        onPress = {() => navigation.navigate('Community')}
                    >
                        <FontAwesome 
                            name = 'chevron-left' 
                            size = {20} 
                            color = 'gray'
                        />
                    </TouchableOpacity>
                    <Text style = {titleStyles.searchTitletext}>
                        게시글
                    </Text>
                </View>
            <ScrollView style = {styles.container}>
                <Text style = {profileStyles.profileText}>
                        정보
                </Text>
                <View style = {profileStyles.profileContainer}>
                    <Text style = {profileStyles.profileText}>
                        loana Mircea
                    </Text>
                    <Image style = {profileStyles.profileImage}
                        source = {require('../../../assets/images/tab.png')}
                    />
                </View>
                {/* <View style = {styles.profilecontainer}>
                    <WriterProfile/>
                </View>
                <View style = {styles.postcontainer}> 
                        <InformationTag/>
                        <View style = {styles.buttoncontainer}> 
                            <BookmarkButton/>
                            <LikeButton/>
                            <CommentButton/>
                        </View>
                </View> */}
                <View style = {articleTitleStyles.titleContainer}>
                    <Text style = {articleTitleStyles.titleText}>
                        How to Create a Telegram Bot Using Python Making $300 Per Month
                    </Text>
                    <View style = {styles.articleContainer}> 
                        <Text style = {articleTitleStyles.subText}>
                            A Step-by-Step Guide
                        </Text>
                        <LikeButton/>
                        <Text>
                            1
                        </Text>
                        <CommentButton/>
                        <Text>
                            1
                        </Text>
                </View>
                </View>
                <ArticleImage/>
                <ArticleSubtitle/>
                <ArticleText/>
            </ScrollView>
        </View>
    );
};

export default ArticleScreen;