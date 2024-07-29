import AccountDetail from '@/components/Account/AccountCard';
import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign"
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import { useRouter } from 'expo-router';
interface SettingsProps { }

const Settings = (props: SettingsProps) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Pressable >
        <View style={{ paddingVertical: 20 }}>
          <View
            style={{
              flex: 0,
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 20,
              gap: 10
            }}
          >
            <MaterialIcons name="person-outline" size={22} color="#083344" />
            <View>
              <Text style={{ fontFamily: "", fontSize: 15, fontWeight: "600" }}>Profile</Text>
              <Text style={{ color: "#64748B", fontSize: 12 }}>view profile</Text>
            </View>
          </View>

          <View style={{ height: 0.5, width: "100%", backgroundColor: "white" }}></View>
        </View>
      </Pressable>

      <Pressable onPress={()=>router.push("/(aux)/EditProfile")}>
        <View style={{ paddingVertical: 20 }}>
          <View
            style={{
              flex: 0,
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 20,
              gap: 10
            }}
          >
            <MaterialIcons name="person-outline" size={22} color="#083344" />
            <View>
              <Text style={{ fontFamily: "", fontSize: 15, fontWeight: "600" }}>Profile</Text>
              <Text style={{ color: "#64748B", fontSize: 12 }}>Account</Text>
            </View>
          </View>

          <View style={{ height: 0.5, width: "100%", backgroundColor: "white" }}></View>
        </View>
      </Pressable>

      <Pressable onPress={()=>router.push("/(aux)/BecomeWorker/PersonalInfo")}>
        <View style={{ paddingVertical: 20 }}>
          <View
            style={{
              flex: 0,
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 20,
              gap: 10
            }}
          >
            <MaterialIcons name="engineering" size={22} color="#083344" />
            <View>
              <Text style={{ fontFamily: "", fontSize: 15, fontWeight: "600" }}>Become a worker</Text>
              <Text style={{ color: "#64748B", fontSize: 12 }}>Complete your profile to start rendering services</Text>
            </View>
          </View>

          <View style={{ height: 0.5, width: "100%", backgroundColor: "white" }}></View>
        </View>
      </Pressable>


      <Pressable>
        <View style={{ paddingVertical: 20 }}>
          <View
            style={{
              flex: 0,
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 20,
              gap: 10
            }}
          >
            <MaterialIcons name="person-outline" size={22} color="#083344" />
            <View>
              <Text style={{ fontFamily: "", fontSize: 15, fontWeight: "600" }}>Help</Text>
              <Text style={{ color: "#64748B", fontSize: 12 }}>Get help with and difficulty you're facing</Text>
            </View>
          </View>

          <View style={{ height: 0.5, width: "100%", backgroundColor: "white" }}></View>
        </View>
      </Pressable>

      <Pressable>
        <View style={{ paddingVertical: 20 }}>
          <View
            style={{
              flex: 0,
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 20,
              gap: 10
            }}
          >
            <AntDesign name="warning" size={22} color="#083344" />
            <View>
              <Text style={{ fontFamily: "", fontSize: 15, fontWeight: "600" }}>Terms and condition</Text>
              <Text style={{ color: "#64748B", fontSize: 12 }}>Our disclaimers, terms and service of use</Text>
            </View>
          </View>

          <View style={{ height: 0.5, width: "100%", backgroundColor: "white" }}></View>
        </View>
      </Pressable>

      <Pressable>
        <View style={{ paddingVertical: 20 }}>
          <View
            style={{
              flex: 0,
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 20,
              gap: 10
            }}
          >
            <Feather name="log-out" size={22} color="#083344" />
            <View>
              <Text style={{ fontFamily: "", fontSize: 15, fontWeight: "600" }}>Sign Out</Text>
              <Text style={{ color: "#64748B", fontSize: 12 }}>Log out of your account</Text>
            </View>
          </View>

          <View style={{ height: 0.5, width: "100%", backgroundColor: "white" }}></View>
        </View>
      </Pressable>


      <Pressable>
        <View style={{ paddingVertical: 20 }}>
          <View
            style={{
              flex: 0,
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 20,
              gap: 10
            }}
          >
            <MaterialCommunityIcons name="delete-outline" size={22} color="#083344" />
            <View>
              <Text style={{ fontFamily: "", fontSize: 15, fontWeight: "600", color:"#ef4444" }}>Delete Account</Text>
              <Text style={{ color: "#ef4444", fontSize: 12 }}>Don't want to use this account anymore? Delete it</Text>
            </View>
          </View>

          <View style={{ height: 0.5, width: "100%", backgroundColor: "white" }}></View>
        </View>
      </Pressable>


    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {}
});
