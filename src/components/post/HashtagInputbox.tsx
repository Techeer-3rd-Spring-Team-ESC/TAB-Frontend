import React, {Component} from 'react';
import {TextInput} from 'react-native';
import styles from '../../styles/post/HashtagInputbox';

class HashtagInputbox extends Component {
    render () {
        return (
            <TextInput
                style = {styles.inputStyle}
                placeholder = '해쉬태그'
                placeholderTextColor = {'#909090'}
            >
            </TextInput>
        );
    };
};

export default HashtagInputbox;