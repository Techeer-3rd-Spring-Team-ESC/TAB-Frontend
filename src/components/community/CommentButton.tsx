import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CommentButton = () => {
    const styles = StyleSheet.create({
        buttonStyle: {
            marginLeft: 5,
            padding: 10
        }
    });

    return (
        <TouchableOpacity style = {styles.buttonStyle}>
            <FontAwesome 
                name = 'comment'
                size = {20} 
                color = 'gray'
            />
        </TouchableOpacity>
    );
};

export default CommentButton;