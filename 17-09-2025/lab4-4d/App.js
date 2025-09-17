import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch API khi component mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Lỗi khi fetch:', error);
        setLoading(false);
      });
  }, []);

  // Hiển thị từng user
  const renderItem = ({ item }) => (
    <View style={styles.userItem}>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userEmail}>{item.email}</Text>
      </View>
      <TouchableOpacity style={styles.itemChatButton}>
        <Text style={styles.itemChatText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerChatWrapper}>
        <TouchableOpacity style={styles.headerChatButton}>
          <Ionicons name="arrow-back" size={20} color="white" />
          <Text style={styles.chatText}>Chat</Text>
          <Ionicons name="chatbubble-ellipses-outline" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Nav */}
      <View style={styles.nav}>
        <Text style={styles.navText}>
          Danh sách người dùng từ API JSONPlaceholder
        </Text>
      </View>

      {/* Body */}
      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}

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
  userItem: {
    width: 200,
    marginRight: 12,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    elevation: 2,
  },
  userInfo: {
    marginBottom: 8,
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userEmail: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
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