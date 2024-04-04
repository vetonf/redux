import { combineReducers } from 'redux';
import { usersReducer, selectedUsersReducer } from './reducers';

const rootReducer = combineReducers({
  users: usersReducer,
  selectedUsers: selectedUsersReducer
});

export default rootReducer;
