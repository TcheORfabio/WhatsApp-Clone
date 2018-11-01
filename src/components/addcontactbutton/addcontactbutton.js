import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { setIncludeNewContact } from '../../redux/addcontactreducer';
import addContact from '../../imgs/addcontact.png';
import NavigationService from '../../../navigationservice';

const AddContactButton = (props) => {
  const onPress = () => {
    NavigationService.navigate('AddContact');
    props.setIncludeNewContact();
  };

  return (
    <TouchableOpacity style={style.container} onPress={onPress}>
      <Image source={addContact} />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    padding: 5,
  },
});

const mapDispatchToProps = {
  setIncludeNewContact,
};

export default connect(null, mapDispatchToProps)(AddContactButton);
