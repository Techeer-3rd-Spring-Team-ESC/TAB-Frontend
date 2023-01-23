import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import mainMenuStyles from '../../styles/home/MainMenu';

type loginScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;

function InformationNavigater() {
    const navigation = useNavigation<loginScreenProp>();
    return (
        <TouchableOpacity
            style = {mainMenuStyles.infoButtonStyle}
            onPress = {() => navigation.navigate('Information')}
        >
            <Text style = {mainMenuStyles.buttonText}>
                정보글모음
            </Text>
        </TouchableOpacity>
    );
};

export default InformationNavigater;