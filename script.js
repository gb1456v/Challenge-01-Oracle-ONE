/*
As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"

Requisitos:
- Deve funcionar apenas com letras minúsculas
- Não devem ser utilizados letras com acentos nem caracteres especiais
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

Por exemplo:
"gato" => "gaitober"
gaitober" => "gato"
*/
//puxando elementos do html
var campoMensagemDigitada = document.getElementById("mensagem-inicial");
var campoMensagemFinal = document.getElementById("resultado-mensagem");
var botaoEncriptar = document.getElementById("encriptar");
var botaoDesencriptar = document.getElementById("desencriptar");
var botaoCopiar = document.getElementById("copy");

//keycodes
 a = 65;
 e = 69;
 i = 73;
 o = 79;
 u = 85;

//criptografia
function criptografar() {
        var textoDigitado = campoMensagemDigitada.value;
        var textoCriptografado = textoDigitado
        
        if(evento.keyCode == a) {
                textoDigitado.replace(/a/g, "ai");
        } else if(evento.keyCode == e) {
                textoDigitado.replace(/e/g, "enter");
        } else if(evento.keyCode == i) {
                textoDigitado.replace(/i/g, "imes");
        } else if(evento.keyCode == o) {
                textoDigitado.replace(/o/g, "ober");
        } else if(evento.keyCode == u) {
                textoDigitado.replace(/u/g, "ufat");
        }
        return textoCriptografado;
        console.log = textoCriptografado;
}
botaoEncriptar.onclick = criptografar;