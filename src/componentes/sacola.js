import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Sacola = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.push('Checkout')}>
      <View style={styles.containerSacola}>
        <Image
          source={require('../assets/images/icone-sacola.png')}
          style={styles.imagem}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerSacola: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 30,
  },
  imagem: {
    height: 30,
    width: 30,
  },
});
