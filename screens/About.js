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

const About = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container, { flex: 1 }]}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.head}>
            <Text style={styles.text.heading}>About you</Text>
            <Text style={styles.text}>
              Join now and start talking with matches nearby
            </Text>
          </View>

          <View
            style={{
              marginTop: 10,
              marginHorizontal: 16,
              width: Dimensions.get("window").width - 32,
              alignItems: "center",
            }}
          >
            <TextInput
              style={styles.input}
              placeholder="First Name"
            ></TextInput>

            <TextInput style={styles.input} placeholder="Last Name"></TextInput>

            <TextInput
              style={styles.input}
              placeholder="Date of birth (DD/MM/YYYY)"
            ></TextInput>

            <TextInput style={styles.input} placeholder="Country"></TextInput>
            <TextInput style={styles.input} placeholder="Zip Code"></TextInput>
            <TextInput
              style={[styles.input, { height: 100 }]}
              multiline
              placeholder="Bio"
              numberOfLines={5}
            ></TextInput>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.button}
              onPress={() => navigation.navigate("About")}
            >
              <Text style={styles.button.text}>Next</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
export default About;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  head: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    marginBottom: 30,
  },
  button: {
    marginTop: 33,
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
    width: "100%",
  },
});
