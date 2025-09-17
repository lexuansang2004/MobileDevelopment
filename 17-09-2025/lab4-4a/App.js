import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const products = [
  {
    id: '1',
    name: 'Ca nấu lẩu, nấu mì mini...',
    shop: 'Shop Devang',
    image: require('./assets/ca_nau_lau.png'),
  },
  {
    id: '2',
    name: '1KG KHÔ GÀ BƠ TỎI ...',
    shop: 'Shop LTD Food',
    image: require('./assets/ga_bo_toi.png'),
  },
  {
    id: '3',
    name: 'Xe cần cẩu đa năng',
    shop: 'Shop Thế giới đồ chơi',
    image: require('./assets/xa_can_cau.png'),
  },
  {
  id: '4',
  name: 'Đồ chơi dạng mô hình',
  shop: 'Shop Thế giới đồ chơi',
  image: require('./assets/do_choi_dang_mo_hinh.png'),
},
{
  id: '5',
  name: 'Lãn đạo đơn giản',
  shop: 'Shop Minh Long Book',
  image: require('./assets/lanh_dao_gian_don.png'),
}
];

export default function App() {
  const renderItem = ({ item }) => (
  <View style={styles.productItem}>
    <Image source={item.image} style={styles.productImage} />
    <View style={styles.productInfo}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.shopName}>{item.shop}</Text>
    </View>
    <TouchableOpacity style={styles.itemChatButton}>
      <Text style={styles.itemChatText}>Chat</Text>
    </TouchableOpacity>
  </View>
);

  return (
    <SafeAreaView style={styles.container}>
      {/* Nút Chat chính */}
      <View style={styles.headerChatWrapper}>
        <TouchableOpacity style={styles.headerChatButton}>
          <Ionicons name="arrow-back" size={20} color="white" />
          <Text style={styles.chatText}>Chat</Text>
          <Ionicons name="cart" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Nav */}
      <View style={styles.nav}>
        <Text style={styles.navText}>
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
        </Text>
      </View>

      {/* Body */}
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />

      {/* Footer */}
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
    paddingHorizontal: 2,
    paddingTop: 5,
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
  nav: {
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
  productItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    elevation: 2,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 6,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  shopName: {
    fontSize: 12,
    color: '#666',
  },
  itemChatButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  itemChatText: {
    color: 'white',
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#007AFF',
    borderTopWidth: 1,
    borderColor: '#ddd',
    borderRadius: 7,
  },
});
