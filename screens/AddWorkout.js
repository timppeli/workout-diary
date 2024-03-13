import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Pressable, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Styles from '../styles/Styles';
import { WorkoutContext } from '../contexts/Contexts';

export default function AddWorkout() {
  const workoutTypes = [
    { value: 'Run', icon: 'run' },
    { value: 'Bike', icon: 'bike' },
    { value: 'Swim', icon: 'swim' },
  ];

  const [workoutType, setWorkoutType] = useState('Run');
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  const {setWorkouts } = useContext(WorkoutContext);

  function addNewWorkout() {

    setWorkouts(prev => [...prev, { type: workoutType, distance, duration }]);
    setWorkoutType('Run');
    setDistance(0);
    setDuration(0);


    // setWorkout([{workoutType, distance, duration}]);

    // console.log(workout)

    // if (distance <= 0) {
    //   console.log("poop")
    // }
    // console.log(workoutType + " " + distance + " " + duration)
    // setDistance(0);
    // setDuration(0);
    // setWorkoutType('Run');
  }

  return (
    <View style={Styles.container}>
      <Text style={Styles.label}>Workout Type:</Text>
      <View style={Styles.radiobuttons}>
        {workoutTypes.map((item) => {
          return (
            <Pressable key={item.value} onPress={() => setWorkoutType(item.value)} style={item.value === workoutType ? Styles.selected : Styles.unselected}>
              <MaterialCommunityIcons name={item.icon} size={40} style={item.value === workoutType ? Styles.currentOption : Styles.option} /><Text style={item.value === workoutType ? Styles.currentOption : Styles.option}> {item.value}</Text>
            </Pressable>
          );
        })}
      </View>
      <Text style={Styles.label}>Distance</Text>
      <TextInput
        style={Styles.input}
        onChangeText={setDistance}
        value={distance}
        placeholder="Distance (km)"
        keyboardType="numeric"
      />
      <Text style={Styles.label}>Duration</Text>
      <TextInput
        style={Styles.input}
        onChangeText={setDuration}
        value={duration}
        placeholder="Duration (min)"
        keyboardType="numeric"
      />
      <Button color="teal" title="Add Workout" onPress={addNewWorkout}>Add Workout</Button>
    </View>
  );
};