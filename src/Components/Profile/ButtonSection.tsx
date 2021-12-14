import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../Button/Button';

interface Props {}

const ButtonSection = (props: Props) => {
  return (
    <View style={styles.editButton}>
      <Button
        text="Edit Profile"
        onPress={() => {}}
        color="gray"
        textColor="white"
        corners="curved"
        size="xlarge"
        buttonStyle={{
          borderRadius: 5,
        }}
      />
      <View style={styles.buttons}>
        <Button
          text="Ad Tools"
          onPress={() => {}}
          color="gray"
          textColor="white"
          buttonStyle={{
            marginHorizontal: 2,
            width: '30%',
            borderRadius: 5,
          }}
        />
        <Button
          text="Insights"
          onPress={() => {}}
          color="gray"
          textColor="white"
          buttonStyle={{
            marginHorizontal: 2,
            width: '30%',
            borderRadius: 5,
          }}
        />
        <Button
          text="Email"
          onPress={() => {}}
          color="gray"
          textColor="white"
          buttonStyle={{
            marginHorizontal: 2,
            width: '30%',
            borderRadius: 5,
          }}
        />
      </View>
    </View>
  );
};

export default ButtonSection;

const styles = StyleSheet.create({
  editButton: {
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
