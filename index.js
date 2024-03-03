function showAlert(topico) {
  if (topico == "portfolio") {
    alert("Portfólio está em construção. Aguarde!");
  }
  if (topico == "trafego") {
    alert("Página em construção. Aguarde!");
  }
}

//BLOQUEIO DO CLIQUE COM O BOTÃO DIREITO DO MOUSE
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

//Bloqueia as teclas CTRL+U E F12
document.addEventListener("keydown", function (e) {
  var tecla = e.keyCode || e.which;
  if (tecla === 123) {
    //F12
    e.preventDefault();
  }
  var ctrl = e.ctrlKey;
  if (ctrl && tecla === 85) {
    //tecla U
    e.preventDefault();
  }
});
