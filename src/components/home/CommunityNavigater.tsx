import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import mainMenuStyles from '../../styles/home/MainMenu';

type loginScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;

function CommunityNavigater() {
    const navigation = useNavigation<loginScreenProp>();
    return (
        <TouchableOpacity
            style = {mainMenuStyles.buttonStyle}
            onPress = {() => navigation.navigate('Community')}
        >
            <Text style = {mainMenuStyles.buttonText}>
                게시글모음
            </Text>
        </TouchableOpacity>
    );
};

export default CommunityNavigater;