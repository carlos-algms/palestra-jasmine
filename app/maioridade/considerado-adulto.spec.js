'use strict';

describe('Maioridade', function () {
  it('Só acima de 18 anos', function (done) {
    consideradoAdulto(10).then(function (adulto) {
      expect(adulto).toEqual(false);
      done();
    });
  });

  it('Exatamente 18', function (done) {
    consideradoAdulto(18).then(function (adulto) {
      expect(adulto).toEqual(true);
      done();
    });
  });

  it('Qualquer idade acima de 18', function (done) {
    consideradoAdulto(100).then(function (adulto) {
      expect(adulto).toEqual(true);
      done();
    });
  });
});
