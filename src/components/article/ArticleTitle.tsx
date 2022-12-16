import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles/article/ArticleTitle';

function ArticleTitle() {
    return (
        <View style = {styles.titleContainer}>
            <Text style = {styles.titleText}>
                How to Create a Telegram Bot Using Python Making $300 Per Month
            </Text>
            <Text style = {styles.subText}>
                A Step-by-Step Guide
            </Text>
        </View>
    )
};

export default ArticleTitle;