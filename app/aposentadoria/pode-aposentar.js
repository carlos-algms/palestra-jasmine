'use strict';

function podeAposentar(sexo, idade) {
  switch (sexo.toLowerCase()) {
    case 'h': return idade >= 85;
    case 'm': return idade >= 65;
    default: return false;
  }
}
