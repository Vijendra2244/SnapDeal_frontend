import React from 'react';
import styles from "../styles/SuccessToast.module.css"

const SuccessToast = ({ message }) => {
  return (
    <div className={styles.successToast}>
      <div className={styles.toastMessage}>{message}</div>
    </div>
  );
};

export default SuccessToast;
