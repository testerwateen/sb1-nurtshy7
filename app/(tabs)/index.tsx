import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Welcome back</Text>
        <Text style={styles.name}>John Doe</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Workouts</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>1,250</Text>
          <Text style={styles.statLabel}>Calories</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>5.2</Text>
          <Text style={styles.statLabel}>Hours</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Today's Workout</Text>
        <TouchableOpacity style={styles.workoutCard}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg' }}
            style={styles.workoutImage}
          />
          <View style={styles.workoutContent}>
            <Text style={styles.workoutTitle}>Full Body Strength</Text>
            <Text style={styles.workoutMeta}>45 min • Intermediate</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nutrition Insights</Text>
        <View style={styles.nutritionCard}>
          <View style={styles.macroBar}>
            <View style={[styles.macroProgress, { width: '70%', backgroundColor: '#22c55e' }]} />
            <Text style={styles.macroLabel}>Protein: 70%</Text>
          </View>
          <View style={styles.macroBar}>
            <View style={[styles.macroProgress, { width: '45%', backgroundColor: '#eab308' }]} />
            <Text style={styles.macroLabel}>Carbs: 45%</Text>
          </View>
          <View style={styles.macroBar}>
            <View style={[styles.macroProgress, { width: '30%', backgroundColor: '#3b82f6' }]} />
            <Text style={styles.macroLabel}>Fats: 30%</Text>
          </View>
        </View>
      </View>

      <Link href="/workouts" asChild>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Start Workout</Text>
        </TouchableOpacity>
      </Link>
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
  greeting: {
    fontSize: 16,
    color: '#666',
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  statCard: {
    backgroundColor: '#2a2a2a',
    padding: 16,
    borderRadius: 12,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#22c55e',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 16,
  },
  workoutCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    overflow: 'hidden',
  },
  workoutImage: {
    width: '100%',
    height: 160,
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
  nutritionCard: {
    backgroundColor: '#2a2a2a',
    padding: 16,
    borderRadius: 12,
  },
  macroBar: {
    marginBottom: 12,
  },
  macroProgress: {
    height: 8,
    borderRadius: 4,
    marginBottom: 4,
  },
  macroLabel: {
    fontSize: 14,
    color: '#fff',
  },
  startButton: {
    backgroundColor: '#22c55e',
    margin: 20,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});