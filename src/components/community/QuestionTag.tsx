import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../../styles/community/QuestionTag';

function QuestionTag() {
    return (
        <TouchableOpacity style = {styles.tagStyle}>
            <Text style = {styles.tagTitle}>
                정보
            </Text>
        </TouchableOpacity>
    );
};

export default QuestionTag;