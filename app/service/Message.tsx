import { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather"


/// 
interface ProfileProps { }

const Profile = (props: ProfileProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchBorder, setSearchBorder] = useState<boolean>(false);
  return (
    <View style={styles.container}>

      <View style={{
        position:"absolute",
        top:650,
        // width:100,
        // height:100
      }}>
      <View style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center" }}>
        <View style={[styles.textInput, {
          borderWidth: 1, borderColor: searchBorder ? "#BAE6FD" : "#F8FAFC", marginTop: 8,
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
              onChangeText={setSearchValue}
              value={searchValue}
              placeholder="search or start a new chart"
              enablesReturnKeyAutomatically={true}
              inputMode='search'
              onBlur={() => setSearchBorder(false)}
              onFocus={() => setSearchBorder(true)}

            />
          </View>
          <Entypo name="camera" size={15} color="#083344" style={{ paddingRight: 15 }} />

        </View>

        <View>
          <Feather name="mic" size={15} color="#083344" style={{ paddingRight: 15 }} />

        </View>
      </View>
      </View>


    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {},
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
