import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import {
  View,
} from 'react-native';
import Contacts from '../contacts/contacts';
import Chats from '../chats/chats';
import AddButton from '../addcontactbutton/addcontactbutton';

const TabBarComponent = createMaterialTopTabNavigator({
  Conversas: { screen: Chats },
  Contatos: { screen: Contacts },
},
{
  tabBarOptions: {
    style: {
      backgroundColor: '#115E54',
    },
    indicatorStyle: {
      backgroundColor: '#fff',
    },
  },
});

class Main extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TabBarComponent />
      </View>
    );
  }
}

Main.navigationOptions = {
  title: 'What\'s App Clone',
  headerRight: (
    <AddButton />
  ),
};

const mapStateToProps = () => ({

});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
