'use strict';

var Gorjeta = {
  calcular: function (valor) {    
    if(valor > 100) {
      return Gorjeta.calcularAlta(valor);
    }

    return Gorjeta.calcularNormal(valor);
  },

  calcularAlta: function (valor) {
    return valor * 0.07;
  },

  calcularNormal: function (valor) {
    return valor * 0.1;
  }
};
