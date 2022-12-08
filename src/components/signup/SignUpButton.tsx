import React from "react";
import {TouchableOpacity, StyleSheet, Text} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';

type SignUpScreenProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

const SignUpButton = () => {
    const navigation = useNavigation<SignUpScreenProp>();
    const styles = StyleSheet.create({
        inputStyle: {
            marginTop: 30,
            marginLeft: 3,
            marginRight: 3,
            padding: 15,
            backgroundColor: '#2BC63B',
            borderRadius: 8
        },

        inputText: {
            color: 'white',
            textAlign: 'center',
            fontSize: 20,
            fontFamily: 'GmarketSansTTFMedium'
        }
    });

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

export default SignUpButton;