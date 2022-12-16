import React from 'react';
import {TextInput} from 'react-native';
import styles from '../../styles/post/HashtagInputbox';

function HashtagInputbox() {
    return (
        <TextInput
            style = {styles.inputStyle}
            placeholder = '해쉬태그'
            placeholderTextColor = {'#909090'}
        >
        </TextInput>
    );
};

export default HashtagInputbox;