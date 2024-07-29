import { Stack , useNavigation,usePathname} from "expo-router";
import { useEffect } from "react";

export default function serviceLayout() {
    const navigation = useNavigation();
    const pathname = usePathname();
    
    useEffect(() => {
        console.log( pathname )

        if (pathname  === "/Message/Message")
        {
            navigation.setOptions({ headerShown: false });
            
        }

        if (pathname == "/Message"){
            navigation.setOptions({ headerShown: true });
        }
      }, [pathname]);

    return(
        <Stack>
            <Stack.Screen name="index" options={{headerShown:false}}/>
            <Stack.Screen name="Message" />
            {/* <Stack.Screen name="Profile" options={{headerShown:false }}/> */}
        </Stack>
    )
}


