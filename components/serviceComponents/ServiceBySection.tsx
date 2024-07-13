import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { FlatGrid } from 'react-native-super-grid';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

interface ServiceBySectionProps {
    title: string,
    data: {
        img: string,
        title: string
    }[]
}



const Item = ({ img, title }: { img: string, title: string }): React.JSX.Element => {
    const router = useRouter();
    return <Pressable style={{ flex: 1 }} onPress={() =>{[ console.log(`${title}`), router.push("/(tabs)/Services/ListOfServices")] } }>
       

            <ImageBackground
                source={img}
                // contentFit="cover"
                // transition={100}
                resizeMode="cover"
                style={{
                    flex: 1, alignItems: "center",
                    borderWidth: 1, borderColor: "#BAE6FD"

                }}
            />
            <LinearGradient
                colors={["white", '#ABA49D', '#45423F']}
                style={{
                    height: "50%",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    borderRadius: 1, opacity: 0.8
                }}>
                <Text style={{ textAlign: "center", color: "white", fontSize: 11, fontWeight: "300" }}>{title}</Text>
            </LinearGradient>
    
    </Pressable>
}
const ServiceBySection = (props: ServiceBySectionProps) => {
    

    return (

        <View style={styles.container}>

            <Text style={{ marginLeft: 16, fontFamily: "Montserrat", color: "#334155", fontWeight: "700", letterSpacing: 0.5, lineHeight: 16, marginBottom: 8 }}>
                {props.title}
            </Text>

            <View style={{ width: "100%" }}>
                <FlatGrid
                    itemDimension={100}
                    data={props.data}

                    renderItem={({ item }) => <View style={{ height: 60, }}><Item title={item.title} img={item.img} /></View>}
                />
            </View>
        </View>
   

    );
};

export default ServiceBySection;

const styles = StyleSheet.create({
    container: {}
});
