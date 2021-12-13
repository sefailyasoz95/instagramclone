import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {}

const AttachedScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>Attached Screen</Text>
    </View>
  );
};

export default AttachedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040404',
    alignItems: 'center',
    width: '98%',
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'white',
    alignSelf: 'center',
  },
});
