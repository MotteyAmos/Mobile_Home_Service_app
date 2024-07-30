import React, { Component } from 'react'
import { Text, View, ImageBackground, Pressable, ScrollView, Dimensions } from 'react-native'
import { Tabs } from 'expo-router'
import { Image } from 'expo-image'
import Feather from '@expo/vector-icons/Feather'
import { TabView, SceneMap } from 'react-native-tab-view';
import ViewPagerAdapter from 'react-native-tab-view-viewpager-adapter';
import ProfileTabViewPager from '@/components/serviceComponents/workerProfile/ProfileTabViewPager'

export default function WorkerProfile() {


        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ backgroundColor: "white", gap: 8, 
                    height: Dimensions.get("window").height,
                    // flex:1
                    
                     }}>
                    <View style={{
                        // height: Dimensions.get("window").height
                        flex:1
                    }}>
                        <View style={{
                            height: "8%",
                            position: "relative"
                        }}>

                            <ImageBackground
                                source={require("@/assets/images/profileBg.jpeg")}
                                // {img as ImageSourcePropType}
                                // contentFit="cover"
                                // transition={100}
                                resizeMode="cover"
                                style={{
                                    flex: 1,
                                    alignItems: "center",
                                    borderWidth: 1,
                                    borderColor: "#BAE6FD",
                                    borderRadius: 5
                                }}
                            />
                            <View style={{
                                borderRadius: 50, height: 80, width: 80, position: "absolute",
                                bottom: -35, left: "20%"
                            }}>
                                <Image
                                    source={require("@/assets/images/profileImg.jpeg")}
                                    contentFit="cover"
                                    transition={100}
                                    style={{
                                        height: 80, width: 80, borderRadius: 50,
                                        borderWidth: 1, borderColor: "#BAE6FD"

                                    }}
                                />
                            </View>
                        </View>

                        <View style={{
                            marginTop: 40,
                            marginHorizontal: 16,
                            gap: 16
                        }}>
                            <View style={{
                                gap: 8
                            }}>
                                <Text style={{ fontWeight: "600" }}>Eric Santo</Text>
                                <Text>House Cleaner | Window Cleaner</Text>
                            </View>
                            <View style={{
                                flex: 0,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }}>
                                <Pressable
                                    style={{ borderColor: "#083344", borderWidth: 1, flex: 0, flexDirection: "row", paddingHorizontal: 15, justifyContent: "center", alignItems: "center", borderRadius: 50, paddingVertical: 5, gap: 5 }}
                                >
                                    <Text>Chat</Text>
                                    <Feather name="send" size={18} color="#083344" />
                                </Pressable>

                                <Text>Minimum charge: GHC 100</Text>

                            </View>
                        </View>

                    
                        
                        <View style={{ flex: 6 , marginTop:24}}>
                            <ProfileTabViewPager />

                        </View>   
                     
                    </View>

                </ScrollView>

            </View>
        )
    }

