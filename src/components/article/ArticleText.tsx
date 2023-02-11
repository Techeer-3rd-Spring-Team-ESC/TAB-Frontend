import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles/article/ArticleText';

interface Props {
    content: React.Dispatch<React.SetStateAction<string>>;
}

function ArticleText({content}: Props) {
    return (
        <View style = {styles.titleContainer}>
            <Text style = {styles.articleText}>
                {content}
            </Text>
        </View>
    );
};

export default ArticleText;