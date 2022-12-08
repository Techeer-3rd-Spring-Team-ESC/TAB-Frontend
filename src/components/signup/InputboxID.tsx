import React from 'react';
import {TextInput, StyleSheet, Text} from 'react-native';

const InputboxID = () => {
    const styles = StyleSheet.create({
        inputStyle: {
            marginTop: 4, 
            padding: 8,
            backgroundColor: 'white',
            borderColor: '#FFFFF',
            borderRadius: 8
        },

        inputText: {
            color: 'gray', 
            fontSize: 15,
            fontFamily: 'GmarketSansTTFLight'
        }
    });

    return (
        <TextInput
            style = {styles.inputStyle}
            placeholder = "이메일"
        >
            <Text style = {styles.inputText}>
            </Text>
        </TextInput>
    );
};

export default InputboxID;