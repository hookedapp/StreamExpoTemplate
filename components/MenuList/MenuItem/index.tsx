import { View, Text } from 'react-native';

const MenuItem = (menuItem) => {

    return (
        <View style={{width: '90%', marginVertical: 10, backgroundColor: 'green'}}>
            <Text>{menuItem.name}</Text>
        </View>
    )

}


export default MenuItem