/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import Splash from './src/views/screens/Splash';
import Splash2 from './src/views/screens/Splash2';
import Splash3 from './src/views/screens/Splash3';
import Splash4 from './src/views/screens/Splash4';
import SignUp from './src/views/screens/SignUp';
import Login from './src/views/screens/Login';
import Home from './src/views/screens/Home';
import Renewable from './src/views/screens/Renewable';
import Datarenew from './src/views/screens/Datarenew';
import Solar from './src/views/screens/Solar';
import Visualization from './src/views/screens/Visualization';
import Agriculture from './src/views/screens/Agriculture';
import Water from './src/views/screens/Water';
import Inflow from './src/views/screens/Inflow';
import Vegetation from './src/views/screens/vegetation';




import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (

    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      headerShown : false
    }}
  //  initialRouteName='Login'
    >
      {/* <Stack.Screen name='Login' component={Login} /> */}

      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Renewable' component={Renewable} /> 
      <Stack.Screen name='Datarenew' component={Datarenew} />
      <Stack.Screen name='Solar' component={Solar} />
      <Stack.Screen name='Visualization' component={Visualization} />
      <Stack.Screen name='Agriculture' component={Agriculture} />
      <Stack.Screen name='Water' component={Water} />
      <Stack.Screen name='Vegetation' component={Vegetation} />
      <Stack.Screen name='Inflow' component={Inflow} />





    </Stack.Navigator>
  </NavigationContainer>
    // <SafeAreaView >
      
    //   <Inflow/>
    // </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
