import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList} from 'react-native';

export default function App() {

  const days =[1,6]
  return (
    <View style={styles.container}>

      <FlatList/>
      
      {days.map((day)=>(
         <View style={styles.box} key={day}>
         <Text style={styles.text}>{day}</Text>
        </View>
      ))}
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:10,
  },
  box:{
    backgroundColor:'#F9EDE3',
    width:300,
    height:300,
    borderWidth:StyleSheet.hairlineWidth,
    borderColor:'#9b4521',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    color:'#9b4521',
    fontSize:70
  }
});
