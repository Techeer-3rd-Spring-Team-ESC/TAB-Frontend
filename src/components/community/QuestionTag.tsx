import React from "react";
import { TouchableOpacity, Text} from "react-native";

const QuestionTag = () => {

    return (
        <TouchableOpacity
            style={{ 
            marginTop: 10,
            marginLeft: 20,
            marginRight: 300,
            padding: 12,
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