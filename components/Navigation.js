import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddWorkout from '../screens/AddWorkout';
import WorkoutHistory from '../screens/WorkoutHistory';
import Settings from '../screens/Settings';
import Styles from '../styles/Styles';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='history'>
                <Tab.Screen name="add" options={{
                    title: "Add Workout", tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="plus-box" color={color} size={size} />
                    )
                }} component={AddWorkout} style={Styles.test} />
                <Tab.Screen name="history" options={{
                    title: "Workout History", tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="history" color={color} size={size} />
                    )
                }} component={WorkoutHistory} />
                <Tab.Screen name="settings" options={{
                    title: "Settings", tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cogs" color={color} size={size} />
                    )
                }} component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}