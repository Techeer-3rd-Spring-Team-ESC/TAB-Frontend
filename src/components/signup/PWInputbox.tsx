import React from 'react';
import {TextInput, Text} from 'react-native';
import styles from '../../styles/signup/PWInputbox';

function PWInputbox() {
    return (
        <TextInput
            style = {styles.inputStyle}
            placeholder = '비밀번호'
        >
            <Text style = {styles.inputText}/>
        </TextInput>
    );
};

export default PWInputbox;