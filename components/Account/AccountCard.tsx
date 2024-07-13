import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface AccountDetailProps {
    iconName:string,
    title:string,
    description:string
 }

const AccountDetail = (props: AccountDetailProps) => {
    return (
        <View style={styles.container}>
            <View
            style={{
                flex: 0,
                alignItems: "center",
                flexDirection: "row",
                paddingHorizontal:20,
                gap:10
            }}
            >
                <MaterialIcons name="person-outline" size={22} color="#083344" />
                <View>
                    <Text style={{fontFamily:"", fontSize:15, fontWeight:"600"}}>{props.title}</Text>
                    <Text style={{color:"#64748B", fontSize:12}}>{props.description}</Text>
                </View>
            </View>

            <View style={{ height: 0.5, width: "100%", backgroundColor: "white" }}></View>
        </View>
    );
};

export default AccountDetail;

const styles = StyleSheet.create({
    container: {
        // backgroundColor:"white",
       paddingVertical:20
    }
});
