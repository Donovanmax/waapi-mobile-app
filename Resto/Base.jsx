import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { dummy } from "../data";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/core";



const Base = () => {

  const navigation = useNavigation();

  return (
    <View style={{ width: width }}>
      {dummy.map((resto, id) => {
        return (
          <View key={id} style={styles.Images}>
            <TouchableOpacity activeOpacity={0.6} style={{ width: "100%" }}
            onPress={() => navigation.navigate("Zoom", { name:resto.name, 
            data:resto.carousel})}>
            
              <Image
                source={resto.image}
                style={{
                  resizeMode: "cover",
                  width: "100%",
                  height: 140,
                  borderRadius: 10,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0
                }}
              />
            </TouchableOpacity>

            <View style={styles.BottomText}>
              <Text style={styles.Text}>{resto.name}</Text>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row"
                }}
              >
                <TouchableOpacity>
                  <Icon name="heart" size={19} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 15 }}>
                  <Icon name="comment-multiple" size={19} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 15 }}>
                  <Icon name="bell" size={19} color="white" />
                  <View style={styles.Badge} />
                </TouchableOpacity>
              </View>
            </View>

          </View>
        );
      })}
      
    </View>

  );
};

const { width, height } = Dimensions.get("window");
export default Base;

const styles = StyleSheet.create({
  Images: {
    width: "75%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    margin: 15
  },
  Badge: {
    position: "absolute",
    zIndex: 99,
    backgroundColor: "red",
    height: 10,
    width: 10,
    borderRadius: 100,
    right: -2,
    bottom: 8
  },
  BottomText: {
    backgroundColor: "#3D7DFF",
    width: "100%",
    flexDirection: "row",
    padding: 13,
    elevation:20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "space-between",
    alignItems: "center"
  },

  Text: {
    color: "#fff",
    fontWeight: "bold"
  }
});
