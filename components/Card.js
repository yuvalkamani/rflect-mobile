import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Card = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{props.date}</Text>
      <Text style={styles.content}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#454545",
    paddingHorizontal: 18,
    borderRadius: 20,
  },
  date: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",

    paddingVertical: 14,
  },
  content: {
    maxHeight: 100,
    overflow: "hidden",
    color: "#fff",
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 30,
    paddingRight: 50,
  },
});

export default Card;
