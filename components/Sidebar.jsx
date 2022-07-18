import { StyleSheet, TextInput, View, Image } from 'react-native'
import React from 'react'
import Categories from './Categories'

const Sidebar = () => {
  return (
    <View>
    <View style={styles.container}>
     <TextInput style={styles.input} placeholder="Rechercher sur Waapi" />
    </View>

    <Categories />
    </View>

  )
}

export default Sidebar

const styles = StyleSheet.create({
    container: {
        height: 48,
        padding: 5,
        paddingRight:0,
        width: 305,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignSelf: 'center', 
        borderWidth: 0,
        borderRadius: 25,
        elevation: 45,
        margin:10,
        borderColor: 'black',
    },
    input: {
        height: 60, 
        padding: 5,
        width: "100%"
    },
    image:{
      resizeMode: 'contain',
      borderRadius:50,
      width: 48,
      height: 48,
    }



})