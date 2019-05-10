import React from 'react';
import { StackActions, NavigationActions } from 'react-navigation';

import AntIcon from "react-native-vector-icons/AntDesign";
import { CreateNewDeckWhenEmpty, AddDeck } from './styled';


const CreateNewDeck = () => {

  return(
    <CreateNewDeckWhenEmpty
      onPress={() => {
        alert('sd')
        this.props.navigation.dispatch(StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'NewDeckForm' })
          ],
        }))
      }}>
      <AntIcon name="plussquare" color="#999" size={100} />
      <AddDeck>Add new deck</AddDeck>
    </CreateNewDeckWhenEmpty>
  )
}

export default CreateNewDeck;
