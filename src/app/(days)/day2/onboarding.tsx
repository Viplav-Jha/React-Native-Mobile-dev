import { Link, Stack, router } from "expo-router";
import { Text, View, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { Directions } from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeOut,
  BounceInRight,
  BounceInLeft,
  SlideInRight,
  SlideOutLeft,
  SlideInLeft,
  SlideOutRight,
} from "react-native-reanimated";

const onboardingSteps = [
  {
    icon: "snowflake",
    title: "Welcome to the Realm of #AI",
    description:
      "Embark on a journey of React Native discovery guided by AI insights.",
  },
  {
    icon: "people-arrows",
    title: "Learn and Flourish Together",
    description:
      "Build expertise with 24 React Native projects, fostering collaborative growth.",
  },
  {
    icon: "book-reader",
    title: "AI-Powered Education for All",
    description:
      'Contribute to "Education for Everyone" in the AI World and make a life-changing impact.',
  },
];

export default function OnboardingScreen() {
  //Navigation to multiple Screen
  const [screenIndex, setScreenIndex] = useState(0);

  const data = onboardingSteps[screenIndex];

  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1;
    if (isLastScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const onBack = () => {
    const isFirstScreen = screenIndex === 0;
    if (isFirstScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const endOnboarding = () => {
    setScreenIndex(0);
    router.back();
  };

  //   const swipeForward = Gesture.Fling()
  //   .direction(Directions.LEFT)
  //   .onEnd(onContinue);

  //   const swipeBack = Gesture.Fling()
  //   .direction(Directions.RIGHT)
  //   .onEnd( onBack)

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),

    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
  );

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
      <GestureDetector gesture={swipes}>
        <View style={styles.pageContainer} key={screenIndex}>
          <View style={styles.stepIndicatorcontainer}>
            {onboardingSteps.map((steps, index) => (
              <View
                key={index}
                style={[
                  styles.stepIndicator,
                  {
                    backgroundColor: index === screenIndex ? "#CEF202" : "gray",
                  },
                ]}
              />
            ))}
          </View>
          <Animated.View entering={SlideInLeft}>
            <FontAwesome5
              style={styles.image}
              name={data.icon}
              size={100}
              color="#CEF202"
            />
          </Animated.View>

          <View style={styles.footer}>
            <Animated.Text
              entering={SlideInRight.delay(50)}
              exiting={SlideOutLeft}
              style={styles.title}
            >
              {data.title}
            </Animated.Text>
            <Animated.Text
              entering={SlideInRight.delay(200)}
              style={styles.description}
            >
              {data.description}
            </Animated.Text>
            <View style={styles.buttonsRow}>
              <Text onPress={endOnboarding} style={styles.buttonText}>
                Skip
              </Text>

              <Pressable onPress={onContinue} style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </GestureDetector>
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
    marginTop: 80,
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

  //steps
  stepIndicatorcontainer: {
    flexDirection: "row",
    gap: 8,
    marginHorizontal: 3,
    marginTop: 10,
  },
  stepIndicator: {
    flex: 1,
    height: 3,
    backgroundColor: "gray",
  },
});
