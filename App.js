import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Startup from './src/views/Startup';
import Home from './src/views/Home';

export default class App extends React.Component {
  state = {
    showLogo: true
  }

  componentDidMount () {
    setTimeout(
      () => this.setState({ showLogo: false }),
      3000
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.showLogo
          ? <Startup />
          : <Home />
        }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
