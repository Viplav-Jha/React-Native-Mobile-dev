import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import MarkdownDisplay from "../../../app/components/core/day3/MarkDownDisplay";

const description = `
# Some thing unique app`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: " Biometrics" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day6/home" asChild>
        <Button title="Go to Unique App" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
