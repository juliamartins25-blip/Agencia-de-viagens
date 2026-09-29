// promoção
const btnPromocao = document.querySelector("#btn-promocao");

btnPromocao.addEventListener("click", function() {
    alert("As reservas realizadas no dia de hoje recebem uma promoção especial!");
});

// saiba mais
const btnSaibaMais = document.querySelector("#btn-saiba-mais");

btnSaibaMais.addEventListener("click", function(){
    const mensagemDestino = document.querySelector("#mensagem-destino");

    mensagemDestino.textContent = "Pacote de 7 dias com hospedagem em hotel 4 estrelas no centro de Paris. Inclui ingressos para Torre Eiffel e Museu do Louvre, com café da manhã incluso.";
});

// destacar
const btnDestinoDestaque = document.querySelector("#btn-destino-destaque");
const destaque = document.querySelector("#destino-destaque");
const cardParis = document.querySelector("#card-paris");
const btnDestaque = document.querySelector("#btn-destaque");

btnDestaque.addEventListener("click", function() {
    cardParis.classList.toggle("destino-destaque");
    btnDestaque.classList.toggle("btn-destino-destaque");
});

// calcular
const btnCalcular = document.querySelector("#bnt-calcular");
const nome = document.querySelector("#nome");
const destino = document.querySelector("#destino");
const qtdPessoas = document.querySelector("#quantidade");
const resultado = document.querySelector("#resultado");

btnCalcular.addEventListener("click", function(){
    const qtdConvertido = Number(qtdPessoas.value);
    let preco;
    let precoFinal;

    if (destino.value === "Paris") {
        preco = 5900;
        precoFinal = preco * qtdConvertido;

    } else if (destino.value === "Florianópolis") {
        preco = 1200;
        precoFinal = preco * qtdConvertido;

    } else if (destino.value === "Foz do Iguaçu") {
        preco = 1500;
        precoFinal = preco * qtdConvertido;
    };

    if (nome.value === "" || destino.value === "" || qtdPessoas.value === "") {
        alert("Preencha todos os campos antes de calcular.");
    } else {
        resultado.textContent = `Olá ${nome.value}! Sua viagem para ${destino.value}, para ${qtdPessoas.value} viajante(s), possui um valor estimado de R$${precoFinal},00.`;
    };
});

// formulario de solicitação de reserva
const btnSolicitar = document.querySelector("#btn-solicitar");
const formNome = document.querySelector("#form-nome");
const formEmail = document.querySelector("#form-email");
const formDestino = document.querySelector("#form-destino");
const formQuantidade = document.querySelector("#form-quantidade");
const formData = document.querySelector("#form-data");
const formResultado = document.querySelector("#form-resultado");

btnSolicitar.addEventListener("submit", function(evento) {
    evento.preventDefault();
    
    console.log(formNome.value, formEmail.value, formDestino.value, formQuantidade.value, formData.value);
});
