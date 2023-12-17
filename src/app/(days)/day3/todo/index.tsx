import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewTaskInput from "../../../components/core/day3/NewTaskInput";
import { SafeAreaView } from "react-native-safe-area-context";

export type Task = {
  title: string;
  isFinished: boolean;
};

const dummyTasks: Task[] = [
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
  const [tasks, setTask] = useState<Task[]>(dummyTasks);
  const [newTask, setNewTask] = useState("");

  const onItemPressed = (index: number) => {
    setTask((currentTask) => {
      const updatedTasks = [...currentTask];
      updatedTasks[index].isFinished = !updatedTasks[index].isFinished;
      console.log(updatedTasks);
      return updatedTasks;
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.page}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <Stack.Screen options={{ title: "TODO" }} />
      <SafeAreaView>
        <FlatList
          contentContainerStyle={{ gap: 5,padding:10 }}
          data={tasks}
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() => onItemPressed(index)}
              style={styles.taskContainer}
            >
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
                    textDecorationLine: item.isFinished
                      ? "line-through"
                      : "none",
                  },
                ]}
              >
                {item.title}
              </Text>
            </Pressable>
          )}
          ListFooterComponent={() => (
            <NewTaskInput
              onAdd={(newTodo: Task) =>
                setTask((currentTasks) => [...currentTasks, newTodo])
              }
            />
          )}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
  taskContainer: {
    padding: 5,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  tasktitle: {
    fontFamily: "InterSemi",
    fontSize: 15,
    color: "dimgray",
    flex: 1,
  },
  input: {
    fontFamily: "InterSemi",
    color: "dimgray",
    fontSize: 15,
    flex: 1,
  },
});

export default TodoScreen;
