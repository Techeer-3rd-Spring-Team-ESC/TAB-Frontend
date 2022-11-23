import React from "react";
import { TextInput, Text} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../screens/RootStackParams';

type loginScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

const LoginButton = () => {
    const navigation = useNavigation<loginScreenProp>();
    
    return (
        <TextInput
            style={{ 
            marginRight: 20,
            padding: 8,
            backgroundColor: 'white',
            borderColor: '#FFFFF',
            borderRadius: 8,
            }}
        >
            <Text style={{ 
                color: 'gray', 
                fontSize: 15,
                fontFamily: 'GmarketSansTTFLight',
                }}>
                아이디
            </Text>
        </TextInput>
    );
};

export default LoginButton;