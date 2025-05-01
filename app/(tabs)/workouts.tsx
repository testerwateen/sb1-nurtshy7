import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

const workouts = [
  {
    id: '1',
    title: 'Full Body Strength',
    duration: '45 min',
    level: 'Intermediate',
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
  },
  {
    id: '2',
    title: 'HIIT Cardio',
    duration: '30 min',
    level: 'Advanced',
    image: 'https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg',
  },
  {
    id: '3',
    title: 'Yoga Flow',
    duration: '60 min',
    level: 'Beginner',
    image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg',
  },
];

export default function WorkoutsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Workouts</Text>
        <Text style={styles.subtitle}>Choose your workout</Text>
      </View>

      <View style={styles.categories}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['All', 'Strength', 'Cardio', 'Yoga', 'HIIT'].map((category) => (
            <TouchableOpacity key={category} style={styles.categoryButton}>
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.workoutsList}>
        {workouts.map((workout) => (
          <Link key={workout.id} href={`/workout/${workout.id}`} asChild>
            <TouchableOpacity style={styles.workoutCard}>
              <Image source={{ uri: workout.image }} style={styles.workoutImage} />
              <View style={styles.workoutContent}>
                <Text style={styles.workoutTitle}>{workout.title}</Text>
                <Text style={styles.workoutMeta}>
                  {workout.duration} • {workout.level}
                </Text>
              </View>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  categories: {
    paddingVertical: 16,
  },
  categoryButton: {
    backgroundColor: '#2a2a2a',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 8,
  },
  categoryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  workoutsList: {
    padding: 20,
  },
  workoutCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  workoutImage: {
    width: '100%',
    height: 200,
  },
  workoutContent: {
    padding: 16,
  },
  workoutTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  workoutMeta: {
    fontSize: 14,
    color: '#666',
  },
});