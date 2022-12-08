import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';

type loginScreenProp = StackNavigationProp<RootStackParamList, 'EmailLogin'>;

const GithubLoginButton = () => {
    const navigation = useNavigation<loginScreenProp>();
    const styles = StyleSheet.create({
        buttonStyle: {
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
            padding: 12,
            backgroundColor: '#171515',
            borderRadius: 8
        },

        buttonTitle: {
            textAlign: 'center',
            color: 'white', 
            fontSize: 15,
            fontFamily: 'GmarketSansTTFMedium',
        }
    });

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