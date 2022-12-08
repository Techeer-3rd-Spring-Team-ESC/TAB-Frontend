import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const InputboxDomain = () => {
    const styles = StyleSheet.create({
        inputStyle: {
            marginTop: 4, 
            padding: 8,
            backgroundColor: 'white',
            borderColor: '#FFFFF',
            borderRadius: 8
        }
    });

    return (
        <TextInput
            style = {styles.inputStyle}
            placeholder = '직접입력'
        >
        </TextInput>
    );
};

export default InputboxDomain;