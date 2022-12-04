import React from "react";
import {TouchableOpacity} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const BookmarkButton = () => {
   
    return (
        <TouchableOpacity
            style={{ 
            marginLeft: 5,
            padding: 10,
            }}
        >
            <FontAwesome name='bookmark' size={20} color='gray' />
        </TouchableOpacity>
    );
};

export default BookmarkButton;