import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import * as Progress from 'react-native-progress';
import ReviewCard from './ReviewCard';

function RatingContent() {

  return (
    <>
      <View style={{ }}>
        <Text style={{ fontSize: 18, paddingHorizontal: 16 }}>Rating and Reviews</Text>

        <View style={{ backgroundColor: "#F8FAFC", flexDirection:"row", justifyContent:"space-between", padding:8 , paddingHorizontal: 16}}>
          <View>
            <Text style={{fontWeight:"600", color:"#083344", fontSize:24}}>4.8</Text>
            <StarRatingDisplay
              rating={4.8}
              color='#083344'
              starSize={14}
              starStyle={{
                marginHorizontal: -1
              }}
            />
            <Text>1,894</Text>
          </View>


          <View>
            <View style={{ flex: 0, flexDirection: "row", alignItems:"center", gap:5 }}>
              <Text style={{ color: "#083344" }}>5</Text>
              <View >
                <Progress.Bar progress={0.8} width={200} color="#083344" height={4} />
              </View>
            </View>
            <View style={{ flex: 0, flexDirection: "row", alignItems:"center", gap:5 }}>
              <Text style={{ color: "#083344" }}>4</Text>
              <View >
                <Progress.Bar progress={0.5} width={200} color="#083344" height={4} />
              </View>
            </View>

            <View style={{ flex: 0, flexDirection: "row", alignItems:"center", gap:5 }}>
              <Text style={{ color: "#083344" }}>3</Text>
              <View >
                <Progress.Bar progress={0.2} width={200} color="#083344" height={4} />
              </View>
            </View>

            <View style={{ flex: 0, flexDirection: "row", alignItems:"center", gap:5 }}>
              <Text style={{ color: "#083344" }}>2</Text>
              <View >
                <Progress.Bar progress={0.1} width={200} color="#083344" height={4} />
              </View>
            </View>

            <View style={{ flex: 0, flexDirection: "row", alignItems:"center", gap:5 }}>
              <Text style={{ color: "#083344" }}>1</Text>
              <View >
                <Progress.Bar progress={0.1} width={200} color="#083344" height={4} />
              </View>
            </View>
          </View>

         
        </View>
        
        <View style={{gap:8}}>
          <Text style={{marginVertical:16, marginHorizontal:16, fontSize:13}}>Ratings and reviews are verified and are from people who rendered the service</Text>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>

        </View>
      </View>
    </>
  )
}


export default function Rating() {
  return (
    <FlatList
      data={[{ key: 'item1' }]}
      renderItem={({ item }) => <RatingContent />}
      bounces={false} // Disable overscroll effect

    />
  )
}
