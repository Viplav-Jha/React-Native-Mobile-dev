import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
        contentContainerStyle={{ gap: 10 }}
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <MaterialCommunityIcons
              name="checkbox-marked-circle-outline"
              size={24}
              color="dimgray"
            />
            <Text style={styles.tasktitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 15,
    backgroundColor: "white",
    flex: 1,
  },
  taskContainer: {
    padding: 5,
    // borderWidth:1,
    // borderColor:'gray',
  },
  tasktitle: {
    fontFamily: "InterSemi",
    fontSize: 15,
    color: "dimgray",
  },
});

export default TodoScreen;
