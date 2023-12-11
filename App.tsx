import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList} from 'react-native';

export default function App() {

  const days =[1,2,3,4,5,6,7,8]
  return (
    <View style={styles.container}>

<FlatList
        data={days}
        contentContainerStyle={styles.content}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.box}>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
     
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
  content:{
    gap:10
  },
  box:{
    backgroundColor:'#F9EDE3',
    // width:100,
    // height:100,
    flex:1,
    aspectRatio:1,

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
