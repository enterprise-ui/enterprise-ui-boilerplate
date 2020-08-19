import {combineReducers} from 'redux';

import {reducer} from './reducer';

const reducers = combineReducers({
    items: reducer,
});

console.log('Reducers is initialized');

export {reducers};
