import React from 'react';
import {TextInput} from 'react-native';
import styles from '../../styles/emailLogin/PWInputbox';

interface Props {
    setPassword: React.Dispatch<React.SetStateAction<string>>;
}

function PWInputbox({setPassword}: Props) {
    return (
        <TextInput
            style = {styles.inputStyle}
            placeholder = '비밀번호'
            onChangeText={(password) => {setPassword(password)}}
        >
        </TextInput>
    );
};

export default PWInputbox;