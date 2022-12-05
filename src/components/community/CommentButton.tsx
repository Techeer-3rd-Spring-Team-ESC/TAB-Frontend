import React from "react";
import {TouchableOpacity} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CommentButton = () => {
   
    return (
        <TouchableOpacity
            style={{ 
            padding: 8,
            }}
        >
            <FontAwesome 
            name='comment' size={20} color='gray' />
        </TouchableOpacity>
    );
};

export default CommentButton;