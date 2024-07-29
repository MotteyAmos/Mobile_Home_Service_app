import { useState } from 'react';
import { Text, View, StyleSheet, TextInput,   KeyboardAvoidingView,Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from "react-native-vector-icons/Fontisto";

import { Fumi } from 'react-native-textinput-effects';
import { Jiro } from 'react-native-textinput-effects';
import { Makiko } from 'react-native-textinput-effects';
interface EditProfileProps { }

const EditProfile = (props: EditProfileProps) => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <KeyboardAvoidingView
        style={styles.scrollStyle}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
    <View style={styles.container}>
      
        <View
          style={{
            flex: 0,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 5
          }}>
          <View style={{
            backgroundColor: "#D9D9D9",
            width: 80,
            height: 80,
            borderRadius: 50,
            flex: 0,
            justifyContent: "center"
          }}>
            <Text style={{ textAlign: "center" }}>MA</Text>
          </View>
          <Text style={{ color: "" }}>Change Profile Picture</Text>
        </View>

        <View style={{ paddingHorizontal: 16, marginTop: 42 }}>
          <View>
            <Text>User Name</Text>
            <View style={{
              flex: 0,
              flexDirection: "row",
              gap: 10,
              marginTop: 10
            }}>
              <Ionicons name="person-outline" size={22} color="#083344" />
              <TextInput
                style={{

                }}
                onChangeText={setUserName}
                value={userName}
                placeholder="change username" />
            </View>
          </View>
          <View style={{ height: 1, backgroundColor: "white", width: "100%" }}></View>

          <View style={{ marginTop: 24 }}>
            <Text>Phone Number</Text>
            <View style={{
              flex: 0,
              flexDirection: "row",
              gap: 10,
              marginTop: 10
            }}>
              <SimpleLineIcons name="phone" size={22} color="#083344" />
              <TextInput
                style={{

                }}
                onChangeText={setPhoneNumber}
                value={phoneNumber}
                placeholder="change phone number" />
            </View>
          </View>
          <View style={{ height: 1, backgroundColor: "white", width: "100%" }}></View>


          <View style={{ marginTop: 24 }}>
            <Text>Email</Text>
            <View style={{
              flex: 0,
              flexDirection: "row",
              gap: 10,
              marginTop: 10
            }}>
              <Fontisto name="email" size={22} color="#083344" />
              <TextInput
                style={{

                }}
                onChangeText={setEmail}
                value={email}
                placeholder="change email" />
            </View>
          </View>
          <View style={{ height: 1, backgroundColor: "white", width: "100%" }}></View>


          <View style={{ marginTop: 24 }}>
            <Text>Password</Text>
            <View style={{
              flex: 0,
              flexDirection: "row",
              gap: 10,
              marginTop: 10
            }}>
              <Ionicons name="lock-closed-outline" size={22} color="#083344" />
              <TextInput
                style={{
               
                }}
                onChangeText={setPassword}
                value={password}
                placeholder="change passoword" />
            </View>
          </View>
          <View style={{ height: 1, backgroundColor: "white", width: "100%" }}></View>

        </View>
    



      {/* <View>
        {
          (
            <Fumi
              label={'Course Name'}
              iconClass={FontAwesomeIcon}
              iconName={'university'}
              iconColor={'#f95a25'}
              iconSize={20}
              // iconWidth={40}
              inputPadding={16}
            />
          )
        }

        {
          (<Jiro
            label={'Dog\'s name'}
            // this is used as active and passive border color
            borderColor={'#9b537a'}
            inputPadding={16}
            inputStyle={{ color: 'white' }}
          />)
        }

{
   (
    <Makiko
      label={'Comment'}
      iconClass={FontAwesomeIcon}
      iconName={'comment'}
      iconColor={'white'}
      inputPadding={16}
      inputStyle={{ color: '#db786d' }}
    />
  )
}
      </View> */}
    </View>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {},
  scrollStyle: {
    height: 450,
    paddingVertical: 10

  },
});
