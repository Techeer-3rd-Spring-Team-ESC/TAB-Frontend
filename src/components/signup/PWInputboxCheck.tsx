import React, {Component} from 'react';
import {TextInput, Text} from "react-native";
import styles from '../../styles/signup/PWInputboxCheck';

class PWInputboxCheck extends Component {
    render () {
        return (
            <TextInput
                style = {styles.inputStyle}
                placeholder = '비밀번호 확인'
            >
                <Text style = {styles.inputText}/>
            </TextInput>
        );
    };
};

export default PWInputboxCheck;