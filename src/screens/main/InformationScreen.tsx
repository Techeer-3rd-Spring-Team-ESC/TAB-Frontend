import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

function InformationScreen() {
  const styles = StyleSheet.create({
    container: {
      height: 1000,
      backgroundColor: '#F8F9FA',
    },
    post: {
      marginLeft: 15,
      marginTop: 20,
    },
    pstext: {
      marginTop: 18,
      marginLeft: 6,
      marginRight: 140,
      fontSize: 16,
    },
    hashtag: {
      fontSize: 10,
    },
  });
  return (
    <SafeAreaView>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text>EBC</Text>
        <Text>정보공유</Text>
      </View>
    </SafeAreaView>
  );
}
export default InformationScreen;
