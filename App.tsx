import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import DayListItem from "./src/components/core/DayListItem";

export default function App() {
  const days = [...Array(24)].map((val, Index) => Index + 1);

  return (
    <View style={styles.container}>
      <DayListItem day={0}/>
    

      <FlatList
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({ item }) => <DayListItem day ={item}/>}
      />
      {/*       
      {days.map((day)=>(
         <View style={styles.box} key={day}>
         <Text style={styles.text}>{day}</Text>
        </View>
      ))} */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    gap: 10,
    padding: 10,
  },
  column: {
    gap: 10,
  },
});
