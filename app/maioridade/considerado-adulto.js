'use strict';

function consideradoAdulto(idade) {
  return new Promise(function (resolve, reject) {
    var tempo = (Math.random() * 2 * 1000);

    setTimeout(function () {
      resolve(idade >= 18);
    }, tempo);
  });
}
