import React from "react";
import MealList from "../../components/MealList/MealList";
import { useSelector } from "react-redux";

import CustomHeaderButton from "../../components/HeaderButton/CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const FavoritesScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.favoriteMeals);

  return (
    <MealList
      listData={availableMeals}
      navigation={props.navigation}
    ></MealList>
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
