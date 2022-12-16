import React from "react";
import {TextInput, Text} from 'react-native';
import styles from '../../styles/signup/IDInputboxCheck';

function IDInputboxCheck() {
    return (
        <TextInput
            style = {styles.inputStyle}
            placeholder = 'E-mail 인증번호'
        >
            <Text style = {styles.inputStyle}/>
        </TextInput>
    );
};

export default IDInputboxCheck;