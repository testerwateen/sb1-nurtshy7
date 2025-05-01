import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Heart, MessageCircle, Share2 } from 'lucide-react-native';

export default function NotificationsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Activity</Text>
      </View>

      {[1, 2, 3, 4, 5].map((item) => (
        <TouchableOpacity key={item} style={styles.notificationItem}>
          {item % 3 === 0 ? (
            <Heart size={24} color="#ef4444" style={styles.icon} />
          ) : item % 3 === 1 ? (
            <MessageCircle size={24} color="#0891b2" style={styles.icon} />
          ) : (
            <Share2 size={24} color="#8b5cf6" style={styles.icon} />
          )}
          <View style={styles.notificationContent}>
            <Text style={styles.notificationText}>
              <Text style={styles.username}>John Doe</Text>
              {item % 3 === 0
                ? ' liked your story'
                : item % 3 === 1
                ? ' commented on your post'
                : ' shared your story'}
            </Text>
            <Text style={styles.timestamp}>2h ago</Text>
          </View>
        </TouchableOpacity>
      ))}
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
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  icon: {
    marginRight: 16,
  },
  notificationContent: {
    flex: 1,
  },
  notificationText: {
    fontSize: 16,
    color: '#0f172a',
    marginBottom: 4,
  },
  username: {
    fontWeight: '600',
  },
  timestamp: {
    fontSize: 14,
    color: '#64748b',
  },
});