import React from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import PostList from '../../components/information/PostList';
import styles from '../../styles/screens/Community';
import informationStyles from '../../styles/screens/Information';
import titleStyles from '../../styles/home/TitleText';
import MainReturnButton from '../../components/community/MainReturnButton';
import backButtonStyles from '../../styles/community/BackButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type BookmarkScreenProp = StackNavigationProp<RootStackParamList, 'Information'>;

function InformationScreen() {
    const navigation = useNavigation<BookmarkScreenProp>();

    return (
        <View style = {styles.container}>
            <View style = {styles.titleContainer}>
                <TouchableOpacity
                    style = {backButtonStyles.communityBackButton}
                    onPress = {() => navigation.navigate('Main')}
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
        <ScrollView 
            showsVerticalScrollIndicator={true}
        >

            <View style = {styles.listcontainer}>
                <View style = {informationStyles.crollingpost}>
                    <Image style = {styles.image}
                        source = {require('../../../assets/images/tab.png')}
                    />
                    <PostList/>
                </View>
            </View>
        </ScrollView>
        </View>
        
    );
}
export default InformationScreen;