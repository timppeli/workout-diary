import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import Styles from '../styles/Styles';
import { WorkoutContext } from '../contexts/Contexts';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function WorkoutHistory() {

  const { workouts } = useContext(WorkoutContext);

  const runDistanceTotal = getTotalDistanceByType(workouts, 'Run');
  const bikeDistanceTotal = getTotalDistanceByType(workouts, 'Bike');
  const swimDistanceTotal = getTotalDistanceByType(workouts, 'Swim');


  const sortWorkoutsByDate = (workouts) => {
    return workouts.sort((a, b) => {
      const dateA = new Date(a.date.year, a.date.month - 1, a.date.day);
      const dateB = new Date(b.date.year, b.date.month - 1, b.date.day);
      return dateB - dateA;
    });
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.label}>Total distance for each sport</Text>
      <View style={Styles.statsContainer}>
        <Text style={Styles.statsItem}><MaterialCommunityIcons name={"run"} size={30} /> {runDistanceTotal} km</Text>
        <Text style={Styles.statsItem}><MaterialCommunityIcons name={"bike"} size={30} /> {bikeDistanceTotal} km</Text>
        <Text style={Styles.statsItem}><MaterialCommunityIcons name={"swim"} size={30} /> {swimDistanceTotal} km</Text>
      </View>

      <Text style={Styles.label}>All workouts (most recent first)</Text>
      <FlatList
        data={sortWorkoutsByDate(workouts)} renderItem={({ item }) => <ListItem workout={item} />}
      />
    </View>
  );

  function ListItem({ workout }) {

    const icon = workout.type.toLowerCase();

    return (
      <View style={Styles.historylistItem}>
        <MaterialCommunityIcons name={icon} size={40} />
        <Text >{workout.distance + " km"} </Text>
        <Text >{workout.duration + " min"} </Text>
        <Text ><MaterialCommunityIcons name={"calendar-range"} size={16} /> {workout.date.day + "." + workout.date.month + "." + workout.date.year}</Text>
      </View>
    );
  }

  function getTotalDistanceByType(workouts, workoutType) {
    return workouts.filter(w => w.type === workoutType)
      .reduce((sum, w) => {
        return sum + w.distance;
      }, 0);
  }
}