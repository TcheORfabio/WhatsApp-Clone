import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
} from 'react-native';

export class Main extends Component {
  render() {
    return (
      <View>
        <Text>Main</Text>
      </View>
    );
  }
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
