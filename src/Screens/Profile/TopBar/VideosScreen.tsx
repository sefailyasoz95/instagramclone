import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {}

const VideosScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>Videos Screen</Text>
    </View>
  );
};

export default VideosScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040404',
    alignItems: 'center',
    width: '100%',
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'white',
    alignSelf: 'center',
  },
});
