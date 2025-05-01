import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Camera, BarChart3 } from 'lucide-react-native';

export default function NutritionScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Nutrition</Text>
        <Text style={styles.subtitle}>Track your meals and get AI insights</Text>
      </View>

      <TouchableOpacity style={styles.captureCard}>
        <Camera size={32} color="#22c55e" />
        <Text style={styles.captureText}>Capture Meal</Text>
        <Text style={styles.captureSubtext}>Get instant nutritional analysis</Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Today's Meals</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[1, 2, 3].map((meal) => (
            <View key={meal} style={styles.mealCard}>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg' }}
                style={styles.mealImage}
              />
              <View style={styles.mealContent}>
                <Text style={styles.mealTitle}>Healthy Breakfast {meal}</Text>
                <Text style={styles.mealMeta}>450 cal • 35g protein</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Nutrition Analysis</Text>
          <BarChart3 size={24} color="#22c55e" />
        </View>
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>1,850</Text>
            <Text style={styles.statLabel}>Calories</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>125g</Text>
            <Text style={styles.statLabel}>Protein</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>180g</Text>
            <Text style={styles.statLabel}>Carbs</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>65g</Text>
            <Text style={styles.statLabel}>Fats</Text>
          </View>
        </View>
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
  captureCard: {
    margin: 20,
    padding: 20,
    backgroundColor: '#2a2a2a',
    borderRadius: 16,
    alignItems: 'center',
  },
  captureText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginTop: 12,
  },
  captureSubtext: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  section: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  mealCard: {
    width: 240,
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 16,
  },
  mealImage: {
    width: '100%',
    height: 160,
  },
  mealContent: {
    padding: 12,
  },
  mealTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 4,
  },
  mealMeta: {
    fontSize: 14,
    color: '#666',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    width: '48%',
    backgroundColor: '#2a2a2a',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
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
});