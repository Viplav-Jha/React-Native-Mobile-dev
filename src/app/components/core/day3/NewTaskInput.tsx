import { View, Text, TextInput, StyleSheet,} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Task } from "@/app/(days)/day3/todo";


type NewTaskInput ={
    onAdd:(newTask:Task)=>void;
}

const NewTaskInput = ({onAdd}:NewTaskInput) => {
  const [newTask, setNewTask] = useState("");
  return (
    <View style={styles.taskContainer}>
      <MaterialCommunityIcons
        name={"checkbox-blank-circle-outline"}
        size={24}
        color="dimgray"
      />
      <TextInput
        value={newTask}
        onChangeText={setNewTask}
        style={styles.input}
        placeholder="TODO.."
        onEndEditing={() => {
            if(!newTask){
                return;
            }
            onAdd({title: newTask, isFinished: false })
          setNewTask("");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    padding: 5,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  input: {
    fontFamily: "InterSemi",
    color: "dimgray",
    fontSize: 15,
    flex: 1,
  },
});

export default NewTaskInput;
