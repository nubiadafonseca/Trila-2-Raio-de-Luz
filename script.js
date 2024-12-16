//Diminuir menu quando no modo mobile
document.querySelector(".menu-toggle").addEventListener("click", function(){
  const menu = document.querySelector(".menu");
  menu.classList.toggle("show")
})

// Seleciona o formulário
document.querySelector("#formulario").addEventListener("submit", function(event) {
  // Previne o envio do formulário
  event.preventDefault();

  // Exibe uma mensagem no console
  alert("O formulário foi enviado!");
});   