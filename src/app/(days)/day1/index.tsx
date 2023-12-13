import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const DayDeatilsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day1" }} />
      <Text style={{ fontFamily: "AmaticBold", fontSize: 100 }}>
        DayDeatilsScreen
      </Text>
    </View>
  );
};

export default DayDeatilsScreen;
