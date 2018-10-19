import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import {
  View,
} from 'react-native';
import Contacts from '../contacts/contacts';
import Chats from '../chats/chats';

const TabBarComponent = createMaterialTopTabNavigator({
  Conversas: { screen: Chats },
  Contatos: { screen: Contacts },
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
};

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
