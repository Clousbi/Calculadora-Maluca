//calculadora normal
function insert(num) { //aparece o número na tabela
    var numero = document.getElementById('resultado').value;
    document.getElementById('resultado').value = numero + num;
}
//
function clean() { // limpa a operação inteira
    document.getElementById('resultado').value = "";
    document.getElementById('operacaoJogo').value = "";
}
//
function backspace() { // limpa somente um número
    var resultado = document.getElementById('resultado').value;
    document.getElementById('resultado').value = resultado.substring(0, resultado.length - 1);
}
//
function result() {//função da operação 
    var resultado = document.getElementById('resultado').value;
    if (resultado) {
        document.getElementById('resultado').value = eval(resultado);
    } else {
        document.getElementById('resultado').value = "Não definido";
    }
}
//
//
//
//calculadora maluca
var resultado;
var valor = 0; // valor da operação da calculadora 
var decimal;
var interval; //usado na função do cronometro
//
function telaJogo(){ // quando é acionado o jogo, aparece essa função
    clean(); // limpa o input 'resultado'
    calculateM(10); // chama a função de calcular a operação do jogo
    configTimer(); // chama o cronometro
    var pontos_valor = document.getElementById('pontos').value = '0'; // os pontos tem o valor de 0 (do input)
    //
    var bloco = document.getElementById('operacaoJogo'); // aparece o input bloco
    bloco.style.display = "block";
    var tabela1 = document.getElementById('tabela1'); // aparece a tabela 1
    tabela1.style.display = "block";
    var tabela2 = document.getElementById('tabela2'); // aparece a tabela 2
    tabela2.style.display = "block";
    var volta = document.getElementById('voltar'); // aparece o botão de voltar
    volta.style.display = "block";
    var placar = document.getElementById('pontosJogo'); // aparece o "pontos"
    placar.style.display = "contents";
    var ponto = document.getElementById('pontos'); // aparece o placar de pontos
    ponto.style.display = "block";
    var btnCalM = document.getElementById('calM'); // some o botão de "calculadora maluca"
    btnCalM.style.display = "none";
//
    var igual = document.getElementById('igualtecla'); // cria uma variavel que tem o valor da tecla igual
    igual.addEventListener('click', function () { // ao clicar na tecla igual, aciona a função
            resultado = parseFloat(document.getElementById('resultado').value);
            resultado // o resultado que está no input, vira inteiro
            if (valor == (resultado) || decimal == (resultado)) { // se o valor que está no comparador é igual ao do resultado
                pontuacao(); // a pontucação aumenta
                pontos_valor++;
                if (pontos_valor <= 10){
                    calculateM(10); // chama o calculo de novo
                }else if(pontos_valor > 10 && pontos_valor <= 20){
                    calculateM(30); // chama o calculo de novo
                }
                else{
                    calculateM(100);// chama o calculo de novo
                }
            }
            else { // se não forem iguais
                finalizacao(1); // finaliza com os pontos adquiridos
            }
            document.getElementById('resultado').value = ""; // o input do resultado "limpa"
        });
}
//
function calculateM(operador){ // função que calcula a operação
    var primeiro = numeroOperacao(operador); //primeiro valor a ser calculado (chama a função de aleatoriedade)
    var segundo = numeroOperacao(operador); //segundovalor a ser calculado (chama a função de aleatoriedade)
    var operacaoNum = operacao(); // a operação (chama a função de aleatoriedade)
    if (operacaoNum == 1) { // se o número der 1
        valor = primeiro + segundo; // os valores são somados
        document.getElementById('comparador').value = valor; // o valor somado é mostrado no comparador
        document.getElementById('operacaoJogo').value = primeiro + " + " + segundo; // o valor somado é mostrado no input
        //
    } else if (operacaoNum == 2) { // se o número der 2
        valor = primeiro - segundo; // os valores são subtraidos
        document.getElementById('comparador').value = valor; // o valor somado é mostrado no comparador
        document.getElementById('operacaoJogo').value = primeiro + " - " + segundo; // o valor subtraido é mostrado no input
        //
    } else if (operacaoNum == 3) { // se o número der 3
        valor = primeiro * segundo; // os valores são multiplicados
        document.getElementById('comparador').value = valor; // o valor somado é mostrado no comparador
        document.getElementById('operacaoJogo').value = primeiro + " * " + segundo; // o valor multiplicado é mostrado no input
        // 
    } else { // se o número der 4
        valor = primeiro / segundo; // os valores são divididos
        decimal = valor.toFixed(2);
        document.getElementById('comparador').value = decimal; // o valor somado é mostrado no comparador
        document.getElementById('operacaoJogo').value = primeiro + " / " + segundo; // o valor dividido é mostrado no input
        //
    }
}
//
function voltar() { //função do botão de voltar
    var volta = document.getElementById('voltar'); // cria uma variável que é igual ao botão voltar
    volta.addEventListener('click', document.location.reload(true)); // ao clicar o botão reinicia o site
}
//
function numeroOperacao(num_random) { // randoniza 
    return Math.floor(Math.random() * num_random + 1);
}
//
function operacao() { // randoniza de 1 a 4
    return Math.floor(Math.random() * 4 + 1);
}
//
function pontuacao() { 
    var ponto = parseInt(document.getElementById('pontos').value); // o valor da variavel ponto é igual ao valor do input pontos, que passa para inteiro
    ponto++; // ponto = ponto + 1
    document.getElementById('pontos').value = ponto; // os pontos aparecem no input
    clearInterval(interval); // limpa o cronometro 
    configTimer(); // reinicia o cronometro
}
//
function finalizacao(tipo){ // função de fim de jogo
    var pontoFinal = document.getElementById('pontos').value; // pega os pontos do input e poe numa variavel
    if(tipo == 0){ // se o tipo for 0, é fim de jogo por tempo
        alert('Seu tempo acabou, sua pontuação foi: ' + pontoFinal); // alerta para o jogador que terminou o jogo
        window.location.reload(true); // reinicia o site
    }else{ // se o tipo for 1, é fim de jogo por erro de resposta
        alert('Resposta errada, sua pontuação foi: ' + pontoFinal); // alerta para o jogador que terminou o jogo
        window.location.reload(true); // reinicia o site
    }
}
//
function startTimer(duration, display) { // função do cronometro 
    var timer = duration, minutes, seconds; // duração, null, null
    interval = setInterval(function () { // setInterval é que ocorre a cada 1000 milesimos ou 1 segundo
        minutes = parseInt(timer / 60, 10); //o tempo é dividido por 60, na base 10
        seconds = parseInt(timer % 60, 10); // o resto da divisão por 60, na base 10, são os segundos
        minutes = minutes < 10 ? "0" + minutes : minutes; // mostra na tela os com uma condição de, o número menor que 10, aparece o 0 na frente, exemplo: 09, 08.
        seconds = seconds < 10 ? "0" + seconds : seconds; // mostra na tela os com uma condição de, o número menor que 10, aparece o 0 na frente, exemplo: 09, 08.
        display.textContent = minutes + ":" + seconds; // mostra na tela 00:00
        if (--timer < 0) { // caso o tempo zere
            timer = duration;
            display.style.display = 'none'; // display some
            finalizacao(0); // finaliza por tempo esgotado
        }
    }, 1000);
}
//
function configTimer() {
    var duration = 60 * 3; // Converter para segundos
    display = document.querySelector('#timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
};
//

