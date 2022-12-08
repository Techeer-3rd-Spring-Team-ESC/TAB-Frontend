import React from 'react';
import {TextInput} from 'react-native';
import styles from '../../styles/emailLogin/PWInputbox';

function PWInputbox() {
    return (
        <TextInput
            style = {styles.inputStyle}
            placeholder = '비밀번호'
        >
        </TextInput>
    );
};

export default PWInputbox;