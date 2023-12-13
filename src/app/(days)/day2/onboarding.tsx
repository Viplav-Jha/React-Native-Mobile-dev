import { Stack } from "expo-router";
import { Text, View,StyleSheet } from "react-native";

export default function OnboardingScreen() {
    return (
        <View style={styles.page}>
            <Stack.Screen options={{headerShown:false}}/>

              <Text>OnBoarding</Text>
        </View>
    )
}

const styles =StyleSheet.create({
   page:{
    alignItems:'center',
    justifyContent:'center',
    flex:1,
   },
   image:{},
   title:{},
   description:{}
})