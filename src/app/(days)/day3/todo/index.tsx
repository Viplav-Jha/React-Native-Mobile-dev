import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Button,
} from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import NewTaskInput from "../../../components/core/day3/NewTaskInput";
import { SafeAreaView } from "react-native-safe-area-context";
import TaskListItem from "../TaskListItem";
export type Task = {
  title: string;
  isFinished: boolean;
};

import { useHeaderHeight } from "@react-navigation/elements";

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
  const [serachQuery, setSearchQuery] = useState("");
  const [tab,setTab] =useState<'All' |'Todo' | 'Finished'>('All');
  const headerHeight = useHeaderHeight();

  const filteredTask = tasks.filter((task) => {
    
    if(task.isFinished && tab === 'Todo'){
      return false
    }
    if(!task.isFinished && tab=== 'Finished'){
      return false;
    }

    if (!serachQuery) {
      return true;
    }

    return task.title
      .toLocaleLowerCase()
      .trim()
      .includes(serachQuery.toLocaleLowerCase().trim());
  });

  const onItemPressed = (index: number) => {
    setTask((currentTask) => {
      const updatedTasks = [...currentTask];
      updatedTasks[index].isFinished = !updatedTasks[index].isFinished;
      console.log(updatedTasks);
      return updatedTasks;
    });
  };

  const deleteTask = (index: number) => {
    setTask((currentTask) => {
      const updatedTask = [...currentTask];
      updatedTask.splice(index, 1);
      return updatedTask;
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.page}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <Stack.Screen
        options={{
          title: "TODO",
          headerBackVisible: false,
          headerSearchBarOptions: {
            hideWhenScrolling: true,
            onChangeText: (e) => setSearchQuery(e.nativeEvent.text),
          },
        }}
      />
      <SafeAreaView
        edges={["bottom"]}
        style={{ flex: 1, paddingTop: headerHeight + 35 }}
      >
        <Text>{serachQuery}</Text>
        <View style={{flexDirection:'row', marginTop:10,justifyContent:'space-around'}}>
           <Button title="All" onPress={()=>setTab('All')} />
           <Button title="Todo" onPress={()=>setTab('Todo')} />
           <Button title="Finished" onPress={()=>setTab('Finished')} />
        </View>

        <FlatList
          keyExtractor={(item) => item.title}
          contentContainerStyle={{ gap: 5, padding: 10, marginTop: 10 }}
          data={filteredTask}
          renderItem={({ item, index }) => (
            <TaskListItem
              onDelete={() => deleteTask(index)}
              task={item}
              onItemPressed={() => onItemPressed(index)}
            />
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
