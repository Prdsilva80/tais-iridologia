document.addEventListener("DOMContentLoaded", function () {
  var mySwiper = new Swiper(".swiper-container", {
    loop: true, // O carrossel vai continuar deslizando infinitamente
    slidesPerView: 1, // Quantos slides exibir por vez
    spaceBetween: 0, // Espaço entre os slides
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 7000, // Tempo de transição entre os slides em milissegundos (7 segundos no exemplo)
      speed: 800, // Tempo de transição
      disableOnInteraction: false, // Permite que o autoplay continue mesmo quando o usuário interage com o carrossel
    },
  });
});

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

  document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.querySelector(".scroll-to-top");

    function handleScroll() {
        if (window.scrollY > 300) {
            scrollButton.classList.add("show");
        } else {
            scrollButton.classList.remove("show");
        }
    }

    function scrollToTop(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    window.addEventListener("scroll", handleScroll);
    scrollButton.addEventListener("click", scrollToTop);
});