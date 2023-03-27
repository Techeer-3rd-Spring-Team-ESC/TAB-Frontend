import React, { useEffect } from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity, Platform} from 'react-native';
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

    // useEffect(() => {
    //     try {
    //         const response = axios.get(
    //         'http://10.0.2.2:8080/api/v1/bookmark',
    //         {
    //             headers: {
    //                 page: 1,
    //                 size: 10,
    //                 direction: "ASC"
    //             }
    //         },
    //         )
    //         .then(function (response) {
    //             setBookmarkList(response.data)
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, []);

    return (
        <ScrollView
            stickyHeaderIndices={[0]}  
            showsVerticalScrollIndicator={true}
            style = {styles.container}
        >
            <View style = {styles.infoTitleContainer}>
                <TouchableOpacity
                    style = {backButtonStyles.infoBackButton}
                    onPress = {() => navigation.navigate('Main')}
                >
                    <FontAwesome 
                        name = 'chevron-left' 
                        size = {Platform.OS == 'ios' ? 25 : 20} 
                        color = 'gray'
                    />
                </TouchableOpacity>
                <Text style = {titleStyles.infoTitletext}>
                    정보
                </Text>

            </View>
            <View style = {styles.listcontainer}>
                {/* {bookmarkList?.map((e, index) =>
                    <Image style = {styles.image}
                        source = {require('../../../assets/images/tab.png')}
                    />
                    <PostList/>
                )} */}
                    <Image style = {styles.image}
                        source = {require('../../../assets/images/tab.png')}
                    />
                    <PostList/>
            </View>
        </ScrollView>
    );
}
export default InformationScreen;