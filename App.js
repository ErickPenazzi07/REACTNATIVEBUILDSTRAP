import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { Buildstrap } from 'react-native-buildstrap';
import HomeScreen from './Screens/HomeScreen';
import Sensor from './Screens/Sensor';

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
<Buildstrap>
  <NavigationContainer>
  <Tab.Navigator screenOptions={{headerShown: false}}>  
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Sensor" component={Sensor} />
  </Tab.Navigator>
  </NavigationContainer>
</Buildstrap>

  );
}

const styles = StyleSheet.create({

});
