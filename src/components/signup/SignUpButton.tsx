import React from "react";
import { TouchableOpacity, Text} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';

type SignUpScreenProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

const SignUpButton = () => {
    const navigation = useNavigation<SignUpScreenProp>();
    
    return (
        <TouchableOpacity
            style={{ 
            marginTop: 30,
            marginLeft: 20,
            marginRight: 20,
            padding: 15,
            backgroundColor: '#2BC63B',
            borderRadius: 8,
            }}
            onPress={() => navigation.navigate('Login')}
        >
            <Text style={{ 
                color: 'white', 
                fontSize: 20,
                fontFamily: 'GmarketSansTTFMedium',
                textAlign: 'center'
                }}>
                회원가입
            </Text>
        </TouchableOpacity>
    );
};

export default SignUpButton;