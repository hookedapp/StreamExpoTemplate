import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, View, Text } from "react-native";
import Constants from "expo-constants";
import axios from "axios";
import MenuItem from "./MenuItem";

const MenuList = () => {
  const [menuConstruct, setMenuConstruct] = useState({
    category: [],
    item_families: [],
  });

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `${Constants.manifest.extra.apiUrl}/catalog?location_id=${Constants.manifest.extra.locationId}`,
        {
          headers: {
            access_token: Constants.manifest.extra.accessToken,
          },
        }
      );

      setMenuConstruct(data.catalog);
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
      style={{ flex: 1, width: "100%", zIndex: 2 }}
      renderItem={renderItem}
      ListHeaderComponent={
        <View style={{ height: 100, alignItems: 'center', justifyContent: 'center', width: "100%" }}>
          <Text style={{fontSize: 25, fontWeight: '700'}}>{`Welcome to ${Constants.manifest.extra.appName}`} </Text>
        </View>
      }
      data={menuConstruct.category}
      keyExtractor={(item) => `MenuList_${item._id}`}
    />
  );
};

export default MenuList;
