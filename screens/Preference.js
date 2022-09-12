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
import Slider from "@react-native-community/slider";

const Preference = ({navigation}) => {
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState(25);
  const [radius, setRadius] = useState(2);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={50}
    >
      {/* <SafeAreaView> */}
      <ScrollView style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.text.heading}>Your Preference</Text>
          <Text style={styles.text}>
            Join now and start talking with matches nearby
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            marginHorizontal: 47,
            // width: Dimensions.get("window").width - 94,
            alignItems: "center",
          }}
        >
          <Text
            style={[styles.text.heading, { fontSize: 16, marginBottom: 18 }]}
          >
            I am Interested in
          </Text>
          <View style={styles.radio}>
            <TouchableOpacity
              style={[
                styles.radio.button,
                { marginRight: 10 },
                gender == "male" && styles.radio.active,
              ]}
              onPress={() => setGender("male")}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image
                  source={Images.Male1}
                  style={{ height: 40, width: 40 }}
                />
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
                { marginLeft: 10 },
                gender == "female" && styles.radio.active,
              ]}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image
                  source={Images.Female1}
                  style={{ height: 40, width: 40 }}
                />
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
          <Text
            style={[
              styles.text.heading,
              { fontSize: 16, marginBottom: 18, marginTop: 30 },
            ]}
          >
            Preferred Age
          </Text>
          <View style={styles.slider}>
            <View>
              <Text style={styles.text}>18</Text>
              <Slider
                style={{ width: "100%", height: 40 }}
                minimumValue={18}
                minimumTrackTintColor="#EA008A"
                maximumTrackTintColor="#F5F5F5"
                maximumValue={55}
                trackStyle={{height:20}}
                thumbImage={Images.Thumb}
                value={25}
                onValueChange={(val) => {
                  setAge(val);
                }}
                step={1}
              />
              <Text style={[styles.text, styles.text.absolute]}>55</Text>
              <Text style={styles.slider.text}>
                {18} - {age}
              </Text>
            </View>
          </View>
          <Text
            style={[
              styles.text.heading,
              { fontSize: 16, marginBottom: 18, marginTop: 30 },
            ]}
          >
            Preferred Match Radius
          </Text>
          <View style={styles.slider}>
            <View>
              <Text style={styles.text}>0</Text>
              <Slider
                style={{ width: "100%", height: 40 }}
                minimumValue={0}
                minimumTrackTintColor="#EA008A"
                maximumTrackTintColor="#F5F5F5"
                maximumValue={10}
                thumbImage={Images.Thumb}
                value={2}
                onValueChange={(val) => {
                  setRadius(val);
                }}
                step={1}
              />
              <Text style={[styles.text, styles.text.absolute]}>10</Text>
              <Text style={styles.slider.text}>{radius} miles</Text>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.button}
            onPress={() => navigation.navigate("Interest")}
          >
            <Text style={styles.button.text}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* </SafeAreaView> */}
    </KeyboardAvoidingView>
  );
};
export default Preference;
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
    absolute: {
      position: "absolute",
      top: 0,
      right: 0,
      color: "#9799A5",
    },
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
      marginLeft: 5,
      marginTop: 12,
      active: {
        color: "#fff",
      },
    },
    button: {
      width: Dimensions.get("window").width / 2 - 60,
      borderColor: "#E9E9E9",
      borderRadius: 12,
      borderWidth: 1,
      paddingVertical: 18,
    },
  },

  slider: {
    borderWidth: 1,
    borderColor: "#E9E9E9",
    borderRadius: 12,
    width: "100%",
    padding: 20,
    text: { color: "#2E313D", textAlign: "center", fontSize: 16 },
  },
});
