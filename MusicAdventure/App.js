import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListOfAlbums from './ListOfAlbums';
import SearchBar from './SearchBar' ;
import SongDetailed from './SongDetailed';
import Lyrics from './Lyrics';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name='Home' component={SearchBar} /> 
    <Stack.Screen name='Artist' component={ListOfAlbums} />
    <Stack.Screen name='Song Details' component={SongDetailed} />
    <Stack.Screen name='Lyrics' component={Lyrics} />
    </Stack.Navigator>    
  </NavigationContainer>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});