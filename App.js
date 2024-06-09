import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./src/screens/Home";
import About from "./src/screens/About";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { createStackNavigator, TransitionPresets} from '@react-navigation/stack';

const Stack = createStackNavigator()

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

  const transitionConfig = {
    animation: 'timing',
    config: {
      duration: 500, 
    },
  };

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator screenOptions={{headerShown:false, gestureEnabled:false, 
      ...TransitionPresets.FadeFromBottomAndroid,  
      transitionSpec: {
            open: transitionConfig,
            close: transitionConfig,
          },}} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
