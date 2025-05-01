import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Search } from 'lucide-react-native';

export default function DiscoverScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Search size={20} color="#64748b" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search stories, people & more"
            placeholderTextColor="#64748b"
          />
        </View>
      </View>

      <ScrollView>
        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
            {['Technology', 'Travel', 'Food', 'Art', 'Science'].map((category) => (
              <TouchableOpacity key={category} style={styles.categoryItem}>
                <Text style={styles.categoryText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.popularSection}>
          <Text style={styles.sectionTitle}>Popular Stories</Text>
          {[1, 2, 3].map((item) => (
            <TouchableOpacity key={item} style={styles.storyCard}>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
                style={styles.storyImage}
              />
              <View style={styles.storyContent}>
                <Text style={styles.storyTitle}>Amazing Story Title {item}</Text>
                <Text style={styles.storyDescription}>
                  A brief description of this amazing story that will capture the reader's attention.
                </Text>
                <Text style={styles.storyMeta}>5 min read • Technology</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    padding: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#0f172a',
  },
  categoriesSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 16,
  },
  categoriesScroll: {
    marginLeft: -20,
    paddingLeft: 20,
  },
  categoryItem: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 12,
  },
  categoryText: {
    fontSize: 16,
    color: '#0f172a',
    fontWeight: '500',
  },
  popularSection: {
    padding: 20,
  },
  storyCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  storyImage: {
    width: 100,
    height: 100,
  },
  storyContent: {
    flex: 1,
    padding: 12,
  },
  storyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 4,
  },
  storyDescription: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  storyMeta: {
    fontSize: 12,
    color: '#94a3b8',
  },
});