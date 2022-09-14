import React from "react";
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  // StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import IconF from "react-native-vector-icons/FontAwesome";

import Images from "../assets/Images";
import { StatusBar } from "expo-status-bar";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar animated={true} style="light"/>
      <ScrollView>
        <View>
          <Image
            source={Images.Unsplash}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
        <View style={styles.profile}>
          <Text style={styles.text.heading}>Ruth Jackson</Text>
          <View style={styles.profileInner}>
            <Icon name="location-pin" style={styles.text.icon} />
            <Text style={styles.text}>4km away</Text>
          </View>
          <View style={styles.profileInner}>
            <Icon name="graduation" style={styles.text.icon} />
            <Text style={styles.text}>Arena Animation University</Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#4A4A4A",
              marginVertical: 15,
            }}
          ></View>
          <Text style={[styles.text, { color: "#fff" }]}>
            Here comes the bio -Curabitur vulputate arcu odio, ac facilisis diam
            accumsan ut. Ut imperdiet et leo in vulputate. Sed eleifend lacus eu
            sapien sagittis imperdiet. Etiam tempor mollis augue, ut tincidunt
            ex interdum eu. Pellentesque rhoncus lectus sed posuere viverra.
            Vestibulum id turpis lectus. Donec rhoncus quis elit sed fermentum.
            Nullam sit amet ex enim. Fusce nec suscipit nulla. Maecenas porta mi
            vestibulum, lobortis est ac, hendrerit dui. Pellentesque auctor id
            enim sit amet molestie.
          </Text>
        </View>
        <ScrollView horizontal={true} style={{ marginLeft: 15.5 }}>
          {[1, 2, 3, 4, 7].map((i) => {
            return (
              <Image
                style={styles.spotify}
                key={i}
                resizeMode="cover"
                source={Images.Spotify}
              />
            );
          })}
        </ScrollView>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#4A4A4A",
            marginVertical: 12,
            marginHorizontal: 27,
          }}
        ></View>
        <View>
          <Text
            style={[
              styles.text,
              { color: "#fff", marginLeft: 22, fontWeight: "bold" },
            ]}
          >
            62 Instagram Post
          </Text>
          <ScrollView
            horizontal={true}
            style={{ marginLeft: 15.5, marginVertical: 12 }}
          >
            {[1, 2, 3, 4, 7].map((i) => {
              return (
                <Image
                  style={styles.spotify}
                  key={i}
                  resizeMode="cover"
                  source={Images.Instagram}
                />
              );
            })}
          </ScrollView>
          <ScrollView horizontal={true} style={{ marginLeft: 15.5 }}>
            {[1, 2, 3, 4, 7].map((i) => {
              return (
                <Image
                  style={styles.spotify}
                  key={i}
                  resizeMode="cover"
                  source={Images.Instagram}
                />
              );
            })}
          </ScrollView>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#4A4A4A",
            marginVertical: 12,
            marginHorizontal: 27,
          }}
        ></View>
        <View style={[styles.report]}>
          <Text style={styles.report.text.heading}>REPORT</Text>
          <Text style={styles.report.text}>Ruth Jackson</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.buttonContainer.common,
            { backgroundColor: "#A4A9AD", width: 39, height: 39 },
          ]}
        >
          <IconF name="refresh" size={20} color="#fff"></IconF>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonContainer.common,
            { backgroundColor: "#20A39E" },
          ]}
        >
          <IconF name="times" size={28} color="#fff"></IconF>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonContainer.common,
            { backgroundColor: "#F9B548", width: 39, height: 39 },
          ]}
        >
          <IconF name="star" size={20} color="#fff"></IconF>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonContainer.common,
            { backgroundColor: "#FE3C72" },
          ]}
        >
          <IconF name="heart" size={28} color="#fff"></IconF>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonContainer.common,
            { backgroundColor: "#B780FF", width: 39, height: 39 },
          ]}
        >
          <IconF name="flash" size={20} color="#fff"></IconF>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#303030",
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    left: 40,
    right: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    common: {
      width: 55,
      height: 55,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
    },
  },
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 1.5,
  },
  profile: {
    padding: 22,
  },
  profileInner: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    color: "#868686",
    icon: {
      marginRight: 28,
      fontSize: 20,
      color: "#868686",
    },
    heading: {
      color: "#fff",
      fontSize: 27,
      lineHeight: 37,
      fontWeight: "bold",
    },
  },
  spotify: {
    width: Dimensions.get("window").width / 3,
    marginHorizontal: 6.5,
  },
  report: {
    paddingHorizontal: 22,
    marginTop: 5,
    marginBottom: 120,
    justifyContent: "center",
    alignItems: "center",
    text: {
      color: "#fff",
      fontSize: 15,
      fontWeight: "bold",
      heading: {
        color: "#FE3C72",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
      },
    },
  },
});
