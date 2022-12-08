import React from 'react';
import {TextInput, StyleSheet, Platform} from 'react-native';

const InputboxID = () => {
    const styles = StyleSheet.create({
        inputStyle: {
            marginTop: Platform.OS == 'ios' ? 5 : 0,
            marginLeft: 20,
            marginBottom: Platform.OS == 'ios' ? 5 : 0,
            padding: 8,
            backgroundColor: 'white',
            borderColor: '#FFFFF',
            borderRadius: 8
        }
    });

    return (
        <TextInput
            style = {styles.inputStyle}
            placeholder = '해쉬태그'
            placeholderTextColor = {'#909090'}
        >
        </TextInput>
    );
};

export default InputboxID;