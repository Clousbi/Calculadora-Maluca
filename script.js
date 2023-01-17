//calculadora normal
var resultado = document.getElementById('resultado').value;
var val = 0.0;
//
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
function caractere(caractere) {
    if(document.getElementById('resultado').value == null || document.getElementById('resultado').value == "0")
    document.getElementById('resultado').value = caractere;
    else
    document.getElementById('resultado').value += caractere;
}
//
function cos(){
    document.getElementById('resultado').value = Math.cos(document.getElementById('resultado').value);
}
//
function sin(){
    document.getElementById('resultado').value = Math.sin(document.getElementById('resultado').value);
}
//
function tan(){
    document.getElementById('resultado').value = Math.tan(document.getElementById('resultado').value);
}
//
function sqrt(){
    document.getElementById('resultado').value = Math.sqrt(document.getElementById('resultado').value);
}
//
function log(){
    document.getElementById('resultado').value = Math.log(document.getElementById('resultado').value);
}
//
function modulo() {
val = document.getElementById('resultado').value;
document.getElementById('resultado').value = document.getElementById('resultado').value + "%";
}
//
function exp(){
    document.getElementById('resultado').value = Math.exp(document.getElementById('resultado').value);
}
//
function quadrado(){
    document.getElementById('resultado').value = eval(document.getElementById('resultado').value) * eval(document.getElementById('resultado').value);
}
//
function alteraSinal() {
    if(document.getElementById('resultado').value.substring(0, 1) == "-")
    document.getElementById('resultado').value = document.getElementById('resultado').value.substring(1, document.getElementById('resultado').value.length);
    else
    document.getElementById('resultado').value = "-" + document.getElementById('resultado').value;
}
//
//
//
//
//calculadora maluca
var resultado;
var valor = 0; // valor da operação da calculadora 
var decimal;
var interval; //usado na função do cronometro
var vida1 = document.getElementById('vida1');
var vida2 = document.getElementById('vida2');
var vida3 = document.getElementById('vida3');
var i = 3;
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
    var vida1 = document.getElementById('vida1');
    vida1.style.display = "block";
    var vida2 = document.getElementById('vida2');
    vida2.style.display = "block";
    var vida3 = document.getElementById('vida3');
    vida3.style.display = "block";
//
    var igual = document.getElementById('igualtecla'); 
    igual.addEventListener('click', function () { 
            resultado = parseFloat(document.getElementById('resultado').value);
            resultado 
            if (valor == (resultado) || decimal == (resultado)) { 
                pontuacao(); 
                pontos_valor++;
                if (pontos_valor <= 10){
                    calculateM(10);
                }else if(pontos_valor > 10 && pontos_valor <= 20){
                    calculateMMedioDificil(10); 
                }
                else if(pontos_valor > 20 && pontos_valor <= 50){
                    calculateMMedioDificil(30);
                }else{
                    calculateMImpossivel(100);
                }
            }
            else { 
                
                if (i == 3){
                    vida1.innerHTML = document.getElementById('cv1').innerHTML;
                    vida1.value = document.getElementById('cv1').value;
                    i--;
                    calculateM(10);
                }else if (i == 2){
                    vida2.innerHTML = document.getElementById('cv2').innerHTML;
                    vida2.value = document.getElementById('cv2').value;
                    i--;
                    calculateM(10);
                }else if (i == 1){
                    vida3.innerHTML = document.getElementById('cv3').innerHTML;
                    vida3.value = document.getElementById('cv3').value;
                    i--;
                    finalizacao(1);
                }
                
            }
            document.getElementById('resultado').value = ""; 
        });
}
//
function calculateM(operador){ 
    var primeiro = numeroOperacao(operador);
    var segundo = numeroOperacao(operador);
    var operacaoNum = operacao(); 
    if (operacaoNum == 1) { 
        valor = primeiro + segundo; 
        document.getElementById('comparador').value = valor;
        document.getElementById('operacaoJogo').value = primeiro + " + " + segundo; 
        //
    } else if (operacaoNum == 2) { 
        valor = primeiro - segundo; 
        document.getElementById('comparador').value = valor;
        document.getElementById('operacaoJogo').value = primeiro + " - " + segundo; 
        //
    } else if (operacaoNum == 3) { 
        valor = primeiro * segundo; 
        document.getElementById('comparador').value = valor; 
        document.getElementById('operacaoJogo').value = primeiro + " * " + segundo;
        // 
    } else { 
        valor = primeiro / segundo; 
        decimal = valor.toFixed(2);
        document.getElementById('comparador').value = decimal; 
        document.getElementById('operacaoJogo').value = primeiro + " / " + segundo; 
        //
    }
}
//
function calculateMMedioDificil(operador){ 
    var pri = numeroOperacao(operador); 
    var seg = numeroOperacao(operador); 
    var ter = numeroOperacao(operador);
    var qua = numeroOperacao(operador);
    var operacaoNum = operacao(); 
    if (operacaoNum == 1) { 
        valor = pri * (seg + ter) / qua; 
        decimal = valor.toFixed(2);
        document.getElementById('comparador').value = decimal; 
        document.getElementById('operacaoJogo').value = pri + " * " + " ( " + seg + " + " + ter + " ) " + " / " + qua; 
        //
    } else if (operacaoNum == 2) {
        valor = pri / (seg * ter) + qua;
        decimal = valor.toFixed(2);
        document.getElementById('comparador').value = decimal; 
        document.getElementById('operacaoJogo').value = pri + " / " + " ( " + seg + " * " + ter + " ) " + " + " + qua; 
        //
    } else if (operacaoNum == 3) { 
        valor = pri - (seg / ter) * qua; 
        decimal = valor.toFixed(2);
        document.getElementById('comparador').value = decimal; 
        document.getElementById('operacaoJogo').value = pri + " - " + " ( " + seg + " / " + ter + " ) " + " * " + qua; 
        // 
    } else { 
        valor = pri + (seg - ter) - qua; 
        decimal = valor.toFixed(2);
        document.getElementById('comparador').value = decimal; 
        document.getElementById('operacaoJogo').value = pri + " + " + " ( " + seg + " - " + ter + " ) " + " - " + qua; 
        //
    }
}
//
function calculateMImpossivel(operador){ 
    var pri = numeroOperacao(operador); 
    var seg = numeroOperacao(operador); 
    var ter = numeroOperacao(operador);
    var qua = numeroOperacao(operador);
    var qui = numeroOperacao(operador);
    var sex = numeroOperacao(operador);
    var set = numeroOperacao(operador); 
    var operacaoNum = operacao(); 
    if (operacaoNum == 1) { 
        valor = (pri * (seg + ter) / qua - qui) + sex / set; 
        decimal = valor.toFixed(3);
        document.getElementById('comparador').value = decimal; 
        document.getElementById('operacaoJogo').value = " ( " + pri + " * ( " + seg + " + " + ter + " ) / " + qua + " - " + qui + " ) + " + sex + " / " + set; 
        //
    } else if (operacaoNum == 2) { 
        valor = (((pri + seg / ter ) * (qua - qui) / sex) + set); 
        decimal = valor.toFixed(3);
        document.getElementById('comparador').value = decimal; 
        document.getElementById('operacaoJogo').value = " ( ( ( " + pri + " + " + seg + " / " + ter + " ) * ( " + qua + " - " + qui + " ) / " + sex + " ) + " + set + " ) ";
        //
    } else if (operacaoNum == 3) { 
        valor = pri / seg - ter * (qua - qui) * (sex - set); 
        decimal = valor.toFixed(3);
        document.getElementById('comparador').value = decimal; 
        document.getElementById('operacaoJogo').value = pri + " / " + seg + " - " + ter + " * ( " + qua + " - " + qui + " ) * ( " + sex + " - " + set + " ) "; 
        // 
    } else { 
        valor = (((pri - seg) / (ter * qua)) / qui + sex) * set; 
        decimal = valor.toFixed(3);
        document.getElementById('comparador').value = decimal; 
        document.getElementById('operacaoJogo').value = " ( ( ( " + pri + " - " +  seg + " ) / ( " + ter + " * " + qua + " ) ) / " + qui + " + " + sex + ") * " + set; 
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
        alert('Suas vidas acabaram, sua pontuação foi: ' + pontoFinal); // alerta para o jogador que terminou o jogo
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

