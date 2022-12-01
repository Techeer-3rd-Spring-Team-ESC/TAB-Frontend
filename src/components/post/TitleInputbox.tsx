import React from "react";
import {Platform, TextInput, Text} from "react-native";

const TitleInputbox = () => {
    
    return (
        <TextInput
            style={{
            marginTop: Platform.OS == "ios" ? 5 : 0,
            marginBottom: Platform.OS == "ios" ? 5 : 0,
            padding: 8,
            backgroundColor: 'white',
            borderColor: '#FFFFF',
            borderRadius: 8,
            }}
            placeholder="제목"
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

export default TitleInputbox;