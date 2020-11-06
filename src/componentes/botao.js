import React from 'react';
import {View, Text, TouchableOpacity, Stylesheet} from 'react-native';
import {
  LIGHTBLUE,
  FONT_FAMILY_SEMI_BOLD,
  FONT_SIZE_MEDIUM,
  WHITE,
} from '../styles/styles';

export const Botao = ({titulo, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.botaoContainer}>
        <Text style={style.botaoTexto}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = Stylesheet.create({
  botaoContainer: {
    backgroundColor: LIGHTBLUE,
    padding: 20,
    borderRadius: 6,
  },
  texto: {
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: FONT_SIZE_MEDIUM,
    color: WHITE,
  },
});
