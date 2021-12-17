import * as React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {


useEffect(() => {
  console.log("GET MENU!")
      console.log('Constants.manifest.extra.enableComments', Constants.manifest.extra)
            console.log('Constants.manifest.extra.enableComments', Constants.manifest.extra.apiUrl)
                        console.log('Constants.manifest.extra.enableComments', Constants.manifest.extra.locationId)
                                    console.log('Constants.manifest.extra.enableComments', Constants.manifest.extra.accessToken)
}, [])


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
