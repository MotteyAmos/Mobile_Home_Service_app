import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';


interface HomeProps { }






const Home = (props: HomeProps) => {


  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container,]}>
      <Text>Home</Text>


    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
