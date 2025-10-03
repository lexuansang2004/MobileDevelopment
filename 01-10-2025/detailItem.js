import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DetailItem({ route }) {
  const { bike } = route.params;
  const [liked, setLiked] = useState(false);

  const discount = 0.15;
  const salePrice = Math.round(bike.price * (1 - discount));

  return (
    <View style={styles.container}>
      {/* Hình ảnh */}
      <View style={styles.imageWrapper}>
        <Image source={bike.image} style={styles.image} resizeMode="contain" />
      </View>

      {/* Tên sản phẩm */}
      <Text style={styles.name}>{bike.name}</Text>

      {/* Giá khuyến mãi */}
      <Text style={styles.discount}>
        15% OFF | <Text style={styles.originalPrice}>${bike.price}</Text>{' '}
        <Text style={styles.salePrice}>${salePrice}</Text>
      </Text>

      {/* Mô tả */}
      <Text style={styles.descriptionTitle}>Description</Text>
      <Text style={styles.description}>
        It is a very important form of writing as we write almost everything in
        paragraphs, be it an answer, essay, story, emails, etc.
      </Text>

      {/* Trái tim + nút */}
      <View style={styles.actionRow}>
        <TouchableOpacity
          style={styles.heartButton}
          onPress={() => setLiked(!liked)}>
          <Ionicons
            name={liked ? 'heart' : 'heart-outline'}
            size={28}
            color={liked ? '#ff0000' : '#888'}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  imageWrapper: {
    backgroundColor: '#ffece1',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  discount: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  salePrice: {
    color: '#ff0000',
    fontWeight: 'bold',
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 30,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heartButton: {
    padding: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#ff0000',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
