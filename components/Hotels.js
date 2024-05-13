import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";

const Hotels = ({ item, menu }) => {
  const menuItems = JSON.stringify(menu);
  return (
    <Pressable
      style={styles.hotelContainer}
      onPress={() =>
        router.push({
          pathname: "/hotel",
          params: {
            id: item.id,
            name: item.name,
            adress: item.adress,
            smalladress: item.smalladress,
            cuisines: item.cuisines,
            aggregate_rating: item.aggregate_rating,
            menu: menuItems,
          },
        })
      }
    >
      <Image style={styles.hotelImage} source={{ uri: item?.feature_image }} />
      <View style={styles.hotelBody}>
        <View style={{}}>
          <Text style={styles.hotelTitle}>{item?.name}</Text>
          <Text style={styles.hotelType}>{item?.description}</Text>
          <Text style={styles.hotelTiming}>{item?.time}</Text>
        </View>

        <View style={styles.hotelRatingSection}>
          <Text style={{ textAlign: "center", color: "white" }}>
            {item?.aggregate_rating}
          </Text>

          <FontAwesome6 name="star" size={15} color="white" />
        </View>
      </View>
      <View style={styles.hotelBorderLine} />
      <View style={styles.hotelOfferSection}>
        <MaterialCommunityIcons
          name="brightness-percent"
          size={24}
          color="#1F75FE"
        />
        <Text style={styles.hotelOffer}>20% OFF up to Rs 100</Text>
      </View>
    </Pressable>
  );
};

export default Hotels;

const styles = StyleSheet.create({
  hotelContainer: {
    marginHorizontal: 6,
    marginVertical: 12,
    borderRadius: 20,
    backgroundColor: "white",
  },
  hotelImage: {
    width: "100%",
    aspectRatio: 6 / 4,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  hotelBody: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  hotelTitle: {
    paddingHorizontal: 10,
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
  },
  hotelType: {
    paddingHorizontal: 10,
    marginTop: 3,
    fontSize: 15,
    fontWeight: "500",
    color: "gray",
  },
  hotelTiming: {
    paddingHorizontal: 10,
    marginTop: 3,
    fontSize: 14,
    fontWeight: "500",
    color: "#505050",
  },
  hotelRatingSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E52B50",
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 5,
    marginRight: 10,
    gap: 3,
  },
  hotelBorderLine: {
    borderWidth: 0.5,
    borderColor: "#C8C8C8",
    marginHorizontal: 10,
    marginVertical: 4,
  },
  hotelOfferSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginHorizontal: 8,
    marginVertical: 5,
  },
  hotelOffer: {
    marginLeft: 2,
    color: "#1F75FE",
    fontWeight: "500",
  },
});
