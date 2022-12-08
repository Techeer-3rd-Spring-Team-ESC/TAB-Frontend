import React, {Component} from "react";
import {TextInput} from 'react-native';
import styles from '../../styles/signup/DomainInputbox';

class DomainInputbox extends Component {
    render () {
        return (
            <TextInput
                style = {styles.inputStyle}
                placeholder = '직접입력'
            >
            </TextInput>
        );
    };
};

export default DomainInputbox;