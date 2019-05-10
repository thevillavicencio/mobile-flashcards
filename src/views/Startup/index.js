import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

import { StartupContainer, LogoText } from './styled';
class Startup extends Component {
  render() {
    return(
      <StartupContainer>
        <Image
          source={require('./paper-sheet.png')}
          style={{
            width: 150,
            height: 150,
          }}
        />
        <LogoText>Mobile</LogoText>
        <LogoText>Flashcards</LogoText>
      </StartupContainer>
    );
  }
}

export default Startup;
