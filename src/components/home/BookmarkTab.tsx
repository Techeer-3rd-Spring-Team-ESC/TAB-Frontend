import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import styles from '../../styles/emailLogin/ForgotButton';

type loginScreenProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

function ForgotButton() {
    return (
        <View style = {styles.buttonStyle}>
            <Text >
                계정이 없으신가요?
            </Text>
        </View>
    );
};

export default ForgotButton;