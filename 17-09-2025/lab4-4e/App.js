import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isGridView, setIsGridView] = useState(false);

  useEffect(() => {
  const mockPhotos = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Ảnh số ${i + 1}`,
    thumbnailUrl: `https://picsum.photos/300/300?random=${i}}`,
  }));
  setPhotos(mockPhotos);
  setLoading(false);
}, []);

  const renderItem = ({ item }) => (
    <View style={styles.imageItem}>
      <Image
        source={{
          uri: item.thumbnailUrl || 'https://via.placeholder.com/150/92c952',
        }}
        style={styles.image}
      />
      <Text style={styles.imageTitle} numberOfLines={1}>
        {item.title}
      </Text>
    </View>
  );

  const renderHorizontalItem = ({ item }) => (
    <View style={styles.highlightItem}>
      <Image
        source={{ uri: item.thumbnailUrl }}
        style={styles.highlightImage}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>📸 Gallery App</Text>
        </View>

        {/* Mô tả */}
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            Ứng dụng hiển thị danh sách hình ảnh từ API JSONPlaceholder.
          </Text>
        </View>

        {/* Horizontal List nổi bật */}
        <Text style={styles.sectionTitle}>Ảnh nổi bật</Text>
        <FlatList
          data={photos.slice(0, 10)}
          renderItem={renderHorizontalItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.highlightList}
        />

        {/* Nút chuyển đổi */}
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setIsGridView(!isGridView)}>
          <Ionicons
            name={isGridView ? 'list' : 'grid'}
            size={20}
            color="white"
          />
          <Text style={styles.toggleText}>
            {isGridView ? 'Chuyển sang ListView' : 'Chuyển sang GridView'}
          </Text>
        </TouchableOpacity>

        {/* Danh sách ảnh */}
        <Text style={styles.sectionTitle}>Tất cả ảnh</Text>
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#007AFF"
            style={{ marginTop: 20 }}
          />
        ) : (
          <FlatList
            key={isGridView ? 'grid' : 'list'} // 👈 ép FlatList render lại
            data={photos}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={isGridView ? 2 : 1}
            contentContainerStyle={styles.list}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    padding: 16,
    backgroundColor: '#007AFF',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    padding: 12,
  },
  descriptionText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 12,
    marginTop: 16,
  },
  highlightList: {
    paddingVertical: 10,
    paddingLeft: 12,
  },
  highlightItem: {
    marginRight: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  highlightImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 10,
    margin: 12,
    borderRadius: 6,
    justifyContent: 'center',
  },
  toggleText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 14,
  },
  list: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  imageItem: {
    flex: 1,
    marginBottom: 12,
    marginRight: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 6,
  },
  imageTitle: {
    marginTop: 6,
    fontSize: 12,
    color: '#333',
  },
});
