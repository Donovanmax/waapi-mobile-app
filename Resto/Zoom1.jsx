import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Modal,
  StyleSheet 
} from "react-native";
import React, { useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import MenuItems from "./MenuItems";
import { useSelector } from "react-redux";
import OrdersScreen from "./OrdersScreen";



const Zoom1 = () => {
  const router = useRoute();
  const test = router.params.test;

  return (
    <View>
      <ScrollView>
        <MenuItems name={test} />
      </ScrollView>
      <Button />
    </View>
  );
};

const Button = () => {
  const navigation = useNavigation();
  const addOrdersToFirebase = () => {
    // const db = firestore.firestore();
    db.collection("orders").add({
      plats: items,
      restaurant: restoName,
      dateCommande: firebase.firestore.FieldValue.serverTimestamp()
    });

    setModalVisible(false);
    navigation.navigate("orderPlaced");
  };
  const [modalVisible, setModalVisible] = useState(false);
  const { items, restoName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const total = items
    .map((item) => Number(item.price))
    .reduce((prev, curr) => prev + curr, 0);

  const totalCFA = total.toLocaleString("fr", {
    style: "currency",
    currency: "EUR"
  });
  console.log(totalCFA);
  const checkoutModal = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutCtn}>
            <Text style={styles.RestoName}>{restoName}</Text>
            {items.map((item, index) => (
              <OrdersScreen key={index} item={item} />
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Total</Text>
              <Text>{totalCFA} Fcfa</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center"
              }}
            >
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: "black",
                  alignItems: "center",
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: "relative"
                }}
                onPress={() => {
                  addOrdersToFirebase();
                }}
              >
                <Text style={{ color: "#fff", fontSize: 17 }}>
                  Valider la commande
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
      >
        {checkoutModal()}
      </Modal>
      {total ? (
        <TouchableOpacity
          style={styles.BtnCommander}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.btnText}>Commander</Text>
          <Text
            style={{ color: "white", fontSize: 16,  }}
          >
            {total} Fcfa
          </Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  BtnCommander: {
    position: "absolute",
    width: "60%",
    backgroundColor: '#eee',
    top: 370,
    padding: 7,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    alignSelf: "center"
  },
  btnText: {
    fontSize: 14,
    color: "white",
    marginRight: 12
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.6)"
  },
  modalCheckoutCtn: {
    backgroundColor: "white",
    padding: 16,
    height: 500,
    borderWidth: 1
  },
  RestoName: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 10
  },

  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  subtotalText: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 10
  }
});

export default Zoom1;
