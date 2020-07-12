import React from 'react';
import {SafeAreaView, Text, View, Image, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>Lighteria</Text>
        <View style={styles.containerSacola}>
          <Image
            source={require('./assets/images/icone-sacola.png')}
            style={styles.imagem}
          />
        </View>
      </View>
      <View style={styles.containerDescricao}>
        <View style={styles.separador} />
        <View style={styles.containerTexto}>
          <Text style={styles.textoDescricao}>Categorias</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F0F4',
  },
  containerTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },
  titulo: {
    fontFamily: 'OpenSans-ExtraBold',
    fontSize: 28,
  },
  containerSacola: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 30,
  },
  imagem: {
    height: 30,
    width: 30,
  },
  separador: {
    borderWidth: 0.5,
    borderColor: '#A1A5AA',
    margin: 10,
  },
  containerDescricao: {
    paddingHorizontal: 16,
  },
  containerTexto: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46,
  },
  textoDescricao: {
    padding: 24,
    backgroundColor: '#F4F0F4',
    color: '#A1A5AA',
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
  },
});

export default App;
