import { combineReducers } from 'redux';
// import app from './app';
import pokemons from './pokemons';

const createRootReducer = () =>
  combineReducers({
    pokemons,
  });

export default createRootReducer;
