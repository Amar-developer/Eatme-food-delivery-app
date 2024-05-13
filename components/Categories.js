import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { items } from "./../data/data";

const Categories = () => {
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.8} style={{ marginTop: 5 }}>
            <View style={styles.Categories}>
              <Text style={styles.CategoriesItem}>{item?.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  Categories: {
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 5,
    backgroundColor: "#E52B50",
    borderRadius: 4,
  },
  CategoriesItem: {
    paddingHorizontal: 5,
    color: "white",
    fontWeight: "500",
  },
});
