import { useState } from 'react';
import { WorkoutContext } from './contexts/Contexts';
import DummyData from './components/Data';
import Navigation from './components/Navigation';

export default function App() {
  const [workouts, setWorkouts] = useState(DummyData);

  return (
    <WorkoutContext.Provider value={{ workouts, setWorkouts }}>
      <Navigation />
    </WorkoutContext.Provider>
  );
}
