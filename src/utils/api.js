import { AsyncStorage } from 'react-native';
import { DECK } from './constants';


export function addDeck(name) {
  return AsyncStorage.mergeItem(DECK, JSON.stringify({
    [name]: {}
  }))
}