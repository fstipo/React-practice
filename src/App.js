import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUsersListHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUsersListHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
