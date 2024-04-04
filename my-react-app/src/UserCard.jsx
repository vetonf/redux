import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser, sortSelectedUsers } from './actions';

const UserCard = () => {
  const selectedUsers = useSelector(state => state.selectedUsers);
  const dispatch = useDispatch();

  const handleRemove = user => {
    if (window.confirm('Are you sure you want to remove this user?')) {
      dispatch(removeUser(user));
    }
  };

  const handleSort = order => {
    dispatch(sortSelectedUsers(order));
  };

  return (
    <div className='card'>
      {selectedUsers.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Address: {user.address.city}, {user.address.street}</p>
          <p>Phone: {user.phone}</p>
          <p>Company: {user.company.name}</p>
          <p>
            Website: <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a>
          </p>
          <button className="toni" onClick={() => handleRemove(user)}>Remove</button>
        </div>
      ))}
      <div>
        <label>
          Sort by Company Name:
          <input type="radio" name="sort" value="asc" onChange={() => handleSort('asc')} /> A-Z
          <input type="radio" name="sort" value="desc" onChange={() => handleSort('desc')} /> Z-A
        </label>
      </div>
    </div>
  );
};

export default UserCard;

