import {createStore, combineReducers} from 'redux';
import counterReducer from './reducers/counterReducer';
import showNotificationReducer from './reducers/showNotificationReducer';
import todoReducer from './reducers/todoReducer';
const rootReducer = combineReducers({
  counter: counterReducer,
  notification: showNotificationReducer,
  todos: todoReducer,
});

export const store = createStore(rootReducer);
