//calculadora normal
var resultado = document.getElementById('resultado').value; 
var val = 0.0;
//
function insert(num) { //inserir o número
    var numero = document.getElementById('resultado').value;
    document.getElementById('resultado').value = numero + num;
};
//
function clean() { //limpa a barra onde se insere o número
    document.getElementById('resultado').value = ""; 
    document.getElementById('operacaoJogo').value = "";
};
//
function backspace() { //apaga somente 1 caractere
    var resultado = document.getElementById('resultado').value;
    document.getElementById('resultado').value = resultado.substring(0, resultado.length - 1);
};
//
function result() { // resultado com operações simples
    var resultado = document.getElementById('resultado').value;
    if (resultado) {
        document.getElementById('resultado').value = eval(resultado);
    } else {
        document.getElementById('resultado').value = "Não definido";
    }
};
//
function caractere(caractere) { // pega caracteres como pi e parenteses e atribui valor
    if(document.getElementById('resultado').value == null || document.getElementById('resultado').value == "0")
    document.getElementById('resultado').value = caractere;
    else
    document.getElementById('resultado').value += caractere;
};
//
function cos(){ //cosseno
    document.getElementById('resultado').value = Math.cos(document.getElementById('resultado').value);
};
//
function sin(){ //seno
    document.getElementById('resultado').value = Math.sin(document.getElementById('resultado').value);
};
//
function tan(){ //tangente
    document.getElementById('resultado').value = Math.tan(document.getElementById('resultado').value);
};
//
function sqrt(){ //raiz quadrada
    document.getElementById('resultado').value = Math.sqrt(document.getElementById('resultado').value);
};
//
function log(){ //log
    document.getElementById('resultado').value = Math.log(document.getElementById('resultado').value);
};
//
function modulo(){//módulo
val = document.getElementById('resultado').value;
document.getElementById('resultado').value = document.getElementById('resultado').value + "%";
};
//
function exp(){//expoente na base 10
    document.getElementById('resultado').value = Math.exp(document.getElementById('resultado').value);
};
//
function quadrado(){//número ao quadrado
    document.getElementById('resultado').value = eval(document.getElementById('resultado').value) * eval(document.getElementById('resultado').value);
};
//
function alteraSinal(){//altera sinal (positivo - negativo)
    if(document.getElementById('resultado').value.substring(0, 1) == "-")
    document.getElementById('resultado').value = document.getElementById('resultado').value.substring(1, document.getElementById('resultado').value.length);
    else
    document.getElementById('resultado').value = "-" + document.getElementById('resultado').value;
};
//
//
//
//
//calculadora maluca
window.onload = () => {
    var html = document.querySelector('html');
        html.addEventListener('keypress', function (event) {
            if(event.charCode >= 48 && event.charCode <= 57){
                tecladoNum(event);
            }
            else if(event.key == "Enter"){
                resultado = parseFloat(document.getElementById('resultado').value); // resultado vira tipo float
                sessionStorage.setItem(document.getElementById('resultado').value, document.getElementById('resultado').value); //é armazenado  seu valor no sessionStorage
                if (valor == (resultado) || decimal == (resultado)) { //se o valor do comparador é igual o resultado digitado
                    pontuacao(); //conta os pontos
                    pontos_valor++; //os pontos são contados
                    sistemNivel(pontos_valor); // leva pro sistema de nivel pra comparar
                }
                else { // se o resultado não for igual
                    if (i == 3){ // se as vidas estiverem em 3
                        vida1.innerHTML = document.getElementById('cv1').innerHTML; // coracão cheio vira coração vazio
                        vida1.value = document.getElementById('cv1').value;
                        i--; //diminui o contador de vidas
                        sistemNivel(pontos_valor); // verifica o nivel pra continuar
                    }else if (i == 2){ //se as vidas estiverem em 2
                        vida2.innerHTML = document.getElementById('cv2').innerHTML; // coração cheio vira coração vazio
                        vida2.value = document.getElementById('cv2').value;
                        i--; //diminui o contador de vidas
                        sistemNivel(pontos_valor);
                    }else if (i == 1){ // se as vidas estiverem em 1
                        vida3.innerHTML = document.getElementById('cv3').innerHTML; // coração cheio vira coração vazio
                        vida3.value = document.getElementById('cv3').value;
                        i--; // vidas zeram
                        finalizacao(1); // finaliza o jogo no primeiro tipo (por erro)
                    }  
                }
            }else if(event.key == "."){
                insert('.');
            }
        });
        function tecladoNum(event){
            let result = document.getElementById('resultado')
            result.value = result.value + event.key
        }
}
var resposta;
var resultado;
var valor = 0; 
var decimal;
var interval; 
var vida1 = document.getElementById('vida1');
var vida2 = document.getElementById('vida2');
var vida3 = document.getElementById('vida3');
var i = 3;
var pontos_valor = document.getElementById('pontos').value = '0';
//
function telaJogo(){//ao clicar no botão da calculadora maluca aparece o jogo
    clean(); //limpa a tela
    calculateM(10);// faz o primeiro calculo
    configTimer(); // começa o cronometro
    //
    document.getElementById("clear").disabled = true;
    var bloco = document.getElementById('operacaoJogo'); 
    bloco.style.display = "block"; //aparece o bloco das operações
    var tabela1 = document.getElementById('tabela1'); 
    tabela1.style.display = "block"; // aparece a primeira tabela
    var tabela2 = document.getElementById('tabela2'); 
    tabela2.style.display = "block";//aparece a segunda tabela
    var volta = document.getElementById('voltar'); 
    volta.style.display = "block";//aparece o botão de voltar
    var placar = document.getElementById('pontosJogo'); 
    placar.style.display = "contents";//aparece o placar de pontos
    var ponto = document.getElementById('pontos'); 
    ponto.style.display = "block";//aparece os pontos
    var btnCalM = document.getElementById('calM'); 
    btnCalM.style.display = "none";//desaparece o botão da calculadora 
    var vida1 = document.getElementById('vida1');
    vida1.style.display = "block";//aparece a vida
    var vida2 = document.getElementById('vida2');
    vida2.style.display = "block";//aparece a vida
    var vida3 = document.getElementById('vida3');
    vida3.style.display = "block";//aparece a vida
//
    var igual = document.getElementById('igualtecla'); 
    igual.addEventListener('click', function () { // ao clicar o botão de igual:
            resultado = parseFloat(document.getElementById('resultado').value); // resultado vira tipo float
            sessionStorage.setItem(document.getElementById('resultado').value, document.getElementById('resultado').value); //é armazenado  seu valor no sessionStorage
            if (valor == (resultado) || decimal == (resultado)) { //se o valor do comparador é igual o resultado digitado
                pontuacao(); //conta os pontos
                pontos_valor++; //os pontos são contados
                sistemNivel(pontos_valor); // leva pro sistema de nivel pra comparar
            }
            else { // se o resultado não for igual
                if (i == 3){ // se as vidas estiverem em 3
                    vida1.innerHTML = document.getElementById('cv1').innerHTML; // coracão cheio vira coração vazio
                    vida1.value = document.getElementById('cv1').value;
                    i--; //diminui o contador de vidas
                    sistemNivel(pontos_valor); // verifica o nivel pra continuar
                }else if (i == 2){ //se as vidas estiverem em 2
                    vida2.innerHTML = document.getElementById('cv2').innerHTML; // coração cheio vira coração vazio
                    vida2.value = document.getElementById('cv2').value;
                    i--; //diminui o contador de vidas
                    sistemNivel(pontos_valor);
                }else if (i == 1){ // se as vidas estiverem em 1
                    vida3.innerHTML = document.getElementById('cv3').innerHTML; // coração cheio vira coração vazio
                    vida3.value = document.getElementById('cv3').value;
                    i--; // vidas zeram
                    finalizacao(1); // finaliza o jogo no primeiro tipo (por erro)
                }  
            }
        });
};
//
function calculateM(operador){ //operação da calculado nível fácil
    historico(); // guarda no historico
    document.getElementById('resultado').value = ""; //limpa o resultado
    var primeiro = numeroOperacao(operador); //randoniza um número
    var segundo = numeroOperacao(operador); // randoniza outro número
    var operacaoNum = operacao(); //randoniza a operação
    if (operacaoNum == 1) { //se a operação for 1
        valor = primeiro + segundo; //é soma
        document.getElementById('comparador').value = valor; // o comparador possui o valor do valor
        document.getElementById('operacaoJogo').value = primeiro + " + " + segundo; //é mostrado na tela
        //
    } else if (operacaoNum == 2) { //se a operação for 2
        valor = primeiro - segundo; //é subtração
        document.getElementById('comparador').value = valor; // o comparador possui o valor do valor
        document.getElementById('operacaoJogo').value = primeiro + " - " + segundo; //é mostrado na tela
        //
    } else if (operacaoNum == 3) { //se a operação for 3
        valor = primeiro * segundo; //é multiplicação
        document.getElementById('comparador').value = valor; // o comparador possui o valor do valor
        document.getElementById('operacaoJogo').value = primeiro + " * " + segundo; //é mostrado na tela
        // 
    } else { //se a operação for 4
        valor = primeiro / segundo; //é divisão
        decimal = valor.toFixed(2); //é arrendodado até duas casas decimais
        document.getElementById('comparador').value = decimal; // o comparador possui o valor do decimal 
        document.getElementById('operacaoJogo').value = primeiro + " / " + segundo; //é mostrado na tela
        //
    }
};
//
function calculateMMedioDificil(operador){ //operação da calculado nível médio/dificil
    historico(); // guarda no historico
    document.getElementById('resultado').value = ""; //limpa o resultado
    var pri = numeroOperacao(operador); //randoniza um número
    var seg = numeroOperacao(operador); //randoniza um número
    var ter = numeroOperacao(operador); //randoniza um número
    var qua = numeroOperacao(operador); //randoniza um número
    var operacaoNum = operacao(); //randoniza a operação
    if (operacaoNum == 1) { //se a operação for 1
        valor = pri * (seg + ter) / qua; //expressão
        decimal = valor.toFixed(2);  //é arrendodado até duas casas decimais
        document.getElementById('comparador').value = decimal; // o comparador possui o valor do decimal
        document.getElementById('operacaoJogo').value = pri + " * " + " ( " + seg + " + " + ter + " ) " + " / " + qua; //é mostrado na tela
        //
    } else if (operacaoNum == 2) { //se a operação for 2
        valor = pri / (seg * ter) + qua; //expressão
        decimal = valor.toFixed(2);  //é arrendodado até duas casas decimais
        document.getElementById('comparador').value = decimal; // o comparador possui o valor do decimal
        document.getElementById('operacaoJogo').value = pri + " / " + " ( " + seg + " * " + ter + " ) " + " + " + qua; //é mostrado na tela
        //
    } else if (operacaoNum == 3) { //se a operação for 3
        valor = pri - (seg / ter) * qua; //expressão
        decimal = valor.toFixed(2); //é arrendodado até duas casas decimais
        document.getElementById('comparador').value = decimal; // o comparador possui o valor do decimal
        document.getElementById('operacaoJogo').value = pri + " - " + " ( " + seg + " / " + ter + " ) " + " * " + qua; //é mostrado na tela
        // 
    } else {  //se a operação for 4
        valor = pri + (seg - ter) - qua; //expressão
        decimal = valor.toFixed(2); //é arrendodado até duas casas decimais
        document.getElementById('comparador').value = decimal; // o comparador possui o valor do decimal
        document.getElementById('operacaoJogo').value = pri + " + " + " ( " + seg + " - " + ter + " ) " + " - " + qua; //é mostrado na tela
        //
    }
};
//
function calculateMImpossivel(operador){ //operação da calculado nível impossivel
    historico(); // guarda no historico
    document.getElementById('resultado').value = ""; //limpa o resultado
    var pri = numeroOperacao(operador); //randoniza um número
    var seg = numeroOperacao(operador); //randoniza um número
    var ter = numeroOperacao(operador); //randoniza um número
    var qua = numeroOperacao(operador); //randoniza um número
    var qui = numeroOperacao(operador); //randoniza um número
    var sex = numeroOperacao(operador); //randoniza um número
    var set = numeroOperacao(operador); //randoniza um número
    var operacaoNum = operacao(); 
    if (operacaoNum == 1) { //se a operação for 1
        valor = (pri * (seg + ter) / qua - qui) + sex / set; //expressão
        decimal = valor.toFixed(3); //é arrendodado até três casas decimais
        document.getElementById('comparador').value = decimal; // o comparador possui o valor do decimal 
        document.getElementById('operacaoJogo').value = " ( " + pri + " * ( " + seg + " + " + ter + " ) / " + qua + " - " + qui + " ) + " + sex + " / " + set; //é mostrado na tela
        //
    } else if (operacaoNum == 2) { //se a operação for 2
        valor = (((pri + seg / ter ) * (qua - qui) / sex) + set); //expressão
        decimal = valor.toFixed(3); //é arrendodado até três casas decimais
        document.getElementById('comparador').value = decimal; // o comparador possui o valor do decimal
        document.getElementById('operacaoJogo').value = " ( ( ( " + pri + " + " + seg + " / " + ter + " ) * ( " + qua + " - " + qui + " ) / " + sex + " ) + " + set + " ) "; //é mostrado na tela
        //
    } else if (operacaoNum == 3) { //se a operação for 3
        valor = pri / seg - ter * (qua - qui) * (sex - set); //expressão
        decimal = valor.toFixed(3); //é arrendodado até três casas decimais
        document.getElementById('comparador').value = decimal; // o comparador possui o valor do decimal
        document.getElementById('operacaoJogo').value = pri + " / " + seg + " - " + ter + " * ( " + qua + " - " + qui + " ) * ( " + sex + " - " + set + " ) "; //é mostrado na tela
        // 
    } else { //se a operação for 4
        valor = (((pri - seg) / (ter * qua)) / qui + sex) * set; //expressão
        decimal = valor.toFixed(3); //é arrendodado até três casas decimais
        document.getElementById('comparador').value = decimal; // o comparador possui o valor do decimal
        document.getElementById('operacaoJogo').value = " ( ( ( " + pri + " - " +  seg + " ) / ( " + ter + " * " + qua + " ) ) / " + qui + " + " + sex + ") * " + set; //é mostrado na tela
        //
    }
};
//
function voltar() { //função de voltar
    var volta = document.getElementById('voltar'); 
    volta.addEventListener('click', document.location.reload(true)); //recarrega o site
    sessionStorage.clear(); //limpa o sessionStorage
};
//
function numeroOperacao(num_random) { //randoniza
    return Math.floor(Math.random() * num_random + 1); //randoniza até o parametro 
};
//
function operacao() { //randoniza
    return Math.floor(Math.random() * 4 + 1); //randoniza de 1 a 4
};
//
function pontuacao() { // sistema de pontos
    var ponto = parseInt(document.getElementById('pontos').value); //pontos são transformados em inteiros
    ponto++; //ponto = ponto + ponto
    document.getElementById('pontos').value = ponto; // valor dos pontos no html é igual do var ponto
    document.getElementById('pontos').innerHTML = ponto;
    clearInterval(interval);  // limpa o cronometro
    configTimer(); //recomeça o cronometro
};
//
function finalizacao(tipo){ // fim do jogo
    var pontoFinal = document.getElementById('pontos').value; 
    if(tipo == 0){ // se for por tempo finalizado
        alert('Seu tempo acabou, sua pontuação foi: ' + pontoFinal); // alerta que o tempo acabou 
        sessionStorage.clear(); //limpa o sessionStorage
        window.location.reload(true); //recarrega o site
    }else{ // se for do tipo de erro
        alert('Suas vidas acabaram, sua pontuação foi: ' + pontoFinal); // alerta que as vidas acabaram
        sessionStorage.clear(); //limpa o sessionStorage
        window.location.reload(true);//recarrega o site
    }
};
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
function sistemNivel(pontos_valor){ //sistema de nível
    if (pontos_valor <= 10){ //se os pontos forem menor que 10
        calculateM(10); // randoniza os números de 1 a 10, nível fácil
    }else if(pontos_valor > 10 && pontos_valor <= 20){ //se os pontos forem entre 11 e 20
        calculateMMedioDificil(10);  // randoniza os números de 1 a 10, nível médio
    }
    else if(pontos_valor > 20 && pontos_valor <= 50){ //se os pontos forem entre 21 e 50
        calculateMMedioDificil(30); // randoniza os números de 1 a 30, nível dificil
    }else{ //se os pontos forem maiores que 50
        calculateMImpossivel(100); // randoniza os números de 1 a 100, nível impossivel
    }
}
//
function historico(){ //histórico de cálculos
    sessionStorage.setItem(operacaoJogo.value, operacaoJogo.value); //armazena no sessionStorage a operação do jogo
    sessionStorage.setItem(comparador.value, comparador.value); //armazena no sessionStorage o resultado correto da operação

    if (valor == (resultado) || decimal == (resultado)){ //se o valor e o resultado forem iguais (resposta correta)
        var k = document.body.querySelector("#cont11").innerHTML; //chama a coluna
        k = sessionStorage.getItem(operacaoJogo.value); //a coluna passa a ter o valor do sessionStorage
        var l = document.getElementById('cont11').outerHTML //cria outra linha
        document.getElementById('cont11').innerHTML = k + l; // linha criada + linha já existente (com sessionStorage)
        //
        var j = document.body.querySelector("#cont12").innerHTML; //chama a coluna
        j = sessionStorage.getItem(comparador.value); //a coluna passa a ter o valor do sessionStorage
        var i = document.getElementById('cont12').outerHTML //cria outra linha
        document.getElementById('cont12').innerHTML = j + i; // linha criada + linha já existente (com sessionStorage)
        //
        var m = document.body.querySelector("#cont13").innerHTML; //chama a coluna
        m = sessionStorage.getItem(document.getElementById('resultado').value); //a coluna passa a ter o valor do sessionStorage
        var n = document.getElementById('cont13').outerHTML //cria outra linha
        document.getElementById('cont13').innerHTML = m + n; // linha criada + linha já existente (com sessionStorage)
    }else{
        var k = document.body.querySelector("#cont21").innerHTML; //chama a coluna
        k = sessionStorage.getItem(operacaoJogo.value); //a coluna passa a ter o valor do sessionStorage
        var l = document.getElementById('cont21').outerHTML //cria outra linha
        document.getElementById('cont21').innerHTML = k + l; // linha criada + linha já existente (com sessionStorage)
        //
        var j = document.body.querySelector("#cont22").innerHTML; //chama a coluna
        j = sessionStorage.getItem(comparador.value); //a coluna passa a ter o valor do sessionStorage
        var i = document.getElementById('cont22').outerHTML //cria outra linha
        document.getElementById('cont22').innerHTML = j + i; // linha criada + linha já existente (com sessionStorage)
        //
        var m = document.body.querySelector("#cont23").innerHTML; //chama a coluna
        m = sessionStorage.getItem(document.getElementById('resultado').value); //a coluna passa a ter o valor do sessionStorage
        var n = document.getElementById('cont23').outerHTML //cria outra linha
        document.getElementById('cont23').innerHTML = m + n; // linha criada + linha já existente (com sessionStorage)
    }
};
