import React, { Component } from 'react';
import { View, Text, TextInput, Button, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { setName, setEmail, setPassword, submitUser } from '../../redux/actions';
import backgroundImage from '../../imgs/bg.png';

class Registry extends Component {
  _submitUser = () => {
    const { name, email, password } = this.props;
    this.props.submitUser({ name, email, password });
    alert('Enviando Usuário');
  }

  render() {
    return (
      /* eslint-disable max-len*/
      <ImageBackground style={{ flex: 1, width: null }} source={backgroundImage} >
        <View style={{ flex: 1, padding: 10 }}>
          <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
              placeholder='Nome'
              placeholderTextColor='#fff'
              value={this.props.name}
              onChangeText={this.props.setName}
              style={{ fontSize: 20, height: 45, width: '98%' }}
            />
            <TextInput
              placeholder='E-mail'
              placeholderTextColor='#fff'
              value={this.props.email}
              onChangeText={this.props.setEmail}
              style={{ fontSize: 20, height: 45, width: '98%' }}
            />
            <TextInput
              placeholder='Senha'
              placeholderTextColor='#fff'
              value={this.props.password}
              onChangeText={this.props.setPassword}
              secureTextEntry style={{ fontSize: 20, height: 45, width: '98%' }}
            />
            <Text style={{ color: '#ff0000', fontSize: 18 }}>{this.props.errorMessage}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Button title='Cadastrar' color='#115E54' onPress={this._submitUser} />
          </View>
        </View>
      </ImageBackground>
      /* eslint-enable max-len*/
    );
  }
}

Registry.navigationOptions = {
  header: null,
};

const mapStateToProps = (state) => ({
  name: state.authReducer.name,
  email: state.authReducer.email,
  password: state.authReducer.password,
  errorMessage: state.authReducer.errorMessage,
});

const mapDispatchToProps = {
  setName,
  setEmail,
  setPassword,
  submitUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Registry);
