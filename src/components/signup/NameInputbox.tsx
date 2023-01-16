import React from 'react';
import {TextInput, Text} from 'react-native';
import styles from '../../styles/signup/NameInputbox';

interface Props {
    setName: React.Dispatch<React.SetStateAction<string>>;
}

function NameInputbox({setName}: Props) {
    return (
        <TextInput
            style = {styles.inputStyle}
            placeholder = '이름'
            onChangeText={(name) => {setName(name)}}
        >
            <Text style = {styles.inputStyle}/>
        </TextInput>
    );
};

export default NameInputbox;