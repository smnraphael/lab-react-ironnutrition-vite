const FoodBox = ({ food, foods, setFoods }) => {
  const handleDelete = () => {
    const updatedFood = foods.filter((f) => food.id !== f.id);
    setFoods(updatedFood);
  };

  return (
    <div>
      <p>{food.name}</p>

      <img src={food.image} />

      <p>Calories: {food.calories}</p>
      <p>Servings {food.servings}</p>

      <p>
        <b>Total Calories: {food.calories * food.servings} </b> kcal
      </p>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default FoodBox;
