'use strict';

describe('Pode aposentar', function () {
  it('Homens só após 85 anos', function () {
    expect(podeAposentar('h', 70)).toEqual(false);
    expect(podeAposentar('h', 85)).toEqual(true);
    expect(podeAposentar('h', 100)).toEqual(true);
  });

  it('Mulheres só após 65 anos', function () {
    expect(podeAposentar('m', 60)).toEqual(false);
    expect(podeAposentar('m', 65)).toEqual(true);
    expect(podeAposentar('m', 100)).toEqual(true);
  });
});
