import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import React from "react";
import { annes } from "../data";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width, height } = Dimensions.get("window");
const Annonces = () => {
  const [textVisable, setTextVisable] = React.useState(false);
  return (
    <View style={{ width: width, height: height }}>
      <ScrollView pagingEnabled>
        {annes.map((annonce, id) => {
          return (
            <View key={id} style={styles.slider}>
              <View
                style={{
                  position: "absolute",
                  zIndex: 20,
                  padding: 7,

                  backgroundColor: "#3D7DFF",
                  width: "100%",

                  maxWidth: width
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        fontStyle: "italic",
                        color: "#fff"
                      }}
                    >
                      {annonce.title}
                    </Text>
                    <Icon
                      name={
                        textVisable === false ? "chevron-down" : "chevron-up"
                      }
                      size={29}
                      color="#fff"
                      onPress={() => setTextVisable(!textVisable)}
                    />
                  </View>
                  <TouchableOpacity
                    style={{ marginRight: 10 }}
                  >
                    <Icon
                      name="phone-dial"
                      size={25}
                      color="#fff"
                      onPress={() => alert("call")}
                    />
                  </TouchableOpacity>
                </View>
                {textVisable ? (
                  <Text style={{ fontSize: 11, color: "white" }}>
                    {annonce.description}
                  </Text>
                ) : (
                  <></>
                )}
              </View>
              <View style={{ width: width, height: height }}>
                <Image
                  source={{ uri: annonce.link }}
                  style={{
                    resizeMode: "cover",
                    height: height,
                    width: width
                  }}
                />
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  slider: { width: "100%" }
});

export default Annonces;
