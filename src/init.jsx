'use strict';

import createStore from './stores/redux_store';
var React = require('react');
var PhotoList = require('./components/photolist.component.jsx');


const store = createStore();

React.render(<PhotoList store={store} />, document.getElementById('view-list'));