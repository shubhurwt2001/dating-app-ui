import React from "react";
import {
  Button,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Images from "../assets/Images";

const width = Dimensions.get("window").width;
const Register = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.parent}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "margin"}
      >
        <View style={styles.container}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={Images.Logo}
              style={styles.logo}
              resizeMode="cover"
            />
            <Text style={styles.text.heading}>Create New account</Text>
            <Text style={styles.text.subheading}>
              Join now and start talking with matches nearby
            </Text>
          </View>
          <View
            style={{ marginTop: 10, marginHorizontal: 16, width: width - 32 }}
          >
            <TextInput
              style={styles.input}
              placeholder="Email Address"
            ></TextInput>

            <TextInput
              style={styles.input}
              placeholder="Create a Password"
            ></TextInput>

            <TextInput
              style={styles.input}
              placeholder="Repeat password"
            ></TextInput>
          </View>
          <View style={{ width: "60%" }}>
            <TouchableOpacity activeOpacity={0.6} style={styles.button}>
              <Text style={styles.button.text}>Next</Text>
            </TouchableOpacity>

            <Text
              style={[styles.button3.text, { fontSize: 14, marginTop: 20 }]}
            >
              Already have an Account?{" "}
              <Text
                style={[styles.text, { fontSize: 14 }]}
                onPress={() => navigation.navigate("Login")}
              >
                Login
              </Text>
            </Text>
          </View>

          <View style={{ marginTop: 36 }}>
            <Text style={styles.button3.text}>------------</Text>
          </View>
          <View style={{ marginTop: 36 }}>
            <Text style={styles.button3.text}>or connect with social</Text>
          </View>
          <View style={styles.textContainer}>
            <TouchableOpacity
              style={styles.textContainer.images}
              onPress={() => alert("Pressed")}
              activeOpacity={0.6}
            >
              <Image source={Images.Facebook} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.textContainer.images}
              onPress={() => alert("Pressed")}
              activeOpacity={0.6}
            >
              <Image source={Images.Google} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.textContainer.images}
              onPress={() => alert("Pressed")}
              activeOpacity={0.6}
            >
              <Image source={Images.Twitter} />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: "#fff",
  },
  logo: {
    marginBottom: 11,
    textAlign: "center",
  },
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    maxWidth: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 13,
    images: {
      marginHorizontal: 7,
    },
  },
  text: {
    textAlign: "right",
    color: "#FF4EA1",
    fontSize: 12,
    lineHeight: 20,
    heading: {
      color: "#2E313D",
      fontSize: 24,
      lineHeight: 32,
    },
    subheading: {
      fontSize: 14,
      color: "#9799A5",
      maxWidth: "60%",
      textAlign: "center",
      marginTop: 4,
    },
  },
  button: {
    marginTop: 33,
    paddingVertical: 15,
    backgroundColor: "#FF21A4",
    borderRadius: 6,
    text: {
      fontSize: 16,
      color: "#fff",
      textAlign: "center",
      lineHeight: 21,
    },
  },
  button3: {
    marginTop: 50,
    text: { color: "#9799A5", fontSize: 12, textAlign: "center" },
  },
  input: {
    height: 50,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#E9E9E9",
    borderRadius: 6,
    padding: 10,
    color: "#9799A5",
    fontSize: 14,
  },
});
export default Register;
