import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Image } from 'expo-image';


interface MostBookServiceProps { }


const data: { img: string, title: string }[] = [
    {
        img: require("@/assets/images/general_Cleaning_1.jpeg"),
        title: "General Cleaning"
    },
    {
        img: require("@/assets/images/salon-most.jpeg"),
        title: "Salon & Spa"
    },
    {
        img: require("@/assets/images/home_maintaince_most.jpg"),
        title: "Maintainance"
    },
    {
        img: require("@/assets/images/home_nurse_most.jpeg"),
        title: "HealthCare"
    },
    {
        img: require("@/assets/images/pest_control_most.jpeg"),
        title: "Pest Control"
    }
]

const Item = ({ img, title }: { img: string, title: string }): React.JSX.Element => {
    return <View style={{ height: 50, width: 90 }}>
        <View style={{ borderRadius: 50, height: 50, width: 50 }}>
            <Image
                source={img}
                contentFit="cover"
                transition={100}
                style={{
                    height: 50, width: 50, borderRadius: 50,
                    borderWidth: 1, borderColor: "#BAE6FD"

                }}
            />
        </View>

        <Text style={{ textAlign: "left",color:"#64748B",fontSize:11,fontWeight:"300" }}>{title}</Text>
    </View>
}

const MostBookService = (props: MostBookServiceProps) => {
    return (
        <View style={styles.container}>

            <Text style={{ fontFamily:"Montserrat", color:"#334155", fontWeight:"700", letterSpacing:0.5,lineHeight:16, marginBottom:8}}>
                MostBookService
            </Text>

            <View style={{ width: "100%" }}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <View ><Item title={item.title} img={item.img} /></View>}
                    // keyExtractor={item => item.id}
                    horizontal={true}
                    style={{
                        height: 100,

                    }}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    );
};

export default MostBookService;

const styles = StyleSheet.create({
    container: {
        // backgroundColor:"white",
        elevation: 1,
        marginTop: 16,
        marginLeft:16,
    }
});
