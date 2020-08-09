import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export const formataValor = (valor) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);
