import React, {Component} from 'react';
import {TextInput} from 'react-native';
import styles from '../../styles/emailLogin/IDInputbox';

class InputboxID extends Component {
    render () {
        return (
            <TextInput
                style = {styles.inputStyle}
                placeholder = '아이디'
            >
            </TextInput>
        );
    }
};

export default InputboxID;