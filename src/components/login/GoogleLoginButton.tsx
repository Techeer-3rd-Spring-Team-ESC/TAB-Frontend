import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';

type loginScreenProp = StackNavigationProp<RootStackParamList, 'EmailLogin'>;

const GoogleLoginButton = () => {
    const navigation = useNavigation<loginScreenProp>();
    const styles = StyleSheet.create({
        buttonStyle: {
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
            padding: 12,
            backgroundColor: 'white',
            borderRadius: 8,
            borderWidth: 1, 
            borderColor: 'black'
        },

        buttonTitle: {
            textAlign: 'center',
            color: 'black', 
            fontSize: 15,
            fontFamily: 'GmarketSansTTFMedium'
        }
    });

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

export default GoogleLoginButton;