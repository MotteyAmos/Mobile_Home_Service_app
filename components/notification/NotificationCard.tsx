import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import ContainedButton from '../buttons/ContainedButton';
import { Image } from 'expo-image';
interface NotificationCardProps {
  data:{name: string,
    img: string,
    title: string,
    date:string}
}



const NotificationCard = (props: NotificationCardProps) => {


    return (
        <View style={styles.container}>
            <View style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10
            }}>
                <View style={{ height: 40, width: 40, borderRadius: 50 }}>
                    <Image
                        source={props.data.img}
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
                    <Text>{props.data.name}</Text>
                    <Text style={{color:"#64748B", fontSize:12}}>{props.data.title}</Text>
                   
                </View>
                <View style={{
                    flex:1,
                    height:"100%",
                    alignItems:"flex-end"
                }}>
                    <Text style={{color:"#64748B", fontSize:12}}>{props.data.date}</Text>
                </View>
            </View>


            
        </View>
    );
};

export default NotificationCard;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        backgroundColor: "#F8FAFC",
        paddingHorizontal: 8,
        borderRadius: 16,
        marginBottom:8
    },
    scrollStyle: {
        height:90,
    paddingVertical:10,
    marginHorizontal:16,
    
    
      },
});
