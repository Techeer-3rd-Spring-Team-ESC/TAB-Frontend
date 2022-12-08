import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {RadioButton} from 'react-native-paper';
import styles from '../../styles/post/CategoryCheck';

class CategoryCheck extends Component {
  render () {
    const [checked, setChecked] = React.useState('first');
    return (
      <View style = {styles.checkboxContainer}>
        <Text style = {styles.informationtitle}>
          정보
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
        <Text style = {styles.questiontitle}>
          질문
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
  
export default CategoryCheck;