import React from 'react'
import { Text, View } from 'react-native'
import { StarRatingDisplay } from 'react-native-star-rating-widget';

export default function ReviewCard() {

    return (
        <View style={{gap:8,backgroundColor: "#F8FAFC", paddingVertical:8, paddingHorizontal:16}}>
            <View style={{
                flexDirection: "row",
                alignItems:"center",
                gap:8
            }}>
                <View style={{
                    width: 40,
                    height: 40,
                    backgroundColor: "#D9D9D9",
                    borderRadius:50
                }}>

                </View>
                <Text> Simon Vellas </Text>
            </View>
            <View style={{gap:8, flexDirection:"row"}}>
                <StarRatingDisplay
                    rating={4.8}
                    color='#083344'
                    starSize={14}
                    starStyle={{
                        marginHorizontal: -1
                    }}
                />
                <Text>7/3/24</Text>
            </View>
            <View>
                <Text style={{fontSize:13}}>He's very good with his work</Text>
            </View>
        </View>
    )

}
