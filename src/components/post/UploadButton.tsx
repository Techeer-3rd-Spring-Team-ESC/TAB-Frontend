import React from "react";
import {TouchableOpacity, StyleSheet, Platform, Text} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';

type PostScreenProp = StackNavigationProp<RootStackParamList, 'Post'>;

const UploadButton = () => {
    const navigation = useNavigation<PostScreenProp>();
    const styles = StyleSheet.create({
        buttonStyle: {
            marginTop: Platform.OS == "ios" ? 30 : 20,
            marginRight: 20,
            marginBottom: Platform.OS == "ios" ? 30 : 50,
            padding: 10,
            backgroundColor: '#2BC63B',
            borderRadius: 8
        },

        buttonTitle: {
            marginTop: 5,
            textAlign: 'center',
            color: 'white',
            fontSize: Platform.OS == "ios" ? 20 : 15,
            fontFamily: 'GmarketSansTTFMedium'   
        }
    });

    return (
        <TouchableOpacity
            style = {styles.buttonStyle}
            onPress={() => navigation.navigate('Main')}
        >
            <Text style = {styles.buttonTitle}>
                등록
            </Text>
        </TouchableOpacity>
    );
};

export default UploadButton;