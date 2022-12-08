import React from 'react';
import {TextInput, StyleSheet, Text} from 'react-native';

const InputboxName = () => {
    const styles = StyleSheet.create({
        inputStyle: {
            marginTop: 4, 
            marginRight: 20,
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
            placeholder = '이름'
        >
            <Text style = {styles.inputStyle}/>
        </TextInput>
    );
};

export default InputboxName;