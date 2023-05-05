import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Card = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>17/08/2023</Text>
      <Text style={styles.content}>
        This is some content sdfkjnif owhefoef i efoiehfoiwe fuiwef iue funed uh
        nwe ien uhef ie fn eufhefhe rfeufn{" "}
      </Text>
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
    color: "#fff",
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 30,
  },
});

export default Card;
