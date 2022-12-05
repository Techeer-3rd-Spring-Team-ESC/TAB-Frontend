import React from "react";
import {TouchableOpacity} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LikeButton = () => {
   
    return (
        <TouchableOpacity
            style={{ 
            padding: 9,
            }}
        >
            <FontAwesome name='heart' size={20} color='gray' />
        </TouchableOpacity>
    );
};

export default LikeButton;