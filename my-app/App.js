import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font';
import * as SplashScreen from "expo-splash-screen"
import { useCallback } from 'react';


export default function App() {

  const [fontsloded]= useFonts({
    regular: require("../my-app/assets/fonts/Poppins-Regular.ttf"),
    blod: require("../my-app/assets/fonts/Poppins-Blod.ttf"),
    extrabold: require("../my-app/assets/fonts/Poppins-ExtraBold.ttf"),
    light: require("../my-app/assets/fonts/Poppins-Light.ttf"),
    medium: require("../my-app/assets/fonts/Poppins-Medium.ttf"),
    semibold: require("../my-app/assets/fonts/Poppins-SemiBold.ttf"),
  })
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
  },
});
