import { Slot } from "expo-router";
import { useEffect, useState } from "react";
import * as LocalAuthentication from 'expo-local-authentication';
import { Text, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

export default function BiometricProtectedLayout() {
    const [unlocked,setUnloked] = useState(false)
    
    useEffect(() => {
       
        authenticate();
    }, []);
    const authenticate = async () => {
        const hasHardware = await LocalAuthentication.hasHardwareAsync();
        console.log('Does the device have biometric hardware?', hasHardware);

        if (hasHardware) {
            // Proceed with biometric authentication
            const res = await LocalAuthentication.authenticateAsync({
                promptMessage: 'Authenticate to continue',
                fallbackLabel: 'Enter PIN',
            });
            console.log(res);
            if(res.success){
                setUnloked(true)
            }
        } else {
            // Handle the case where the device does not have biometric hardware
            console.warn('Device does not have biometric hardware.');
        }
    };
    if(!unlocked){
        return <View style={{flex:1, alignItems:"center",justifyContent:"center"}}>
            <Text style={{fontFamily:"Inter",fontSize:20,marginBottom:20}}>Use PIN to unlock </Text>
            <FontAwesome5 onPress={authenticate} name="fingerprint" size={70} color="gray" />
        </View>
    }
    return <Slot />;
}
