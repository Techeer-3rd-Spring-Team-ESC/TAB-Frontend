import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {RadioButton} from 'react-native-paper';
import styles from '../../styles/post/AnonymousCheck';

class AnonymousCheck extends Component {
  render () {
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
            onPress = {() => setChecked('first')}
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
            onPress = {() => setChecked('second')}
            color = {'#909090'}
            uncheckedColor = {'#CECECE'}
          />
        </View>
      </View>
    );
  };
};
  
export default AnonymousCheck;