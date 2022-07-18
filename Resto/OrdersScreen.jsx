import { View, Text } from "react-native";
import React from "react";

const OrdersScreen = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#999"
      }}
    >
      <Text
        style={{
          fontWeight: "800",
          fontSize: 16,
          color: "black"
        }}
      >
        {item.title}
      </Text>
      <Text
        style={{
          opacity: 0.7,
          fontSize: 16,
          color: "black"
        }}
      >
        {item.price} Fcfa
      </Text>
    </View>
  );
};

export default OrdersScreen;
