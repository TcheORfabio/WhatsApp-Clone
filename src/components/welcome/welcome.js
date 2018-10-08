import React from 'react';
import { View, Text, Button, Image, ImageBackground } from 'react-native';
import backgroundImage from '../../imgs/bg.png';
import logo from '../../imgs/logo.png';

const Welcome = (props) => (
  <ImageBackground style={{ flex: 1, width: null }} source={backgroundImage} >
    <View style={{ flex: 2, padding: 10, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30, color: '#fff', margin: 15 }}> Seja Bem Vindo! </Text>
      <Image source={logo} />
    </View>
    <View style={{ flex: 1, padding: 10 }}>
      <Button title='Logar' onPress={() => props.navigation.navigate('Home')} />
    </View>
  </ImageBackground>
);

Welcome.navigationOptions = {
  header: null,
};

export default Welcome;
