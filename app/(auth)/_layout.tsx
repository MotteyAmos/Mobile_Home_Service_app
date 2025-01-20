
import { Stack } from "expo-router";

import { ScrollView,StyleSheet } from "react-native";

export default function Layout() {
  return (
   
      <Stack>
        <Stack.Screen name="SignIn" options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" options={{ headerShown: false }} />
      </Stack>
   
  );
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#fff"
    }
})