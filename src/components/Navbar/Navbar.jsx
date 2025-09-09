import { Link } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li>
          <a href="/" className={styles.active}>
            Home
          </a>
        </li>
        <li>
          <a href="/">Streams</a>
        </li>
        <li>
          <a href="/">Party</a>
        </li>
        <li>
          <a href="/">Premium</a>
        </li>
      </ul>

      <div className={styles.logo}>Gamor</div>

      <div className={styles.authContainer}>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          {theme === "light" ? "☀️" : "🌙"}
        </button>
        <div className={styles.authButtons}>
          {user ? (
            <>
              <span className={styles.welcome}>Welcome, {user.name}!</span>
              <button onClick={logout} className={styles.signIn}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className={styles.signIn}>
                Sign In
              </Link>
              <button className={styles.createAccount}>Create account</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
