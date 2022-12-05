import React from "react";
import {Platform, TouchableOpacity, Text} from "react-native";

const InformationTag = () => {

    return (
        <TouchableOpacity
            style={{ 
            marginTop: Platform.OS == 'ios' ? 10 : 5,
            marginLeft: 20,
            marginRight: 300,
            padding: Platform.OS == 'ios' ? 10 : 5,
            backgroundColor: '#ca8080',
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
                정보
            </Text>
        </TouchableOpacity>
    );
};

export default InformationTag;