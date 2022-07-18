import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Modal
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { songisongi } from "../data";
import { Divider } from "react-native-elements";

const { height, width } = Dimensions.get("window");

const Songi = () => {
  const [modalOpened, setModalopen] = React.useState(false);
  return (
    <>
      <View>
        <Modal visible={modalOpened}>
          <Icon
            name="close"
            size={35}
            color="#000"
            onPress={() => setModalopen(false)}
          />
          <Text>hello</Text>
        </Modal>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          aignItems: "center",
          backgroundColor: "#ffffff"
        }}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row-reverse",
            padding: 8,
            justifyContent: "space-between",
            backgroundColor: "#fff"
          }}
        >
          <View style={{flexDirection: "row-reverse", justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity style={{marginLeft:4}}>
              <Icon name="magnify" size={28} color="#3D7DFF" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../assets/images/max.jpg")}
                style={{
                  resizeMode: "center",
                  width: 27,
                  height: 27,
                  borderRadius: 100
                }}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 22,
              textTransform: "uppercase",
              color: "#3D7DFF"
            }}
          >
            waapi
          </Text>
         
        </View>
        <Divider width={2} color={"#3D7DFF"}/>
        <View style={{ flex: 2 }}>
          <ScrollView>
            {songisongi.map((songi, id) => {
              return (
                <View
                  key={id}
                  style={{
                    marginBottom: 0,
                    alignItems: "center",
                    justifyContent: "space-between",
                    elevation: 25
                  }}
                >
                  <View style={styles.UserPic}>
                    <Image
                      source={songi.user}
                      style={{
                        resizeMode: "cover",
                        width: 50,
                        height: 50,
                        marginRight: 8,
                        borderRadius: 100
                      }}
                    />
                    <View>
                      <Text style={{ fontWeight: "bold" }}>{songi.name}</Text>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Icon
                          name="map-marker-outline"
                          size={12}
                          color="#001"
                        />
                        <Text style={{ fontSize: 10 }}>{songi.location}</Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: width,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Image
                      source={songi.publication}
                      style={{
                        resizeMode: "cover",
                        width: "100%",
                        height: 550
                      }}
                    />
                    <View
                      style={{
                        width: "100%",
                        justifyContent: "space-between",
                        alignItems: "center",
                        elevation: 25,
                        flexDirection: "row"
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          flex: 1,
                          flexDirection: "row",
                          backgroundColor: "rgba(15, 20, 5, 0.1)"
                        }}
                      >
                        <Text style={{ marginRight: 7, fontWeight: "700" }}>
                          {songi.likes}
                        </Text>
                        <Icon name="heart-outline" size={35} color="#3D7DFF" />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          flex: 1,
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "rgba(15, 20, 5, 0.1)"
                        }}
                      >
                        <Icon name="share-outline" size={35} color="#3D7DFF" />
                      </TouchableOpacity>
                      
                    </View>
                  
                  </View>
                 
                </View>
                
              );
            })}
          </ScrollView>
        </View>
        <View
          style={{
            alignItems: "center",
            zIndex: 22,
            position: "relative",
            flex: 0.1
          }}
        >
          <TouchableOpacity
            style={styles.plusBtn}
            activeOpacity={0.5}
            onPress={() => setModalopen(true)}
          >
            <Icon name="plus" size={35} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  plusBtn: {
    justifyContent: "center",
    borderRadius: 100,
    height: 35,
    width: 35,
    backgroundColor: "#3D7DFF",
    alignItems: "center"
  },
  UserPic: {
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    margin: 7,
    alignItems: "center",
    flexDirection: "row"
  }
});
export default Songi;
