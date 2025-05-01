import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Settings, Grid, Bookmark } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity>
            <Settings size={24} color="#0f172a" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.bio}>Digital storyteller, photographer, and tech enthusiast</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>124</Text>
            <Text style={styles.statLabel}>Stories</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>23.4k</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>1.2k</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>

      <View style={styles.tabsContainer}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Grid size={20} color="#0891b2" />
          <Text style={[styles.tabText, styles.activeTabText]}>Stories</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Bookmark size={20} color="#64748b" />
          <Text style={styles.tabText}>Saved</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.storiesGrid}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <TouchableOpacity key={item} style={styles.storyItem}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
              style={styles.storyImage}
            />
            <Text style={styles.storyTitle}>Amazing Story {item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
  },
  profileSection: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
  },
  statLabel: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    marginTop: 20,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#0891b2',
  },
  tabText: {
    fontSize: 16,
    color: '#64748b',
    marginLeft: 8,
  },
  activeTabText: {
    color: '#0891b2',
    fontWeight: '600',
  },
  storiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  storyItem: {
    width: '50%',
    padding: 8,
  },
  storyImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 8,
  },
  storyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },
});