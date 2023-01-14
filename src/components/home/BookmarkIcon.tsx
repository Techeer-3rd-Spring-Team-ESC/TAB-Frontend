import React from 'react';
import {View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/community/EmojiButton';
import mainMenuStyles from '../../styles/home/MainMenu';
import homeStyles from '../../styles/screens/Home';

function BookmarkIcon() {
    return (
        <View style = {mainMenuStyles.bookmarkIconStyle}>
            <FontAwesome 
                name = 'bookmark'
                size = {140} 
                color = '#64924e'
            />
        </View>
    );
};

export default BookmarkIcon;