import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const dummyTasks = [
  {
    title: "Setup Day3 structure",
    isFinished: true,
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
              name={
                item.isFinished
                  ? "checkbox-marked-circle-outline"
                  : "checkbox-blank-circle-outline"
              }
              size={24}
              color="dimgray"
            />
            <Text
              style={[
                styles.tasktitle,
                {
                  textDecorationLine: item.isFinished ? "line-through" : "none",
                },
              ]}
            >
              {item.title}
            </Text>
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
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  tasktitle: {
    fontFamily: "InterSemi",
    fontSize: 15,
    color: "dimgray",
  },
});

export default TodoScreen;
