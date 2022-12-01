import React from "react";
import {Platform, TouchableOpacity} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ImageButton = () => {
    
    return (
        <TouchableOpacity
            style={{ 
            marginTop: Platform.OS == "ios" ? 20 : 10,
            marginLeft: 10,
            padding: 10,
            backgroundColor: 'white',
            borderRadius: 8,
            }}
        >
            <FontAwesome name='image' size={40} color='#2BC63B' />
        </TouchableOpacity>
    );
};

export default ImageButton;