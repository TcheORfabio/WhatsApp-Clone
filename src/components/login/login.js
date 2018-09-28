import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { setEmail, setPassword } from '../../redux/actions';
import backgroundImage from '../../imgs/bg.png';

const Login = (props) => (
  <ImageBackground style={{ flex: 1, width: null }} source={backgroundImage} >
    <View style={{ flex: 1, padding: 10 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 25, color: '#fff' }}>
          What's App Clone
        </Text>
      </View>
      <View style={{ flex: 2 }}>
        <TextInput
          placeholder='E-mail'
          value={props.email}
          style={{ fontSize: 20, height: 45 }}
          onChangeText={(value) => props.setEmail(value)}
          placeholderTextColor='#fff'
        />
        <TextInput
          placeholder='Senha'
          value={props.password}
          style={{ fontSize: 20, height: 45 }}
          secureTextEntry
          onChangeText={(value) => props.setPassword(value)}
          placeholderTextColor='#fff'
        />
        <TouchableOpacity onPress={() => {
          console.log(props);
          props.navigation.navigate('Register');
        }}
        >
          <Text style={{ fontSize: 15, color: '#fff' }}>Ainda não possui cadastro? Clique Aqui</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 2 }}>
        <Button title='Acessar' color='#115E54' onPress={() => console.log(props)} />
      </View>
    </View>
  </ImageBackground>
);

Login.navigationOptions = {
  header: null,
};

const mapStateToProps = (state) => ({
  email: state.authReducer.email,
  password: state.authReducer.password,
});

const mapDispatchToProps = {
  setEmail,
  setPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
