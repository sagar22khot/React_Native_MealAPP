import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES } from "../../data/dummy-data";
import CategoryGridTile from "../../components/CategoryGridTile/CategoryGridTile";
import CustomHeaderButton from "../../components/HeaderButton/CustomHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const CategoryScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      ></CategoryGridTile>
    );
  };

  return (
    // <View style={styles.screen}>
    //   <Text>The Categories Screen!</Text>
    //   <Button
    //     title="Go to Meals!"
    //     onPress={() => {
    //       props.navigation.navigate({ routeName: "CategoryMeals" });
    //       // props.navigation.push("Categories");
    //     }}
    //   ></Button>
    // </View>
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoryScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Meal Categories",
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoryScreen;
