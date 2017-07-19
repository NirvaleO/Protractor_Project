describe('Protractor Demo App', function() {
	var entrarButton = element(by.id('botaoEntrar1'));
	var email = element(by.name('email'));
	var password = element(by.name('password'));
	var nome = element(by.id('nomeCadastro'));
	var sendButton = element(by.id('sendButton')); 
	var nomeUser = element(by.id('nomeUser'));
  
  
  function cadastro(a, b, c) {
    entrarButton.click();
	email.sendKeys(b);
    password.sendKeys(c);
    sendButton.click();
  }
  
  

  beforeEach(function() {
	browser.waitForAngularEnabled(false);
    browser.get('http://localhost:8080');
  });

  it('deve cadastrar', function() {
	  cadastro('Teste 1','teste1@email.com.br', 'huahua');
	  browser.wait(function() {
	        return browser.getCurrentUrl().then(function (url) {
	            return url !== 'http://localhost:8080/#!/index';
	        });
	    });
	  
	  expect(nomeUser.getText())
	  	.toBe('Teste 1');
	  });
});