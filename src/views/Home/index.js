import React, { Component } from 'react';
import { View } from 'react-native';

import { HomeContainer, HeaderContainer, TitleContainer } from './styled';
import { LogoText } from '../Startup/styled';
import CreateNewDeck from './CreateNewDeck';
import Startup from '../Startup';
class Home extends Component {
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
          : <HomeContainer>
              <TitleContainer>
                <LogoText>Flashcards</LogoText>
              </TitleContainer>
              <CreateNewDeck />
            </HomeContainer>
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

export default Home;
