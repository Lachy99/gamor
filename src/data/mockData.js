import actionGamesImage from "../assets/images/categories/action_games.jpeg";
import sportsGamesImage from "../assets/images/categories/sport_games.jpeg";
import horrorGamesImage from "../assets/images/categories/horror_games.jpeg";
import adventureGamesImage from "../assets/images/categories/adventure_games.jpeg";
import arcadeGamesImage from "../assets/images/categories/arcade_games.jpeg";
import fantasyGamesImage from "../assets/images/categories/fantasy_games.jpeg";
import strategyGamesImage from "../assets/images/categories/strategy_games.jpeg";
import shooterGamesImage from "../assets/images/categories/shooter_games.jpeg";

import ninjaImg from "../assets/images/Players/ninjaImg.png";
import drteamImg from "../assets/images/Players/drteamImg.png";
import miaplaysImg from "../assets/images/Players/miaplaysImg.png";
import keoxerImg from "../assets/images/Players/keoxerImg.png";
import nickmercsImg from "../assets/images/Players/nickmercsImg.png";

export const players = [
  {
    id: 1,
    name: "Dr Team",
    email: "drteam@gamor.com",
    password: "123",
    game: "COD Warzone",
    platform: "Party",
    icon: drteamImg,
  },
  {
    id: 2,
    name: "Mia Plays",
    email: "mia@gamor.com",
    password: "123",
    game: "Fortnite",
    platform: "Matchs",
    icon: miaplaysImg,
  },
  {
    id: 3,
    name: "Keoxer",
    email: "keoxer@gamor.com",
    password: "123",
    game: "Apex Legends",
    platform: "Streams",
    icon: keoxerImg,
  },
  {
    id: 4,
    name: "Nickmercs",
    email: "nickmercs@gamor.com",
    password: "123",
    game: "COD Warzone",
    platform: "Party",
    icon: nickmercsImg,
  },
  {
    id: 5,
    name: "Ninja",
    email: "ninja@gamor.com",
    password: "123",
    game: "Fortnite",
    platform: "Matchs",
    icon: ninjaImg,
  },
];

export const categories = [
  { id: 1, name: "Action Games", image: actionGamesImage },
  { id: 2, name: "Sports Games", image: sportsGamesImage },
  { id: 3, name: "Horror Games", image: horrorGamesImage },
  {
    id: 4,
    name: "Adventure Games",
    image: adventureGamesImage,
  },
  { id: 5, name: "Arcade Games", image: arcadeGamesImage },
  {
    id: 6,
    name: "Fantasy Games",
    image: fantasyGamesImage,
  },
  {
    id: 7,
    name: "Strategy Games",
    image: strategyGamesImage,
  },
  {
    id: 8,
    name: "Shooter Games",
    image: shooterGamesImage,
  },
];
