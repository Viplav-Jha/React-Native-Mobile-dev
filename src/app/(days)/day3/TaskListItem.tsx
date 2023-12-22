import { View, Text, StyleSheet, Pressable, Animated } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Task } from "@/app/(days)/day3/todo";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Reanimated, {
  JumpingTransition,
  CurvedTransition,
} from "react-native-reanimated";

const AnimatedView = Animated.createAnimatedComponent(View);

const RightActions = ({
  dragAnimatedValue,
  onDelete,
}: {
  dragAnimatedValue: Animated.AnimatedInterpolation<string | number>;
  onDelete: () => void;
}) => {
  const animatedStyle = {
    transform: [
      {
        translateX: dragAnimatedValue.interpolate({
          inputRange: [-40, 0],
          outputRange: [0, 40],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  return (
    <AnimatedView
      style={[
        {
          backgroundColor: "crimson",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 10,
        },
        animatedStyle,
      ]}
    >
      <MaterialCommunityIcons
        onPress={onDelete}
        name="delete"
        size={24}
        color="white"
      />
    </AnimatedView>
  );
};

type TaskListItem = {
  task: Task;
  onItemPressed: () => void;
  onDelete: () => void;
};

const TaskListItem = ({ task, onItemPressed, onDelete }: TaskListItem) => {
  return (
    <Reanimated.View layout={CurvedTransition}>
      <Swipeable
        renderRightActions={(progressAnimatedValue, dragAnimatedValue) => (
          <RightActions
            onDelete={onDelete}
            dragAnimatedValue={dragAnimatedValue}
          />
        )}
      >
        <Pressable onPress={onItemPressed} style={styles.taskContainer}>
          <MaterialCommunityIcons
            name={
              task.isFinished
                ? "checkbox-marked-circle-outline"
                : "checkbox-blank-circle-outline"
            }
            size={24}
            color={task.isFinished ? "gray" : "dimgray"}
          />
          <Text
            style={[
              styles.tasktitle,
              {
                textDecorationLine: task.isFinished ? "line-through" : "none",
                color: task.isFinished ? "lightgray" : "dimgray",
              },
            ]}
          >
            {task.title}
          </Text>
        </Pressable>
      </Swipeable>
    </Reanimated.View>
  );
};
const styles = StyleSheet.create({
  tasktitle: {
    fontFamily: "InterSemi",
    fontSize: 15,
    color: "dimgray",
    flex: 1,
  },
  taskContainer: {
    padding: 5,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});

export default TaskListItem;
