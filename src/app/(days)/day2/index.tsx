import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

const DayDeatilsScreen2 = () => {
  return (
    <View>
      <Text>DayDeatilsScreen</Text>
      <Link href="/day2/onboarding" asChild>
        <Button title=" Go to onbording" />
      </Link>
    </View>
  );
};
export default DayDeatilsScreen2;
