import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles/article/ArticleText';

class ArticleText extends Component {
    render () {
        return (
            <View style = {styles.titleContainer}>
                <Text style = {styles.articleText}>
                    Bot development has become one of the most popular 
                    activities for developers as well as users in recent time.
                    The trend began with Siri, Cortana, and Google Now
                    becoming accessible through voice commands. {'\n'}
                    {'\n'}
                    Then came the personal assistant bots like Alexa, Siri
                    and Google Assistant.
                    These virtual assistants are accessible from our phones
                    as well as third-party platforms like Slack and Telegram. {'\n'}
                    {'\n'}
                    With AI becoming more accessible to regular users, 
                    there is now an increasing demand for bots that can
                    understand natural language and assist users with
                    various tasks on their devices or apps. {'\n'}
                    {'\n'}
                    So if you’re ready to take up this challenge, read on to
                    get started with building your very own python telegram.
                    {'\n'}
                </Text>
            </View>
        )
    };
};

export default ArticleText;