//calculadora normal
var resultado = document.getElementById('resultado').value;
var val = 0.0;
//
function insert(num) { 
    var numero = document.getElementById('resultado').value;
    document.getElementById('resultado').value = numero + num;
};
//
function clean() { 
    document.getElementById('resultado').value = "";
    document.getElementById('operacaoJogo').value = "";
};
//
function backspace() { 
    var resultado = document.getElementById('resultado').value;
    document.getElementById('resultado').value = resultado.substring(0, resultado.length - 1);
};
//
function result() {
    var resultado = document.getElementById('resultado').value;
    if (resultado) {
        document.getElementById('resultado').value = eval(resultado);
    } else {
        document.getElementById('resultado').value = "Não definido";
    }
};
//
function caractere(caractere) {
    if(document.getElementById('resultado').value == null || document.getElementById('resultado').value == "0")
    document.getElementById('resultado').value = caractere;
    else
    document.getElementById('resultado').value += caractere;
};
//
function cos(){
    document.getElementById('resultado').value = Math.cos(document.getElementById('resultado').value);
};
//
function sin(){
    document.getElementById('resultado').value = Math.sin(document.getElementById('resultado').value);
};
//
function tan(){
    document.getElementById('resultado').value = Math.tan(document.getElementById('resultado').value);
};
//
function sqrt(){
    document.getElementById('resultado').value = Math.sqrt(document.getElementById('resultado').value);
};
//
function log(){
    document.getElementById('resultado').value = Math.log(document.getElementById('resultado').value);
};
//
function modulo() {
val = document.getElementById('resultado').value;
document.getElementById('resultado').value = document.getElementById('resultado').value + "%";
};
//
function exp(){
    document.getElementById('resultado').value = Math.exp(document.getElementById('resultado').value);
};
//
function quadrado(){
    document.getElementById('resultado').value = eval(document.getElementById('resultado').value) * eval(document.getElementById('resultado').value);
};
//
function alteraSinal() {
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
function telaJogo(){ 
    clean(); 
    calculateM(10);
    configTimer(); 
    //
    var bloco = document.getElementById('operacaoJogo'); 
    bloco.style.display = "block";
    var tabela1 = document.getElementById('tabela1'); 
    tabela1.style.display = "block";
    var tabela2 = document.getElementById('tabela2'); 
    tabela2.style.display = "block";
    var volta = document.getElementById('voltar'); 
    volta.style.display = "block";
    var placar = document.getElementById('pontosJogo'); 
    placar.style.display = "contents";
    var ponto = document.getElementById('pontos'); 
    ponto.style.display = "block";
    var btnCalM = document.getElementById('calM'); 
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
            if (valor == (resultado) || decimal == (resultado)) { 
                pontuacao(); 
                pontos_valor++;
                sistemNivel(pontos_valor);
            }
            else { 
                if (i == 3){
                    vida1.innerHTML = document.getElementById('cv1').innerHTML;
                    vida1.value = document.getElementById('cv1').value;
                    i--;
                    sistemNivel(pontos_valor);
                }else if (i == 2){
                    vida2.innerHTML = document.getElementById('cv2').innerHTML;
                    vida2.value = document.getElementById('cv2').value;
                    i--;
                    sistemNivel(pontos_valor);
                }else if (i == 1){
                    vida3.innerHTML = document.getElementById('cv3').innerHTML;
                    vida3.value = document.getElementById('cv3').value;
                    i--;
                    finalizacao(1);
                }
                
            }
            document.getElementById('resultado').value = ""; 
        });
};
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
};
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
};
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
};
//
function voltar() { 
    var volta = document.getElementById('voltar'); 
    volta.addEventListener('click', document.location.reload(true)); 
};
//
function numeroOperacao(num_random) { 
    return Math.floor(Math.random() * num_random + 1);
};
//
function operacao() { 
    return Math.floor(Math.random() * 4 + 1);
};
//
function pontuacao() { 
    var ponto = parseInt(document.getElementById('pontos').value); 
    ponto++; 
    document.getElementById('pontos').value = ponto;
    document.getElementById('pontos').innerHTML = ponto;
    clearInterval(interval);  
    configTimer(); 
};
//
function finalizacao(tipo){ 
    var pontoFinal = document.getElementById('pontos').value; 
    if(tipo == 0){ 
        alert('Seu tempo acabou, sua pontuação foi: ' + pontoFinal); 
        sessionStorage.clear();
        window.location.reload(true); 
    }else{ 
        alert('Suas vidas acabaram, sua pontuação foi: ' + pontoFinal); 
        sessionStorage.clear();
        window.location.reload(true);
    }
};
//
function startTimer(duration, display) { 
    var timer = duration, minutes, seconds;
    interval = setInterval(function () { 
        minutes = parseInt(timer / 60, 10); 
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds; 
        if (--timer < 0) { 
            timer = duration;
            display.style.display = 'none'; 
            finalizacao(0); 
        }
    }, 1000);
};
//
function configTimer() {
    var duration = 60 * 3; 
    display = document.querySelector('#timer'); 
    startTimer(duration, display); 
};
//
function sistemNivel(pontos_valor){
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
/* function historico(){
    sessionStorage.setItem(operacaoJogo.value, comparador.value);
    document.body.querySelector("#cont11").innerHTML = sessionStorage.getItem(operacaoJogo.value);

    var i = document.getElementById()

}; */
function historico(){



    sessionStorage.setItem(comparador.value, comparador.value);

    var j = document.body.querySelector("#cont12").innerHTML;
    j = sessionStorage.getItem(comparador.value);
    var i = document.getElementById('cont12').outerHTML
    document.getElementById('cont12').innerHTML = j + i;
    //
    sessionStorage.setItem(operacaoJogo.value, operacaoJogo.value);

    var k = document.body.querySelector("#cont11").innerHTML;
    k = sessionStorage.getItem(operacaoJogo.value);
    var l = document.getElementById('cont11').outerHTML
    document.getElementById('cont11').innerHTML = k + l;
    
    //
};
