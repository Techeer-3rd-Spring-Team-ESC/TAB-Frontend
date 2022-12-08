import React from "react";
import {TextInput, StyleSheet, Text} from "react-native";

const InputboxPWcheck = () => {
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
            placeholder = '비밀번호 확인'
        >
            <Text style = {styles.inputText}/>
        </TextInput>
    );
};

export default InputboxPWcheck;