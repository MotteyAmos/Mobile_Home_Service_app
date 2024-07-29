import { View, Text, Platform, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Pressable, ScrollView } from "react-native";
import { Image } from 'expo-image';
import Fontisto from "react-native-vector-icons/Fontisto";
import { useState } from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from "react-native-vector-icons/Feather"
import Checkbox from 'expo-checkbox';
import { useRouter } from "expo-router";
import ContainedButton from "@/components/buttons/ContainedButton";
// import { ScrollView } from "react-native-gesture-handler";
// import OutLineButtonWithArrow from "../components/buttons/OutlineButtonWithArrow"

export default function SignUp() {
    const [userName, setUserName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [confirmPassword, setComfirmPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

    const router = useRouter();
    return (

        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={0} >


            <Image
                source={require("@/assets/images/onBoardImg.png")}
                contentFit="cover"
                transition={1000}
                style={styles.image}
            />

            {/* <View style={{flex:2, backgroundColor:"green"}}></View> */}
            <View style={{ flex: 5 }}>
                <ScrollView
                    style={{
                        backgroundColor: "white",
                        flex: 1,
                    }}
                >


                    <View style={{ flex: 1 }}>
                        <View style={{ marginHorizontal: 16 }}>
                            <Text style={{ color: "#0EA5E9", fontSize: 32, lineHeight: 32, letterSpacing: 0, fontFamily: "CustomFont", fontWeight: 600 }}>Sign Up</Text>
                            <View style={{ width: "100%", height: 10, paddingLeft: 15, flex: 0, justifyContent: "flex-start", flexDirection: "row", gap: 5, marginTop: -5 }}>
                                <View style={{ height: 3, width: 15, backgroundColor: "#0EA5E9", borderRadius: 10 }}></View>
                                <View style={{ height: 3, width: 15, backgroundColor: "#0EA5E9", borderRadius: 10 }}></View>
                                <View style={{ height: 3, width: 15, backgroundColor: "#0EA5E9", borderRadius: 10 }}></View>
                            </View>


                        </View >

                        <View style={{ marginTop: 24, marginHorizontal: 16 }}>
                            <Text>User name</Text>
                            <View style={{
                                flex: 0,
                                flexDirection: "row",
                                gap: 10,
                                marginTop: 10
                            }}>
                                <TextInput
                                    style={{
                                        flex:1
                                    }}
                                    onChangeText={setUserName}
                                    value={userName}
                                    placeholder="Enter your full name" />
                            </View>
                        </View>
                        <View style={{ height: 1, backgroundColor: "#e5e7eb", width: "100%" }}></View>

                        <View style={{ marginTop: 24, marginHorizontal: 16 }}>
                            <Text>Email</Text>
                            <View style={{
                                flex: 0,
                                flexDirection: "row",
                                gap: 10,
                                marginTop: 10
                            }}>
                                <Fontisto name="email" size={22} color="#083344" />
                                <TextInput
                                    style={{
                                        flex:1
                                    }}
                                    onChangeText={setEmail}
                                    value={email}
                                    placeholder="Enter your email" />
                            </View>
                        </View>
                        <View style={{ height: 1, backgroundColor: "#e5e7eb", width: "100%" }}></View>

                        <View style={{ marginTop: 24, marginHorizontal: 16 }}>
                            <Text>PhoneNumber</Text>
                            <View style={{
                                flex: 0,
                                flexDirection: "row",
                                gap: 10,
                                marginTop: 10
                            }}>
                                <Feather name="phone" size={22} color="#083344" />
                                <TextInput
                                    style={{
                                        flex:1
                                    }}
                                    onChangeText={setPhoneNumber}
                                    value={phoneNumber}
                                    placeholder="Enter phone number" />
                            </View>
                        </View>
                        <View style={{ height: 1, backgroundColor: "#e5e7eb", width: "100%" }}></View>

                        <View style={{ marginTop: 24, marginHorizontal: 16 }}>
                            <Text>Password</Text>
                            <View style={{
                                flex: 0,
                                flexDirection: "row",
                                gap: 10,
                                marginTop: 10,
                                position: "relative",
                            }}>
                                <Ionicons name="lock-closed-outline" size={22} color="#083344" />
                                <TextInput
                                    secureTextEntry={!showPassword}
                                    style={{
                                        width:"80%"
                                    }}
                                    onChangeText={setPassword}
                                    value={password}
                                    placeholder="Enter your password" />
                                <Pressable
                                    style={{ position: "absolute", right: 0 }}
                                    onPress={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ?
                                            <Feather name="eye" size={22} color="#083344" />
                                            :
                                            <Feather name="eye-off" size={22} color="#083344" />

                                    }


                                </Pressable>

                            </View>

                        </View>
                        <View style={{ height: 1, backgroundColor: "#e5e7eb", width: "100%" }}></View>

                        <View style={{ marginTop: 24, marginHorizontal: 16 }}>
                            <Text>Comfirm Password</Text>
                            <View style={{
                                flex: 0,
                                flexDirection: "row",
                                gap: 10,
                                marginTop: 10,
                                position: "relative",
                            }}>
                                <Ionicons name="lock-closed-outline" size={22} color="#083344" />
                                <TextInput
                                    secureTextEntry={!showConfirmPassword}
                                    style={{
                                        width:"80%"
                                    }}
                                    onChangeText={setComfirmPassword}
                                    value={confirmPassword}
                                    placeholder="Enter your password" />
                                <Pressable
                                    style={{ position: "absolute", right: 0 }}
                                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                                    {
                                        showConfirmPassword ?
                                            <Feather name="eye" size={22} color="#083344" />
                                            :
                                            <Feather name="eye-off" size={22} color="#083344" />

                                    }


                                </Pressable>

                            </View>
                        </View>
                        <View style={{ height: 1, backgroundColor: "#e5e7eb", width: "100%" }}></View>

                    </View>

                    <View style={{
                        position: "relative",
                        height: 90,
                        width: "100%",
                    }}>
                        <View style={{
                            position: "absolute",
                            bottom: 10,
                            width: "100%"
                        }}>
                            <TouchableOpacity
                                style={
                                    {
                                        backgroundColor: "#083344",
                                        borderRadius: 20,
                                        width: "90%",
                                        marginHorizontal: "auto",

                                    }
                                }
                                activeOpacity={0.8}

                            // onPress={() => { [router.push("/service/Message")] }}
                            >
                                <Text style={{ color: "white", paddingVertical: 10, flex: 0, justifyContent: "center", textAlign: "center" }}>Create Account</Text>
                            </TouchableOpacity>
                            <View style={{ flex: 0, flexDirection: "row", justifyContent: "center", marginTop: 8 }}>
                                <Text>Already have an account? </Text>
                                <Pressable onPress={() => router.push("/(auth)/SignIn")}>
                                    <Text style={{ color: "#3b82f6" }}>Login</Text>

                                </Pressable>
                            </View>
                        </View>

                    </View>
                </ScrollView>

            </View>











        </KeyboardAvoidingView>


    )
}



const styles = StyleSheet.create({
    image: {
        width: "100%",
        // height: "40%",
        flex: 3,
        backgroundColor: "white",
        // position: "absolute",
        // top: -90
    }
})