import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

import Colors from "../constants/Colors";
import CategoryScreen from "../screens/CategoryScreen/CategoryScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen/CategoryMealsScreen";
import FavoritesScreen from "../screens/FavoritesScreen/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen/FiltersScreen";
import MealDetailScreen from "../screens/MealDetailScreen/MealDetailScreen";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoryScreen,
      // navigationOptions: {
      //   headerStyle: {
      //     backgroundColor: Platform.OS === "android" ? Colors.primaryColor : null,
      //   },
      //   headerTintColor:
      //     Platform.OS === "android" ? "white" : Colors.primaryColor,
      // },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
      // navigationOptions: {
      //   headerStyle: {
      //     backgroundColor: Platform.OS === "android" ? Colors.primaryColor : null,
      //   },
      //   headerTintColor:
      //     Platform.OS === "android" ? "white" : Colors.primaryColor,
      // },
    },
    MealDetail: MealDetailScreen,
  },
  {
    // mode: "modal",
    // initialRouteName: "MealDetail",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : null,
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

export default createAppContainer(MealsNavigator);
