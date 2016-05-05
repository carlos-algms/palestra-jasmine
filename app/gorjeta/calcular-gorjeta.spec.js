'use strict';

describe('Gorjeta', function () {
  beforeAll(function () {
    spyOn(Gorjeta, 'calcularAlta').and.callThrough();
    spyOn(Gorjeta, 'calcularNormal').and.callThrough();
  });

  it('varia porcentagem de acordo com o valor', function () {
    Gorjeta.calcular(50);
    Gorjeta.calcular(101);

    expect(Gorjeta.calcularNormal).toHaveBeenCalledTimes(1);
    expect(Gorjeta.calcularAlta).toHaveBeenCalledTimes(1);
  });

  it('Valor calculado corretamente', function () {
    var gorjetaNomal = Gorjeta.calcular(50);
    var gorjetaAlta = Gorjeta.calcular(101);

    expect(gorjetaNomal).toEqual(5);
    expect(gorjetaAlta).toEqual(7.07);
  });
});
