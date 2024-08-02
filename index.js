var cantidadDeGatos = 10; 
var emojis = ["😺", "😸", "😹"]; 

for (var i = 1; i <= cantidadDeGatos; i++) { 
    var emoji = emojis[(i - 1) % 3]; 
    console.log("Gato #" + i + ": " + emoji); 
}

console.log("//////////////////////////////////////////////////////////////////////////")

var cantidadDeGatos = 5;
var cantidadDePasos = 3; 
var pasos = "🐾".repeat(cantidadDePasos); 

for (var i = 1; i <= cantidadDeGatos; i++) {
    console.log("Gato #" + i + ": 🐈 " + pasos); 
}

console.log("//////////////////////////////////////////////////////////////////////////")

var cantidadDeGatos = 10; 
var cantidadDePasos = 4; 
var pasos = "🐾".repeat(cantidadDePasos); 
var gatos = ["🐈", "🐈‍⬛"]; 

for (var i = 1; i <= cantidadDeGatos; i++) { 
    var gato = gatos[(i - 1) % 2]; 
    console.log("Gato #" + i + ": " + gato + " " + pasos); 
}
