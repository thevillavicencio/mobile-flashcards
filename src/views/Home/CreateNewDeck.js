import React from 'react';
import AntIcon from "react-native-vector-icons/AntDesign";
import { CreateNewDeckWhenEmpty, AddDeck } from './styled';


const CreateNewDeck = () => {
  return(
    <CreateNewDeckWhenEmpty>
      <AntIcon name="plussquare" color="#999" size={100} />
      <AddDeck>Add new deck</AddDeck>
    </CreateNewDeckWhenEmpty>
  )
}

export default CreateNewDeck;
