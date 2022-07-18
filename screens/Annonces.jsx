import {
  View,
  Text,
  TouchableOpacity,
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
              <View>
                <Image
                  source={{ uri: annonce.link }}
                  style={{
                    resizeMode: "contain",
                    height: height,
                    width: width
                  }}
                />
              </View>
              <View style={{position:"absolute", zIndex:15, top:25, left:15, maxWidth:width/1.2}}>
                <Text style={{fontSize:25, fontWeight:"bold", fontStyle:"italic"}}>{annonce.title}</Text>
                <Text style={{fontSize:11}}>{annonce.description}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {}
});

export default Annonces;
