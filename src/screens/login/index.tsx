import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackParams';

type loginScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

function AuthScreen() {
  const navigation = useNavigation<loginScreenProp>();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>로그인 화면</Text>
      <Button title="로그인하기" onPress={() => navigation.navigate('Main')} />
    </View>
  );
}

export default AuthScreen;