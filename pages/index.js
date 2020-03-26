import styles from "../src/styles/pages/index.module.css";

import LoginForm from "../src/components/LoginForm";

export const Index = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.pageTitle}>
        <span>AGRIMYCIL</span> <span>DASHBOARD</span>
      </div>
      <div className={styles.vectorContainer}>
        <img src="/login-vector.svg" />
      </div>
      <div className={styles.loginContainer}>
        <LoginForm />
      </div>
    </div>
  );
};

export default Index;
