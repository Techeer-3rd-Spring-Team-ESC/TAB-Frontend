import React from "react";
import { TouchableOpacity, Text} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';

type SignUpScreenProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

const ForgotButton = () => {
    const navigation = useNavigation<SignUpScreenProp>();
    
    return (
        <TouchableOpacity
            style={{ 
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
            padding: 8,
            alignItems: "center",
            borderRadius: 8,
            }}
            onPress={() => navigation.navigate('SignUp')}
        >
            <Text style={{ 
                color: 'green', 
                fontSize: 15,
                textAlign: "center",
                fontFamily: 'GmarketSansTTFLight',
                }}>
                계정이 없으신가요?
            </Text>
        </TouchableOpacity>
    );
};

export default ForgotButton;