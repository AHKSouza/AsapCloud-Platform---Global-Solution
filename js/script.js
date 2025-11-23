document.addEventListener("DOMContentLoaded", () => {
  const btnMobile = document.getElementById("btn-mobile");
  const menuList = document.getElementById("menu-list");

  btnMobile.addEventListener("click", () => {
    menuList.classList.toggle("active");
  });

  const menuLinks = document.querySelectorAll("#menu-list li a");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuList.classList.remove("active");
    });
  });
});


// Faq - Perguntas e Respostas

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const isOpen = answer.style.display === "block";

    document.querySelectorAll(".faq-answer").forEach(ans => {
      ans.style.display = "none";
    });

    if (!isOpen) {
      answer.style.display = "block";
    }
  });
});

// Contato

const form = document.getElementById("formContato");
const telefone = document.getElementById("telefone");
const msgSucesso = document.querySelector(".msg-sucesso");
const msgErro = document.querySelector(".msg-erro");

function validarTelefone(valor) {
  const numeros = valor.replace(/\D/g, "");
  return numeros.length >= 10;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = form.querySelector("#nome");
  const email = form.querySelector("#email");
  const assunto = form.querySelector("#assunto");
  const mensagem = form.querySelector("#mensagem");

  // Validações
  if (!nome.value.trim()) {
    nome.focus();
    msgErro.textContent = "Por favor, preencha o campo Nome.";
    msgErro.style.display = "block";
    msgSucesso.style.display = "none";
    return;
  }

  if (!email.value.trim()) {
    email.focus();
    msgErro.textContent = "Por favor, preencha o campo E-mail.";
    msgErro.style.display = "block";
    msgSucesso.style.display = "none";
    return;
  }

  if (!telefone.value.trim() || !validarTelefone(telefone.value)) {
    telefone.focus();
    msgErro.textContent = "Por favor, insira um telefone válido (mínimo 10 números).";
    msgErro.style.display = "block";
    msgSucesso.style.display = "none";
    return;
  }

  if (!mensagem.value.trim()) {
    mensagem.focus();
    msgErro.textContent = "Por favor, preencha o campo Mensagem.";
    msgErro.style.display = "block";
    msgSucesso.style.display = "none";
    return;
  }


  msgSucesso.style.display = "block";
  msgErro.style.display = "none";
  msgSucesso.textContent = "Cadastro enviado com sucesso! Obrigado por entrar em contato.";

  form.reset();
});

