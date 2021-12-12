import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {}

const ExploreScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore Screen ?</Text>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#040404',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  imageContainer: {
    // shadowColor: '#444',
    // shadowOffset: {
    //   width: 1,
    //   height: 3,
    // },
    // shadowOpacity: 1,
    borderRadius: 10,
    // shadowRadius: 5,
  },
  logo: {
    height: 50,
    width: 50,
  },
  header: {
    flexDirection: 'row',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
  },
  text: {
    position: 'absolute',
    top: '50%',
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 20,
  },
});
