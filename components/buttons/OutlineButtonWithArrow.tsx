import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Animated, Pressable, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Link, router } from "expo-router"
import { MotiView, MotiText } from 'moti'

interface OutLineButtonWithArrowProps {
    title: string,
    href:string
}

const OutLineButtonWithArrow = (props: OutLineButtonWithArrowProps) => {
    const [chageNextText, setChangeNextText] = useState<boolean>(false);
    const [translateXValue] = useState(new Animated.Value(0)); // Animated value for translation

    // animate the arrow 
    const animateArrow = () => {
        const animationLoop = Animated.loop(
            Animated.timing(translateXValue, {
                toValue: 10, // Move to the right (adjust as needed)
                duration: 1500, // Animation duration in milliseconds
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: false
            }),
            { iterations: Infinity } // Repeat indefinitely
        );

        animationLoop.start();

        return () => animationLoop.stop(); // Clean up animation on component unmount
    };

    useEffect(() => {
        animateArrow();
    })
    return (
        <Pressable style={({ pressed }) => [{
            backgroundColor: pressed ? '#083344' : 'white',
        },
        styles.container
        ]}
            onPress={() =>[ setChangeNextText(true), 
                router.replace(props.href)
            ]}
            onPressOut={() => setChangeNextText(false)}
       
        >

            <Text
                style={[{
                        
                    color: chageNextText ? "white" : "#083344"
                }, styles.text]}>{props.title}</Text>

            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Animated.View style={{ transform: [{ translateX: translateXValue }], justifyContent: "center", alignContent: "center" }}>
                    <Icon name="arrowright" size={27} style={{ flex: 0 }} color = {!chageNextText ? "#083344" :"#fff"} />
                </Animated.View>
            </View>


        </Pressable>

    );
};

export default OutLineButtonWithArrow;

const styles = StyleSheet.create({
    container: {
        paddingLeft: 12,
        paddingRight: 16,
        paddingHorizontal: 10,
        borderColor: "#083344",
        width: 94,
        height: 36,
        borderWidth: 1,
        borderRadius: 20,
        flex: 0,
        flexDirection: "row"
    },
    text: {
        justifyContent: "center", alignItems: "center", textAlignVertical: "center",
        fontSize: 16,
        fontFamily: "Montserrat",
        fontWeight: "700",
    }
});
