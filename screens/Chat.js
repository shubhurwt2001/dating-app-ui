import React, { useEffect, useRef, useState } from "react";
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
import Icon from "react-native-vector-icons/FontAwesome";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import IconIonicon from "react-native-vector-icons/Ionicons";
import Images from "../assets/Images";
import { BlurView } from "expo-blur";
const { StatusBarManager } = NativeModules;
const Chat = ({ navigation }) => {
  const scrollViewRef = useRef();
  const [statusHeight, setStatusHeight] = useState(0);
  useEffect(() => {
    if (Platform.OS == "ios") {
      StatusBarManager.getHeight((height) => {
        setStatusHeight(height.height);
      });
    } else {
      setStatusHeight(StatusBar.currentHeight);
    }
  }, []);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <View
      style={[
        styles.container,
        Platform.OS == "ios" && { paddingTop: statusHeight, paddingBottom: 20 },
      ]}
    >
      <View style={[styles.header, { paddingBottom: 15 }]}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.pop()}
            // activeOpacity={0.6}
            style={{
              paddingHorizontal: 15,
              paddingVertical: 6,
              backgroundColor: "#F5F5F5",
              borderRadius: 4,
            }}
          >
            <Icon name="angle-left" size={28} color="#9799A5"></Icon>
          </TouchableOpacity>
        </View>
        <View style={[styles.header, { paddingHorizontal: 15, flex: 1 }]}>
          <Image
            source={Images.Chats}
            style={{ height: 44, width: 44, marginRight: 10 }}
          />
          <View>
            <Text style={styles.heading}>Jerry McCall, 28</Text>
            <Text style={[styles.text, { color: "#19B000" }]}>Online</Text>
          </View>
        </View>
        <View
          style={[
            styles.header,
            {
              justifyContent: "space-between",
              paddingHorizontal: 0,
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => navigation.pop()}
            // activeOpacity={0.6}
            style={{
              paddingHorizontal: 12,
              paddingVertical: 6,
              backgroundColor: "#F5F5F5",
              borderRadius: 4,
              marginRight: 5,
            }}
          >
            <Icon name="ban" size={18} color="#9799A5"></Icon>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.pop()}
            // activeOpacity={0.6}
            style={{
              paddingHorizontal: 12,
              paddingVertical: 6,
              backgroundColor: "#2A2A2A",
              borderRadius: 4,
            }}
          >
            <Icon5 name="ghost" size={18} color="#fff"></Icon5>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={{
          backgroundColor: "#F5F5F5",
          paddingVertical: 25,
        }}
        ref={scrollViewRef}
        onLayout={() => scrollViewRef.current.scrollToEnd({ animated: true })}
      >
        {arr.map((i, index) => {
          return (
            <View
              key={i}
              style={[
                styles.header,
                {
                  // padding: 10,
                  alignItems: "flex-start",
                  marginBottom: 20,
                },
                i % 2 == 0 && { flexDirection: "row-reverse" },
              ]}
            >
              <Image source={Images.Chats} style={{ height: 24, width: 24 }} />
              <View style={i % 2 == 0 ? { marginRight: 6 } : { marginLeft: 6 }}>
                <View
                  style={{
                    paddingVertical: 12,
                    paddingHorizontal: 16,
                    borderRadius: 7,
                    backgroundColor: i % 2 == 0 ? "#2E313D" : "#fff",
                    maxWidth: Dimensions.get("window").width / 1.5,
                  }}
                >
                  <Text style={[styles.text, { color: i % 2 == 0 && "#fff" }]}>
                    Let's meet up tomorrow? Lunch?
                  </Text>
                </View>
                <Text
                  style={[
                    styles.text,
                    {
                      fontSize: 12,
                      marginTop: 5,
                      marginBottom:
                        index == arr.length - 1 ? statusHeight - 15 : 0,
                    },
                  ]}
                >
                  14:30pm
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>

      <KeyboardAvoidingView behavior={Platform.OS == "ios" && "padding"}>
        <View style={styles.inputContainer}>
          <Icon5 name="calendar-day" color="#9799A5" size={20} />
          <TextInput
            style={styles.inputStyle}
            placeholder="Write something here..."
          />
          <IconIonicon name="send" color="#9799A5" size={20} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
export default Chat;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  heading: {
    color: "#2E313D",
    fontSize: 16,
    lineHeight: 21,
  },
  text: {
    fontSize: 14,
    lineHeight: 16,
    color: "#9799A5",
  },
  inputContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    padding: 10,
    height: 63,
    marginHorizontal: 16,
    // marginBottom: 20,
  },
  inputStyle: {
    flex: 1,
    minHeight:43,
    paddingHorizontal: 15,
    fontSize: 14,
    color: "#9799A5",
  },
});
