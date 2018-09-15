import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { setEmail, setPassword } from '../redux/actions';

const Login = (props) => (
  <View style={{ flex: 1, padding: 10 }}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 25 }}>
        What's App Clone
      </Text>
    </View>
    <View style={{ flex: 2 }}>
      <TextInput
        placeholder='E-mail'
        value={props.email}
        style={{ fontSize: 20, height: 45 }}
        onChangeText={(value) => props.setEmail(value)}
      />
      <TextInput
        placeholder='Senha'
        value={props.password}
        style={{ fontSize: 20, height: 45 }}
        secureTextEntry
        onChangeText={(value) => props.setPassword(value)}
      />
      <TouchableOpacity onPress={() => {
        console.log(props);
        props.navigation.navigate('Register');
      }}
      >
        <Text style={{ fontSize: 15 }}>Ainda não possui cadastro? Clique Aqui</Text>
      </TouchableOpacity>
    </View>
    <View style={{ flex: 2 }}>
      <Button title='Acessar' color='#115E54' onPress={() => console.log(props)} />
    </View>
  </View>
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
