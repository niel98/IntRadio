import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default class IosRadio extends React.Component {
  render() {
    return (
        <WebView
        source={{uri: 'https://www.ritradio.com.ng/'}}
        style={{marginTop: 20}}
      />
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
