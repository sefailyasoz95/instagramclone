import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {}

const Post = (props: Props) => {
  return (
    <Image
      source={require('../../Assets/Images/profile-img.jpeg')}
      width={50}
      height={50}
      style={{
        width: '33.33%',
        resizeMode: 'contain',
        borderWidth: 1,
        height: 138,
      }}
    />
  );
};

export default Post;

const styles = StyleSheet.create({
  imgContainer: {
    borderWidth: 1,
    overflow: 'hidden',
    flexWrap: 'nowrap',
  },
});
