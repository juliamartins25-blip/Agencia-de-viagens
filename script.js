const btnPromocao = document.querySelector("#btn-promocao");
const btnSaibaMais = document.querySelector("#btn-saiba-mais");
const mensagemDestino = document.querySelector("#mensagem-destino");

btnPromocao.addEventListener("click", function() {
    alert("As reservas realizadas no dia de hoje recebem uma promoção especial!");
});

btnSaibaMais.addEventListener("click", function(){
    mensagemDestino.textContent = "Pacote de 7 dias com hospedagem em hotel 4 estrelas no centro de Paris. Inclui ingressos para Torre Eiffel e Museu do Louvre, com café da manhã incluso.";
});