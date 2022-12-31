import React from 'react';
import {Text, Platform} from 'react-native';
import titleStyles from '../../styles/home/TitleText';

function HomeTitle() {
    return (
        <Text style = {titleStyles.titletext}>
            인기 게시물
        </Text> 
    );
};

export default HomeTitle;