import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const InputboxID = () => {
    const styles = StyleSheet.create({
        inputStyle: {
            marginRight: 20,
            padding: 10,
            backgroundColor: 'white',
            borderColor: '#FFFFF',
            borderRadius: 8
        }
    });

    return (
        <TextInput
            style = {styles.inputStyle}
            placeholder = '아이디'
        >
        </TextInput>
    );
};

export default InputboxID;