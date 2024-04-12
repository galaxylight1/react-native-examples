import { MEALS, CATEGORIES } from "../data/dummyData";
import { View, FlatList } from "react-native";
import { useLayoutEffect } from "react";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId; // get category id

  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(catId) >= 0; // gets the meals of this category
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, []);

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
