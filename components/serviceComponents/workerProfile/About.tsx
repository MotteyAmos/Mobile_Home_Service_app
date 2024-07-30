import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { Image } from 'expo-image';

const AboutContent = () => {
  return (
    <>

      <View style={{
        marginTop: 8,
        gap: 16,
        marginHorizontal: 16
      }}>
        <View style={{
          gap: 8
        }}>
          <Text style={{ fontSize: 14, fontWeight: "600" }}>Bio</Text>

          <Text style={{
            lineHeight: 18,
            letterSpacing: 0.4,
            fontSize: 13
          }}>
            As a licensed medical doctor, globally recognized healthcare researcher &
            global health project management influencer, Dr. Subrina Jesmin (Arai) has a decorated career.
            Her academic background as an educator & scientific writer also speaks volumes of her giving mentality.
            She resides in Japan and is currently working at Health, Research,
            and Marketing (HRM), LLC, of which she is the founder<Text style={{ color: "#4080FF" }}>....View more</Text>
          </Text>
        </View>
        <View style={{ gap: 8 }}>
          <View>
            <Text style={{ fontSize: 14, fontWeight: "600" }}>Skills</Text>
            <Text
              style={{
                lineHeight: 18,
                letterSpacing: 0.4,
                fontSize: 13
              }}>House cleaner</Text>
            <Text
              style={{
                lineHeight: 18,
                letterSpacing: 0.4,
                fontSize: 13
              }}>Window Cleaner</Text>
          </View>

          <View style={{gap:8}}>
            <Text style={{ fontSize: 14, fontWeight: "600" }}>Certificate/ Licenses</Text>

            <Image
              style={{ height: 100, width: 130 }}
              source={require("@/assets/images/certificate.png")}
              placeholder=""
              contentFit="cover"
              transition={1000}
            />
          </View>

          <View style={{}}>
            <Text style={{ fontSize: 14, fontWeight: "600" }}>Language</Text>
            <Text>Worked with Ghana VRA</Text>
          </View>

          <View>
            <Text style={{ fontSize: 14, fontWeight: "600" }}>How Eric charges</Text>
            <Text>I charge GHC 100 for an hour</Text>
          </View>

        </View>
      </View>
    </>
  )
}



export default function About() {
  return (
    <FlatList
      data={[{ key: 'item1' }]}
      renderItem={({ item }) => <AboutContent />}
      bounces={false} // Disable overscroll effect
    // keyExtractor={(item) => item.key}
    />
  )
}
