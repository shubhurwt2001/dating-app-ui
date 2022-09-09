import React, { useRef } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import Swiper from "react-native-deck-swiper";
import PhotoCards from "./data/PhotoCards";
import Card from "./components/Card";
import OverlayLabel from "./data/OverlayLable";

const Discover = ({ navigation }) => {
  const useSwiper = useRef();
  const handleOnSwipedLeft = () => useSwiper.current.swipeLeft();
  const handleOnSwipedRight = () => useSwiper.current.swipeRight();

  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.container}>
        <Swiper
          ref={useSwiper}
          animateCardOpacity
          cards={PhotoCards}
          renderCard={(card) => <Card card={card} />}
          cardIndex={0}
          backgroundColor="#fff"
          stackSize={2}
          infinite
          showSecondCard
          animateOverlayLabelsOpacity
          onSwipedTop={handleOnSwipedRight}
          onSwipedBottom={handleOnSwipedLeft}
          overlayLabels={{
            bottom: {
              title: "NOPE",
              element: (
                <OverlayLabel
                  label={false}
                  color="#AEAEAE"
                  background="rgba(186, 187, 188,0.5)"
                />
              ),
              style: {
                wrapper: styles.overlayWrapper,
              },
            },
            left: {
              title: "NOPE",
              element: (
                <OverlayLabel
                  label={false}
                  color="#AEAEAE"
                  background="rgba(186, 187, 188,0.5)"
                />
              ),
              style: {
                wrapper: styles.overlayWrapper,
              },
            },
            right: {
              title: "LIKE",
              element: (
                <OverlayLabel
                  label={true}
                  color="#D9B372"
                  background="rgba(205, 191, 165,0.5)"
                />
              ),
              style: {
                wrapper: {
                  ...styles.overlayWrapper,
                },
              },
            },
            top: {
              title: "LIKE",
              element: (
                <OverlayLabel
                  label={true}
                  color="#D9B372"
                  background="rgba(205, 191, 165,0.5)"
                />
              ),
              style: {
                wrapper: {
                  ...styles.overlayWrapper,
                },
              },
            },
          }}
        />
        <View style={styles.button}>
          <TouchableOpacity
            style={[styles.button.common, { backgroundColor: "#EA008A" }]}
            onPress={handleOnSwipedLeft}
          >
            <Icon name="times" size={28} color="#fff"></Icon>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button.common, { backgroundColor: "#21C0F1" }]}
            onPress={handleOnSwipedRight}
          >
            <Icon name="check" size={28} color="#fff"></Icon>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Discover;

const styles = StyleSheet.create({
  parent: {
    backgroundColor: "#fff",
  },
  container: {
    // flex: 1,
    flexDirection: "column-reverse",
    height: "100%",
    // justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  button: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: Platform.OS == "ios" ? 0 : 20,
    common: {
      width: 70,
      height: 70,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
    },
  },
  overlayWrapper: {
    height: "100%",
  },
});
