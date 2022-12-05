import React from "react";
import {Platform, TextInput, Text} from "react-native";

const TitleInputbox = () => {
    
    return (
        <TextInput
            style={{
            marginTop: Platform.OS == "ios" ? 5 : 0,
            marginBottom: Platform.OS == "ios" ? 5 : 0,
            marginLeft: 20,
            padding: 10,
            }}
            placeholder="제목"
            placeholderTextColor={"#909090"}
        >
        </TextInput>
    );
};

export default TitleInputbox;