import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const DayDeatilsScreen = () => {
 
  const desctiption =`
  # Wether app
  Fetch weather data and display it ;
  `

  return (
    <SafeAreaView edges={['bottom']} style={{flex:1}}>
        <Stack.Screen options={{title:'Day 3:Weather App'}} />
        <Link href='/day4/weather' asChild>
            <Button title=" Check Weather Status"></Button>
        </Link>
    </SafeAreaView>
  );
};
export default DayDeatilsScreen;