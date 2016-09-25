import {
	combineReducers
} from 'redux-immutable';

import {
	combineEpics
} from 'redux-observable';

import {
  sessionStateReducer,
} from './SessionState'

import {
  authStateReducer,
} from './AuthState'

import {
  routeReducer,
} from '../modules/navigation/NavigationState'

import {
  counterEpic,
  counterReducer,
} from '../modules/counter/CounterState'

const epics = [
  ...counterEpic,
];

const reducers = {
  session: sessionStateReducer,
  auth:    authStateReducer,
  routing: routeReducer,
  counter: counterReducer,
};

export const Epics = combineEpics(...epics);
export const Reducers = combineReducers( reducers );
