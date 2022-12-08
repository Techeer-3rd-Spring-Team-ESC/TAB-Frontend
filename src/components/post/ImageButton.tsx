import React from 'react';
import {TouchableOpacity, StyleSheet, Platform} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ImageButton = () => {
    const styles = StyleSheet.create({
        buttonStyle: {
            marginTop: Platform.OS == "ios" ? 20 : 10,
            marginLeft: 10,
            padding: 10,
            backgroundColor: 'white',
            borderRadius: 8
        }
    });

    return (
        <TouchableOpacity
            style = {styles.buttonStyle}
        >
            <FontAwesome 
                name = 'image' 
                size = {40} 
                color = '#909090'
            />
        </TouchableOpacity>
    );
};

export default ImageButton;