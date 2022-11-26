import React from "react";
import { TextInput, Text} from "react-native";

const InputboxPW = () => {
    
    return (
        <TextInput
            style={{ 
            marginRight: 20,
            padding: 10,
            backgroundColor: 'white',
            borderColor: '#FFFFF',
            borderRadius: 10,
            }}
            placeholder="비밀번호"
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

export default InputboxPW;