import React from "react";
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
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

type BookmarkScreenProp = StackNavigationProp<RootStackParamList, 'Search'>;

function SearchScreen() {
    const navigation = useNavigation<BookmarkScreenProp>();
    
    return ( 
        <View style = {styles.container}>
            <View style = {styles.titleContainer}>
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
                    검색
                </Text>
            </View>
            <View style = {styles.searchcontainer}>
                    <View style = {styles.search}>
                        <SearchBox/>
                        <SearchButton/>
                    </View>
            </View>
        </View>
    );
}

export default SearchScreen;