import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator,StyleSheet } from "react-native";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=26.1542&lon=85.8918&appid=6beb908e4186fa331dd1e1f2e1b5c2a1&units=metric`;

 type Weather ={
    name:string;
    "main": {
        "temp": number,
        "feels_like": number,
        "temp_min": number,
        "temp_max": number,
        "pressure": number,
        "humidity": number,
        "sea_level": number,
        "grnd_level": number
      },
 };

const weatherScreen = () => {
  const [weather, setWeather] = useState<Weather>();

  const fetchWeather = async () => {
    console.log("fetch data");
    const result = await fetch(url);
    const data = await result.json();
    setWeather(data);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (!weather) {
      return <ActivityIndicator/>;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.location}>{weather.name}</Text>
      <Text style={styles.temp}>{Math.round(weather.main.temp)}°</Text>
    </View>
  );
};

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    location:{
       fontFamily:'Inter',
       fontSize:30,

    },
    temp:{
        fontFamily:'InterBlack',
        fontSize:50,
        color:'gray'
    }
})

export default weatherScreen;
