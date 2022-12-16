import React from "react";
import {TouchableOpacity, Text} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import styles from '../../styles/post/UploadButton';

type PostScreenProp = StackNavigationProp <RootStackParamList, 'Post'>;

function UploadButton() {
    const navigation = useNavigation<PostScreenProp>();
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