import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { WeatherForecast } from '@/app/(days)/day4/weather';


const ForcasteItem = ({forcaste}:{forcaste:WeatherForecast}) => {
  return (
    <View style={styles.container}>
    <Text>{forcaste.main.temp}</Text>
  </View>
  )
}

const styles =StyleSheet.create({
   container:{
    backgroundColor:'red',
    padding:10,

   },

})
export default ForcasteItem;