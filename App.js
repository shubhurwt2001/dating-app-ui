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
        <TouchableOpacity onPress={() => alert("h")}>
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
      <StatusBar animated={true} barStyle={"dark-content"} />
      <Stack.Navigator>
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
            headerRight: () => skipButton(navigation),
            headerTitle: () => progressBar("20%"),
          })}
        />
        <Stack.Screen
          name="Discover"
          component={Discover}
          options={({ navigation }) => ({
            headerShadowVisible: false,
            headerLeft: () => discoverHeader(navigation, "left"),
            headerTitle: () => discoverHeader(navigation, "title"),
            headerRight: () => discoverHeader(navigation, "right"),
          })}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
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
