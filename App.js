import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from "./navigation/Routes";
import { Provider } from "mobx-react";
import authStore from './stores/auth.store';

const stores = {
  authStore
};


export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Provider {...stores}>
            <Routes/>
        </Provider>
    );
  }
}