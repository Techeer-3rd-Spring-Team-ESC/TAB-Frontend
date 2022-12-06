import React from "react";
import {Platform, TouchableOpacity, Text} from "react-native";

const QuestionTag = () => {

    return (
        <TouchableOpacity
            style={{
            width: "20%",
            height: Platform.OS == 'ios' ? 30 : 27,
            marginTop: Platform.OS == 'ios' ? 10 : 5,
            marginLeft: 20,
            padding: 7,
            backgroundColor: '#A3F4A1',
            borderRadius: 8,
            borderColor: 'black'
            }}
        >
            <Text style={{ 
                color: 'black', 
                fontSize: Platform.OS == 'ios' ? 15 : 13,
                fontFamily: 'GmarketSansTTFMedium',
                textAlign: 'center'
                }}>
                질문
            </Text>
        </TouchableOpacity>
    );
};

export default QuestionTag;