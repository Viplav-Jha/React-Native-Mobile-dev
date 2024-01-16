import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
} from "react-native";

interface ScratchCardProps {
  winMessage: string;
}

const ScratchCard: React.FC<ScratchCardProps> = ({ winMessage }) => {
  const [isScratched, setScratched] = useState(false);
  const scratchOpacity = useRef(new Animated.Value(1)).current;

  const handleScratch = () => {
    setScratched(true);
    Animated.timing(scratchOpacity, {
      toValue: 0,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleScratch} style={styles.scratchCard}>
        {!isScratched ? (
          <>
            <Image
              source={require("./scratch-card.jpg")}
              style={styles.scratchImage}
            />
            <Text style={styles.scratchText}>Scratch here</Text>
          </>
        ) : null}
        <Animated.View
          style={[
            styles.resultContainer,
            {
              opacity: scratchOpacity,
              position: isScratched ? "absolute" : "relative",
            },
          ]}
        >
          <Text style={styles.resultText}>{winMessage}</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scratchCard: {
    position: "relative",
    overflow: "hidden",
  },
  scratchImage: {
    width: 300,
    height: 200,
  },
  scratchText: {
    position: "absolute",
    top: 80,
    left: 120,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  resultContainer: {
    padding: 20,
    backgroundColor: "lightgreen",
    borderRadius: 10,
  },
  resultText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
});

export default ScratchCard;
