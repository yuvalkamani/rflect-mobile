import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Card from "../components/Card";

const Homepage = ({ navigation, route }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (route.params?.date && route.params?.text) {
      const { date, text } = route.params;
      setData([...data, { date: date, text: text }]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.header}>hello there! ready to write?</Text>

        <ScrollView style={styles.cards}>
          {data.map((info) => {
            return <Card date={info.date} text={info.text} />;
          })}
        </ScrollView>
      </View>
      <TouchableOpacity
        style={styles.buttonWrapper}
        onPress={() => navigation.navigate("AddCard")}
      >
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
    paddingTop: 60,
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
    bottom: 50,
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
