import React from 'react';
import {View, Text} from 'react-native';
import CancelButton from '../../components/post/CancelButton';


function PostScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>포스팅 화면</Text>
        <CancelButton/>
        </View>
    );
}
export default PostScreen;