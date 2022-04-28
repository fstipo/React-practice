import React, { useState } from 'react';
import styles from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddUser = (props) => {
  const [username, setUsername] = useState('');
  const [userAge, setUserAge] = useState('');

  const addUserHandler = (e) => {
    e.preventDefault();
    username.trim().length &&
      userAge.trim().length > 0 &&
      +userAge > 0 &&
      props.onAddUser(username, userAge);
    setUsername('');
    setUserAge('');
  };

  const getUsernameHandler = (e) => {
    setUsername(e.target.value.trim());
  };

  const addUserAgeHandler = (e) => {
    setUserAge(e.target.value.trim());
  };

  return (
    <>
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={getUsernameHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={userAge}
            onChange={addUserAgeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
