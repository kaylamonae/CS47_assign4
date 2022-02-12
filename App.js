import 'react-native-gesture-handler';
import { StyleSheet, Text, SafeAreaView, Pressable, Image, View, FlatList } from "react-native";
import Colors from "./Themes/colors";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from "./screens/MainScreen";
import DetailedSong from "./screens/DetailedSong";
import SongPreview from "./screens/SongPreview";

const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main Screen" component={MainScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Detailed Song" component={DetailedSong} options={{headerStyle: {backgroundColor: Colors.background}, headerTintColor: '#fff'}}/>
        <Stack.Screen name="Song Preview" component={SongPreview} options={{headerStyle: {backgroundColor: Colors.background}, headerTintColor: '#fff'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }, 
});
