import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ImageBackground, TextInput, Button } from 'react-native';
import backgroundImage from '../../imgs/bg.png';
import { setNewContact, addNewContact } from '../../redux/addcontactreducer';

class AddContact extends Component {
  render() {
    return (
      <ImageBackground style={{ flex: 1, padding: 20, justifyContent: 'center' }} source={backgroundImage}>
        {
          this.props.addContactResult ?
            (
              <Text style={{ fontSize: 20, flex: 1 }}>
                Cadastro Realizado com Sucesso!
              </Text>
            )
            :
            (
              <View style={{ flex: 1 }}>
                <TextInput
                  placeholder='E-mail'
                  style={{ fontSize: 20, height: 45, marginBottom: 25, marginHorizontal: 20 }}
                  onChangeText={(text) => this.props.setNewContact(text)}
                  value={this.props.newContact}
                />
                <Button
                  title='Adicionar'
                  color='#115E54'
                  onPress={() => this.props.addNewContact(this.props.newContact)}
                />
                <Text style={{ color: '#f00', fontSize: 20 }}>
                  {this.props.newContactError}
                </Text>
              </View>
            )
        }
      </ImageBackground>
    );
  }
}

AddContact.navigationOptions = {
  title: 'Adicionar Contatos',
};

const mapStateToProps = state => ({
  newContact: state.AddContactReducer.newContact,
  newContactError: state.AddContactReducer.newContactError,
  addContactResult: state.AddContactReducer.addContactResult,
});

const mapDispatchToProps = {
  setNewContact,
  addNewContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
