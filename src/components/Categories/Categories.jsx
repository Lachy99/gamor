import styles from "./Categories.module.css";
import { categories } from "../../data/mockData";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <section className={styles.categoriesSection}>
      <h2>Trending Categories</h2>
      <div className={styles.grid}>
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            title={category.name}
            image={category.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;
