import React from "react";
import { TouchableOpacity, Text} from "react-native";

const InformationTag = () => {

    return (
        <TouchableOpacity
            style={{ 
            marginTop: 10,
            marginLeft: 20,
            marginRight: 300,
            padding: 12,
            backgroundColor: '#ca8080',
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
                정보
            </Text>
        </TouchableOpacity>
    );
};

export default InformationTag;