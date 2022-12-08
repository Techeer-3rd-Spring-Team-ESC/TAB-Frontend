import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const InputboxPW = () => {
    const styles = StyleSheet.create({
        inputStyle: {
            marginRight: 20,
            padding: 10,
            backgroundColor: 'white',
            borderColor: '#FFFFF',
            borderRadius: 10
        }
    });

    return (
        <TextInput
            style = {styles.inputStyle}
            placeholder = '비밀번호'
        >
        </TextInput>
    );
};

export default InputboxPW;