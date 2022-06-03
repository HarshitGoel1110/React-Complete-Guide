import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";

import DUMMY_MEALS from "./dummy-meals";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = (props) => {
  return (
    // <section className={styles.meals}>
    <Card className={styles.meals}>
      <ul>
        {DUMMY_MEALS.map((meal) => (
          <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
          // <li key={meal.id}>{meal.name}</li>
        ))}
      </ul>
    </Card>
    // </section>
  );
};

export default AvailableMeals;
