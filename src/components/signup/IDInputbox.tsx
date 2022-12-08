import React, {Component} from "react";
import {TextInput, Text} from 'react-native';
import styles from '../../styles/signup/IDInputbox';

class IDInputbox extends Component {
    render () {
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
};

export default IDInputbox;