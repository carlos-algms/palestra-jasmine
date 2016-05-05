'use strict';

describe('Login', function () {
  beforeEach(function () {
    jasmine.Ajax.install();
    spyOn(window, 'alert');
  });

  afterEach(function () {
    jasmine.Ajax.uninstall();
  });

  it('Falha ao fazer login', function () {
    jasmine.Ajax.stubRequest('/api/login').andReturn({
      status: 401,
      responseText: '{}'
    });

    logar('foo', 'bar');
    expect(alert).toHaveBeenCalledWith('Falha ao fazer o login');
  });

  it('Executa corretamente', function () {
    jasmine.Ajax.stubRequest('/api/login').andReturn({
      status: 200,
      responseText: '{}'
    });

    logar('john', 'joe');
    expect(alert).toHaveBeenCalledWith('Login efetuado corretamente');
  });
});
