import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const random = [
  "monitor",
  "movie",
  "songs",
  "program",
  "application",
  "keyboard",
  "javascript",
  "gaming",
  "network",
];
const Prefer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.text.heading}>What do you prefer?</Text>
        <Text style={styles.text}>
          Join now and start talking with matches nearby
        </Text>
      </View>

      <View
        style={{
          marginHorizontal: 32,
          alignItems: "center",
        }}
      >
        <Text style={[styles.text, { fontSize: 12 }]}>
          <Text style={styles.text.inner}>Pick 3</Text> to make better
          connections
        </Text>
        <View style={styles.pillContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity style={styles.pill}>
              <Text style={styles.text}>Book</Text>
            </TouchableOpacity>
            <Text style={styles.text}>or</Text>
            <TouchableOpacity style={styles.pill}>
              <Text style={styles.text}>Movie</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 30,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={() => navigation.navigate("About")}
        >
          <Text style={styles.button.text}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Prefer;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: 18,
    justifyContent: "space-between",
  },
  head: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    marginBottom: 30,
  },
  pillContainer: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingVertical: 20,
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    width: Dimensions.get("window").width / 2 - 30,
  },
  button: {
    marginTop: 33,
    marginBottom: 80,
    paddingVertical: 15,
    backgroundColor: "#FF21A4",
    borderRadius: 6,
    width: "50%",
    text: {
      fontSize: 16,
      color: "#fff",
      textAlign: "center",
      lineHeight: 21,
    },
  },
  text: {
    color: "#9799A5",
    fontSize: 14,
    heading: {
      marginBottom: 7,
      color: "#2E313D",
      fontSize: 20,
    },
    inner: {
      color: "#FF4EA1",
    },
  },
  selected: {
    backgroundColor: "#FC3D6B",
    text: { color: "#fff" },
  },
});
