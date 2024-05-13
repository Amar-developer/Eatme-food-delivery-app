import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { recommended } from "@/data/data";
import { FontAwesome6 } from "@expo/vector-icons";

const Recommended = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {recommended?.map((item, index) => (
        <View style={styles.recommended} key={index}>
          <View>
            <Image style={styles.hotelImage} source={{ uri: item?.image }} />
          </View>
          <View style={styles.hotelHeading}>
            <Text style={styles.hotelTitle}>{item?.name}</Text>
            <Text style={styles.hotelType}>{item?.type}</Text>

            <View style={styles.icon}>
              <FontAwesome6 name="clock-four" size={24} color="gray" />
              <Text>{item?.time} mins</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Recommended;

const styles = StyleSheet.create({
  recommended: {
    backgroundColor: "white",
    flexDirection: "row",
    margin: 10,
    borderRadius: 8,
  },
  hotelImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 7,
  },
  hotelHeading: {
    padding: 10,
    flexDirection: "column",
  },
  hotelTitle: {
    fontSize: 15,
    fontWeight: "500",
  },
  hotelType: {
    flex: 1,
    marginTop: 3,
    color: "gray",
    fontWeight: "500",
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
