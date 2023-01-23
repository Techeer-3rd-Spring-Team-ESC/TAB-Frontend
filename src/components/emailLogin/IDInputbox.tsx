import React from 'react';
import {TextInput} from 'react-native';
import styles from '../../styles/emailLogin/IDInputbox';

interface Props {
    setId: React.Dispatch<React.SetStateAction<string>>;
}

function InputboxID({setId}: Props) {
    return (
        <TextInput
            style = {styles.inputStyle}
            placeholder = '아이디'
            onChangeText={(id) => {setId(id)}}
        >
        </TextInput>
    );
};

export default InputboxID;