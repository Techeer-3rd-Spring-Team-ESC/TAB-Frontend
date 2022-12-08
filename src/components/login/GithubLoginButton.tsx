import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import styles from '../../styles/login/GithubLoginButton';

type loginScreenProp = StackNavigationProp<RootStackParamList, 'EmailLogin'>;

function GithubLoginButton() {
    const navigation = useNavigation<loginScreenProp>();
    return (
        <TouchableOpacity
            style = {styles.buttonStyle}
            onPress = {() => navigation.navigate('Main')}
        >
            <Text style = {styles.buttonTitle}>
                깃허브로 시작하기
            </Text>
        </TouchableOpacity>
    );
};

export default GithubLoginButton;