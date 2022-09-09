import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Platform,
} from "react-native";
import Images from "../../assets/Images";

const OverlayLabel = ({ label, color, background }) => (
  <View
    style={[
      styles.overlayLabel,
      { borderColor: color, backgroundColor: background },
    ]}
  >
    {label ? <Image source={Images.Like} /> : <Image source={Images.Dislike} />}
  </View>
);

const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  overlayLabel: {
    marginTop: Platform.OS == "ios" ? -100 : -50,
    height: height - 250,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderRadius: 20,
    width: "100%",
  },
  overlayLabelText: {
    textAlign: "center",
  },
});
export default OverlayLabel;
