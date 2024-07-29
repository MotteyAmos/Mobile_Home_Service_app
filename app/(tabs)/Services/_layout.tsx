import { Stack , useNavigation} from "expo-router";



export default function serviceLayout() {
    
    return(
        <Stack>
            <Stack.Screen name="index" options={{headerShown:false}}/>
            <Stack.Screen name="ListOfServices" options={{headerShown:false}}/>
            {/* <Stack.Screen name="Profile" options={{headerShown:false }}/> */}
            <Stack.Screen name="WorkerProfile" options={{headerShown:false }}/>

        </Stack>
    )
}


