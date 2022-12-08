import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';

type SignUpScreenProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

const ForgotButton = () => {
    const navigation = useNavigation<SignUpScreenProp>();
    const styles = StyleSheet.create({
        buttonStyle: {
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
            padding: 8,
            alignItems: 'center',
            borderRadius: 8
        },

        buttonTitle: {
            textAlign: 'center',
            color: 'green', 
            fontSize: 15,
            fontFamily: 'GmarketSansTTFLight'
        }
    });

    return (
        <TouchableOpacity
            style = {styles.buttonStyle}
            onPress = {() => navigation.navigate('SignUp')}
        >
            <Text style = {styles.buttonTitle}>
                계정이 없으신가요?
            </Text>
        </TouchableOpacity>
    );
};

export default ForgotButton;