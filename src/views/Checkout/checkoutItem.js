import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';
import { FONT_FAMILY_LIGHT, FONT_FAMILY_REGULAR, FONT_FAMILY_SEMI_BOLD, FONT_SIZE_MEDIUM, FONT_SIZE_SMALL, WHITE } from '../../styles/styles';
import { formataValor } from '../../utils/utils';

export const CheckoutItem = ({
  itemName, titulo, imagem, preco, quantidade
}) => {
  return (
    <View style={styles.containerItem}>
      <View style={styles.imagemContainer}>
        <Image source={imagem} style={styles.imagem} />
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.descTextoSuperior}>{itemName}</Text>
        <Text style={styles.descTextoInferior}>{titulo}</Text>
      </View>
      <View style={styles.precoContainer}>
        <Text style={styles.precoTexto}>
          {formataValor(preco * quantidade)}
        </Text>
  <Text style={styles.precoTexto}>Qtd: {quantidade}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: WHITE,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4
  },
  imagemContainer: {
    flex: 20,
    backgroundColor: '#F7F8FC',
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagem: {
    width: 40,
    height: 50
  },
  descContainer: {
    flex: 25,
    padding: 18,
    justifyContent: 'center'
  },
  descTextoSuperior: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_MEDIUM
  },
  descTextoInferior: {
    fontSize: FONT_SIZE_SMALL,
    fontFamily: FONT_FAMILY_LIGHT
  },
  precoContainer: {
    flex: 35,
    padding: 18,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  textoQuantidade: {
    textAlign: 'center',
    padding: 4,
    fontSize: 10,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    color: WHITE
  },
  precoTexto: {
    fontFamily: FONT_FAMILY_REGULAR
  }
})