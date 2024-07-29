import { useState } from 'react'
import { Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { router } from 'expo-router';
import Feather from "react-native-vector-icons/Feather"
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Checkbox from 'expo-checkbox';

export default function AddtionalPersonalInfo() {
    const [relativeName, setRelativeName] = useState<string>("");
    const [relativeEmail, setRelativeEmail] = useState<string>("");
    const [relativePhoneNumber, setRelativePhoneNumber] = useState<string>("");
    const [termsAndCondition, setTermsAndCondition] = useState<boolean>(false);
    return (




        <KeyboardAvoidingView style={{ flex: 1, paddingHorizontal: 16, backgroundColor:"white" }} behavior={Platform.OS === 'ios' ? 'padding' : "height"} keyboardVerticalOffset={0} >
            <View style={{ flex: 5 }}>
                <ScrollView style={{ flex: 5, backgroundColor: "white", gap: 8 }}>
                    <View style={{ gap: 8 }}>
                        <Text>Upload either one of your identification document (Driver license, Passport,
                            Ghana Card, or any national identification card) </Text>
                        <TouchableOpacity
                            style={
                                {
                                    backgroundColor: "#083344",
                                    width: 100,
                                    paddingVertical: 5,
                                    flex: 0,
                                    height: 36,
                                    flexDirection: "row",
                                    // justifyContent:"space-between",
                                    alignItems: "center",
                                    borderRadius: 20,
                                    gap: 5,
                                    justifyContent: "center",
                                    paddingHorizontal: 8
                                }
                            }
                            activeOpacity={0.8}

                            onPress={() => { [router.push("/service/Message")] }}
                        >
                            <AntDesign name="plus" size={20} color="white" />

                            <Text style={{ color: "white" }}>Upload File</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ gap: 8, marginTop: 16 }}>
                        <View style={{}}>
                            <Text>Provide a relative name</Text>
                            <View style={{
                                flex: 0,
                                flexDirection: "row",
                                gap: 10,
                                marginTop: 10
                            }}>
                                <MaterialIcons name="person-outline" size={22} color="#083344" />

                                <TextInput
                                    style={{
                                        flex: 1
                                    }}
                                    onChangeText={setRelativeName}
                                    value={relativeName}
                                    placeholder="Enter any of your relative name" />
                            </View>
                        </View>
                        <View style={{ height: 1, backgroundColor: "#e5e7eb", width: "100%" }}></View>


                        <View style={{}}>
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
                                        flex: 1
                                    }}
                                    onChangeText={setRelativePhoneNumber}
                                    value={relativePhoneNumber}
                                    placeholder="Enter phone number" />
                            </View>
                        </View>
                        <View style={{ height: 1, backgroundColor: "#e5e7eb", width: "100%" }}></View>


                        <View style={{}}>
                            <Text>Relative Email</Text>
                            <View style={{
                                flex: 0,
                                flexDirection: "row",
                                gap: 10,
                                marginTop: 10
                            }}>
                                <Fontisto name="email" size={22} color="#083344" />

                                <TextInput
                                    style={{
                                        flex: 1
                                    }}
                                    onChangeText={setRelativeEmail}
                                    value={relativeEmail}
                                    placeholder="Enter the relative email" />
                            </View>
                        </View>
                        <View style={{ height: 1, backgroundColor: "#e5e7eb", width: "100%" }}></View>
                    </View>


                    <View style={{ gap: 8, marginTop: 16 }}>
                        <Text>Terms and condition</Text>

                        <View style={{ flex: 0, flexDirection: "row", gap: 8 }}>
                            <Checkbox
                                // style={styles.checkbox}
                                value={termsAndCondition}
                                onValueChange={setTermsAndCondition}
                                color={termsAndCondition ? '#083344' : "#083344"}
                            />
                            <Text >
                                I agree to the terms and conditions of becoming a service
                                provider on the home service app
                            </Text>
                        </View>
                    </View>


                </ScrollView>
            </View>

            <View style={{

                flex: 1,
                justifyContent: "flex-end",
                marginBottom: 16
            }}>
                <TouchableOpacity
                    style={
                        {
                            backgroundColor: "#083344",

                            paddingVertical: 5,
                            flex: 0,
                            height: 36,
                            flexDirection: "row",
                            // justifyContent:"space-between",
                            alignItems: "center",
                            borderRadius: 20,
                            gap: 5,
                            justifyContent: "center",
                            paddingHorizontal: 8
                        }
                    }
                    activeOpacity={0.8}

                    onPress={() => { [router.push("")] }}
                >
                    <Text style={{ color: "white" }}>Done</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )

}
