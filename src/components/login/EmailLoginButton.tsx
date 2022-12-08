import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';

type EmailLoginScreenProp = StackNavigationProp<RootStackParamList, 'EmailLogin'>;

const EmailLoginButton = () => {
    const navigation = useNavigation<EmailLoginScreenProp>();
    const styles = StyleSheet.create({
        buttonStyle: {
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
            padding: 12,
            backgroundColor: '#2BC63B',
            borderRadius: 8
        },

        buttonTitle: {
            textAlign: 'center',
            color: 'white', 
            fontSize: 15,
            fontFamily: 'GmarketSansTTFMedium'
        }
    });

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