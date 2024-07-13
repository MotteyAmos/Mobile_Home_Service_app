import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import Carousel from "pinar";

interface HomeCarouselProps { }

import electric_2 from "@/assets/images/electric_2.jpeg";
import lady_hair_dress_1 from "@/assets/images/lady_hair_dress.jpeg";
import plumber1 from "@/assets/images/plumber1.jpeg";
import satillite_dish_2 from "@/assets/images/satillite_dish_2.jpeg"
import pest_control_1 from "@/assets/images/pest_control_1.jpeg"
import laundrymachine_repair from "@/assets/images/laundrymachine_repair.jpg"
import home_nurse  from "@/assets/images/home_nurse_2.jpeg";
import laundry2 from "@/assets/images/laundry2.jpeg";

const imgData = [electric_2,
     lady_hair_dress_1, plumber1,satillite_dish_2,pest_control_1,
      laundrymachine_repair,home_nurse, laundry2]



const HomeCarousel = (props: HomeCarouselProps) => {
    return (
        <Carousel
            loop={true}
            showsControls={false}
            showsDots={false}
            autoplay={true}
            autoplayInterval={5000}
        >
            {
                imgData.map((value, index) => {
                    return (
                        <View style={{
                            width: "90%", height: 160, borderRadius: 20,marginHorizontal: "auto"
                        }}>
                            <Image
                                source={value}
                                contentFit="cover"
                                transition={1000}
                                style={{
                                    height: 150, width: "100%", borderRadius: 20,
                                     borderWidth: 1, borderColor: "#BAE6FD",
                                   
                                }}
                            />
                        </View>
                    )
                })
            }
        </Carousel>
    );
};

export default HomeCarousel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
});

