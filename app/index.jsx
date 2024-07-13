import { View, Text, Pressable, Button, StyleSheet, Animated } from "react-native";
import { Image } from 'expo-image';
import OutLineButtonWithArrow from "../components/buttons/OutlineButtonWithArrow"

export default function Home() {


    return (
        <View style={{ paddingTop: 50, backgroundColor: "white", flex: 1 }}>

            <Image
                source={require("../assets/images/onBoardImg.png")}
                contentFit="cover"
                transition={1000}
                style={styles.image}
            />

            <View style={{ marginTop: "90%", marginHorizontal: 16 }}>
                <Text style={{ color: "#0EA5E9", fontSize: 32, lineHeight: 32, letterSpacing: 0, fontFamily: "CustomFont", fontWeight: 600 }}>WELCOME</Text>
                <View style={{ width: "100%", height: 10, paddingLeft: 30, flex: 0, justifyContent: "flex-start", flexDirection: "row", gap: 10, marginTop: -5 }}>
                    <View style={{ height: 3, width: 10, backgroundColor: "#0EA5E9", borderRadius: 10 }}></View>
                    <View style={{ height: 3, width: 10, backgroundColor: "#0EA5E9", borderRadius: 10 }}></View>
                    <View style={{ height: 3, width: 10, backgroundColor: "#0EA5E9", borderRadius: 10 }}></View>
                    <View style={{ height: 3, width: 10, backgroundColor: "#0EA5E9", borderRadius: 10 }}></View>
                </View>


                <Text
                    style={{
                        fontSize: 14,
                        lineHeight: 16,
                        letterSpacing: 0.4,
                        width: "70%",
                        fontFamily: "CustomFont"
                    }}
                >Simplify you life! Book reliable home services in seconds with HomeSmith</Text>
            </View >

            <View style={{ width: "100%", position: "absolute", bottom: 50, flex: 0, alignItems: "flex-end", paddingRight: 16 }}>
             
                    <OutLineButtonWithArrow title="Next" href="Home"/>

            </View>

        </View>
    )
}



const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "50%",
        backgroundColor: "white",
        position: "absolute",
        top: 0
    }
})