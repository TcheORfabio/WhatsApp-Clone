import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { setName, setEmail, setPassword } from '../redux/actions';

const Registry = (props) => ( // eslint-disable-line no-unused-vars
  /* eslint-disable max-len*/
  <View style={{ flex: 1, padding: 10 }}>
    <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput placeholder='Nome' value={props.name} onChangeText={props.setName} style={{ fontSize: 20, height: 45, width: '98%' }} />
      <TextInput placeholder='E-mail' value={props.email} onChangeText={props.setEmail} style={{ fontSize: 20, height: 45, width: '98%' }} />
      <TextInput placeholder='Senha' value={props.password} onChangeText={props.setPassword} secureTextEntry style={{ fontSize: 20, height: 45, width: '98%' }} />
    </View>
    <View style={{ flex: 1 }}>
      <Button title='Cadastrar' color='#115E54' onPress={() => console.log(props)} />
    </View>
  </View>
  /* eslint-enable max-len*/
);

Registry.navigationOptions = {
  title: 'Cadastrar',
};

const mapStateToProps = (state) => ({
  name: state.authReducer.name,
  email: state.authReducer.email,
  password: state.authReducer.password,
});

const mapDispatchToProps = {
  setName,
  setEmail,
  setPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(Registry);
