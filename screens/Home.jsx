import { View, Text, StatusBar, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Sidebar from "../components/Sidebar";
import Base from "../Resto/Base";

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        // marginTop: StatusBar.currentHeight,
        backgroundColor: "#fff"
      }}
    >
      <StatusBar backgroundColor="#3D7DFF" barStyle="ligth-content" />
      <View style={{ alignItems: "center" }}>
        <Sidebar />
        </View>
        <View style={styles.cont}>
        <ScrollView>
          <View>
            <Base />
          </View>
        </ScrollView>
        </View>
    </View>

  );
};

const styles = StyleSheet.create({
  cont: {
  flex: 1,
  marginTop:10
  }
});
export default Home;
