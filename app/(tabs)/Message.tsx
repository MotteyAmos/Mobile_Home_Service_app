import {useState} from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MessageCard from '@/components/message/MessageCard';
import { messageCard_data } from '@/data/data';

interface MessageProps {}

const Message = (props: MessageProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchBorder, setSearchBorder] = useState<boolean>(false);


  return (
    <View style={[styles.container,]}>
    <View style={{height:657}}>

    <View style={[styles.textInput, { borderWidth: 1, borderColor: searchBorder ? "#BAE6FD" : "#F8FAFC", marginTop:8 }]}>
          <EvilIcons name="search" size={30} color="#083344" />
          <TextInput
            // style={styles.input}
            onChangeText={setSearchValue}
            value={searchValue}
            placeholder="search or start a new chart"
            enablesReturnKeyAutomatically={true}
            inputMode='search'
            onBlur={() => setSearchBorder(false)}
            onFocus={() => setSearchBorder(true)}
           
          />
        </View>

      <ScrollView style={styles.scrollStyle}
      disableScrollViewPanResponder = {true}
      keyboardDismissMode="on-drag"
      showsVerticalScrollIndicator={false}
      >
      {
       messageCard_data.map((value, index)=>{
     
      return  <MessageCard data={value}/>
        })
      }
   






      </ScrollView>
    </View>



  </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollStyle: {
    height:90,
paddingVertical:10,
marginHorizontal:16,


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
    marginBottom:16
  }
});
