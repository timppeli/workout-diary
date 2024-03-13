import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import Styles from '../styles/Styles';
import { WorkoutContext } from '../contexts/Contexts';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function WorkoutHistory() {

  const { workouts } = useContext(WorkoutContext);

  return (
    <View style={Styles.container}>
    <Text>Total stats for each sport</Text>
    
      <Text>List of all workouts</Text>
      <FlatList 
      data={workouts} renderItem={({item}) => <ListItem workout={item}/> }
      />
    </View>
  );

  function ListItem({ workout }) {

    const icon = workout.type.toLowerCase();

    return (
      <View style={Styles.historylistItem}>
        <Text style={Styles.itemText}>{workout.type}</Text>
        <Text >{workout.distance + " km"} </Text>
        <Text >{workout.duration + " min"} </Text>
        <MaterialCommunityIcons name={icon} size={40} />
      </View>
    );
  }
}