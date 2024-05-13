import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import * as Location from "expo-location";
import * as LocationGeocoding from "expo-location";
import { useEffect, useState } from "react";
import { AntDesign, FontAwesome6, Ionicons } from "@expo/vector-icons";
import Carousel from "./../../components/Carousel";
import Categories from "./../../components/Categories";
import Recommended from "./../../components/Recommended";
import Explore from "./../../components/Explore";
import Hotels from "@/components/Hotels";
import { hotels } from "@/data/data";
import { supabase } from "../../supabase";

const Index = () => {
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "fetching your location ..."
  );
  const [data, setData] = useState([]);

  useEffect(() => {
    CheckIfLocationEnabled();
    GetCurrentLocation();
  }, []);

  const CheckIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();

    if (!enabled) {
      Alert.alert(
        "Location Services not enabled",
        "Please enable your location services to continue",
        [{ text: "OK" }],
        { cancelable: false }
      );
    } else {
      setLocationServicesEnabled(true);
    }
  };

  const GetCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Allow the app to use the location service",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }

    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });
    console.log(location);
    let { coords } = await Location.getCurrentPositionAsync();
    if (coords) {
      const { latitude, longitude } = coords;

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      const address = await LocationGeocoding.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      const streetAddress = address[0].name;
      for (let item of response) {
        let address = `${item.name}, ${item?.postalCode}, ${item?.city}`;

        setDisplayCurrentAddress(address);
      }
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase.from("hotel").select("*");
        console.log("Data:", data);
        if (error) {
          console.error("Error fetching data:", error);
        } else {
          setData(data);
        }
      } catch (error) {
        console.error("Error in fetchData:", error);
      }
    }

    fetchData();
  }, []);

  console.log("data", data);
  console.log("my address", displayCurrentAddress);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
      <View style={styles.deliverContainer}>
        <FontAwesome6 name="location-dot" size={24} color="#E52850" />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.deliveryTitle}>Deliver to</Text>
          <Text style={styles.deliveryAddress}>{displayCurrentAddress}</Text>
        </View>
        <Pressable
          style={{
            backgroundColor: "#6CB4EE",
            width: 40,
            height: 40,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>S</Text>
        </Pressable>
      </View>
      <View style={styles.searchBar}>
        <TextInput placeholder="Search for food, hotels" />
        <AntDesign name="search1" size={24} color="#E52B50" />
      </View>
      <Carousel />

      <Categories />
      <Text style={styles.sectionContainer}>RECOMMENDED</Text>
      <Recommended />
      <Text style={styles.sectionContainer}>EXPLORE</Text>

      <Explore />
      <Text style={styles.sectionContainer}>ALL RESTAURANTS</Text>
      <View style={{ marginHorizontal: 8 }}>
        {data?.map((item, index) => (
          <Hotels key={index} item={item} menu={item?.menu} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  deliverContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 10,
  },
  deliveryTitle: {
    fontSize: 15,
    fontWeight: "500",
  },
  deliveryAddress: {
    color: "gray",
    fontSize: 16,
    marginTop: 3,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#C0C0C0",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 11,
    marginTop: 10,
    marginHorizontal: 10,
  },
  sectionContainer: {
    textAlign: "center",
    marginTop: 7,
    letterSpacing: 2,
    marginBottom: 5,
    color: "gray",
  },
});

export default Index;
