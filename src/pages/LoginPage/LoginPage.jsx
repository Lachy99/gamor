import LoginForm from "./LoginForm";
import styles from "./LoginForm.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
