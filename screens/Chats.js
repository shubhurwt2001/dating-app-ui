import React, { useEffect, useState } from "react";
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
  StatusBar,
  NativeModules,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Images from "../assets/Images";
import { BlurView } from "expo-blur";
import BottomHeader from "./components/BottomHeader";
const { StatusBarManager } = NativeModules;

const Chats = ({ navigation }) => {
  const [list, setList] = useState([1, 2, 3, 4, 5, 6]);
  const [active, setActive] = useState(null);
  const [statusHeight, setStatusHeight] = useState(0);

  const deleteChat = (i) => {
    const filtered = list.filter((val) => {
      return val != i;
    });

    setList(filtered);
  };
  useEffect(() => {
    if (Platform.OS == "ios") {
      StatusBarManager.getHeight((height) => {
        setStatusHeight(height.height);
      });
    } else {
      setStatusHeight(StatusBar.currentHeight);
    }
  }, []);

  return (
    <View
      style={[
        styles.container,
        Platform.OS == "ios" && { paddingVertical: statusHeight },
      ]}
      onStartShouldSetResponder={() => setActive(null)}
    >
      <ScrollView>
        <Text style={styles.heading}>Chats</Text>
        <View style={styles.inputContainer}>
          <Icon name="search" color="#707070" size={18} />
          <TextInput
            style={styles.inputStyle}
            placeholder="Search for chats & Messages"
          />
        </View>

        {list.map((i) => {
          return (
            <View key={i}>
              {active == i &&
                (Platform.OS == "ios" ? (
                  <BlurView
                    intensity={8}
                    style={{
                      position: "absolute",
                      top: 0,
                      tint: "light",
                      right: 0,
                      bottom: 0,
                      left: 0,
                      zIndex: 9,
                    }}
                  >
                    <View style={styles.buttonContainer}>
                      <TouchableOpacity
                        style={[styles.button, styles.buttonLeft]}
                        onPress={() => deleteChat(i)}
                      >
                        <Text style={styles.buttonText}>
                          <Icon name="trash" /> Delete
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.button, styles.buttonRight]}
                      >
                        <Text style={styles.buttonText}>
                          <Icon name="info-circle" /> Info
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </BlurView>
                ) : (
                  <View
                    // intensity={8}
                    style={{
                      position: "absolute",
                      top: 0,
                      tint: "light",
                      right: 0,
                      bottom: 0,
                      left: 0,
                      zIndex: 9,
                      backgroundColor: "rgba(255,255,255,0.7)",
                    }}
                  >
                    <View style={styles.buttonContainer}>
                      <TouchableOpacity
                        style={[styles.button, styles.buttonLeft]}
                        onPress={() => deleteChat(i)}
                      >
                        <Text style={styles.buttonText}>
                          <Icon name="trash" /> Delete
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[styles.button, styles.buttonRight]}
                      >
                        <Text style={styles.buttonText}>
                          <Icon name="info-circle" /> Info
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              <Pressable
                onLongPress={() => setActive(i)}
                onPress={() => setActive(null)}
                style={({ pressed }) => [
                  {
                    opacity: pressed ? 0.7 : 1,
                  },
                ]}
              >
                <View style={styles.chat}>
                  <View style={{ height: "100%", marginRight: 13 }}>
                    <Image source={Images.Chats} />
                  </View>
                  <View
                    style={{
                      flex: 1,
                    }}
                  >
                    <Text style={styles.name}>Alica joe, 23</Text>
                    <Text style={styles.message}>hey babe! what's up?</Text>
                  </View>
                  <View>
                    <Icon
                      name="ellipsis-v"
                      color="#9799A5"
                      size={16}
                      style={{ textAlign: "right" }}
                    />
                    <Text style={[styles.message, { marginTop: 7 }]}>Fri</Text>
                  </View>
                </View>
              </Pressable>
            </View>
          );
        })}
      </ScrollView>
      <BottomHeader navigation={navigation} active={"Chats"} />
    </View>
  );
};

export default Chats;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    marginTop: 12,
    marginBottom: 18,
    fontSize: 24,
    color: "#2E313D",
    paddingHorizontal: 16,
  },
  inputContainer: {
    backgroundColor: "#F5F5F5",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    padding: 10,
    height: 43,
    marginBottom: 30,
    marginHorizontal: 16,
  },
  inputStyle: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 14,
    color: "#9799A5",
  },
  chat: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 10,
    borderBottomColor: "#E9E9E9",
    borderBottomWidth: 0.5,
    paddingHorizontal: 16,
  },
  name: {
    fontSize: 16,
    color: "#2E313D",
  },
  message: {
    fontSize: 12,
    marginTop: 5,
    color: "#9799A5",
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingVertical: 16,
    backgroundColor: "#9799A5",
    width: Dimensions.get("window").width / 2 - 100,
  },
  buttonLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderRightWidth: 0.25,
    borderRightColor: "#fff",
  },
  buttonRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderLeftWidth: 0.25,
    borderLeftColor: "#fff",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 12,
  },
});
