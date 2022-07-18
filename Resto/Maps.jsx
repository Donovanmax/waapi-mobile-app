import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const Maps = () => {
  const router = useRoute()
  const test = router.params.test
  return (
    <View style={{ alignSelf: "center", top:"30%"}}>
      <Text
        style={{
          fontSize: 22,
          textAlign: "center"
        }}
      >
        Les infos sur la géolocalisation de l'établissement s'afficheront ici {test}
      </Text>
    </View>
  );
};

export default Maps;
