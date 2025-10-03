import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'; // Nếu bạn dùng Expo SDK < 48

export default function HomeScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    VT323: require('./assets/VT323-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      {/* Caption ở trên cùng */}
      <Text style={styles.caption}>
        A premium online store for sporter and their stylish choice.
      </Text>

      {/* Nội dung chính */}
      <View style={styles.content}>
        <View style={styles.card}>
          <Image
            source={require('./assets/bifour_-removebg-preview.png')}
            style={styles.bikeImage}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title}>POWER BIKE SHOP</Text>
      </View>

      {/* Nút ở dưới cùng */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('List')}>
        {' '}
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 40,
    paddingHorizontal: 20,
    justifyContent: 'space-between', // Đẩy caption lên, button xuống
  },
  caption: {
    fontSize: 25,
    fontFamily: 'VT323',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold', // Tăng độ đậm (nếu font hỗ trợ)
  },
  content: {
    alignItems: 'center',
  },
  card: {
    borderWidth: 4,
    borderColor: '#ffe4e1',
    paddingTop: 75,
    borderRadius: 15,
    backgroundColor: '#ffe4e1',
    alignItems: 'center',
    width: '100%',
  },
  bikeImage: {
    width: 350,
    height: 220,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 40,
    width: 160,
  },
  button: {
    backgroundColor: '#ff0000',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'VT323',
  },
});
