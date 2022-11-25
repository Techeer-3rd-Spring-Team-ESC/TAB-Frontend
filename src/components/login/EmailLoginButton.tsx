import React from "react";
import { TouchableOpacity, Text} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';

type loginScreenProp = StackNavigationProp<RootStackParamList, 'EmailLogin'>;

const EmailLoginButton = () => {
    const navigation = useNavigation<loginScreenProp>();
    
    return (
        <TouchableOpacity
            style={{ 
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
            padding: 12,
            backgroundColor: '#2BC63B',
            borderRadius: 8,
            }}
            onPress={() => navigation.navigate('EmailLogin')}
        >
            <Text style={{ 
                color: 'white', 
                fontSize: 15,
                fontFamily: 'GmarketSansTTFMedium',
                textAlign: 'center'
                }}>
                이메일로 시작하기
            </Text>
        </TouchableOpacity>
    );
};

export default EmailLoginButton;