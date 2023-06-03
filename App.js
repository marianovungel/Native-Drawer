import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Book from './Screens/Book';
import Home from './Screens/Home';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationAction, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

const Drawer = createDrawerNavigator()
export default function App() {
  
  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation={true}
        screenOptions={{
          drawerStyle:{
            backgroundColor:'#fff',
            width:'50%'
          },
          headerStyle:{
            backgroundColor: '#969',
          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:600,
          },
          drawerActiveTintColor:'#969',
          drawerLabelStyle:{
            color:'#969',
            fontSize:24
          }
        }}
      >
        <Drawer.Screen 
          name='Home'
          options={{
            drawerLabel:'Home',
            title:'Mariano Vungel',
            drawerIcon:()=>(
              <Feather name="menu" size={34} color="black" />
            )
          }}
          component={Home}
        />
        <Drawer.Screen 
          name='Book'
          options={{
            drawerLabel:'Book',
            title:'Mariano  Vungel',
            drawerIcon:()=>(
              <AntDesign name="book" size={34} color="black" />
            )
          }}
          component={Book}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
