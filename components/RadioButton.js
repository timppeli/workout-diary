import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Styles from '../styles/Styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function RadioButton({ data, onSelect }) {

    const [workoutType, setWorkoutType] = useState('Run');
    console.log(workoutType);

  return (
    <View style={Styles.radiobuttons}>
    {data.map((item) => {
      return (
        <Pressable onPress={() => setWorkoutType(item.value)} style={ item.value === workoutType ? Styles.selected : Styles.unselected }>
          <MaterialCommunityIcons name={item.icon} size={30} style={ item.value === workoutType ? Styles.currentOption : Styles.option } /><Text style={ item.value === workoutType ? Styles.currentOption : Styles.option }> {item.value}</Text>
        </Pressable>
      );
    })}
  </View>
  );
}