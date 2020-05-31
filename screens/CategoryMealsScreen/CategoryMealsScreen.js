import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

import { CATEGORIES, MEALS } from "../../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  };

  const catId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return (
    <View style={styles.screen}>
      {/* <Text>The Category Meals Screen!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
          });
        }}
      ></Button> */}
      {/* <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.replace(
           "MealDetail",
          );
        }}
      ></Button> */}
      {/* <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack();
          // props.navigation.pop();
          props.navigation.popToTop();
        }}
      ></Button> */}

      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
      ></FlatList>
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoryMealsScreen;
