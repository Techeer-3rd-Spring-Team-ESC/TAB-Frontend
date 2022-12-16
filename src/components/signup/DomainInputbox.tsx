import React from "react";
import {TextInput} from 'react-native';
import styles from '../../styles/signup/DomainInputbox';

function DomainInputbox() {
    return (
        <TextInput
            style = {styles.inputStyle}
            placeholder = '직접입력'
        >
        </TextInput>
    );
};

export default DomainInputbox;