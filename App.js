import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Card from "./components/Card";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.header}>hi yuval, ready to write?</Text>
        <ScrollView style={styles.cards}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>
    </View>
  );
}

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
  },
});
