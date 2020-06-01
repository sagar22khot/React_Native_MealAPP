import React from "react";
import MealList from "../../components/MealList/MealList";
import { MEALS } from "../../data/dummy-data";
import CustomHeaderButton from "../../components/HeaderButton/CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const FavoritesScreen = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return (
    <MealList listData={favMeals} navigation={props.navigation}></MealList>
  );
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        ></Item>
      </HeaderButtons>
    ),
  };
};

export default FavoritesScreen;
