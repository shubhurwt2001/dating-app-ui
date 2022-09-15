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
const ForgetPassword = ({ navigation }) => {
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
            <Text style={styles.text.heading}>Reset Password</Text>
          </View>
          <View
            style={{ marginTop: 21.5, marginHorizontal: 16, width: width - 32 }}
          >
            <TextInput
              style={styles.input}
              placeholder="Email Address"
            ></TextInput>
          </View>
          <View style={{ width: "60%" }}>
            <TouchableOpacity activeOpacity={0.6} style={styles.button}>
              <Text style={styles.button.text}>Send</Text>
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
    marginBottom: 33,
    textAlign: "center",
  },
  container: {
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    heading: {
      color: "#2E313D",
      fontSize: 24,
      lineHeight: 32,
    },
  },
  button: {
    marginTop: 46,
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
export default ForgetPassword;
