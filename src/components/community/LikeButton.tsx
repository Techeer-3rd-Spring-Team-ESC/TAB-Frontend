import React from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/community/EmojiButton';

function LikeButton() {
    return (
        <TouchableOpacity style = {styles.buttonStyle}>
            <FontAwesome 
                name = 'heart'
                size = {20} 
                color = 'gray'
            />
        </TouchableOpacity>
    );
};

export default LikeButton;