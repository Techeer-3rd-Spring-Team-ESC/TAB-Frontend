import React from "react";
import {Platform, TouchableOpacity, Text} from "react-native";

const QuestionTag = () => {

    return (
        <TouchableOpacity
            style={{ 
            marginTop: 10,
            marginLeft: 20,
            marginRight: 300,
            padding: Platform.OS == 'ios' ? 10 : 5,
            backgroundColor: '#A3F4A1',
            borderRadius: 8,
            borderColor: 'black'
            }}
        >
            <Text style={{ 
                color: 'black', 
                fontSize: 15,
                fontFamily: 'GmarketSansTTFMedium',
                textAlign: 'center'
                }}>
                질문
            </Text>
        </TouchableOpacity>
    );
};

export default QuestionTag;