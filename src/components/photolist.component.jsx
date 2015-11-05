'use strict';

var React = require('react');
var PhotoItem = require('./photoitem.component.jsx');

var recentAction = require('../actions/recent.action');
var searchAction = require('../actions/search.action');

var PhotoStore = require('../stores/photo.store');

var FluxMixin = require('../mixins/flux-mixin');
var ReduxuxMixin = require('../mixins/redux-mixin');

module.exports = React.createClass({

  mixins: [ReduxuxMixin], //React est basé sur une archi "composant" , 
  //mixins permet d'utiliser des fonctions qui peuvent être utilisées pour plusieurs composants. leur ordre suit l'ordre de déclaration
  

  componentWillMount: function () {
    this.props.store.dispatch(recentAction());
  },

  getInitialState: function () {
    return {photos: []}
  },

  onChange: function () {
    console.log('[COMPONENT] Notified');
    var photos = this.props.store.getState().recent_reducer.data;
    this.setState({photos: photos});
  },

  render: function() {
  console.log("rendering list "+this.state.photos.length);
    var photos = this.state.photos.map(function(photo) {
      return (
        <PhotoItem key={photo.id} photo={photo} />
      )
    });

    return (
       <div> {this.state.photos.length + ""}  Photos  
      <ul>
        {photos}
      </ul></div>
    )
  }

});