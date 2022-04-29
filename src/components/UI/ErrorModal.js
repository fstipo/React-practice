import React from 'react';
import Card from './Card';
import styles from './ErrorModal.module.css';
import Button from './Button';

const ErrorModal = (props) => {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onClose} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.msg}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onClose}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
