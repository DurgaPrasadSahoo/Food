import React, { Component } from 'react';
//import { View, Text } from 'react-native';
import AppNavigator from './src/appNavigator'
 type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <AppNavigator/>
    );
  }
}