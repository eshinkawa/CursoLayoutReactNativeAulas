import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {DataContext} from '../../provider';
import {useNavigation} from '@react-navigation/native';
import {
  FONT_FAMILY_SEMI_BOLD,
  FONT_SIZE_XX_LARGE,
  FONT_SIZE_LARGE,
  FONT_SIZE_SMALL,
  FONT_FAMILY_BOLD,
  COR_BOTAO_ACAO,
} from '../../styles/styles';
import {formataValor} from '../../utils/utils';
import {Botao} from '../../componentes/botao';
import { CheckoutItem } from './checkoutItem';

export const Checkout = () => {
  const {itensCheckout} = useContext(DataContext);
  const navigation = useNavigation();

  const valorTotal = itensCheckout.reduce(
    (acumulado, atual) => acumulado + atual.quantidade * atual.preco,
    0,
  );

  const Titulo = ({children}) => <Text style={styles.titulo}>{children}</Text>;
  const Total = ({children}) => (
    <Text style={styles.total}>Total: {children}</Text>
  );
  return (
    <View style={styles.container}>
      <Titulo>Checkout</Titulo>
      {itensCheckout.map((item) => (
        <CheckoutItem {...item}/>
      ))}
      <Total>{formataValor(valorTotal)}</Total>
      <Botao onPress={() => null} titulo={'FINALIZAR COMPRA'} />
      <TouchableOpacity>
        <Text style={styles.continuarTexto}>Continuar comprando</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
  },
  titulo: {
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: FONT_SIZE_XX_LARGE,
  },
  total: {
    fontSize: FONT_SIZE_LARGE,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    marginVertical: 36,
  },
  continuarTexto: {
    fontSize: FONT_SIZE_SMALL,
    fontFamily: FONT_FAMILY_BOLD,
    color: COR_BOTAO_ACAO,
    marginTop: 20,
    textAlign: 'center'
  }
});
