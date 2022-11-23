import React from 'react';
 import {View, Text, Button} from 'react-native';
 import {useNavigation} from '@react-navigation/native';
 import {StackNavigationProp} from '@react-navigation/stack';
 import {RootStackParamList} from '../RootStackParams';

 type authScreenProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

 function SignUpScreen() {
   const navigation = useNavigation<authScreenProp>();

   return (
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <Text>회원가입 화면</Text>
       <Button title="회원가입" onPress={() => navigation.navigate('Login')} />
     </View>
   );
 }

 export default SignUpScreen;