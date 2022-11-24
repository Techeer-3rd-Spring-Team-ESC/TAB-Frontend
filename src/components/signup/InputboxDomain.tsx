import React from "react";
import { TextInput, Text} from "react-native";

const Inputbox = () => {
    
    return (
        <TextInput
            style={{
            marginTop: 4, 
            padding: 8,
            backgroundColor: 'white',
            borderColor: '#FFFFF',
            borderRadius: 8,
            }}
            placeholder="직접입력"
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

export default Inputbox;