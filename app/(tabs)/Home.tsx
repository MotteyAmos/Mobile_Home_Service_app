import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView,Platform } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import EvilIcons from "@expo/vector-icons/EvilIcons";
import PostCard from '@/components/home/PostCard';


interface HomeProps { }


const Home = (props: HomeProps) => {

  const [searchValue, setSearchValue] = useState<string>("");
  const [searchBorder, setSearchBorder] = useState<boolean>(false);

  const insets = useSafeAreaInsets();
  return (
      <KeyboardAvoidingView style={[styles.container]} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={100}>
     
        <View style={[styles.textInput, { borderWidth: 1, borderColor: searchBorder ? "#BAE6FD" : "#F8FAFC" }]}>
          <EvilIcons name="search" size={30} color="#083344" />
          <TextInput 
            style={{flex:1}}
            onChangeText={setSearchValue}
            value={searchValue}
            placeholder="search for service....."
            enablesReturnKeyAutomatically={true}
            inputMode='search'
            onBlur={() => setSearchBorder(false)}
            onFocus={() => setSearchBorder(true)}

          />
        </View>
  


      <View style={{ flex: 15 }}>
        <ScrollView style={styles.scrollStyle}
          disableScrollViewPanResponder={true}
          keyboardDismissMode="on-drag"
          showsVerticalScrollIndicator={false}

        >


          <PostCard />
          <PostCard />

          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />

        </ScrollView>
      </View>
      </KeyboardAvoidingView>

  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollStyle: {
    flex: 1

  },
  textInput: {
    flex: 0,
    flexDirection: "row",
    backgroundColor: "#F8FAFC",
    gap: 10,
    height: 36,
    borderRadius: 20,
    marginHorizontal: 16,
    alignItems: "center",
    paddingLeft: 12,
    marginVertical: 8
    // marginBottom: 16,

  }
});
