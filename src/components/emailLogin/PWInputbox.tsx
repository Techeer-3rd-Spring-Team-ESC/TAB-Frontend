import React, {Component} from 'react';
import {TextInput} from 'react-native';
import styles from '../../styles/emailLogin/PWInputbox';

class PWInputbox extends Component {
    render () {
        return (
            <TextInput
                style = {styles.inputStyle}
                placeholder = '비밀번호'
            >
            </TextInput>
        );
    }
};

export default PWInputbox;