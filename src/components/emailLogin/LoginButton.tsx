import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';

type loginScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

const LoginButton = () => {
    const navigation = useNavigation<loginScreenProp>();
    const styles = StyleSheet.create({
        buttonStyle: {
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            padding: 10,
            backgroundColor: '#2BC63B',
            borderRadius: 8
        },

        buttonTitle: {
            textAlign: 'center',
            color: 'white', 
            fontSize: 20,
            fontFamily: 'GmarketSansTTFMedium'
        }
    });

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