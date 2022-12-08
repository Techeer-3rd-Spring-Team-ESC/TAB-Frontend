import React from 'react';
import {TouchableOpacity, StyleSheet, Platform, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';

type PostScreenProp = StackNavigationProp<RootStackParamList, 'Post'>;

const CancelButton = () => {
    const navigation = useNavigation<PostScreenProp>();
    const styles = StyleSheet.create({
        buttonStyle: {
            marginTop: Platform.OS == 'ios' ? 30 : 20,
            marginLeft: Platform.OS == 'ios' ? 130 : 140,
            marginRight: 20,
            marginBottom: Platform.OS == 'ios' ? 30 : 50,
            padding: 10,
            backgroundColor: 'white',
            borderRadius: 8,
            borderColor: '#909090',
            borderWidth: 1
        },

        buttonTitle: {
            marginTop: 5,
            textAlign: 'center',
            color: '#909090',
            fontSize: Platform.OS == 'ios' ? 20 : 15,
            fontFamily: 'GmarketSansTTFMedium'
        }
    });

    return (
        <TouchableOpacity
            style = {styles.buttonStyle}
            onPress={() => navigation.navigate('Main')}
        >
            <Text style = {styles.buttonTitle}>
                취소
            </Text>
        </TouchableOpacity>
    );
};

export default CancelButton;