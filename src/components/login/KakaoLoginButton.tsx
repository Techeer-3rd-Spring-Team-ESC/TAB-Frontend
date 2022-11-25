import React from "react";
import { TouchableOpacity, Text} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';

type loginScreenProp = StackNavigationProp<RootStackParamList, 'EmailLogin'>;

const KakaoLoginButton = () => {
    const navigation = useNavigation<loginScreenProp>();
    
    return (
        <TouchableOpacity
            style={{ 
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
            padding: 12,
            backgroundColor: '#F7E600',
            borderRadius: 8,
            borderColor: 'black'
            }}
            onPress={() => navigation.navigate('Main')}
        >
            <Text style={{ 
                color: 'black', 
                fontSize: 15,
                fontFamily: 'GmarketSansTTFMedium',
                textAlign: 'center'
                }}>
                카카오톡으로 시작하기
            </Text>
        </TouchableOpacity>
    );
};

export default KakaoLoginButton;