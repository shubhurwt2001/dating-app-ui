import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Login from "./screens/Login";
import Onboard from "./screens/Onboard";
import Icon from "react-native-vector-icons/FontAwesome";
import Register from "./screens/Register";
import ForgetPassword from "./screens/ForgetPassword";
import Discover from "./screens/Discover";
import Images from "./assets/Images";
import Profile from "./screens/Profile";
import About from "./screens/About";
import Preference from "./screens/Preference";
import Interest from "./screens/Interest";
import Prefer from "./screens/Prefer";
import Destination from "./screens/Destination";
import Chats from "./screens/Chats";
import Chat from "./screens/Chat";

export default function App() {
  const Stack = createNativeStackNavigator();

  const backButton = (navigation) => {
    return (
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
    );
  };

  const discoverHeader = (navigation, side) => {
    if (side == "left") {
      return (
        <TouchableOpacity onPress={() => alert("h")}>
          <Image source={Images.DiscoverLogo} />
        </TouchableOpacity>
      );
    }
    if (side == "title") {
      return (
        <TouchableOpacity onPress={() => navigation.navigate("Chats")}>
          <Image source={Images.DiscoverTitle} />
        </TouchableOpacity>
      );
    }
    if (side == "right") {
      return (
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image source={Images.DiscoverUser} />
        </TouchableOpacity>
      );
    }
  };

  const skipButton = (navigation) => {
    return (
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
        <Text style={{ color: "#999AA1" }}>Skip</Text>
      </TouchableOpacity>
    );
  };

  const progressBar = (width) => {
    return (
      <View
        style={{
          height: 4,
          backgroundColor: "#9799A52E",
          borderRadius: 4,
          width: Dimensions.get("window").width / 2.5,
        }}
      >
        <View
          style={{
            height: 4,
            backgroundColor: "#EA008A",
            borderRadius: 4,
            width: width,
          }}
        ></View>
      </View>
    );
  };
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
        barStyle={"dark-content"}
      />
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen
          name="Home"
          component={Onboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={({ navigation }) => ({
            headerShadowVisible: false,
            title: "",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerLeft: () => backButton(navigation),
            headerBackVisible: false,
          })}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={({ navigation }) => ({
            headerShadowVisible: false,
            title: "",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerLeft: () => backButton(navigation),
            headerBackVisible: false,
          })}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={({ navigation }) => ({
            headerShadowVisible: false,
            title: "",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerLeft: () => backButton(navigation),
            headerBackVisible: false,
          })}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={({ navigation }) => ({
            headerShadowVisible: false,
            title: "",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerLeft: () => backButton(navigation),
            headerBackVisible: false,
            headerRight: () => skipButton(navigation),
            headerTitle: () => progressBar("20%"),
          })}
        />
        <Stack.Screen
          name="Preference"
          component={Preference}
          options={({ navigation }) => ({
            headerShadowVisible: false,
            title: "",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerLeft: () => backButton(navigation),
            headerBackVisible: false,
            headerRight: () => skipButton(navigation),
            headerTitle: () => progressBar("40%"),
          })}
        />
        <Stack.Screen
          name="Interest"
          component={Interest}
          options={({ navigation }) => ({
            headerShadowVisible: false,
            title: "",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerLeft: () => backButton(navigation),
            headerBackVisible: false,
            headerRight: () => skipButton(navigation),
            headerTitle: () => progressBar("50%"),
          })}
        />
        <Stack.Screen
          name="Prefer"
          component={Prefer}
          options={({ navigation }) => ({
            headerShadowVisible: false,
            title: "",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerLeft: () => backButton(navigation),
            headerBackVisible: false,
            headerRight: () => skipButton(navigation),
            headerTitle: () => progressBar("70%"),
          })}
        />
        <Stack.Screen
          name="Destination"
          component={Destination}
          options={({ navigation }) => ({
            headerShadowVisible: false,
            title: "",
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerLeft: () => backButton(navigation),
            headerBackVisible: false,
            headerRight: () => skipButton(navigation),
            headerTitle: () => progressBar("85%"),
          })}
        />
        <Stack.Screen
          name="Discover"
          component={Discover}
          options={({ navigation }) => ({
            headerShadowVisible: false,
            headerLeft: () => discoverHeader(navigation, "left"),
            headerBackVisible: false,
            headerTitle: () => discoverHeader(navigation, "title"),
            headerRight: () => discoverHeader(navigation, "right"),
          })}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chats"
          component={Chats}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  discoverHeader: {
    flexDirection: "row",
  },
});
