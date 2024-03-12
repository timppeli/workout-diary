import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddExercise from './screens/AddExercise';
import ExerciseHistory from './screens/ExerciseHistory';
import Settings from './screens/Settings';
import Styles from './styles/Styles';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator initialRouteName='history'>

        <Tab.Screen name="add" options={{title:"Add Exercise", tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus-box" color={color} size={size} />
          )}} component={AddExercise} style={Styles.test} />

        <Tab.Screen name="history" options={{title:"Exercise History", tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          )}} component={ExerciseHistory} />

        <Tab.Screen name="settings" options={{title:"Settings", tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cogs" color={color} size={size} />
          )}} component={Settings} />

      </Tab.Navigator>

    </NavigationContainer>
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
