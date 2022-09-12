import React, { useState } from "react";
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
import Images from "../assets/Images";

const About = ({navigation}) => {
  const [gender, setGender] = useState(null);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={50}
    >
      {/* <SafeAreaView> */}
      <ScrollView style={styles.container}>
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
          <TextInput style={styles.input} placeholder="First Name"></TextInput>

          <TextInput style={styles.input} placeholder="Last Name"></TextInput>

          <TextInput
            style={styles.input}
            placeholder="Date of birth (DD/MM/YYYY)"
          ></TextInput>
          <View style={styles.radio}>
            <TouchableOpacity
              style={[
                styles.radio.button,
                { marginRight: 7.5 },
                gender == "male" && styles.radio.active,
              ]}
              onPress={() => setGender("male")}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={Images.Male1} />
                <Text
                  style={[
                    styles.radio.text,
                    gender == "male" && styles.radio.text.active,
                  ]}
                >
                  Male
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setGender("female")}
              style={[
                styles.radio.button,
                { marginLeft: 7.5 },
                gender == "female" && styles.radio.active,
              ]}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={Images.Female1} />
                <Text
                  style={[
                    styles.radio.text,
                    gender == "female" && styles.radio.text.active,
                  ]}
                >
                  Female
                </Text>
              </View>
            </TouchableOpacity>
          </View>
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
            onPress={() => navigation.navigate("Preference")}
          >
            <Text style={styles.button.text}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* </SafeAreaView> */}
    </KeyboardAvoidingView>
  );
};
export default About;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: 18,
  },
  head: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    marginBottom: 30,
  },
  button: {
    marginTop: 33,
    marginBottom:80,
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
  radio: {
    marginVertical: 8,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    active: {
      borderColor: "#FF4EA1",
      backgroundColor: "#FF4EA1",
    },
    text: {
      fontSize: 14,
      color: "#9799A5",
      display: "flex",
      alignItems: "center",
      marginLeft: 5,
      active: {
        color: "#fff",
      },
    },
    button: {
      width: Dimensions.get("window").width / 2 - 22.5,
      borderColor: "#E9E9E9",
      borderRadius: 4,
      borderWidth: 1,
      paddingVertical: 12,
      paddingHorizontal: 35,
    },
  },
});
