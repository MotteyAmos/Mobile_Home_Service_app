import {
  View,
  Text,
  Platform,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Pressable,
  StatusBar,
  ScrollView,
  Keyboard,
  Dimensions,
} from "react-native";
import { Image } from "expo-image";
import Fontisto from "react-native-vector-icons/Fontisto";
import { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";
import ContainedButton from "@/components/buttons/ContainedButton";
import { red } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
// import OutLineButtonWithArrow from "../components/buttons/OutlineButtonWithArrow"

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberCheck, setRememberCheck] = useState<boolean>(false);
  const [keyboardShow, setKeyboardshow] = useState<boolean>(false);
  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardshow(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardshow(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const router = useRouter();
  return (
    <ScrollView style={[styles.container]}>
      <StatusBar
        animated={true}
        backgroundColor="#F6F8FD"
        barStyle="dark-content"
      />
      <Image
        source={require("@/assets/images/onBoardImg.png")}
        contentFit="cover"
        transition={1000}
        style={styles.image}
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={100}
      >
     
         
            <View style={{ marginHorizontal: 16 }}>
              <Text
                style={{
                  color: "#0EA5E9",
                  fontSize: 32,
                  lineHeight: 32,
                  letterSpacing: 0,
                  fontFamily: "CustomFont",
                  fontWeight: 600,
                }}
              >
                Sign In
              </Text>
              <View
                style={{
                  width: "100%",
                  height: 10,
                  paddingLeft: 15,
                  flex: 0,
                  justifyContent: "flex-start",
                  flexDirection: "row",
                  gap: 5,
                  marginTop: -5,
                }}
              >
                <View
                  style={{
                    height: 3,
                    width: 15,
                    backgroundColor: "#0EA5E9",
                    borderRadius: 10,
                  }}
                ></View>
                <View
                  style={{
                    height: 3,
                    width: 15,
                    backgroundColor: "#0EA5E9",
                    borderRadius: 10,
                  }}
                ></View>
                <View
                  style={{
                    height: 3,
                    width: 15,
                    backgroundColor: "#0EA5E9",
                    borderRadius: 10,
                  }}
                ></View>
              </View>
            </View>

            <View style={{ marginTop: 24, marginHorizontal: 16 }}>
              <Text>Email</Text>
              <View
                style={{
                  flex: 0,
                  flexDirection: "row",
                  gap: 10,
                  marginTop: 10,
                }}
              >
                <Fontisto name="email" size={22} color="#083344" />
                <TextInput
                  style={{
                    flex: 1,
                  }}
                  onChangeText={setEmail}
                  value={email}
                  placeholder="Enter your email"
                />
              </View>
            </View>
            <View
              style={{ height: 1, backgroundColor: "#e5e7eb", width: "100%" }}
            ></View>

            <View style={{ marginTop: 24, marginHorizontal: 16 }}>
              <Text>Password</Text>
              <View
                style={{
                  flex: 0,
                  flexDirection: "row",
                  gap: 10,
                  marginTop: 10,
                  position: "relative",
                }}
              >
                <Ionicons
                  name="lock-closed-outline"
                  size={22}
                  color="#083344"
                />
                <TextInput
                  secureTextEntry={!showPassword}
                  style={{
                    width: "80%",
                  }}
                  onChangeText={setPassword}
                  value={password}
                  placeholder="Enter your password"
                />
                <Pressable
                  style={{ position: "absolute", right: 0 }}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Feather name="eye" size={22} color="#083344" />
                  ) : (
                    <Feather name="eye-off" size={22} color="#083344" />
                  )}
                </Pressable>
              </View>
            </View>
            <View
              style={{ height: 1, backgroundColor: "#e5e7eb", width: "100%" }}
            ></View>
        
       
      </KeyboardAvoidingView>

      <View
        style={{
        
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 28,
          paddingHorizontal: 16,
          
        }}
      >
        <View style={{ flex: 0, flexDirection: "row" }}>
          <Checkbox
            // style={styles.checkbox}
            value={rememberCheck}
            onValueChange={setRememberCheck}
            color={rememberCheck ? "#083344" : "#083344"}
          />
          <Text> Remember Me</Text>
        </View>

        <Text style={{ color: "#3b82f6" }}> Forgot Password</Text>
      </View>

      <View
        style={{
          marginTop:29,
          gap: 5,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#083344",
            borderRadius: 20,
            width: "90%",
            marginHorizontal: "auto",
          }}
          activeOpacity={0.8}
          onPress={() => {
            [router.push("/(tabs)/Home")];
          }}
        >
          <Text
            style={{
              color: "white",
              paddingVertical: 10,
              flex: 0,
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            LogIn
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flex: 0,
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 8,
          }}
        >
          <Text>Do not have an Account?</Text>
          <Pressable onPress={() => router.push("/(auth)/SignUp")}>
            <Text style={{ color: "#3b82f6" }}> SignUp</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get("window").height,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 285,
    backgroundColor: "white",
  },
});
