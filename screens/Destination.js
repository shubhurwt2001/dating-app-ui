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
const Destination = ({ navigation }) => {
  const [selected, setSelected] = useState([]);

  const selectInterest = (i) => {
    const already = selected.filter((val) => {
      return i == val;
    });

    if (already.length > 0) {
      const values = selected.filter((val) => {
        return i != val;
      });

      setSelected(values);
    } else {
      const values = [...selected, i];
      setSelected(values);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.text.heading}>Local Destinations</Text>
        <Text style={styles.text}>
          Join now and start talking with matches nearby
        </Text>
      </View>

      <View
        style={{
          marginHorizontal: 30,
          alignItems: "center",
        }}
      >
        <Text style={[styles.text.heading, { fontSize: 16,marginBottom:15}]}>
         Spend a Weekend in ?
        </Text>
        <Text style={[styles.text, { fontSize: 12 }]}>
          <Text style={styles.text.inner}>Pick 3</Text> to make better
          connections
        </Text>
        <View style={styles.pillContainer}>
          {Array.from(Array(18).keys()).map((i) => {
            return (
              <TouchableOpacity
                style={[styles.pill, selected.includes(i) && styles.selected]}
                key={i}
                onPress={() => selectInterest(i)}
              >
                <Text
                  style={[
                    styles.text,
                    selected.includes(i) && styles.selected.text,
                  ]}
                >
                  {random[Math.floor(Math.random() * 8 + 0)]}
                </Text>
              </TouchableOpacity>
            );
          })}
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
          onPress={() => navigation.navigate("Discover")}
        >
          <Text style={styles.button.text}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Destination;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: 18,
    justifyContent:"space-between"
  },
  head: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    marginBottom: 30,
  },
  pillContainer: {
    marginTop: 18,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 20,
    paddingVertical: 9,
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    margin: 5,
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
