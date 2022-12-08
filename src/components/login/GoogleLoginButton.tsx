import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import styles from '../../styles/login/GoogleLoginButton';

type loginScreenProp = StackNavigationProp<RootStackParamList, 'EmailLogin'>;

class GoogleLoginButton extends Component {
    render () {
    const navigation = useNavigation<loginScreenProp>();
        return (
            <TouchableOpacity
                style = {styles.buttonStyle}
                onPress = {() => navigation.navigate('Main')}
            >
                <Text style = {styles.buttonTitle}>
                    구글로 시작하기
                </Text>
            </TouchableOpacity>
        );
    };
};

export default GoogleLoginButton;