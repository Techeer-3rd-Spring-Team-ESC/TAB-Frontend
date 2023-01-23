import React from 'react';
import {View, Platform} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/community/EmojiButton';
import mainMenuStyles from '../../styles/home/MainMenu';
import homeStyles from '../../styles/screens/Home';

function InformationIcon() {
    return (
        <View style = {mainMenuStyles.informationIconStyle}>
            <FontAwesome 
                name = 'folder-open'
                size = {Platform.OS == 'ios' ? 120 : 80} 
                color = '#64924e'
            />
        </View>
    );
};

export default InformationIcon;