import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import BouncyCheckBox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";
// import { useDispatch, useSelector } from "react-redux";

const foods = [
  {
    title: "Croissant",
    description: "pâte feuilletée contenant une grande quantité de beurre",
    price: "500",
    image: {uri:("https://th.bing.com/th/id/OIP.kgKRv3fKHc7sLo_KacHwWAHaHa?pid=ImgDet&w=500&h=500&rs=1")}
  },

  {
    title: "poulet + frittes",
    description: "poulet, oignons, ail",
    price: "1500",
    image: {uri:("https://th.bing.com/th/id/R.6e0c12fd6c7a307e3bcf6e15704f636d?rik=szceaK2C3AwE0g&pid=ImgRaw&r=0")}
  },

  {
    title: "Hamburger",
    description: "crudités, salade, tomate, oignon, cornichon (pickles), ",
    price: "5000",
    image: {uri:("https://th.bing.com/th/id/R.1b0051a67e11886b3ccfdb2fd99770a9?rik=ggydO3gbg1STUw&pid=ImgRaw&r=0")}
  },

  {
    title: "Haricot",
    description: "with butter lettuce, tomato sauce bechamel",
    price: "1000",
    image: {uri:("https://th.bing.com/th/id/R.8924c22ad23a873fcbe2fafd01f7c2fe?rik=hzAdzhvo8XrnYw&pid=ImgRaw&r=0")}
  },

];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    margin: 10,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    padding: 4
  },
  titlteStyle: {
    fontSize: 24,
    fontWeight: "700",
  }
});

const MenuItems = ({ name }) => {


  // const cartItems = useSelector(
  //   (state) => state.cartReducer.selectedItems.items
  // );

  // const isFoodIncart = (plat, cartItems) =>
  //   Boolean(cartItems.find((item) => item.title === plat.title));

  // const nameM = name;
  // const dispatch = useDispatch();
  // const selectItem = (item, checkboxValue) =>
  //   dispatch({
  //     type: "ADD_TO_CART",
  //     payload: { ...item, restoName: nameM, checkboxValue: checkboxValue }
  //   });
  return (
    <>
      <View>
        <ScrollView>
          {foods.map((plat, index) => (
            <View
              key={index}
              style={{
                backgroundColor: "#fff"
              }}
            >
              <View style={styles.menuItemStyle}>
                <BouncyCheckBox
                  iconStyle={{
                    borderColor: "gray",
                    borderRadius: 25
                  }}
                  fillColor={"lightgreen"}
                  // isChecked={isFoodIncart(plat, cartItems)}
                  // onPress={(checkboxValue) => selectItem(plat, checkboxValue)}
                />
                <FoodInfo plat={plat} />
                <FoodImage plat={plat} />
              </View>
              <Divider
                width={8}
                orientation="vertical"
                style={{
                  margin: 5,
                  borderWidth: 0.8,
                  borderColor: "black",
                }}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

const FoodInfo = (props) => (
  <View
    style={{ maxWidth: 200, justifyContent: "space-evenly", marginRight: 15 }}
  >
    <Text
      style={{
   
        color: "#000",
        fontWeight: "bold",
        fontStyle: "italic",
        fontSize: 12,
        textTransform: "uppercase"
      }}
    >
      {props.plat.title}
    </Text>
    <Text
      style={{
        color: "#111",
        fontSize: 11,
        fontStyle: "italic"
      }}
    >
      {props.plat.description}
    </Text>
    <Text
      style={{
        fontSize: 13
      }}
    >
      {props.plat.price} Fcfa
    </Text>
  </View>
);

const FoodImage = (props) => (
  <View style={{ marginRight: 1 }}>
    <Image
      source={props.plat.image}
      //resizeMode={'cover'}
      style={{ width: 80, height: 80, borderRadius: 7 }}
    />
  </View>
);

export default MenuItems;
