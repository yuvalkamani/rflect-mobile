import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

const AddCard = ({ navigation }) => {
  //   const [data, setData] = useState([]);

  const [dateInput, setDateInput] = useState("");
  const [monthInput, setMonthInput] = useState("");
  const [yearInput, setYearInput] = useState("");
  const [textInput, setTextInput] = useState("");

  const doneHandler = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.backButtonText}>back</Text>
        </TouchableOpacity>
        <Text style={styles.header}>journal entry</Text>
        <View style={styles.dateWrapper}>
          <TextInput
            keyboardType="numeric"
            placeholder="date"
            placeholderTextColor="#fff"
            style={styles.dateInput}
            onChangeText={(date) => {
              setDateInput(date);
            }}
            value={dateInput}
          />
          <TextInput
            keyboardType="numeric"
            placeholder="month"
            placeholderTextColor="#fff"
            style={styles.dateInput}
            onChangeText={(month) => {
              setMonthInput(month);
            }}
            value={monthInput}
          />
          <TextInput
            keyboardType="numeric"
            placeholder="year"
            placeholderTextColor="#fff"
            style={styles.dateInput}
            onChangeText={(year) => {
              setYearInput(year);
            }}
            value={yearInput}
          />
        </View>

        <TextInput
          multiline
          placeholder="remember, this is a safe space"
          placeholderTextColor="#454545"
          style={[
            styles.dateInput,
            {
              borderColor: "#454545",
              minHeight: 420,
              paddingTop: 20,
            },
          ]}
          onChangeText={(text) => {
            setTextInput(text);
          }}
          value={textInput}
        />
      </View>
      <TouchableOpacity style={styles.buttonWrapper} onPress={doneHandler}>
        <Text style={styles.buttonText}>{buttonText}</Text>
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
  backButton: {
    paddingVertical: 5,
  },
  backButtonText: {
    color: "#fff",
    textAlign: "left",
    fontWeight: "bold",
  },
  dateWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  dateInput: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 15,
    borderColor: "#454545",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 20,
    color: "#fff",
    fontSize: 20,
  },
  buttonWrapper: {
    position: "absolute",
    backgroundColor: "#fff",
    bottom: 50,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default AddCard;
