import React from 'react';
import { connect } from 'react-redux';
import { removeUser } from './actions';

const SelectedUsers = ({ selectedUsers, removeUser }) => (
  <div className='users'>
    <h2>Selected Users</h2>
    <ul>
      {selectedUsers.map(user => (
        <li key={user.id}>
          {user.name} <button onClick={() => removeUser(user.id)}>Remove</button>
        </li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = (state) => ({
  selectedUsers: state.selectedUsers
});

export default connect(mapStateToProps, { removeUser })(SelectedUsers);
