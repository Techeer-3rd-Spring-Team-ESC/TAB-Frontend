import React from 'react';
import {View, Platform} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/community/EmojiButton';
import mainMenuStyles from '../../styles/home/MainMenu';
import homeStyles from '../../styles/screens/Home';

function CommunityIcon() {
    return (
        <View style = {mainMenuStyles.communityIconStyle}>
            <FontAwesome 
                name = 'users'
                size = {Platform.OS == 'ios' ? 140 : 120} 
                color = '#64924e'
            />
        </View>
    );
};

export default CommunityIcon;