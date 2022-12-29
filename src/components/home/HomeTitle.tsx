import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../../styles/community/Profile';
import titleStyles from '../../styles/home/TitleText';

function HomeTitle() {
    return (
        <View style = {styles.titletextcontainer}>
            <Text style = {titleStyles.titletext}>
                인기 게시물
            </Text> 
        </View>
    );
};

export default HomeTitle;