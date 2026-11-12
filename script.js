// ESEMPIO PATENTINO - PATENTE

// let age = 32;
// let patente = true;
// let dinero = 0;

// if(condizione){
//     blocco di istruzioni
// }else{
//     altro blocco di istruzioni
// }

// if(age >= 16 && patente == true){
//     console.log("puoi guidare");

//     qui posso verificare se ora ha i dindi per permettersi il motorino
//     if(dinero >= 4000){
//         console.log("e puoi permetterti il motorino");
//     }else{
//         console.log("ma non hai in dindi! Vai a piedi oppure prendi la bici!");
//     }


// }else if(age >= 16 && patente == false){
//     console.log("non puoi guidare, hai la giusta età ma non hai la patente");
// }else{
//     console.log("non puoi guidare, sei troppo young");
// }

//ESERCIZIO VOTO SCOLASTICO

// dato un voto da 1 a 30:
// - se il voto è minore di 18, stampare "Sei stato bocciato"
// - se il voto è compreso tra 18 e 25, stampare "sufficiente"
// - se il voto è compreso tra 26 e 29, stampare "Distinto"
// - Se il voto è 30, stampare "Ottimo"
// - se il voto non è definito, stampare "voto non valido"

// let voto = 1;

// if(voto >= 1 && voto < 18){
//     console.log("sei stato bocciato");
// }else if(voto >= 18 && voto <= 25){
//     console.log("sufficiente");
// }else if(voto >= 26 && voto <= 29){
//     console.log("distinto");
// }else if(voto == 30){
//     console.log("Ottimo");
// }else{
//     console.log("voto non valido");
// }

// ESERCIZIO SWITCH SUPER EROE

// let animal = prompt("Inserisci un animale e ti dirò chi diventi:\n1) ragno\n2) pipistrello\n3) soldi");

// switch(chiave){
//     caso1
//     caso2
//     caso3
//     default
// }

// switch(animal){

//     case "ragno":
//         alert("Sei diventato l'amichevole spider ragno di quartiere!");
//         break;

//     case "pipistrello":
//         alert("Sei diventato il cavaliere oscuro!");
//         break;

//     case "soldi":
//         alert("Non hai poteri, ma sei un genio, miliardario, playboy e filantropo!");
//         break;

//     default:
//         alert("nessuna scelta corrisponde a quelle disponibili");

// }


// ESEMPIO PATENTE CON SWITCH E if
// let age = 32;
// let patente = true;
// let dinero = 20;

// switch(true){

//     case age >= 16 && patente == true:
//         console.log("puoi guidare");

//         if(dinero >= 4000){
//             console.log("e puoi comprarti il motorino");
//         }else{
//             console.log("ma non hai in dindi! Vai a piedi oppure prendi la bici!");
//         }
//         break;

//     case age >= 16 && patente == false:
//         console.log("Non puoi guidare, hai i giusti anni, ma non hai la patente.");
//         break;

//     default:
//         console.log("Non puoi guidare, sei troppo giovane");
// }

// FOR

// for(indice; condizione; incremento dell'indice){
//     blocco di istruzioni
// }

// indice -> è da dove devo partire
//condizione -> e fin dove devo arrivare
// incremento dell'indice -> mi ricorda a che punto è il giro del ciclo, ad ogni giro aumenta di uno

// VOGLIO CONTARE DA 1 a 5

// i++ -> i = i + 1

// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }

// primo giro
// i -> 1 -> 1 <= 5 ? yes -> stampo in console il valore di i -> 1 e poi incremento con i++ -> 1 + 1 = 2
// secondo giro

// voglio stampare i numeri da 1 a 10, MA VEDERE IN CONSOLE SOLO QUELLI PARI

// for(let i = 1; i <= 10; i++){
//     if(i % 2 == 2){
//         console.log(i);
//     }
// }


// WHILE

// while(condizione){
//     blocco di istruzioni
// }

// let i = 30;

// while( i <= 10){
//     console.log(i);
//     i++;
// }

// Dato un numero:
// - se questo numero è dispari, moltiplicarlo per 3 e sommare 1
// - se il numero è pari, dividere il numero per 2
// - ripetere questa operazione finché il numero non diventi 1

// let number = 1;

// while(number != 1){

//     console.log(number);

//     if(number % 2 == 1){
//         number = (number * 3) + 1;
//     }else{
//         number = number / 2;
//     }
// }

// DO WHILE

// do{
//     blocco di istruzioni
// } while(condizione);


// let number = 100;

// do{
//     console.log("Condizione Falsa");
// } while(number > 1000);

// FIZZ BUZZ
// Stampare in console tutti i numeri da 1 a 100
// Ad ogni multiplo di 3, invece del numero, stampare Java
// Ad ogni multiplo di 5, invece del numero, stampare Script
// Ad ogni multiplo di 15, invece del numero, stampare JavaScript

// for(let i = 1; i <= 100; i++){
    
//     if(i % 15 == 0){
//         console.log("JavaScript");
//     }else if(i % 5 == 0){
//         console.log("Script");
//     }else if(i % 3 == 0){
//         console.log("Java");
//     }else{
//         console.log(i);
//     }

// }

// ESERCIZIO DELLA PASSWORD CON DO while

let userPassword;
let correctPassword = "donato";
let counter = 0;

do{
    userPassword = prompt("Inserisci la tua password:");
    // incremento il counter
    counter++;
    alert("Tentativi: " + counter);
}while( userPassword != correctPassword && counter < 3);

// avvisiamo l'utente che è entrato nel sito, oppure ha sbagliato la password

if(userPassword == correctPassword){
    alert("Benvenuto nel sito, utente!");
} else{
    alert("Hai sbagliato la password troppe volte, contatta un Admin");
}