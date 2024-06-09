import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./src/screens/Home";
import About from "./src/screens/About";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './src/screens/CustomDrawer';

const Drawer = createDrawerNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  const [fontsLoaded] = useFonts({
    'Lexend-Regular': require('./src/assets/fonts/Lexend-Regular.ttf'),
    'Lexend-Medium': require('./src/assets/fonts/Lexend-Medium.ttf'),
    'Lexend-SemiBold': require('./src/assets/fonts/Lexend-SemiBold.ttf'),
    'Lexend-Bold': require('./src/assets/fonts/Lexend-Bold.ttf'),
  });

  const onLayoutRootView = async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Drawer.Navigator screenOptions={{headerShown:false}} drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
