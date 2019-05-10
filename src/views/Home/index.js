import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

import { HomeContainer, HeaderContainer, TitleContainer } from './styled';
import { LogoText } from '../Startup/styled';
import CreateNewDeck from './CreateNewDeck';

class Home extends Component {
  render() {
    return(
      <HomeContainer>
        <TitleContainer>
          <LogoText>Flashcards</LogoText>
        </TitleContainer>
        <CreateNewDeck />
      </HomeContainer>
    );
  }
}

export default Home;
