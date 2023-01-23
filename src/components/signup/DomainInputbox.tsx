import React from "react";
import {TextInput} from 'react-native';
import styles from '../../styles/signup/DomainInputbox';

interface Props {
    setDomain: React.Dispatch<React.SetStateAction<string>>;
}

function DomainInputbox({setDomain}: Props) {
    return (
        <TextInput
            style = {styles.inputStyle}
            placeholder = '직접입력'
            onChangeText={(domain) => {setDomain(domain)}}
        >
        </TextInput>
    );
};

export default DomainInputbox;