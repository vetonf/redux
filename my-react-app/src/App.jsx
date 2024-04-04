import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './actions';
import Dropdown from './Dropdown';
import UserCard from './UserCard';
import './App.css'

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <Dropdown users={users} />
      <UserCard />
    </div>
  );
};

export default App;
