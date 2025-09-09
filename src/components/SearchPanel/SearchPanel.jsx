// src/components/SearchPanel/SearchPanel.js
import { useState } from "react";
import styles from "./SearchPanel.module.css";
import { players } from "../../data/mockData";

const games = [...new Set(players.map((player) => player.game))];
const platforms = [...new Set(players.map((player) => player.platform))];

function SearchPanel({ onAddPlayer }) {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedGame, setSelectedGame] = useState("");
  const [filteredPlayers, setFilteredPlayers] = useState(players);

  const handleSearch = () => {
    let result = players;

    if (selectedPlatform) {
      result = result.filter((player) => player.platform === selectedPlatform);
    }

    if (selectedGame) {
      result = result.filter((player) => player.game === selectedGame);
    }

    setFilteredPlayers(result);
  };

  return (
    <div className={styles.searchPanel}>
      <h4>01. Choose Platform</h4>
      <div className={styles.platforms}>
        {platforms.map((p) => (
          <button
            key={p}
            className={`${styles.platformBtn} ${
              selectedPlatform === p ? styles.active : ""
            }`}
            onClick={() => setSelectedPlatform(p)}
          >
            {p.toUpperCase()}
          </button>
        ))}
      </div>

      <h4>02. Searching Game</h4>
      <select
        className={styles.gameSelect}
        value={selectedGame}
        onChange={(e) => setSelectedGame(e.target.value)}
      >
        <option value="">All Games</option>
        {games.map((game) => (
          <option key={game} value={game}>
            {game}
          </option>
        ))}
      </select>

      <div className={styles.playerList}>
        {filteredPlayers.map((player) => (
          <div key={player.id} className={styles.playerItem}>
            <p>{player.name}</p>
            <button onClick={() => onAddPlayer(player)}>+</button>
          </div>
        ))}
      </div>

      <button className={styles.searchNowBtn} onClick={handleSearch}>
        Search Now
      </button>
    </div>
  );
}

export default SearchPanel;
