import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const products = [
  {
    id: '1',
    name: 'Cáp chuyển từ Cổng USB sang PS2 (đen)',
    rating: '4.8 (15 đánh giá)',
    price: '69.900 đ',
    discount: 'Giảm 39%',
    image: require('./assets/1.png'),
  },
  {
    id: '2',
    name: 'Cáp chuyển từ Cổng USB sang PS2 (xanh lá)',
    rating: '4.8 (15 đánh giá)',
    price: '69.900 đ',
    discount: 'Giảm 39%',
    image: require('./assets/2.png'),
  },
  {
    id: '3',
    name: 'Cáp chuyển từ Cổng USB sang PS2 (xám)',
    rating: '4.8 (15 đánh giá)',
    price: '69.900 đ',
    discount: 'Giảm 39%',
    image: require('./assets/3.png'),
  },
  {
    id: '4',
    name: 'Cáp chuyển từ Cổng USB sang PS2 (xanh lá có đầu USB)',
    rating: '4.8 (15 đánh giá)',
    price: '69.900 đ',
    discount: 'Giảm 39%',
    image: require('./assets/4.png'),
  },
  {
    id: '5',
    name: 'Cáp chuyển từ Cổng USB sang PS2 (tím)',
    rating: '4.8 (15 đánh giá)',
    price: '69.900 đ',
    discount: 'Giảm 39%',
    image: require('./assets/5.png'),
  },
  {
    id: '6',
    name: 'Cáp chuyển từ Cổng USB sang PS2 (xanh lá đậm)',
    rating: '4.8 (15 đánh giá)',
    price: '69.900 đ',
    discount: 'Giảm 39%',
    image: require('./assets/6.png'),
  },
];

export default function App() {
  const renderItem = ({ item }) => (
    <View style={styles.gridItem}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName} numberOfLines={2} ellipsizeMode="tail">
        {item.name}
      </Text>

      <Text style={styles.productRating}>{item.rating}</Text>
      <Text style={styles.productPrice}>
        {item.price}{' '}
        <Text style={styles.productDiscount}>({item.discount})</Text>
      </Text>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerChatWrapper}>
        <TouchableOpacity style={styles.headerChatButton}>
          <Ionicons name="arrow-back" size={20} color="white" />
          <View style={styles.searchBar}>
            <Ionicons
              name="search"
              size={20}
              color="#fff"
              style={styles.searchIcon}
            />
            <Text style={styles.searchText}>Dây cáp usb ...</Text>
          </View>
          <Ionicons name="cart" size={20} color="white" />
          <Ionicons
            name="ellipsis-horizontal-outline"
            size={20}
            color="white"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.nav}>
        <Text style={styles.navText}>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
        </Text>
      </View>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />

      <View style={styles.footer}>
        <Ionicons name="menu" size={24} color="#000000" />
        <Ionicons name="home" size={24} color="#000000" />
        <Ionicons name="person" size={24} color="#000000" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  headerChatWrapper: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  headerChatButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FF69B4',
    width: '100%',
  },
  chatText: {
    color: 'white',
    fontSize: 18,
    marginHorizontal: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff', // nền xanh
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FF69B4', // viền hồng
    paddingHorizontal: 15,
    paddingVertical: 5,
    margin: 2,
  },
  searchIcon: {
    marginRight: 10,
    marginLeft: 1,
    color: '#000000'
  },
  searchText: {
    color: '#000000',
    fontSize: 16,
  },
  nav: {
    backgroundColor: '#fff',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  navText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    padding: 10,
  },
  gridItem: {
    width: '48%',
    backgroundColor: '#fff',
    margin: '1%',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
    minHeight: 250, // hoặc giá trị phù hợp với nội dung
  },

  productImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1, // giữ tỷ lệ vuông
    borderRadius: 6,
    marginBottom: 8,
  },

  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },

  productRating: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 4,
  },
  productDiscount: {
    fontSize: 12,
    color: '#FF3B30',
  },
  chatButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#007AFF',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});
