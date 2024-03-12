import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import Styles from '../styles/Styles';
import RadioButton from '../components/RadioButton';

const AddWorkout = () => {
  const workoutTypes = [
    { value: 'Run', icon: 'run' },
    { value: 'Bike', icon: 'bike' },
    { value: 'Swim', icon: 'swim' },
  ];
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  return (
    <View style={Styles.container}>
      <Text style={Styles.label}>Workout Type:</Text>
      <RadioButton data={workoutTypes} style={Styles.button}/>
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
    </View>
  );
};

export default AddWorkout;