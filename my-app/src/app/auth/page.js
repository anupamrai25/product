
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './style.module.css'; 

const AuthPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Welcome!</h2>
        <p className={styles.description}>Please choose an option below:</p>
        <div className={styles.buttonGroup}>
          <a href="/auth/login" className="btn btn-primary btn-lg">Login</a>
          <a href="/auth/register" className="btn btn-secondary btn-lg">Register</a>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
