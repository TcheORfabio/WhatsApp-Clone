import React from 'react';
import { ImageBackground, Text } from 'react-native';
import backgroundImage from '../../imgs/bg.png';

export default () => (
  <ImageBackground style={{ flex: 1, width: null }} source={backgroundImage} >
    <Text>Contatos</Text>
  </ImageBackground>
);
