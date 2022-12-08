import React, {Component} from 'react';
import {TextInput, Text} from 'react-native';
import styles from '../../styles/signup/PWInputbox';

class PWInputbox extends Component {
    render () {
        return (
            <TextInput
                style = {styles.inputStyle}
                placeholder = '비밀번호'
            >
                <Text style = {styles.inputText}/>
            </TextInput>
        );
    };
};

export default PWInputbox;