import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import styles from '../../styles/emailLogin/LoginButton';

type loginScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

function LoginButton() {
    const navigation = useNavigation<loginScreenProp>();
    return (
        <TouchableOpacity
            style = {styles.buttonStyle}
            onPress = {() => navigation.navigate('Main')}
        >
            <Text style = {styles.buttonTitle}>
                로그인
            </Text>
        </TouchableOpacity>
    );
};

export default LoginButton;