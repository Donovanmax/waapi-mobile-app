import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

const Categories = () => {
  return (
    <View style={{marginTop:10, justifyContent:"center", alignItems:"center", flexDirection: "row",}}>
      <View style={styles.slider}>
        <Text style={styles.Text}>Categories</Text>
      </View>
      <View style={styles.slider}>
        <Text style={styles.Text}>Categories</Text>
      </View>
      <View style={styles.slider}>
        <Text style={styles.Text}>Categories</Text>
      </View>
      <View style={styles.slider}>
        <Text style={styles.Text}>Categories</Text>
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  slider: {
    position: "relative",
    flexDirection: "row",
    marginRight: 8,
    height: 38,
    borderRadius:30,
    padding:5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#3D7DFF"
  },
  Text: {
    color: "#fff",
    fontSize:10
  }
});
