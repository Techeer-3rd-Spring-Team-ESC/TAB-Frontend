import React from 'react';
import {View, Text} from 'react-native';
import CancelButton from '../../components/post/CancelButton';


function ArticleScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>본문 화면</Text>
        <CancelButton/>
        </View>
    );
}
export default ArticleScreen;