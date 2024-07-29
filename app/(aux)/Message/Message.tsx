import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView,Platform , ScrollView} from 'react-native';
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather"
import Ionicons from "@expo/vector-icons/Ionicons"


/// 
interface ProfileProps { }

const Profile = (props: ProfileProps) => {
  const [messageValue, setMessageValue] = useState<string>("");
  const [inputBorder, setInputBorder] = useState<boolean>(false);
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={60} >
    <View style={styles.container}>
      <View style={{
        flex:8,

      }}>

      </View>
       {/* <ScrollView style={{flex:3, backgroundColor:"red"}}>
            <View style={{flex:1}}>
              <Text>ddd</Text>
            </View>
        </ScrollView>  */}
      <View style={{
        flex:1,
      }}>
      <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center" }}>
        <View style={[styles.textInput, {
          borderWidth: 1, borderColor: inputBorder ? "#BAE6FD" : "#F8FAFC", marginTop: 8,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%"

        }]}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              gap: 5
            }}
          >
            <Entypo name="emoji-flirt" size={15} color="#083344" />
            <TextInput
              // style={styles.input}
              autoCapitalize="sentences"
              multiline={true}
              onChangeText={setMessageValue}
              value={messageValue}
              placeholder="Message"
              enablesReturnKeyAutomatically={true}
              inputMode='text'
              onBlur={() => setInputBorder(false)}
              onFocus={() => setInputBorder(true)}
              style={{flex:1}}
            />
          </View>
          <Ionicons name="attach-outline" size={20} color="#083344" style={{  }} />

          <Entypo name="camera" size={15} color="#083344" style={{ paddingRight: 15 }} />

        </View>
          
        <View style={{
          backgroundColor:"white",
          width:30,
          height:30,
          flex:0,
          marginBottom:8,
          justifyContent:"center",
          alignItems:"center",
          borderRadius:50
        }}>

          <Feather name="mic" size={15} color="#083344" style={{  }} />

        </View>
      </View>
      </View>


    </View>
    </KeyboardAvoidingView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {flex:1},
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
    marginBottom: 16
  }
});
