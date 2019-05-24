import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Platform 
} from 'react-native';
import { Font, AppLoading } from 'expo';

import Radio from './app_droid/Radio';
import IosRadio from './app_ios/Ios_radio';

export default class App extends React.Component {

  constructor (props) {
    super (props) 
    this.state = {
      loading : true,
      fontLoad: false
    }
  }

  async componentWillMount () {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf') 
    })
    this.setState({loading: false, fontLoad: true})
  }
  
  render() {
    if (this.state.loading === true) {
      return (
        <AppLoading/>
      );
    } else {

      //OS checking...
      if (Platform.Os === 'android') {
        return (
          <Radio/>
        )
      } else {
        return (
          <IosRadio/>
        )
      }
      
    }
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
