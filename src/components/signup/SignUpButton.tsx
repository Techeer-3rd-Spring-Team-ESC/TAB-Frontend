import React, {Component} from 'react';
import {TouchableOpacity, Text} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import styles from '../../styles/signup/PWInputboxCheck';

type SignUpScreenProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

class SignUpButton extends Component {
    render () {
        const navigation = useNavigation<SignUpScreenProp>();
        return (
            <TouchableOpacity
                style = {styles.inputStyle}
                onPress={() => navigation.navigate('EmailLogin')}
            >
                <Text style = {styles.inputText}>
                    회원가입
                </Text>
            </TouchableOpacity>
        );
    };
};

export default SignUpButton;