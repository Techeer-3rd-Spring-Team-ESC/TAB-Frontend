import React from "react";
import { TextInput, Text} from "react-native";

const InputboxPWcheck = () => {
    
    return (
        <TextInput
            style={{ 
            marginRight: 20,
            padding: 8,
            backgroundColor: 'white',
            borderColor: '#FFFFF',
            borderRadius: 8,
            }}
            placeholder="비밀번호 확인"
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

export default InputboxPWcheck;