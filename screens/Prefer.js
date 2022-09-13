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
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [third, setThird] = useState(null);
  const [fourth, setFourth] = useState(null);
  const [fifth, setFifth] = useState(null);
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
            <TouchableOpacity
              style={[styles.pill, first == 1 && styles.selected]}
              onPress={() => setFirst(1)}
            >
              <Text style={[styles.text, first == 1 && styles.selected.text]}>Book</Text>
            </TouchableOpacity>
            <Text
              style={[styles.text, { paddingHorizontal: 15, fontSize: 15 }]}
            >
              or
            </Text>
            <TouchableOpacity
              style={[styles.pill, first == 2 && styles.selected]}
              onPress={() => setFirst(2)}
            >
              <Text style={[styles.text, first == 2 && styles.selected.text]}>Movie</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.pillContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={[styles.pill, second == 1 && styles.selected]}
              onPress={() => setSecond(1)}
            >
              <Text style={[styles.text, second == 1 && styles.selected.text]}>Beer</Text>
            </TouchableOpacity>
            <Text
              style={[styles.text, { paddingHorizontal: 15, fontSize: 15 }]}
            >
              or
            </Text>
            <TouchableOpacity
              style={[styles.pill, second == 2 && styles.selected]}
              onPress={() => setSecond(2)}
            >
              <Text style={[styles.text, second == 2 && styles.selected.text]}>Wine</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.pillContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={[styles.pill, third == 1 && styles.selected]}
              onPress={() => setThird(1)}
            >
              <Text style={[styles.text, third == 1 && styles.selected.text]}>Mountain</Text>
            </TouchableOpacity>
            <Text
              style={[styles.text, { paddingHorizontal: 15, fontSize: 15 }]}
            >
              or
            </Text>
            <TouchableOpacity
              style={[styles.pill, third == 2 && styles.selected]}
              onPress={() => setThird(2)}
            >
              <Text style={[styles.text, third == 2 && styles.selected.text]}>Beach</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.pillContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={[styles.pill, fourth == 1 && styles.selected]}
              onPress={() => setFourth(1)}
            >
              <Text style={[styles.text, fourth == 1 && styles.selected.text]}>Indoors</Text>
            </TouchableOpacity>
            <Text
              style={[styles.text, { paddingHorizontal: 15, fontSize: 15 }]}
            >
              or
            </Text>
            <TouchableOpacity
              style={[styles.pill, fourth == 2 && styles.selected]}
              onPress={() => setFourth(2)}
            >
              <Text style={[styles.text, fourth == 2 && styles.selected.text]}>Outdoors</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.pillContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={[styles.pill, fifth == 1 && styles.selected]}
              onPress={() => setFifth(1)}
            >
              <Text style={[styles.text, fifth == 1 && styles.selected.text]}>Early Morning</Text>
            </TouchableOpacity>
            <Text
              style={[styles.text, { paddingHorizontal: 15, fontSize: 15 }]}
            >
              or
            </Text>
            <TouchableOpacity
              style={[styles.pill, fifth == 2 && styles.selected]}
              onPress={() => setFifth(2)}
            >
              <Text style={[styles.text, fifth == 2 && styles.selected.text]}>Late Night</Text>
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
          onPress={() => navigation.navigate("Destination")}
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
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingVertical: 20,
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    width: Dimensions.get("window").width / 2 - 37.5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    backgroundColor: "#2E313D",
    text: { color: "#fff" },
  },
});
