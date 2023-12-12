import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from "react-native";
import DayListItem from "./src/components/core/DayListItem";
import * as SplashScreen from 'expo-splash-screen';
import {useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { useEffect } from "react";
import {AmaticSC_400Regular,AmaticSC_700Bold} from '@expo-google-fonts/amatic-sc'

SplashScreen.preventAutoHideAsync()

const days = [...Array(24)].map((val, Index) => Index + 1);
export default function App() {
 
  const[fontsLoaded,fontError] =useFonts({
    Inter:Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold:AmaticSC_700Bold
  });

 

  useEffect(()=>{
    if(fontsLoaded || fontError){
      SplashScreen.hideAsync();
   }
  },[fontsLoaded,fontError])

  if(!fontsLoaded && !fontError){
    return null;
 }

  return (
    <View style={styles.container}>
      <DayListItem day={0}/>
    

      <FlatList
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({ item }) => <DayListItem day ={item}/>}
      />
      {/*       
      {days.map((day)=>(
         <View style={styles.box} key={day}>
         <Text style={styles.text}>{day}</Text>
        </View>
      ))} */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    gap: 10,
    padding: 10,
  },
  column: {
    gap: 10,
  },

});
