import React from 'react';
import {TouchableOpacity, StyleSheet, Platform, Text} from 'react-native';

const EmailCheckButton = () => {
    const styles = StyleSheet.create({
        buttonStyle: {
            marginLeft: 10,
            padding: 14,
            backgroundColor: '#2BC63B',
            borderRadius: 8
        },

        buttonTitle: {
            marginTop: 4,
            textAlign: 'center',
            color: 'white', 
            fontSize: 15,
            fontFamily: 'GmarketSansTTFMedium'
        }
    });

    return (
        <TouchableOpacity style = {styles.buttonStyle}>
            <Text style = {styles.buttonTitle}>
                인증하기
            </Text>
        </TouchableOpacity>
    );
};

export default EmailCheckButton;