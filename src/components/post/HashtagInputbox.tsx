import React from "react";
import {Platform, TextInput, Text} from "react-native";

const InputboxID = () => {
    
    return (
        <TextInput
            style={{
                marginTop: Platform.OS == "ios" ? 5 : 0,
                marginBottom: Platform.OS == "ios" ? 5 : 0,
                marginLeft: 20,
                padding: 8,
                backgroundColor: 'white',
                borderColor: '#FFFFF',
                borderRadius: 8,
            }}
            placeholder="해쉬태그"
            placeholderTextColor={"#909090"}
        >
        </TextInput>
    );
};

export default InputboxID;