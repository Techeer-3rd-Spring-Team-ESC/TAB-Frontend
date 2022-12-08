import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import styles from '../../styles/login/KakaoLoginButton';

type loginScreenProp = StackNavigationProp<RootStackParamList, 'EmailLogin'>;

class KakaoLoginButton extends Component {
    render () {
        const navigation = useNavigation<loginScreenProp>();
        return (
            <TouchableOpacity
                style = {styles.buttonStyle}
                onPress = {() => navigation.navigate('Main')}
            >
                <Text style = {styles.buttonTitle}>
                    카카오톡으로 시작하기
                </Text>
            </TouchableOpacity>
        );
    };
};

export default KakaoLoginButton;