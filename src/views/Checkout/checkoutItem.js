import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {WHITE} from '../../styles/styles';

export const CheckoutItem = ({itemName}) => {
  return (
    <View style={styles.containerItem}>
      <Text>{itemName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: WHITE,
    borderRadius: 10,
    // flexDirection
  },
});
