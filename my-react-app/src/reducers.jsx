const initialState = {
  users: [],
  selectedUsers: [],
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_SUCCESS':
      return { ...state, users: action.payload };
    case 'FETCH_USERS_ERROR':
      return { ...state, error: action.payload };
    case 'SELECT_USER':
      return { ...state, selectedUsers: [...state.selectedUsers, action.payload] };
    case 'REMOVE_USER':
      return { ...state, selectedUsers: state.selectedUsers.filter(user => user.id !== action.payload.id) };
    case 'SORT_SELECTED_USERS':
      const sortedUsers = [...state.selectedUsers].sort((a, b) => {
        if (action.payload === 'asc') {
          return a.company.name.localeCompare(b.company.name);
        } else {
          return b.company.name.localeCompare(a.company.name);
        }
      });
      return { ...state, selectedUsers: sortedUsers };
    default:
      return state;
  }
};

export default reducer;
