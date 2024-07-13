import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import ContainedButton from '../buttons/ContainedButton';
import { Image } from 'expo-image';
interface serviceCardProps {
  data:{name: string,
    img: string,
    title: string,
    rating: number}
}



const ServiceCard = (props: serviceCardProps) => {


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
                    <Text>{props.data.title}</Text>
                    <StarRatingDisplay
                        rating={props.data.rating}

                        starSize={14}
                        starStyle={{
                            marginHorizontal: -1
                        }}
                    />
                </View>
            </View>

            <View style={{ flex: 0, alignItems: "flex-end" }}>
                <ContainedButton />
            </View>
        </View>
    );
};

export default ServiceCard;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        backgroundColor: "#F8FAFC",
        paddingHorizontal: 8,
        borderRadius: 16,
        marginBottom:8
    }
});
