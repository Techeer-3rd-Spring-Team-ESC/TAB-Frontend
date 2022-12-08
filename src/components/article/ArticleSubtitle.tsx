import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles/article/ArticleSubtitle';

class ArticleSubtitle extends Component {
    render() {
        return (
            <View style = {styles.subtitleContainer}>
                <View style = {styles.verticleLine}/>
                <Text style = {styles.subtitleText}>
                    Are you looking for a new, creative project? {'\n'}
                    What about building your own Telegram bot in Python? {'\n'}
                    Sounds fun and challenging, right? {'\n'}
                    If you think so, read on to discover all the details. {'\n'}
                </Text>
            </View>
        )
    };
};

export default ArticleSubtitle;