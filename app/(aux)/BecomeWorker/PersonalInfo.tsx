import OutLineButtonWithArrow from '@/components/buttons/OutlineButtonWithArrow';
import React, { Component, useState } from 'react'
import { Text, View, KeyboardAvoidingView, ScrollView, TextInput, Platform } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'

export default function PersonalInfo() {
    const [country, setCountry] = useState<string>();
    const [city, setCity] = useState<string>();
    const [address, setAddress] = useState<string>();
    const [bio, setBio] = useState<string>()
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' :"height"} keyboardVerticalOffset={0} >
            <View style={{flex:1}}>
            <ScrollView style={{ flex: 1,}}>
                <Text style={{
                    textAlign: 'center'
                }}>
                    Complete the form to become a worker
                </Text>
                <View style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <View style={{
                        width: 80,
                        height: 80,
                        backgroundColor: "#D9D9D9",
                        borderRadius: 50,

                    }}>

                    </View>
                    <Text>Upload picture</Text>
                </View>

                <View>
                    <View style={{ marginTop: 24, marginHorizontal: 16 }}>
                        <Text>Country</Text>
                        <View style={{
                            flex: 0,
                            flexDirection: "row",
                            gap: 10,
                            marginTop: 10
                        }}>
                            {/* <Fontisto name="email" size={22} color="#083344" /> */}
                            <TextInput
                                style={{
                                    flex: 1
                                }}
                                onChangeText={setCountry}
                                value={country}
                                placeholder="Enter your country" />
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: "#e5e7eb", width: "100%" }}></View>

                    <View style={{ marginTop: 24, marginHorizontal: 16 }}>
                        <Text>City</Text>
                        <View style={{
                            flex: 0,
                            flexDirection: "row",
                            gap: 10,
                            marginTop: 10
                        }}>
                            {/* <Fontisto name="email" size={22} color="#083344" /> */}
                            <TextInput
                                style={{
                                    flex: 1
                                }}
                                onChangeText={setCity}
                                value={city}
                                placeholder="Enter your city" />
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: "#e5e7eb", width: "100%" }}></View>

                    <View style={{ marginTop: 24, marginHorizontal: 16 }}>
                        <Text>Address</Text>
                        <View style={{
                            flex: 0,
                            flexDirection: "row",
                            gap: 10,
                            marginTop: 10
                        }}>
                            {/* <Fontisto name="email" size={22} color="#083344" /> */}
                            <TextInput
                                style={{
                                    flex: 1
                                }}
                                onChangeText={setAddress}
                                value={address}
                                placeholder="Enter your address" />
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: "#e5e7eb", width: "100%" }}></View>

                    <View style={{ marginTop: 24, marginHorizontal: 16 }}>
                        <Text>State/ Province</Text>
                        <View style={{
                            flex: 0,
                            flexDirection: "row",
                            gap: 10,
                            marginTop: 10
                        }}>
                            {/* <Fontisto name="email" size={22} color="#083344" /> */}
                            <TextInput
                                style={{
                                    flex: 1
                                }}
                                onChangeText={setCity}
                                value={city}
                                placeholder="Enter your postal/ zip code" />
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: "#e5e7eb", width: "100%" }}></View>

                    <View style={{ marginTop: 24, marginHorizontal: 16 }}>
                        <Text>Bio</Text>
                        <View style={{
                            flex: 0,
                            flexDirection: "row",
                            gap: 10,
                            marginTop: 10
                        }}>
                            {/* <Fontisto name="email" size={22} color="#083344" /> */}
                            <TextInput
                                style={{
                                    flex: 1,
                                    borderWidth: 1,
                                    borderRadius: 5,
                                    justifyContent: "flex-start",
                                    alignItems: "flex-start",
                                    // backgroundColor:"red"
                                }}
                                onChangeText={setBio}
                                value={bio}
                                multiline={true}
                                numberOfLines={5}
                                placeholder="Enter your postal/ zip code" />
                        </View>
                    </View>
                    <View style={{ height: 1, backgroundColor: "#e5e7eb", width: "100%" }}></View>


                </View>
                <View style={
                    {
                        width: "100%",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                        marginTop: "15%",
                        paddingRight: 16
                    }
                }>
                    <OutLineButtonWithArrow title='Next' href='/(aux)/BecomeWorker/ProfessionalInfo' />
                </View>
             
            </ScrollView>

            </View>
       
        </KeyboardAvoidingView>

    )

}
