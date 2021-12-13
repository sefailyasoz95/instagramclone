import React, { useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Post from '../../../Components/Post/Post';

interface Props {}

const PostsScreen = (props: Props) => {
  const [images, setimages] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: '#040404',
      }}
    >
      {images.map(() => (
        <Post />
      ))}
    </ScrollView>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040404',
    width: '100%',
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: 'white',
    alignSelf: 'center',
  },
});
