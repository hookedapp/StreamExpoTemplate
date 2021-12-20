import React from "react";
import { View, Text,  Image } from "react-native";
import { LIGHT_MODE } from '@env'

const MenuItem = ({ menuItem }) => {
  return (
    <View
      style={{
        width: "90%",
        alignSelf: "center",
        height: 130,
        marginVertical: 20,
        backgroundColor: LIGHT_MODE === 'true' ? 'white': 'rgb(32, 33, 36)',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        borderRadius: 10,
          shadowColor: LIGHT_MODE === 'true' ? 'black': 'white'
      }}
    >
        <View style={{position: 'absolute', top:15, right: 15,}}>
            <Text style={{fontWeight: 'bold', color: "rgb(104, 223, 74)"}}>$13</Text>
        </View>
      <View
        style={{
          flex: 1,
          overflow: "hidden",
          borderRadius: 10,
          flexDirection: "row",
        }}
      >
        {menuItem.images.length ? (
          <Image style={{ flex: 1 }} source={{ uri: menuItem.images[0].url }} />
        ) : null}
        <View style={{ flex: 2,             padding: 20, }}>
          <Text style={{ fontSize: 14, fontWeight: "600", color: LIGHT_MODE === 'true' ? 'black': 'white' }}>
            {menuItem.name}
          </Text>
          <Text style={{ fontSize: 11, fontWeight: "500", color: LIGHT_MODE === 'true' ? 'black': 'white' }} numberOfLines={3}>
            {menuItem.description}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MenuItem;
