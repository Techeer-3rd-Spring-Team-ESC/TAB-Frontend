import React from 'react';
import {TextInput, Text} from 'react-native';
import styles from '../../styles/signup/NameInputbox';

function NameInputbox() {
    return (
        <TextInput
            style = {styles.inputStyle}
            placeholder = '이름'
        >
            <Text style = {styles.inputStyle}/>
        </TextInput>
    );
};

export default NameInputbox;