import React from "react";
import { View, Text, Image } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Divider } from "react-native-elements/dist/divider/Divider";
import MenuItems from "./MenuItems";
import { TouchableOpacity } from "react-native";

export default function About(props) {
  const { image, title, description, plats} = props.route.params;


  //const image = require("../assets/images/615.jpg")
  //const title = 'Carnivore'
  //const description = ' Cuisine Mixte $$ . 💵 . 5 🌟 (1500+ 👍 )'
  return (
    <View>
      <Divider width={1} style={{ marginBottom: 10 }}>
        <RestoImage image={image} />
        <RestoTitle title={title} />
        <View>
          <RestoDescription description={description} />
          <RestoExtraInfos/>
        </View>
      </Divider>
  
      <MenuItems plats={plats}/>

    </View>
  );
}

const RestoImage = (props) => (
  <Image source={props.image} style={{ width: "100%", height: 180 }} />
);

const RestoTitle = (props) => (

  <View style={{
  flex:1,
  flexDirection:'row',
  marginTop: 8,
  justifyContent:"space-between"
  }}>
  <Text
    style={{
 
      fontSize: 28,
      fontFamily: "poppins-bold",
      fontWeight: "bold",
      color: "#000"
    }}
  >
    {props.title}
  </Text>
<View style={{flexDirection:'row'}}>
<TouchableOpacity style={{ marginRight:14}}>
<FontAwesome5 name="heart" size={22} 
 style={{
  margin: 3,
  alignSelf: "center",
  color: "#fff"
}}
/>
</TouchableOpacity>
<TouchableOpacity>
<FontAwesome5 name="star" size={22} 
 style={{
  margin: 3,
  alignSelf: "center",
  color: "#fff"
}}
/>
</TouchableOpacity>
</View>
  </View>
);

const RestoDescription = (props) => (
  <Text
    style={{
      fontFamily: "poppins-regular",
      color: "#00aa00",
      fontSize: 18
    }}
  >
    {[props.description]}
  </Text>
);

const RestoExtraInfos = (props) => (
  <View style={{ flex: 1 }}>
    <View
      style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", marginVertical:8}}
    >
      <TouchableOpacity style={{ backgroundColor: "#eee", borderRadius:2, alignItems:"center", justifyContent:'center', padding:7}}>
      <Text
        style={{
          fontFamily: "poppins-regular",
          color: "#000",
          fontWeight:'bold'
        }}
       > <FontAwesome5
      name="thumbs-up"
      size={25}
      style={{
        margin: 3,
        alignSelf: "center",
        color: "#000"
      }}
    />
        J'aime
      </Text>
      </TouchableOpacity>
      <View style={{ backgroundColor: "#e6e229", borderRadius:2, alignItems:"center", justifyContent:'center', padding:7}}>
        <Text
          style={{
            fontFamily: "poppins-regular",
            color: "#000",
            fontWeight:'bold'
          }}
        >
          150 likes
        </Text>
      </View>
    </View>

    <View
      style={{
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        padding: 5
      }}
    >
      <View
        style={{
          flex: 1
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            height: 50,
            backgroundColor: "#fff",
            borderRadius: 10,
            marginBottom: 5
          }}
        >
          <FontAwesome5
            name="phone-alt"
            size={25}
            style={{
              margin: 3,
              alignSelf: "center",
              color: "#000"
            }}
          />

          <Text
            style={{
              margin: 3,
              alignSelf: "center",
              color: "#000"
            }}
          >
            06 408 46 92
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          marginLeft: 5
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            height: 50,
            backgroundColor: "#fff",
            borderRadius: 10,
            marginBottom: 5
          }}
        >
          <FontAwesome5
            name="comment-alt"
            size={25}
            style={{
              margin: 3,
              alignSelf: "center",
              color: "#000"
            }}
          />
          <Text
            style={{
              margin: 3,
              alignSelf: "center",
              color: "#000"
            }}
          >
            Commentaires
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
