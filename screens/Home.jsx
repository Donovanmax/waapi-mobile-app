import { View, Text, StatusBar } from "react-native";
import React from "react";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <View style={{ flex: 1, marginTop:StatusBar.currentHeight + 10}}>
      <View style={{alignItems: 'center'}}>
        <Sidebar />
      </View>
    </View>
  );
};

export default Home;
