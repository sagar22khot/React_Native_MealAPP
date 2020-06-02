import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform, Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import Colors from "../constants/Colors";
import CategoryScreen from "../screens/CategoryScreen/CategoryScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen/CategoryMealsScreen";
import FavoritesScreen from "../screens/FavoritesScreen/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen/FiltersScreen";
import MealDetailScreen from "../screens/MealDetailScreen/MealDetailScreen";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : null,
  },
  headerTitleStyle: {
    fontFamily: "AntonReg",
  },
  headerBackTitleStyle: {
    fontFamily: "BebasNeue",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

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
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "BebasNeue" }}>Meals</Text>
        ) : (
          "Meals"
        ),
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: "Favorites!",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "BebasNeue" }}>Favorites</Text>
        ) : (
          "Favorites"
        ),
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor,
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: "BebasNeue",
          },
          activeTintColor: Colors.accentColor,
        },
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    // navigationOptions: {
    //   drawerLabel: "Filters",
    // },
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: "BebasNeue",
      },
    },
  }
);

export default createAppContainer(MainNavigator);
