import { StyleSheet, TextInput, View, Image } from 'react-native'
import React from 'react'
import Categories from './Categories'

const Sidebar = () => {
  return (
    <View>
    <View style={styles.container}>
     <TextInput style={styles.input} placeholder="Rechercher sur Waapi" />
     <Image source={require("../assets/images/max.jpg")} style={styles.image} />
    </View>

    <Categories />
    </View>

  )
}

export default Sidebar

const styles = StyleSheet.create({
    container: {
        height: 50,
        padding: 5,
        paddingRight:0,
        width: 305,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        alignSelf: 'center', 
        borderWidth: 0,
        borderRadius: 25,
        margin:10,
        elevation: 45,
        borderColor: 'black',
    },
    input: {
        height: 60, 
        padding: 5,
    },
    image:{
      resizeMode: 'contain',
      borderRadius:50,
      width: 48,
      height: 48,
    }



})