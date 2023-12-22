import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const DayDeatilsScreen2 = () => {
 
  const desctiption =`
  # Todo app
  Ultimate Todo app ; `

  return (
    <SafeAreaView edges={['bottom']} style={{flex:1}}>
        <Stack.Screen options={{title:'Day 3:Todo'}} />
        <Link href='/day3/todo' asChild>
            <Button title=" Go to TODO"></Button>
        </Link>
    </SafeAreaView>
  );
};
export default DayDeatilsScreen2;