import { View, Text, KeyboardAvoidingView, Platform, Keyboard, TextInput } from 'react-native'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import {InputFieldProps} from "@/types/type";

export default function TextField( { label,
    labelStyle,
    rightIcon,
    leftIcon,
    secureTextEntry = false,
    containerStyle,
    inputStyle,
    iconStyle,}:InputFieldProps) {
  return (
   <KeyboardAvoidingView   behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss}>
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
                            
                          {/* <Ionicons
                            name="lock-closed-outline"
                            size={22}
                            color="#083344"
                          /> */}
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

    </TouchableWithoutFeedback>

   </KeyboardAvoidingView>
  )
}