import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { explore } from "@/data/data";

const Explore = () => {
  return (
    <View>
      <FlatList
        data={explore}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.exploreContainer}>
            <Image
              style={{ width: 50, height: 50 }}
              source={{ uri: item?.image }}
            />

            <Text style={styles.exploreTitle}>{item?.name}</Text>

            <Text style={styles.exploreDescription}>{item?.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  exploreContainer: {
    width: 90,
    paddingVertical: 5,
    paddingHorizontal: 1,
    marginLeft: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  exploreTitle: {
    fontSize: 13,
    fontWeight: "700",
    marginTop: 6,
    color: "#E52B50",
  },
  exploreDescription: {
    fontSize: 12,
    color: "black",
    marginTop: 3,
  },
});
