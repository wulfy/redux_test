'use strict';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import middlewares from '../middlewares/middlewares';
import * as reducers from '../reducers/reducers';

module.exports = function(data) {
  var reducer = combineReducers(reducers)
  var finalCreateStore = applyMiddleware(middlewares)(createStore)
  var store = finalCreateStore(reducer, data)

  //var store = createStore(reducer,data);

  return store
};