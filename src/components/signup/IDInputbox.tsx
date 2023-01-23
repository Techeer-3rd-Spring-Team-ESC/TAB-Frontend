import React from "react";
import {TextInput} from 'react-native';
import styles from '../../styles/signup/IDInputbox';

interface Props {
    setId: React.Dispatch<React.SetStateAction<string>>;
}

function IDInputbox({setId}: Props) {
    return (
        <TextInput
            style = {styles.inputStyle}
            placeholder = "이메일"
            onChangeText={(id) => {setId(id)}}
        />
    );
};

export default IDInputbox;