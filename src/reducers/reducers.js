'use strict';
var constants = require('../constants/event_constant');

export function recent_reducer(state = {}, action) {

	console.log('reducer_0 was called with state', state, 'and action', action)

    switch (action.type) {
        case constants.handlers.RECENT:
        	console.log('return data ',action.value);
            return {
                ...state,
                data: action.value
            }
        default:
            return state;
    }

};