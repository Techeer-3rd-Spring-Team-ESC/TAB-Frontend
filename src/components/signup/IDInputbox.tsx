import React from "react";
import {TextInput, Text} from 'react-native';
import styles from '../../styles/signup/IDInputbox';

function IDInputbox() {
    return (
        <TextInput
            style = {styles.inputStyle}
            placeholder = "이메일"
        >
            <Text style = {styles.inputText}>
            </Text>
        </TextInput>
    );
};

export default IDInputbox;