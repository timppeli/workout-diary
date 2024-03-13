import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Pressable, Button, Alert, ScrollView, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Styles from '../styles/Styles';
import { WorkoutContext } from '../contexts/Contexts';
import { Calendar } from 'react-native-calendars';

export default function AddWorkout() {
  const workoutTypes = [
    { value: 'Run', icon: 'run' },
    { value: 'Bike', icon: 'bike' },
    { value: 'Swim', icon: 'swim' },
  ];

  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState();
  const [workoutType, setWorkoutType] = useState('Run');
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  const { setWorkouts } = useContext(WorkoutContext);

  function addNewWorkout() {
    handleErrorsAndSendData();
  }

  function dateSelected(day) {
    setVisible(false);
    setDate(day);
  }

  return (
    <ScrollView>
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
        <Text style={Styles.label}>Workout Date:</Text>
        <Modal visible={visible} transparent={true}>
          <Calendar onDayPress={dateSelected} />
        </Modal>
        <Pressable style={Styles.dateSelector} onPress={() => setVisible(true)}>
          <Text>{date ? date.dateString : "Select Date"}</Text>
        </Pressable>
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
    </ScrollView>
  );

  function handleErrorsAndSendData() {
    const hasInvalidValue = distance <= 0 || duration <= 0;

    if (date === undefined) {
      Alert.alert(
        'Invalid Input',
        'Please select a date.',
        [
          {
            text: 'OK'
          },
        ],
        { cancelable: false }
      );
    } else if (hasInvalidValue) {
      Alert.alert(
        hasInvalidValue ? 'Invalid Input' : 'Success',
        hasInvalidValue ? (
          distance <= 0 ? 'Please enter a distance greater than zero.' : 'Please enter a duration greater than zero.'
        ) : 'Workout added successfully.',
        [
          {
            text: 'OK'
          },
        ],
        { cancelable: false }
      );
    } else {
      setWorkouts(prev => [...prev, { type: workoutType, date: date, distance: parseInt(distance), duration: parseInt(duration) }]);
      setWorkoutType('Run');
      setDistance(0);
      setDuration(0);
      setDate('');
      Alert.alert(
        'Workout added succesfully!',
        '',
        [
          {
            text: 'OK'
          },
        ],
        { cancelable: false }
      );
    }
  }

};