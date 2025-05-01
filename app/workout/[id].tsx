import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Play, Clock, BarChart2 } from 'lucide-react-native';

export default function WorkoutDetailScreen() {
  const { id } = useLocalSearchParams();

  const workout = {
    title: 'Full Body Strength',
    duration: '45 min',
    level: 'Intermediate',
    calories: '400-500',
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
    description:
      'A comprehensive full-body workout designed to build strength and endurance. This workout combines compound exercises with targeted movements for maximum results.',
    exercises: [
      {
        name: 'Barbell Squats',
        sets: '4 sets x 12 reps',
        image: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg',
      },
      {
        name: 'Bench Press',
        sets: '4 sets x 10 reps',
        image: 'https://images.pexels.com/photos/3837757/pexels-photo-3837757.jpeg',
      },
      {
        name: 'Deadlifts',
        sets: '4 sets x 8 reps',
        image: 'https://images.pexels.com/photos/4164765/pexels-photo-4164765.jpeg',
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: workout.image }} style={styles.coverImage} />

      <View style={styles.content}>
        <Text style={styles.title}>{workout.title}</Text>
        
        <View style={styles.metaContainer}>
          <View style={styles.metaItem}>
            <Clock size={20} color="#22c55e" />
            <Text style={styles.metaText}>{workout.duration}</Text>
          </View>
          <View style={styles.metaItem}>
            <BarChart2 size={20} color="#22c55e" />
            <Text style={styles.metaText}>{workout.level}</Text>
          </View>
          <View style={styles.metaItem}>
            <Text style={styles.metaText}>{workout.calories} cal</Text>
          </View>
        </View>

        <Text style={styles.description}>{workout.description}</Text>

        <Text style={styles.sectionTitle}>Exercises</Text>
        {workout.exercises.map((exercise, index) => (
          <View key={index} style={styles.exerciseCard}>
            <Image source={{ uri: exercise.image }} style={styles.exerciseImage} />
            <View style={styles.exerciseContent}>
              <Text style={styles.exerciseName}>{exercise.name}</Text>
              <Text style={styles.exerciseSets}>{exercise.sets}</Text>
            </View>
          </View>
        ))}

        <TouchableOpacity style={styles.startButton}>
          <Play size={24} color="#fff" />
          <Text style={styles.startButtonText}>Start Workout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  coverImage: {
    width: '100%',
    height: 300,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 16,
  },
  metaContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  metaText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 16,
  },
  description: {
    fontSize: 16,
    color: '#999',
    lineHeight: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 16,
  },
  exerciseCard: {
    flexDirection: 'row',
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  exerciseImage: {
    width: 100,
    height: 100,
  },
  exerciseContent: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  exerciseSets: {
    fontSize: 14,
    color: '#666',
  },
  startButton: {
    backgroundColor: '#22c55e',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
});