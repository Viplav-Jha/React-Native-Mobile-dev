import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";

const dummyTasks = [
  {
    title: "Setup Day3 structure",
    isFinished: false,
  },
  {
    title: "Add a new task",
    isFinished: false,
  },

  {
    title: "Change the status of a task",
    isFinished: false,
  },

  {
    title: "Separete in 2 tabes:todo , and complete",
    isFinished: false,
  },
];

const TodoScreen = () => {
  const [tasks, setTask] = useState(dummyTasks);

  return (
    <View style={styles.page}>
      <Stack.Screen options={{ title: "TODO" }} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {},
});

export default TodoScreen;
