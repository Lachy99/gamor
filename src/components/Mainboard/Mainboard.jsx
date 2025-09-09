import { useState, useEffect } from "react";
import { Link } from "react-router";
import styles from "./Mainboard.module.css";
import SearchPanel from "../SearchPanel/SearchPanel";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";
import defaultDarkCharacter from "../../assets/images/Players/darkCharacter.png";
import defaultLightCharacter from "../../assets/images/Players/lightCharacter.png";

function Mainboard() {
  const { theme } = useTheme();

  const [displayedCharacter, setDisplayedCharacter] =
    useState(defaultDarkCharacter);
  const { user, logout } = useAuth();

  const [characterInfo, setCharacterInfo] = useState({
    game: "Fortnite New Season",
    name: "Join Live Stream",
  });

  useEffect(() => {
    if (theme === "dark") {
      setDisplayedCharacter(defaultDarkCharacter);
    } else {
      setDisplayedCharacter(defaultLightCharacter);
    }
    setCharacterInfo({
      game: "Fortnite New Season",
      name: "Join Live Stream",
    });
  }, [theme]);

  const handleAddPlayer = (player) => {
    setDisplayedCharacter(player.icon);
    setCharacterInfo({ game: player.game, name: player.name });
  };

  return (
    <div className={styles.mainboardCard}>
      <main className={styles.mainboardGrid}>
        <div className={styles.introPanel}>
          <h1>start streaming games differently</h1>
          <p>gamor now has stream party platform</p>
          <div className={styles.actionButtons}>
            {user ? (
              <button onClick={logout} className={styles.createAccountBtn}>
                Logout
              </button>
            ) : (
              <>
                <button className={styles.createAccountBtn}>
                  Create account
                </button>
                <Link to="/login" className={styles.signInBtn}>
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>

        <div className={styles.characterPanel}>
          <div className={styles.header}>
            <p>{characterInfo.game}</p>
            <h4>{characterInfo.name}</h4>
          </div>
          <div className={styles.timer}>11 : 45</div>
          <img
            src={displayedCharacter}
            alt="Character"
            className={styles.characterImage}
          />
        </div>

        <SearchPanel onAddPlayer={handleAddPlayer} />
      </main>
    </div>
  );
}

export default Mainboard;
