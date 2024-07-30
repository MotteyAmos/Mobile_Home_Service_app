import { Tabs,useRouter } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign"
import {  useNavigation,usePathname} from "expo-router";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Title from "../../components/header/Title"
import { View,Text, Pressable, StatusBar } from "react-native"
import { useEffect, useState } from 'react';

export default function TabLayout() {
  const [serviceHeaderShown, setServiceHeaderShown] = useState<boolean>(true)
  const colorScheme = useColorScheme();
  const router = useRouter();

  const navigation = useNavigation();
  const pathname = usePathname();
  

  // this will make the header of the worker profile should not be visible
  useEffect(() => {
      console.log( pathname )

      if (pathname  === "/Services/WorkerProfile")
      {
        setServiceHeaderShown(false)
          
      }

      if (pathname != "/Services/WorkerProfile"){
       
          setServiceHeaderShown(true)
      }
    }, [pathname]);

  return (
    <SafeAreaProvider>
        <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle='dark-content'
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
        // hidden={true}
      />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: true,
          headerTitle:()=><Title/>,
          headerRight:()=><Pressable onPress={()=>router.push("/notification")}><View style={{ marginRight:16}}><View style={{width:8, height: 8, backgroundColor:"#ef4444",position:"absolute", borderRadius:50,right:5}}></View><Ionicons name="notifications-outline" size={27} color="#083344" /></View></Pressable>,
          
          tabBarStyle: {
            backgroundColor: "#FAF9F6",
            position: "absolute",
            bottom: 0,
            height: 70,
            borderTopColor:"#BAE6FD",
            borderWidth:1
          },
          tabBarHideOnKeyboard:true
        }}>
        <Tabs.Screen
          name="Home"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color="#083344" />,
          }}
        />
        <Tabs.Screen
          name="Message"
          options={{
            title: 'Message',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons name={focused ? 'message-processing' : 'message-processing-outline'} size={30} color="#083344" />

            ),
          }}
        />
        <Tabs.Screen
          name="Services"
          options={{
            title: 'Service',
            headerShown:serviceHeaderShown,
            tabBarIcon: ({ color, focused }) => (
              <View style={{ backgroundColor: "#083344", padding: 10, borderRadius: 50, top: -25, borderWidth:3, borderColor:"#BAE6FD",elevation:5 }}>
                <MaterialCommunityIcons size={30} name={focused ? 'border-all' : 'border-bottom'} color={color} />

              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Post"
          options={{
            title: 'Post',
            tabBarIcon: ({ color, focused }) => (
              // <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
              <AntDesign name={focused ? 'plussquare' : 'plussquareo'} size={30} color="#083344" />
            ),
          }}
        />
        <Tabs.Screen
          name="Settings"
          options={{
            title: 'Settings',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? "settings-sharp" : "settings-outline"} color="#083344" size={30} />

            ),
          }}
        />

      </Tabs>
    </SafeAreaProvider>

  );
}
