import React, { useEffect, useState } from "react";
import {View, ScrollView, Text, TouchableOpacity, TextInput, Platform} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import SearchBox from '../../components/community/SearchBox';
import SearchButton from '../../components/community/SearchButton';
import styles from '../../styles/screens/Community';
import MainReturnButton from "../../components/community/MainReturnButton";
import backButtonStyles from "../../styles/community/BackButton";
import titleStyles from "../../styles/home/TitleText";
import searchboxStyles from "../../styles/community/SearchBox";
import searchButtonStyles from "../../styles/community/SearchButton";
import axios from "axios";
import communityStyles from "../../styles/screens/Community";
import LikeButton from "../../components/community/LikeButton";
import CommentButton from "../../components/community/CommentButton";
import emojiButtonStyles from "../../styles/community/EmojiButton";
import profileStyles from "../../styles/community/Profile";
import articleTextStyles from "../../styles/article/ArticleText";
import homeStyles from "../../styles/screens/Home";
import leftStyles from "../../styles/community/LeftPageButton";
import rightStyles from "../../styles/community/RightPageButton";
import PostButton from "../../styles/community/PostButton";
import postListStyles from "../../styles/community/PostList";

type BookmarkScreenProp = StackNavigationProp<RootStackParamList, 'Search'>;

function SearchScreen() {
    const navigation = useNavigation<BookmarkScreenProp>();
    const [word, setWord] = useState("");
    const [page, setPage] = useState(1);
    const [searchList, setSearchList] = useState([{
        id: 0,
        memberId: 0,
        category: "",
        title: "",
        content: "",
        file: "",
        image: "",
        hashtags: "",
        isAnonymous: false,
        likeNumbers: 0,
        views: 0,
    }]);

    function minus() {
        if (page >= 2) {
            setPage(page - 1)
        }
    }

    const onPress = () => {searchAPI()}

    async function searchAPI() {
        try {
            const response = axios.get(
            `http://10.0.2.2:8080/api/v1/post/search/${word}`,
            {
                headers: {
                    page: 1,
                    size: 10,
                    direction: "ASC"
                },
            },
            )
            .then(function (response) {
                console.log(response.data)
                setSearchList(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
        }
    };

    return ( 
        <ScrollView 
            stickyHeaderIndices={[0]}  
            style = {communityStyles.container}
        >
            <View style = {styles.titleContainer}>
                <TouchableOpacity
                    style = {backButtonStyles.searchBackButton}
                    onPress = {() => navigation.navigate('Community')}
                >
                    <FontAwesome 
                        name = 'chevron-left' 
                        size = {20} 
                        color = 'gray'
                    />
                </TouchableOpacity>
                <Text style = {titleStyles.searchTitletext}>
                    검색
                </Text>
            </View>
            <View style = {styles.searchcontainer}>
                    <View style = {styles.search}>
                        <TextInput 
                            style = {searchboxStyles.inputStyle}
                            placeholder = '사람, 태그, 키워드로 검색하기'
                            onChangeText={(word) => {setWord(word)}}
                            onSubmitEditing={onPress}
                            returnKeyType="search"
                        />
                        <TouchableOpacity
                            style = {searchButtonStyles.buttonStyle}
                            onPress={() => searchAPI()}
                        >
                            <FontAwesome 
                                name = 'search' 
                                size = {20} 
                                color = '#fff'
                            />
                        </TouchableOpacity>
                    </View>
            </View>
            <View style = {communityStyles.newcontainer}>
                <View style = {communityStyles.searchListContainer}>
                    {searchList?.map((e, index) =>
                        <View>
                            <TouchableOpacity
                                key = {index}
                                onPress = {() => navigation.navigate('Article', { id: searchList[index].id})}
                            >
                                <Text style = {profileStyles.profileText}>
                                    {e.category}
                                </Text>
                                <View style = {postListStyles.buttonStyle}>
                                    <Text
                                        style = {postListStyles.listTitle}
                                        numberOfLines={2} 
                                    >
                                        {e.title}
                                    </Text>
                                </View>
                                <View style = {communityStyles.postcontainer}> 
                                    <Text style = {profileStyles.profileText}>
                                        {e.memberId}
                                    </Text>
                                    <TouchableOpacity style = {emojiButtonStyles.buttonStyle}>
                                        <FontAwesome 
                                            name = 'eye'
                                            size = {20} 
                                            color = 'gray'
                                        />
                                    </TouchableOpacity>
                                    <Text style = {emojiButtonStyles.likeCountStyle}>
                                        {e.views}
                                    </Text>
                                    <LikeButton/>
                                    <Text style = {emojiButtonStyles.likeCountStyle}>
                                        {e.likeNumbers}
                                    </Text>
                                    <CommentButton/>
                                </View>
                            </TouchableOpacity>
                            <View style = {articleTextStyles.communityVerticleLine}/>
                        </View>
                    )}
                    </View>
                <View style = {homeStyles.page}>
                    <TouchableOpacity 
                        style = {leftStyles.buttonStyle}
                        onPress={() => {minus()}}
                        >
                        <FontAwesome
                            name = 'caret-left'
                            size = {Platform.OS == 'ios' ? 30 : 20} 
                            color = 'green'
                        />
                    </TouchableOpacity>
                    <Text style = {titleStyles.pagetext}>
                        {page}
                    </Text>
                    <TouchableOpacity 
                        style = {rightStyles.buttonStyle}
                        onPress={() => {setPage(page + 1)}}
                    >
                        <FontAwesome 
                            name = 'caret-right'
                            size = {Platform.OS == 'ios' ? 30 : 20} 
                            color = 'green'
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

export default SearchScreen;