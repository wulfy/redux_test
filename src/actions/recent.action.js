'use strict';

var superagent = require('superagent');
var dispatcher = require('../contrib/dispatcher');
var constants = require('../constants/event_constant');

/**
* Action appelée par une requete utilisateur (via la vue) ou un autre process
* permet de MAj le store qui mettra à jour les vues
*
**/ 
module.exports = function() {
  //superagent est une librairie HTTP côté client
  //effectue une requete sur l'API de flickr 
  
    return function(dispatch){

        superagent
    .get('https://api.flickr.com/services/rest')
    .query({
      method: 'flickr.photos.getRecent',
      api_key: '70dc2298d7ba4669796e5ccbf4e3288a',
      format: 'json',
      nojsoncallback: 1
    })
    .end(function(error, res){
      console.log('[ACTION] Photos received', res.body.photos.photo.length);
        dispatch({
          type: constants.handlers.RECENT,
          value: res.body.photos.photo
        });
    });

      
    }

};