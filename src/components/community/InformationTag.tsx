import React from 'react';
import {TouchableOpacity, StyleSheet, Platform, Text} from 'react-native';

const InformationTag = () => {
    const styles = StyleSheet.create({
        tagStyle: {
            width: '20%',
            height: Platform.OS == 'ios' ? 30 : 27,
            marginTop: Platform.OS == 'ios' ? 10 : 5,
            marginLeft: 20,
            padding: 7,
            backgroundColor: '#ca8080',
            borderRadius: 8,
            borderColor: 'black'
        },

        tagTitle: {
            color: 'black',
            fontSize: Platform.OS == 'ios' ? 15 : 13,
            fontFamily: 'GmarketSansTTFMedium',
            textAlign: 'center'
        }
        
    });

    return (
        <TouchableOpacity style = {styles.tagStyle}>
            <Text style = {styles.tagTitle}>
                정보
            </Text>
        </TouchableOpacity>
    );
};

export default InformationTag;