import React from "react";
import { TouchableOpacity, Text} from "react-native";

const EmailCheckButton = () => {
    
    return (
        <TouchableOpacity
            style={{
            marginLeft: 10,
            padding: 14,
            backgroundColor: '#2BC63B',
            borderRadius: 8,
            }}
        >
            <Text style={{ 
                marginTop: 4,
                textAlign: 'center',
                color: 'white', 
                fontSize: 15,
                fontFamily: 'GmarketSansTTFMedium',
                }}>
                인증하기
            </Text>
        </TouchableOpacity>
    );
};

export default EmailCheckButton;