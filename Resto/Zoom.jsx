import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Animated,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import Zoom1 from "./Zoom1";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation, useRoute } from "@react-navigation/core";
import Zoom2 from "./Zoom2";
import Maps from "./Maps";
import Commentaires from "./Commentaires";

const { width, height } = Dimensions.get("screen");
const stack = ["Menu", "Infos", "Maps", "Commentaires"];

const Zoom = () => {
  const route = useRoute();
  const Name = route.params.name;
  const carousel = route.params.data;



  const scrollX = React.useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const Stack = createStackNavigator();
  const [activeStack, setActiveStack] = React.useState(1);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden backgroundColor={"transparent"} />
      <View style={{ flex: 0.3 }}>
        <View
          style={{ top: 30, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.goBack()}
            style={{
              zIndex: 99,
              position: "absolute",
              padding: 12,
              backgroundColor: "#fff",
              alignSelf: "flex-start",
              flexDirection: "row",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              elevation: 20,
              left: 5
            }}
          >
            <FontAwesome5 size={12} name="arrow-left" color={'red'} />
            <View
              style={{
                marginLeft: 8
              }}
            >
              <Text
                style={{
                  color: "#111",
                  fontWeight: "bold",
              
                  fontSize: 12
                }}
              >
                {Name}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              zIndex: 99,
              position: "absolute",
              padding: 6,
              backgroundColor: "#fff",
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "flex-end",
              elevation: 20,
              right: 5
            }}
          >
            <FontAwesome5 size={15} name="heart" color={'red'} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              zIndex: 99,
              position: "absolute",
              padding: 6,
              backgroundColor: "#fff",
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "flex-end",
              elevation: 20,
              right: 65
            }}
          >
            <FontAwesome5 size={15} name="phone-alt" color={'red'} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              zIndex: 99,
              position: "absolute",
              padding: 6,
              backgroundColor: "#fff",
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "flex-end",
              elevation: 20,
              right: 35
            }}
          >
            <FontAwesome5 size={15} name="envelope" color={'red'} />
          </TouchableOpacity>
        </View>
        <Animated.ScrollView
          style={{ width: width }}
          horizontal
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: true
            }
          )}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        >
          {carousel?.map((item, id) => {
            return (
              <Image
                source={item}
                key={id}
                style={{
                  width: width,
                  height: "100%",
                  resizeMode: "cover"
                }}
              />
            );
          })}
        </Animated.ScrollView>

        <View style={styles.pagination}>
          {carousel.map((i, id) => {
            return <View key={id} style={styles.dot} />;
          })}
          <Animated.View
            style={[
              styles.dotActive,
              {
                transform: [
                  {
                    translateX: Animated.divide(scrollX, width).interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, dotSize + margin]
                    })
                  }
                ]
              }
            ]}
          ></Animated.View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'red',
          flex: 0.7
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10
          }}
        >
          {stack.map((st, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={[
                  styles.ContainNavigator,
                  { borderBottomWidth: activeStack === i ? 3.5 : 0 },
                  {
                    borderBottomColor:
                      activeStack === i ? "#fff" : "transparent"
                  }
                ]}
                onPress={() => {
                  setActiveStack(i),
                    navigation.navigate(st.toLowerCase(), {
                       test:Name
                    });
                }}
              >
                <Text key={i} style={styles.TextNavigator}>
                  {st}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Stack.Navigator initialRouteName="infos">
          <Stack.Screen
            component={Zoom1}
            name={"menu"}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            component={Zoom2}
            name={"infos"}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            component={Maps}
            name={"maps"}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            component={Commentaires}
            name={"commentaires"}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default Zoom;

const dotSize = 18;
const margin = 4;

const styles = StyleSheet.create({
  dot: {
    width: dotSize,
    height: dotSize,
    borderRadius: dotSize,
    backgroundColor: "#eee",
    marginRight: margin
  },

  TextNavigator: {
    fontSize: 15,
    color: "#fff",
    fontStyle: "italic",
  },
  ContainNavigator: {
    alignItems: "center",
    justifyContent: "center"
  },

  dotActive: {
    width: dotSize,
    height: dotSize,
    borderRadius: dotSize,
    backgroundColor: 'red',
    position: "absolute"
  },

  pagination: {
    position: "absolute",
    flexDirection: "row",
    bottom: 16,
    right: width / 2 - dotSize * 2 - margin * 2
  }
});
