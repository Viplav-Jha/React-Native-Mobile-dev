import { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from "react-native";
import * as Location from "expo-location";
import { Stack } from "expo-router";
import ForcasteItem from "../../components/core/day4/ForcasteItem";

const BASE_URL = `https://api.openweathermap.org/data/2.5/`;
const OPEN_WEATHER_KEY = process.env.EXPO_PUBLIC_OPEN_WEATHER_KEY;

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

type MainWeather = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};

type Weather = {
  name: string;
  main: MainWeather;
};

export type WeatherForecast = {
  main: MainWeather;
  dt: number;
};

const weatherScreen = () => {
  const [location, setLocation] = useState<Location.LocationObject>();
  const [errorMsg, setErrorMsg] = useState("");
  const [weather, setWeather] = useState<Weather>();
  const [forecast, setForecaste] = useState<WeatherForecast[]>();

  useEffect(() => {
    if (location) {
      fetchWeather();
      fetchForecast();
    }
  }, [location]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const fetchWeather = async () => {
    if (!location) {
      return;
    }

    const result = await fetch(
      `${BASE_URL}/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${OPEN_WEATHER_KEY}&units=metric`
    );
    const data = await result.json();
    setWeather(data);
  };

  const fetchForecast = async () => {
    if (!location) {
      return;
    }
    const result = await fetch(
      `${BASE_URL}/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${OPEN_WEATHER_KEY}&units=metric`
    );
    const data = await result.json();
    console.log(JSON.stringify(data, null, 2));
    setForecaste(data.list);
  };

  if (!weather) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
     
      <Stack.Screen options={{ title: "WeatherApp" }} />
      <View style={{flex:1}}>
      <Text style={styles.location}>{weather.name}</Text>
      <Text style={styles.temp}>{Math.round(weather.main.temp)}°</Text>
      </View>
     

      <FlatList
        data={forecast}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{backgroundColor:'red',flexGrow:0,height:200,marginBottom:40}}
        contentContainerStyle={{gap:10,height:150,backgroundColor:'blue'}}
        renderItem={({ item }) =><ForcasteItem forcaste={item}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  location: {
    fontFamily: "Inter",
    fontSize: 30,
  },
  temp: {
    fontFamily: "InterBlack",
    fontSize: 100,
    color: "gray",
  },
});

export default weatherScreen;
