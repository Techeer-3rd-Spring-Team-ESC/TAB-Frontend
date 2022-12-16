import React from 'react';
import {TouchableOpacity, Text} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import styles from '../../styles/signup/SignUpButton';

type SignUpScreenProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

function SignUpButton() {
    const navigation = useNavigation<SignUpScreenProp>();
    return (
        <TouchableOpacity
            style = {styles.buttonStyle}
            onPress={() => navigation.navigate('EmailLogin')}
        >
            <Text style = {styles.buttonTitle}>
                회원가입
            </Text>
        </TouchableOpacity>
    );
};

export default SignUpButton;