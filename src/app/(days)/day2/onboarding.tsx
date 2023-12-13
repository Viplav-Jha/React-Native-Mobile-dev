import { Stack } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function OnboardingScreen() {
  return (
    <View style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <FontAwesome5 name="people-arrows" size={24} color="#CEF202" />
      <Text style={styles.title}>Track every transcation</Text>
      <Text style={styles.description}>
        Monitor your spending and contribution, ensuring everty pennty align
        with your family's aspirations
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    // alignItems:'center',
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#15141A",
    padding: 20,
  },
  image: {},
  title: {
    color: "#FDFDFD",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "InterBold",
    letterSpacing: 1.3,
  },
  description: {
    color: "gray",
    fontSize: 18,
    fontFamily: "Inter",
  },
});
