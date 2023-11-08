import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddClass from './screen/AddClass';
import Teachers from './screen/Teachers';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Filter from './screen/Filter';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <View style={styles.container}>


    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Teachers} />
        <Stack.Screen name="filter" component={Filter} />

      </Stack.Navigator>
    </NavigationContainer>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',

    justifyContent: 'center',
    width: "100%"
  },
});
