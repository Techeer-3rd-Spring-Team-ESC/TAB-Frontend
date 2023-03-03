import React, { useEffect, useState } from "react";
import {View, ScrollView, Text, TouchableOpacity, TextInput} from 'react-native';
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

type BookmarkScreenProp = StackNavigationProp<RootStackParamList, 'Search'>;

function SearchScreen() {
    const navigation = useNavigation<BookmarkScreenProp>();
    const [word, setWord] = useState("");
    const [searchList, setSearchList] = useState({
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
        createdAt: Date
    });

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
        <View style = {styles.container}>
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
        </View>
    );
}

export default SearchScreen;