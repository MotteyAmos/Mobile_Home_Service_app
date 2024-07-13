import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

interface TitleProps { }

const Title = (props: TitleProps) => {
  return (
    <View style={{ flex: 0, flexDirection: "row", alignItems: "center"}}>
      <Image
        source={require("../../assets/images/logo.jpg")}
        contentFit="cover"
        transition={1000}
        style={{height:50, width:40, marginRight:5}}
      />
      <Text>Home</Text><Text style={{ color: "#1e3a8a", fontSize: 20 }}>S</Text><Text>mith</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {}
});
