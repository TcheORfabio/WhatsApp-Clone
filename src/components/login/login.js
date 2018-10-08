import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import { setEmail, setPassword, authUser } from '../../redux/actions';
import backgroundImage from '../../imgs/bg.png';

class Login extends Component {
  _authUser = () => {
    const { email, password } = this.props;
    this.props.authUser({ email, password });
  }

  render() {
    return (
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
              value={this.props.email}
              style={{ fontSize: 20, height: 45 }}
              onChangeText={(value) => this.props.setEmail(value)}
              placeholderTextColor='#fff'
            />
            <TextInput
              placeholder='Senha'
              value={this.props.password}
              style={{ fontSize: 20, height: 45 }}
              secureTextEntry
              onChangeText={(value) => this.props.setPassword(value)}
              placeholderTextColor='#fff'
            />
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate('Register');
            }}
            >
              <Text style={{ fontSize: 15, color: '#fff' }}>Ainda não possui cadastro? Clique Aqui</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 2 }}>
            {this.props.loading && <ActivityIndicator size='large' animating />}
            <Text style={{ color: '#ff0000', fontSize: 18 }}>{this.props.errorMessageLogin}</Text>
            <Button
              title='Acessar'
              color='#115E54'
              onPress={this._authUser}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

Login.navigationOptions = {
  header: null,
};

const mapStateToProps = (state) => ({
  email: state.authReducer.email,
  password: state.authReducer.password,
  errorMessageLogin: state.authReducer.errorMessageLogin,
  loading: state.authReducer.loading,
});

const mapDispatchToProps = {
  setEmail,
  setPassword,
  authUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
