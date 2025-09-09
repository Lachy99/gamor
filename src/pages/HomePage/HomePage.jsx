import Mainboard from "../../components/Mainboard/Mainboard";
import Categories from "../../components/Categories/Categories";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Mainboard />
      <Categories />
    </div>
  );
};

export default HomePage;
