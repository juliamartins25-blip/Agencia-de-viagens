const btnPromocao = document.querySelector("#btn-promocao");

const btnSaibaMais = document.querySelector("#btn-saiba-mais");
const mensagemDestino = document.querySelector("#mensagem-destino");

const cardParis = document.querySelector("#card-paris");
const destaque = document.querySelector("#destino-destaque");
const btnDestaque = document.querySelector("#btn-destaque");
const btnDestinoDestaque = document.querySelector("#btn-destino-destaque");

const btnCalcular = document.querySelector("#bnt-calcular");
const destino = document.querySelector("#destino");
const qtdPessoas = document.querySelector("#quantidade");
const nome = document.querySelector("#nome");

btnPromocao.addEventListener("click", function() {
    alert("As reservas realizadas no dia de hoje recebem uma promoção especial!");
});

btnSaibaMais.addEventListener("click", function(){
    mensagemDestino.textContent = "Pacote de 7 dias com hospedagem em hotel 4 estrelas no centro de Paris. Inclui ingressos para Torre Eiffel e Museu do Louvre, com café da manhã incluso.";
});

btnDestaque.addEventListener("click", function() {
    cardParis.classList.toggle("destino-destaque");
    btnDestaque.classList.toggle("btn-destino-destaque");
});

btnCalcular.addEventListener("click", function(){
    
})