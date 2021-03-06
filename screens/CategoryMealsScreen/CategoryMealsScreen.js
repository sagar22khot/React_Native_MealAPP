import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

import { useSelector } from "react-redux";

import { CATEGORIES } from "../../data/dummy-data";
import MealList from "../../components/MealList/MealList";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return (
    <MealList listData={displayedMeals} navigation={props.navigation}>
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
    </MealList>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({});

export default CategoryMealsScreen;
