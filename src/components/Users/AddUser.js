import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [username, setUsername] = useState('');
  const [userAge, setUserAge] = useState('');

  const enteredUserNameHandler = (e) => {
    setUsername(() => e.target.value);
  };
  const enteredUserAgeHandler = (e) => {
    setUserAge(() => e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || userAge.trim().length === 0) {
      console.log('what!!!!1');
      return;
    }
    if (+userAge < 0) {
      return;
    }
    props.onAddUser(username, userAge);
    setUsername('');
    setUserAge('');
  };

  return (
    <>
      {/* <ErrorModal title="You have a error" msg="Što to radiš Konju?" /> */}

      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={enteredUserNameHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            step="1"
            value={userAge}
            onChange={enteredUserAgeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
