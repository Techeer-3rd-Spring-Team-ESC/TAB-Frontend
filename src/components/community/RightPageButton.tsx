import React from 'react';
import {TouchableOpacity, Platform} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/community/RightPageButton';

function RightPageButton() {
    return (
        <TouchableOpacity style = {styles.buttonStyle}>
            <FontAwesome 
                name = 'caret-right'
                size = {Platform.OS == 'ios' ? 30 : 20} 
                color = 'green'
            />
        </TouchableOpacity>
    );
};

export default RightPageButton;