import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Categories = () => {
  const categories = [
  "Restaurants" ,
  "Hôtels" ,
  "Bars & Clubs" ,
  "Immobilier" 
  ];
  const [categorie, setCategorie] = React.useState(0);

  return (
    <View
      style={{
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
      }}
    >
      {categories.map((cat, id) => {
        return (
          <TouchableOpacity
          onPress={() => {setCategorie(id)}}
            key={id}
            style={[
              styles.slider,
              {backgroundColor: categorie === id ? "#3D7DFF" : "#ccc"}
      ]}
          >
            <Text key={id} style={styles.Text}>
              {cat}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  slider: {
    position: "relative",
    flexDirection: "row",
    marginRight: 8,
    height: 28,
    width: 80,
    borderRadius: 15,
    padding: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  Text: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "bold"
  }
});
