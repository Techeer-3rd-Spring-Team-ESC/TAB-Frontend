import React from "react";
import {TextInput, Text} from 'react-native';
import styles from '../../styles/signup/IDInputboxCheck';

interface Props {
    setIdCheck: React.Dispatch<React.SetStateAction<string>>;
}

function IDInputboxCheck({setIdCheck}: Props) {
    return (
        <TextInput
            style = {styles.inputStyle}
            placeholder = 'E-mail 인증번호'
            onChangeText={(idCheck) => {setIdCheck(idCheck)}}
        >
            <Text style = {styles.inputStyle}/>
        </TextInput>
    );
};

export default IDInputboxCheck;