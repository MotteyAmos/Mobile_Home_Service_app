import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

interface ContainedButtonProps {}

const ContainedButton = (props: ContainedButtonProps) => {
  const router = useRouter();
  return (
    <TouchableOpacity
        style={
            styles.container
        }
        activeOpacity={0.8}
        
        onPress={()=>{[router.push("/(aux)/Message/Message")]}}
    >
        <Text style={styles.text}>Chat</Text>
    </TouchableOpacity>
  );
};

export default ContainedButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#083344",
    width:83,
    paddingVertical:5,
    flex:0,
    alignItems:"center",
    borderRadius:20
  },
  text:{
    color:"white"
  }
});
