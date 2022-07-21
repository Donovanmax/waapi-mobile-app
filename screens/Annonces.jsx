import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet
} from "react-native";
import React from "react";
import { annes } from "../data";

const { width, height } = Dimensions.get("window");
const Annonces = () => {
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
                  padding:10,

                  backgroundColor: "#3D7DFF",
                  width: "100%",

                  maxWidth: width 
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    fontStyle: "italic",
                    color: "#fff",
                  }}
                >
                  {annonce.title}
                </Text>
                <Text style={{ fontSize: 11, color: "white" }}>{annonce.description}</Text>
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
