import React from 'react';
import {TextInput} from 'react-native';
import styles from '../../styles/post/TitleInputbox';

interface Props {
    setTitle: React.Dispatch<React.SetStateAction<String>>;
}

function TitleInputbox({setTitle}: Props) {
    return (
        <TextInput
            style = {styles.inputStyle}
            placeholder = '제목'
            placeholderTextColor = {'#909090'}
            onChangeText={(title) => {setTitle(title)}}
        >
        </TextInput>
    );
};

export default TitleInputbox;