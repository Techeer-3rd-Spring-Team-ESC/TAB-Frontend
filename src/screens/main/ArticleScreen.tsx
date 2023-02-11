import React, { useState } from "react";
import {View, ScrollView, TouchableOpacity, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import LikeButton from '../../components/article/LikeButton';
import CommentButton from '../../components/article/CommentButton';
import ArticleImage from '../../components/article/ArticleImage';
import ArticleSubtitle from '../../components/article/ArticleSubtitle';
import ArticleText from '../../components/article/ArticleText';
import styles from '../../styles/screens/Article';
import backButtonStyles from "../../styles/community/BackButton";
import communityStyles from "../../styles/screens/Community";
import titleStyles from "../../styles/home/TitleText";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import profileStyles from "../../styles/community/Profile";
import articleTitleStyles from "../../styles/article/ArticleTitle";
import articleTextStyles from "../../styles/article/ArticleText";
import emojiButtonStyles from "../../styles/community/EmojiButton";
import postListStyles from "../../styles/community/PostList";

type BookmarkScreenProp = StackNavigationProp<RootStackParamList, 'Article'>;

function ArticleScreen() {
    const navigation = useNavigation<BookmarkScreenProp>();
    const [id, setId] = useState(0);
    const [memberId, setmemberId] = useState(0);
    const [memberName, setmemberName] = useState('loana Mircea');
    const [category, setCategory] = useState('정보');
    const [title, setTitle] = useState('How to Create a Telegram Bot Using Python Making $300 Per Month');
    const [content, setContent] = useState('Bot development has become one of the most popular activities for developers as well as users in recent time.');
    const [file, setFile] = useState('');
    const [image, setImage] = useState('');
    const [hashtags, setHashtags] = useState('');
    const [likeNumbers, setLikeNumbers] = useState(1);
    const [views, setViews] = useState('');
    const [anonymous, setAnonymous] = useState(true);
    const [postId, setPostId] = useState(0);
    const [postName, setPostName] = useState('');
    const [commentContent, setCommentContent] = useState('');
    const [layer, setLayer] = useState(0);
    const [commentAnonymous, setCommentAnonymous] = useState(true);

    const commentList = [
        {
            postName: '안녕',
            commentContent: 'A Step-by-Step Guid -- Are you looking for a new, creative project? What about building your own Telegram bot in Python? Sounds fun',
            author: 'loana Mircea',
            image: '../../../assets/images/tab.png',
            likeCount: 1,
        },

        {
            postName: '하이',
            commentContent: 'A Step-by-Step Guid -- Are you looking for a new, creative project? What about building your own Telegram bot in Python? Sounds fun',
            author: 'loana Mircea',
            image: '../../../assets/images/tab.png',
            likeCount: 1,
        },

    ];

    const comment2List = [
        {
            postName: '안녕',
            commentContent: 'A Step-by-Step Guid -- Are you looking for a new, creative project? What about building your own Telegram bot in Python? Sounds fun',
            author: 'loana Mircea',
            image: '../../../assets/images/tab.png',
            likeCount: 1,
        },
    ];

    return (
        <ScrollView style = {styles.container}>
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
        
            <Text style = {profileStyles.profileText}>
                    {category}
            </Text>
            <View style = {articleTitleStyles.titleContainer}>
                <Text style = {articleTitleStyles.titleText}>
                    {title}
                </Text>
                <View style = {styles.articleContainer}>
                    <Text style = {profileStyles.profileText}>
                        {memberName}
                    </Text>
                    <LikeButton/>
                    <Text style = {emojiButtonStyles.articleLikeCountStyle}>
                        {likeNumbers}
                    </Text>
                    <CommentButton/>
                </View>
            </View>
            <ArticleImage/>
            <View style = {articleTextStyles.titleContainer}>
                <Text style = {articleTextStyles.articleText}>
                    {content}
                </Text>
            </View>
            <View style = {articleTitleStyles.commentContainer}>
                {commentList?.map((e) =>
                    <View key = {e.postName}>
                        <Text style = {profileStyles.profileText}>
                            {e.postName}
                        </Text>
                        <View style = {postListStyles.buttonStyle}>
                            <Text
                                style = {postListStyles.listTitle}
                                numberOfLines={5} 
                            >
                                {e.commentContent}
                            </Text>
                        </View>
                        <View style = {communityStyles.postcontainer}> 
                            <TouchableOpacity style = {articleTitleStyles.commentButton}>
                                <Text>
                                    답글
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {articleTextStyles.verticleLine}/>
                        <View style = {articleTitleStyles.comment2Container}>
                        {comment2List?.map((e) =>
                            <View key = {e.postName}>
                                <Text style = {profileStyles.profileText}>
                                    {e.postName}
                                </Text>
                                <View style = {postListStyles.buttonStyle}>
                                    <Text
                                        style = {postListStyles.listTitle}
                                        numberOfLines={5} 
                                    >
                                        {e.commentContent}
                                    </Text>
                                </View>
                                <View style = {communityStyles.postcontainer}> 
                                    <TouchableOpacity style = {articleTitleStyles.commentButton}>
                                        <Text>
                                            답글
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style = {articleTextStyles.verticleLine}/>
                            </View>
                )}
            </View>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default ArticleScreen;