import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Card from "../components/Card";

const Homepage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.header}>hi yuval, ready to write?</Text>
        <ScrollView style={styles.cards}>
          <Card
            date="17/08/2023"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <Card
            date="17/08/2023"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.buttonWrapper}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
  },
  wrapper: {
    paddingTop: 62,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 30,
    textAlign: "left",
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 20,
  },
  buttonWrapper: {
    position: "absolute",
    backgroundColor: "#fff",
    bottom: 30,
    width: "90%",
    alignSelf: "center", // Center horizontally
    alignItems: "center", // Center vertically
    paddingVertical: 15,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default Homepage;
