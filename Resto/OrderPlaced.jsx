import { View, Text, } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const OrderPlaced = () => {
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
  return (
    <View>
 <Text>commande placee</Text>
      <Text>
          Votre commande a l'etablissement {restoName} a ete placee avec succes au montant
          total de {totalCFA}
        </Text>

    </View>
  );
};

export default OrderPlaced;
