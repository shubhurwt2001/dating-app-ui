import React from "react";
import {
  Button,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Images from "../assets/Images";

const width = Dimensions.get("window").width;
const Login = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container, { flex: 1 }]}
    >
      <SafeAreaView style={styles.parent}>
        {/* <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "margin"}
      > */}
        <View style={styles.container}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={Images.Logo}
              style={styles.logo}
              resizeMode="cover"
            />
            <Image source={Images.LogoText} resizeMode="cover" />
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
          <View style={{ marginTop: 20 }}>
            <Text style={styles.button3.text}>------------</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.button3.text}>or connect with email</Text>
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

            <View style={{ alignSelf: "flex-end" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgetPassword")}
              >
                <Text style={styles.text}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ width: "60%" }}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.button}
              onPress={() => navigation.navigate("Discover")}
            >
              <Text style={styles.button.text}>Login</Text>
            </TouchableOpacity>

            <Text
              style={[styles.button3.text, { fontSize: 14, marginTop: 15 }]}
            >
              Don't have an Account?{" "}
              <Text
                style={[styles.text, { fontSize: 14 }]}
                onPress={() => navigation.navigate("Register")}
              >
                Signup
              </Text>
            </Text>
          </View>
        </View>
        {/* </KeyboardAvoidingView> */}
      </SafeAreaView>
    </KeyboardAvoidingView>
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
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    images: {
      marginHorizontal: 7,
    },
  },
  text: {
    textAlign: "right",
    color: "#FF4EA1",
    fontSize: 12,
    lineHeight: 20,
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
export default Login;
