import React from 'react';
import {TextInput, Text} from "react-native";
import styles from '../../styles/signup/PWInputboxCheck';

interface Props {
    setPwCheck: React.Dispatch<React.SetStateAction<string>>;
}

function PWInputboxCheck({setPwCheck}: Props) {
    return (
        <TextInput
            style = {styles.inputStyle}
            placeholder = '비밀번호 확인'
            onChangeText={(pwCheck) => {setPwCheck(pwCheck)}}
        >
            <Text style = {styles.inputText}/>
        </TextInput>
    );
};

export default PWInputboxCheck;