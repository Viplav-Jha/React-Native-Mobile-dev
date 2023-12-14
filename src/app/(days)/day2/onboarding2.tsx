import { Link, Stack } from "expo-router";
import { Text, View, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function OnboardingScreen2() {
  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.pageContainer}>
        <FontAwesome5
          style={styles.image}
          name="left"
          size={100}
          color="#CEF202"
        />
        <View style={styles.footer}>
          <Text style={styles.title}>Save your Date</Text>
          <Text style={styles.description}>
            Monitor your spending and contribution, ensuring everty pennty align
            with your family's aspirations
          </Text>
          <View style={styles.buttonsRow}>
            <Text style={styles.buttonText}>Skip</Text>
            <Link href={'day2/onboarding2'}>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    // alignItems:'center',
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#15141A",
  },
  pageContainer: {
    flex: 1,
    padding: 20,
  },
  image: {
    alignSelf: "center",
  },
  title: {
    color: "#FDFDFD",
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "InterBlack",
    letterSpacing: 1.3,
    marginVertical: 10,
  },
  description: {
    color: "gray",
    fontSize: 20,
    fontFamily: "Inter",
    lineHeight: 28,
  },
  footer: {
    marginTop: "auto",
  },
  buttonsRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "#302E38",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "#FDFDFD",
    fontFamily: "InterSemi",
    fontSize: 16,
    paddingHorizontal: 25,
  },
});
