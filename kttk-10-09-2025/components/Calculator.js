import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function CalculatorUI({ display, onPress }) {
  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', 'Del', '=', '+'],
  ];

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Calculator</Text>
      </View>
      <TextInput style={styles.display} value={display} editable={false} />
      {buttons.map((row, i) => (
        <View style={styles.row} key={i}>
          {row.map((label) => (
            <TouchableOpacity
              key={label}
              style={styles.button}
              onPress={() => onPress(label)}
            >
              <Text style={styles.buttonText}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  box: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
    marginLeft: 100,
    flex: 1,
    height: 20,
    width: 100,
    backgroundColor: '#1122',
    borderRadius: 10,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  display: {
    backgroundColor: '#eee',
    fontSize: 28,
    marginBottom: 12,
    padding: 10,
    borderRadius: 8,
    textAlign: 'right',
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  button: {
    backgroundColor: '#2196F3',
    padding: 18,
    borderRadius: 8,
    marginHorizontal: 5,
    minWidth: 50,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
});