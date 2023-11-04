import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddClass from './screen/AddClass';


export default function App() {
  return (
    <View style={styles.container}>
   <AddClass/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    
    justifyContent: 'center',
    width:"100%"
  },
});
