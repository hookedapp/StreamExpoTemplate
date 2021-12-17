import {useEffect, useState} from 'react';
import { FlatList } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios'
import MenuItem from './MenuItem'

const MenuList = () => {
    const [menuConstruct, setMenuConstruct] = useState({
        category: [],
        item_families: []
    })



    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`${Constants.manifest.extra.apiUrl}/menu?location_id=${Constants.manifest.extra.locationId}`, {
                headers: {
                    access_token: Constants.manifest.extra.accessToken
                }
            })

            setMenuConstruct(data)
        }

        getData()

    }, [])

    const renderItem = () => {
        return (
            <MenuItem />
        )
    }
    return (
        <FlatList
            style={{ flex: 1, width: '100%', zIndex: 2 }}
            renderItem={renderItem}
            data={menuConstruct.category}
            keyExtractor={(item) => `MenuList_${item._id}`}
        />
    )
}


export default  MenuList