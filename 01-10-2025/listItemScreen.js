import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const categories = ['All', 'Roadbike', 'Mountain'];

const bikes = [
  {
    id: '1',
    name: 'Pinarello',
    price: 1800,
    type: 'All',
    image: require('./assets/bifour_-removebg-preview.png'),
  },
  {
    id: '2',
    name: 'Pina Mountai',
    price: 1700,
    type: 'Mountain',
    image: require('./assets/bifour_-removebg-preview1.png'),
  },
  {
    id: '3',
    name: 'Pina Bike',
    price: 1500,
    type: 'Roadbike',
    image: require('./assets/bione-removebg-preview.png'),
  },
  {
    id: '4',
    name: 'Pinarello',
    price: 1600,
    type: 'Roadbike',
    image: require('./assets/bione-removebg-preview1.png'),
  },
  {
    id: '5',
    name: 'Pinarello',
    price: 2700,
    type: 'Mountain',
    image: require('./assets/bithree_removebg-preview.png'),
  },
  {
    id: '6',
    name: 'Pina',
    price: 1350,
    type: 'Roadbike',
    image: require('./assets/bithree_removebg-preview1.png'),
  },
];

export default function ListItemScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredBikes =
    selectedCategory === 'All'
      ? bikes
      : bikes.filter((bike) => bike.type === selectedCategory);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('DetailScreen', { bike: item })}
    >
      <TouchableOpacity
        style={styles.heartIcon}
        onPress={() => toggleLike(item.id)}
      >
        <Ionicons
          name={likedItems[item.id] ? 'heart' : 'heart-outline'}
          size={24}
          color={likedItems[item.id] ? '#ff0000' : '#888'}
        />
      </TouchableOpacity>

      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>The world's Best Bike</Text>

      <View style={styles.tabs}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[styles.tab, selectedCategory === cat && styles.activeTab]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text
              style={[
                styles.tabText,
                selectedCategory === cat && styles.activeTabText,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredBikes}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff0000',
    textAlign: 'center',
    marginBottom: 16,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#eee',
  },
  activeTab: {
    backgroundColor: '#ff0000',
  },
  tabText: {
    fontSize: 14,
    color: '#333',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    width: '48%',
    backgroundColor: '#ffece1',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginBottom: 20,
    position: 'relative',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  image: {
    width: 120,
    height: 80,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
});
