import React from "react";
import {Platform, Text} from "react-native";

const PostList = () => {

    return (
        <Text
            numberOfLines= {2} 
            style={{ 
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
            color: 'black', 
            fontSize: 15,
            fontFamily: 'GmarketSansTTFMedium',
            }}>
            A Step-by-Step Guid -- Are you looking for a new, creative project? What about building your own Telegram bot in Python? Sounds fun
        </Text>
    );
};

export default PostList;