import React from 'react';
import {TextInput} from 'react-native';
import styles from '../../styles/emailLogin/IDInputbox';

function InputboxID() {
    return (
        <TextInput
            style = {styles.inputStyle}
            placeholder = '아이디'
        >
        </TextInput>
    );
};

export default InputboxID;