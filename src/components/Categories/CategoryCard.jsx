import styles from "./Categories.module.css";

const CategoryCard = ({ id, title, image }) => {
  const cardStyle = { "--bg-image": `url(${image})` };
  const formattedId = String(id).padStart(2, "0");

  return (
    <div className={styles.card} style={cardStyle}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <span className={styles.idNumber}>{formattedId}</span>
          <h3>{title}</h3>
          <span className={styles.arrow}>&rarr;</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
