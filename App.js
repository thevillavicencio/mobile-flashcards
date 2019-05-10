
import Home from './src/views/Home';
import CreateNewDeck from './src/views/Home/CreateNewDeck'
import NewDeckForm from './src/views/NewDeckForm';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  CreateNewDeck: {
    screen: CreateNewDeck,
  },
  NewDeckForm: {
    screen: NewDeckForm,
  }
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);