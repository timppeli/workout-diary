import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddExercise from './screens/AddExercise';
import ExerciseHistory from './screens/ExerciseHistory';
import Settings from './screens/Settings';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator>

        <Tab.Screen name="Add Exercise" component={AddExercise} />

        <Tab.Screen name="Exercise History" component={ExerciseHistory} />

        <Tab.Screen name="Settings" component={Settings} />

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
