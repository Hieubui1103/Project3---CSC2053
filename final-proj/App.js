//import { StyleSheet } from 'react-native';

//import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Lyrics from './Lyrics';

//const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Lyrics></Lyrics>
    
    /*
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='Details' component={Details} />  
    <Stack.Screen name='Add Word' component={AddWord} />
    </Stack.Navigator>    
    </NavigationContainer>  
  */
  );
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/