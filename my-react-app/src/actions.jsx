export const fetchUsers = () => {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => dispatch({ type: 'FETCH_USERS_SUCCESS', payload: users }))
      .catch(error => dispatch({ type: 'FETCH_USERS_ERROR', payload: error.message }));
  };
};

export const selectUser = user => {
  return {
    type: 'SELECT_USER',
    payload: user
  };
};

export const removeUser = user => {
  return {
    type: 'REMOVE_USER',
    payload: user
  };
};

export const sortSelectedUsers = order => {
  return {
    type: 'SORT_SELECTED_USERS',
    payload: order
  };
};
