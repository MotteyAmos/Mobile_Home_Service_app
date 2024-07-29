import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { FlatGrid } from 'react-native-super-grid';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import type { ImageSourcePropType } from 'react-native';
import AntDesign from "@expo/vector-icons/AntDesign";

interface ServiceBySectionProps {
    title: string,
    data: {
        img: string,
        title: string
    }[]
}



const Item = ({ img, title }: { img: string, title: string }): React.JSX.Element => {
    const router = useRouter();
    return <Pressable style={{ flex: 1, position: "relative", borderWidth: 1, borderRadius: 5, borderColor: "white" }} onPress={() => { [router.push("/(tabs)/Services/ListOfServices")] }}>


        <ImageBackground
            source={img as ImageSourcePropType}
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
        <LinearGradient
            colors={["white", '#ABA49D', 'black']}
            style={{
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                bottom: 0,
                width: "100%",
                borderRadius: 1, opacity: 0.7, zIndex: 5
            }}>
        </LinearGradient>
        <Text style={{ textAlign: "center", color: "white", fontSize: 11, fontWeight: "300", opacity: 1, zIndex: 15, position: 'absolute', bottom: 5, width: "100%" }}>{title}d</Text>


    </Pressable>
}
const ServiceBySection = (props: ServiceBySectionProps) => {


    return (

        <View style={styles.container}>
            <View style={{flex:1, flexDirection:"row", alignItems:"flex-end", justifyContent:"space-between"}}>
                <Text style={{ marginLeft: 16, fontFamily: "Montserrat", color: "#334155", fontWeight: "700", letterSpacing: 0.5, lineHeight: 16, marginBottom: 8 }}>
                    {props.title}
                </Text>

                <Pressable style={{ flexDirection:"row", alignItems:"center"}}>
                    <Text style={{color:"#3b82f6"}}>View More </Text><AntDesign name="arrowright" size={27} color="#3b82f6"/>
                </Pressable>

            </View>



            <View style={{ width: "100%" }}>
                <FlatGrid
                    itemDimension={100}
                    data={props.data}

                    renderItem={({ item }) => <View style={{ height: 60, borderRadius: 10 }}><Item title={item.title} img={item.img} /></View>}
                />
            </View>
        </View>


    );
};

export default ServiceBySection;

const styles = StyleSheet.create({
    container: {}
});
