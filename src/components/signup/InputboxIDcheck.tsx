import React from "react";
import { TextInput, Text} from "react-native";

const InputboxIDcheck = () => {
    
    return (
        <TextInput
            style={{ 
            marginRight: 20,
            padding: 8,
            backgroundColor: 'white',
            borderColor: '#FFFFF',
            borderRadius: 8,
            }}
            placeholder="E-mail 인증번호"
        >
            <Text style={{ 
                color: 'gray', 
                fontSize: 15,
                fontFamily: 'GmarketSansTTFLight',
                }}>
            </Text>
        </TextInput>
    );
};

export default InputboxIDcheck;