import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Images from "../assets/Images";
const Onboard = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.container}>
        <View>
          <Image
            source={Images.TopImage}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text.heading}>The new way to Date</Text>
          <Text style={styles.text}>
            Join now and start talking with matches nearby
          </Text>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.button}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.button.text}>Create an Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.button2}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.button2.text}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.button3}>
            <Text style={styles.button3.text}>-- SKIP --</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: "#fff",
  },
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    maxWidth: "60%",
    marginTop: 72,
  },
  text: {
    textAlign: "center",
    color: "#9799A5",
    lineHeight: 20,
    fontSize: 14,
    heading: {
      color: "#EA008A",
      fontSize: 24,
      marginBottom: 13,
    },
  },
  button: {
    marginTop: 50,
    paddingVertical: 15,
    backgroundColor: "#FF21A4",
    borderRadius: 6,
    text: {
      fontSize: 16,
      color: "#fff",
      textAlign: "center",
    },
  },
  button2: {
    marginTop: 15,
    text: {
      fontSize: 14,
      color: "#FF4EA1",
      textAlign: "center",
    },
  },
  button3: {
    marginTop: 50,
    text: { color: "#9799A5", fontSize: 12, textAlign: "center" },
  },
});
export default Onboard;
