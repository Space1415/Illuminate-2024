import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/screens/Home"
import Settings from "./src/screens/Settings"
import About from "./src/screens/About"
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


export const onLayoutRootView = async (fontsLoaded, fontError) => {
  if (fontsLoaded || fontError) {
    await SplashScreen.hideAsync();
  }
};

export default function App() {
  const Stack = createStackNavigator();

  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded, fontError] = useFonts({
    'Lexend-Regular': require('./src/assets/fonts/Lexend-Regular.ttf'),
    'Lexend-Medium': require('./src/assets/fonts/Lexend-Medium.ttf'),
    'Lexend-SemiBold': require('./src/assets/fonts/Lexend-SemiBold.ttf'),
    'Lexend-Bold': require('./src/assets/fonts/Lexend-Bold.ttf'),
  });

  onLayoutRootView(fontsLoaded, fontError);
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ gestureEnabled: false, headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
