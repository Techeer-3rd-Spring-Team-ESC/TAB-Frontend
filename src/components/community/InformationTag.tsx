import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../../styles/community/InformationTag';

function InformationTag() {
    return (
        <TouchableOpacity style = {styles.tagStyle}>
            <Text style = {styles.tagTitle}>
                정보
            </Text>
        </TouchableOpacity>
    );
};

export default InformationTag;