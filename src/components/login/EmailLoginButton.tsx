import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import styles from '../../styles/login/EmailLoginButton';

type EmailLoginScreenProp = StackNavigationProp<RootStackParamList, 'EmailLogin'>;

function EmailLoginButton() {
    const navigation = useNavigation<EmailLoginScreenProp>();
    return (
        <TouchableOpacity
            style = {styles.buttonStyle}
            onPress = {() => navigation.navigate('EmailLogin')}
        >
            <Text style = {styles.buttonTitle}>
                이메일로 시작하기
            </Text>
        </TouchableOpacity>
    );
};

export default EmailLoginButton;