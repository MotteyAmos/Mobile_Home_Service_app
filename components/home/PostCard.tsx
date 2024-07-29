import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import AntDesign from "@expo/vector-icons/AntDesign"
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather"
interface PostCardProps { }

const PostCard = (props: PostCardProps) => {
    return (
        <View style={styles.container}>
            <View >
                <View style={{
                flex:0,
                gap:15,
                paddingVertical:10
            }}>
                    {/* header */}
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                        paddingHorizontal:8
                    }}>
                        <View style={{ height: 40, width: 40, borderRadius: 50 }}>
                            <Image
                                source={require("@/assets/images/person1.jpeg")}
                                contentFit="cover"
                                transition={1000}
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 50
                                }}
                            />
                        </View>
                        <View>
                            <Text>Kofi Baboni</Text>
                            <Text style={{ color: "#64748B", fontSize: 12 }}>Carpenter</Text>

                        </View>
                        <View style={{
                            flex: 1,
                            height: "100%",
                            alignItems: "flex-end"
                        }}>
                            <Text style={{ color: "#3b82f6", fontSize: 12,fontWeight:"700" }}>
                                {/* +Follow */}
                                {/* Chat */}
                                </Text>
                        </View>
                    </View>

                    <View style={styles.cardContent}>

                    </View>
                    <View style={{ paddingHorizontal:8}}>
                        <Text style={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    </View>
                    <View style={{flex:0, flexDirection:"row", paddingHorizontal:8}}>
                        <AntDesign name="hearto" size={18} color="#ef4444"  />
                        <AntDesign name="like2" size={18} color="white" style={{left:-10, zIndex:5, backgroundColor:"#38bdf8", borderRadius:50, padding:1}}/>
                        <FontAwesome6 name="hands-clapping" size={18} color="#a16207" style={{left:-15, zIndex:7}} />
                        <Text style={{color:"#64748B"}}>5640</Text>
                    </View>

                    <View style={{flex:0, flexDirection:"row", justifyContent:"space-between", paddingHorizontal:15}}>
                        <View style={{backgroundColor:"#F8FAFC",flex:0, flexDirection:"row", paddingHorizontal:15, justifyContent:"center", alignItems:"center", borderRadius:50,paddingVertical:5}}>
                            <AntDesign name="like2" size={18} color="#3b82f6" />
                            <Text>50</Text>
                        </View>
                        <View style={{backgroundColor:"#F8FAFC",flex:0, flexDirection:"row", paddingHorizontal:15, justifyContent:"center", alignItems:"center", borderRadius:50,paddingVertical:5}}>
                            <Feather name="message-square" size={18} color="#3b82f6" />
                            <Text>50</Text>
                        </View>
                        <View style={{backgroundColor:"#F8FAFC",flex:0, flexDirection:"row", paddingHorizontal:15, justifyContent:"center", alignItems:"center", borderRadius:50, paddingVertical:5}}>
                            <Feather name="message-circle" size={18} color="#3b82f6" />
                            <Text>50</Text>
                        </View>
                        <View style={{backgroundColor:"#F8FAFC",flex:0, flexDirection:"row", paddingHorizontal:15, justifyContent:"center", alignItems:"center", borderRadius:50, paddingVertical:5}}>
                            <Feather name="send" size={18} color="#3b82f6" />
                        </View>
                    </View>
                </View>
            </View>

        </View>
    );
};

export default PostCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white"
        // marginHorizontal:8
    },
    cardContent: {
        height: 180,
        width: "100%",
        backgroundColor: "gray"
    },
    description: {

    }
});
