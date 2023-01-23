import React from 'react';
import {View, Text} from 'react-native';
import {CheckboxItemProps, CheckboxProps, RadioButton} from 'react-native-paper';
import styles from '../../styles/post/AnonymousCheck';

interface Props {
  setAnonymousChecked: React.Dispatch<React.SetStateAction<String>>;
}

function AnonymousCheck({setAnonymousChecked}: Props) {
  const [checked, setChecked] = React.useState('first');
  return (
    <View style = {styles.checkboxContainer}>
      <Text style = {styles.anonymoustitle}>
        익명
      </Text>
      <View style = {styles.radio}>
        <RadioButton
          value = 'first'
          status = { checked === 'first' ? 'checked' : 'unchecked' }
          onPress = {() => setAnonymousChecked('first')}
          color = {'#909090'}
          uncheckedColor = {'#CECECE'}
        />
      </View>
      <Text style = {styles.realnametitle}>
        실명
      </Text>
      <View style = {styles.radio}>
        <RadioButton
          value = 'second'
          status = { checked === 'second' ? 'checked' : 'unchecked' }
          onPress = {() => setAnonymousChecked('second')}
          color = {'#909090'}
          uncheckedColor = {'#CECECE'}
        />
      </View>
    </View>
  );
};
  
export default AnonymousCheck;