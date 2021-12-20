import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, View, Text, Alert } from "react-native";
import axios from "axios";
import {
  APP_TITLE,
  LOCATION_ID,
  API_URL,
  ACCESS_TOKEN,
    LIGHTMODE,
} from "@env";
import MenuItem from "./MenuItem";

const MenuList = () => {
  const [menuConstruct, setMenuConstruct] = useState({
    category: [],
    item_families: [],
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `${API_URL}/catalog?location_id=${LOCATION_ID}`,
          {
            headers: {
              access_token: ACCESS_TOKEN,
            },
          }
        );

        setMenuConstruct(data.catalog);
      } catch (err) {
        console.log({
          err,
        });
      }
    };

    getData();
  }, []);

  const renderItem = (item) => {
    const category = item.item;
    const menuItems = menuConstruct.item_family.filter((i) =>
      category.item_family_ids.includes(i._id)
    );
    if (!menuItems.length) return <></>;
    return (
      <ScrollView>
        {menuItems.map((i) => (
          <MenuItem menuItem={i} />
        ))}
      </ScrollView>
    );
  };
  return (
    <FlatList
      style={{
        flex: 1,
        width: "100%",
        zIndex: 2,
        backgroundColor: LIGHTMODE ? "white" : "rgba(32, 33, 36, 1)",
      }}
      renderItem={renderItem}
      ListHeaderComponent={
        <View
          style={{
            height: 100,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "700",
              color: LIGHTMODE ? "black" : "white",
            }}
          >
            {`Welcome to ${APP_TITLE}`}{" "}
          </Text>
        </View>
      }
      data={menuConstruct.category}
      keyExtractor={(item) => `MenuList_${item._id}`}
    />
  );
};

export default MenuList;
