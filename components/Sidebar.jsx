import { StyleSheet, TextInput, View, Image } from 'react-native'
import React from 'react'

const Sidebar = () => {
  return (
    <View style={styles.container}>
     <TextInput style={styles.input} placeholder="Rechercher sur Waapi" />
     <Image source={require("../assets/images/max.jpg")} style={styles.image} />
    </View>
  )
}

export default Sidebar

const styles = StyleSheet.create({
    container: {
        height: 50,
        padding: 5,
        width: "70%",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ddd',
        borderWidth: 1,
        borderRadius: 25,
        borderColor: 'black',
    },
    input: {
        height: 60, 
        padding: 5,
    },
    image:{
      resizeMode: 'contain',
      borderRadius:50,
      width: 45,
      height: 45,
    }



})