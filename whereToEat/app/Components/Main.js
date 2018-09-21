import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Main = () => ( 
    <View style = { styles.container }>
    <Text>Main</Text>
   </View>
  
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8C42',
    alignItems: 'center',
    justifyContent: 'center',
  },
});