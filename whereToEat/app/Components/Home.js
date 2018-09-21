import React from 'react';

import { 
  StyleSheet, 
  Text,
  Image , 
  View ,
  TouchableOpacity
} from 'react-native';
import Main from './Main';

onPressContinue = () => alert('continue clicked')

const Home = () => ( 
  <View style = { styles.container }>
  <Image
  source = { require('../Img/logo.png' )}
  style = {
    {
      width:200,
      height:200
    }
  }/>
  <TouchableOpacity style = { styles.continueButton } onPress= { this.onPressContinue }><Text style = { styles.continueButtonText }>Continue  </Text></TouchableOpacity>
 </View>

);
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  continueButton: {
    alignItems: 'center',
    backgroundColor: '#841B1B',
    padding: 10
  },

  continueButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
  },
});

export default Home;

