import React from 'react';
import { useDispatch } from 'react-redux';
import { selectUser } from './actions';

const Dropdown = ({ users }) => {
  const dispatch = useDispatch();

  const handleSelect = user => {
    dispatch(selectUser(user));
  };

  return (
    <div className='users'>
      <select onChange={e => handleSelect(JSON.parse(e.target.value))}>
        <option value="">Select a user...</option>
        {users.map(user => (
          <option key={user.id} value={JSON.stringify(user)}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
