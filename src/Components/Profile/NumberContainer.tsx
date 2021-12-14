import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {}

const NumberContainer = (props: Props) => {
  return (
    <View style={styles.imgAndNumbers}>
      <View style={styles.numbers}>
        <TouchableOpacity style={styles.number}>
          <Text style={styles.numberDigits}>105</Text>
          <Text style={styles.numberText}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number}>
          <Text style={styles.numberDigits}>10M</Text>
          <Text style={styles.numberText}>Followers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number}>
          <Text style={styles.numberDigits}>223</Text>
          <Text style={styles.numberText}>Following</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  imgAndNumbers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  numberDigits: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
  numberText: {
    fontSize: 14,
    color: '#fff',
  },

  numbers: {
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'purple',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  number: {
    padding: 10,
    alignItems: 'center',
  },
});
