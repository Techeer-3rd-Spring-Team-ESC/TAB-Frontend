import React from 'react';
import {TextInput, StyleSheet, Platform} from 'react-native';

const TitleInputbox = () => {
    const styles = StyleSheet.create({
        inputStyle: {
            marginTop: Platform.OS == 'ios' ? 5 : 0,
            marginLeft: 20,
            marginBottom: Platform.OS == "ios" ? 5 : 0,
            padding: 10
        }
    });

    return (
        <TextInput
            style = {styles.inputStyle}
            placeholder = '제목'
            placeholderTextColor = {'#909090'}
        >
        </TextInput>
    );
};

export default TitleInputbox;