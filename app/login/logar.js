'use strict';

function logar(usuario, senha) {
  return $.post('/api/login', {
    user: usuario,
    pass: senha
  })
  .done(_vaiParaPainel)
  .fail(_notificarErro);

  // ///////////

  function _vaiParaPainel() {
    alert('Login efetuado corretamente');
  }

  function _notificarErro(jqXHR, textStatus, errorThrown) {
    alert('Falha ao fazer o login');
  }
}
