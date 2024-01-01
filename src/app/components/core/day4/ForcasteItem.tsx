import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { WeatherForecast } from "@/app/(days)/day4/weather";

const ForcasteItem = ({ forcaste }: { forcaste: WeatherForecast }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.temp}>{forcaste.main.temp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    alignitem: "center",
    justifyContent: "center",
  },

  temp: {
    fontFamily: "InterBold",
    fontSize: 20,
    color: "gray",
  },
});
export default ForcasteItem;
