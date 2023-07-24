document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o envio do formulário pelo navegador

  // Verifica se todos os campos estão preenchidos
  var nomeInput = document.querySelector('input[name="nome"]');
  var emailInput = document.querySelector('input[name="email"]');
  var mensagemInput = document.querySelector('textarea[name="mensagem"]');

  if (!nomeInput.value) {
    document.getElementById('nome-validation').style.display = 'block';
    return;
  } else {
    document.getElementById('nome-validation').style.display = 'none';
  }

  if (!emailInput.value) {
    document.getElementById('email-validation').style.display = 'block';
    return;
  } else {
    document.getElementById('email-validation').style.display = 'none';
  }

  if (!mensagemInput.value) {
    document.getElementById('mensagem-validation').style.display = 'block';
    return;
  } else {
    document.getElementById('mensagem-validation').style.display = 'none';
  }

  // Se todos os campos estiverem preenchidos, envie o formulário
  this.submit();
});

const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    contactForm.reset();
  });