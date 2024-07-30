import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import * as Font from 'expo-font';
import 'react-native-reanimated'
import 'react-native-gesture-handler'

import { AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown'

import { useColorScheme } from '@/hooks/useColorScheme';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
import Title from '@/components/header/Title';
import { Pressable, View, StatusBar } from 'react-native';



export default function RootLayout() {
  const colorScheme = useColorScheme();


  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      // Keep the splash screen visible for 3 seconds
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 1000);
    }
    prepare();
  }, []);


  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'CustomFont': require('../assets/fonts/CormorantGaramond-Italic.ttf'),
      'Montserrat': require("../assets/fonts/Montserrat-VariableFont_wght.ttf")

    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null
  }
  return (
    <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
      <AutocompleteDropdownContextProvider>
        <SafeAreaProvider style={{ flex: 1 }}>
          <StatusBar
            animated={true}
            backgroundColor="white"
            barStyle='dark-content'
          // barStyle={statusBarStyle}
          // showHideTransition={statusBarTransition}
          // hidden={true}
          />
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="notification" options={{ headerShown: true, headerTitle: () => <Title /> }} />
            <Stack.Screen name="(aux)/Message/Message" options={{ title: "Yao" }} />
            <Stack.Screen name="(aux)/EditProfile" options={{ title: "Edit Profile" }} />
            <Stack.Screen name="(aux)/BecomeWorker/PersonalInfo" options={{ title: "Personal Infomation" }} />
            <Stack.Screen name="(aux)/BecomeWorker/ProfessionalInfo" options={{ title: "Professional Infomation" }} />
            <Stack.Screen name="(aux)/BecomeWorker/AddtionalPersonalInfo" options={{ title: "Addtional Infomation" }} />

            <Stack.Screen name="(auth)/SignIn" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)/SignUp" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </SafeAreaProvider>

      </AutocompleteDropdownContextProvider>

    </ThemeProvider>
  );
}
