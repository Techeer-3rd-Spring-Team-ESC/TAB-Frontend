import React from "react";
import { TextInput, Text} from "react-native";

const InputboxID = () => {
    
    return (
        <TextInput
            style={{ 
            marginRight: 20,
            padding: 10,
            backgroundColor: 'white',
            borderColor: '#FFFFF',
            borderRadius: 8,
            }}
            placeholder="아이디"
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

export default InputboxID;