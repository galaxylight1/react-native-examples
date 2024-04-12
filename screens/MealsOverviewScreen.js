import { MEALS } from "../data/dummyData";
import { View, FlatList } from "react-native";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId; // get category id

  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(catId) >= 0; // gets the meals of this category
  });

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemsProp = {
      title: item.title,
      imgUrl: item.imageUrl,
      duration: item.affordability,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemsProp} />;
  }

  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;
