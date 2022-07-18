import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const Zoom2 = () => {
  // const router = useRoute()
  // const test = router.params.test
  return (
    <View style={{ alignSelf: "center", top: "30%" }}>
      <Text
        style={{
          fontSize: 22,
          textAlign: "center"
        }}
      >
        Les infos commerciales, Contacts ainsi que d'autres détails
        s'afficheront ici
      </Text>
    </View>
  );
};

export default Zoom2;
