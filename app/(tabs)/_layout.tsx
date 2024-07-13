import { Tabs,useRouter } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Title from "../../components/header/Title"
import { View,Text, Pressable } from "react-native"

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <SafeAreaProvider>
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
            tabBarIcon: ({ color, focused }) => (
              <View style={{ backgroundColor: "#083344", padding: 10, borderRadius: 50, top: -25, borderWidth:3, borderColor:"#BAE6FD",elevation:5 }}>
                <MaterialCommunityIcons size={30} name={focused ? 'border-all' : 'border-bottom'} color={color} />

              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Worker"
          options={{
            title: 'Worker',
            tabBarIcon: ({ color, focused }) => (
              // <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
              <Ionicons name={focused ? 'construct-sharp' : 'construct-outline'} size={30} color="#083344" />
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
