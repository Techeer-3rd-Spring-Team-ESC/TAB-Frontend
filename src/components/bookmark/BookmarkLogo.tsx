import React from 'react';
import {TouchableOpacity, Platform} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/community/EmojiButton';

function BookmarkLogo() {
    return (
        <TouchableOpacity style = {styles.titleButtonStyle}>
            <FontAwesome 
                name = 'bookmark'
                size = {Platform.OS == 'ios' ? 30 : 30} 
                color = 'green'
            />
        </TouchableOpacity>
    );
};

export default BookmarkLogo;