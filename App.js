import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Image,
  StatusBar,
  StyleSheet,
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
        <TouchableOpacity onPress={() => alert("h")}>
          <Image source={Images.DiscoverUser} />
        </TouchableOpacity>
      );
    }
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
          name="Discover"
          component={Discover}
          options={({ navigation }) => ({
            headerShadowVisible: false,
            headerLeft: () => discoverHeader(navigation, "left"),
            headerTitle: () => discoverHeader(navigation, "title"),
            headerRight: () => discoverHeader(navigation, "right"),
          })}
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
