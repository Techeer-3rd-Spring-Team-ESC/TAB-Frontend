import React from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/post/AttachmentButton';

function LinkButton() {
    return (
        <TouchableOpacity
            style = {styles.buttonStyle}
        >
            <FontAwesome 
            name = 'link' 
            size = {40} 
            color = '#909090' />
        </TouchableOpacity>
    );
};

export default LinkButton;