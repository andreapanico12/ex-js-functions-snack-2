/*
SNACK 1
-Crea una funzione che somma due numeri.
-Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
-Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
-Quindi, riscrivi la funzione somma con la sintassi delle arrow functions. */

function SumTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
console.log(SumTwoNumbers(5, 10));

const SumOfTwoNumbers = function (num1, num2){
  let sum = num1 + num2;
  return sum;
}
console.log(SumOfTwoNumbers(6, 8));

const SumOfTwoNumbersArrow = (num1, num2) => {
  let sum = num1 + num2;
  return sum;
}
console.log(SumOfTwoNumbersArrow(3,4));

/*
Snack 2
-Crea una arrow function che calcola il quadrato di un numero.
-Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga. */

const SquareoOfFive = () => 5 * 5;
console.log(SquareoOfFive());
const SquareofNum = (num) => num * num;
console.log(SquareofNum(5));


/* Snack 3
-Crea una funzione eseguiOperazione
-Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.
*/
const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mul = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;

function eseguiOperazione(num1, num2, operatore) {
  return operatore(num1, num2);
}

console.log(eseguiOperazione(9, 3, sum));
console.log(eseguiOperazione(9, 3, sub));
console.log(eseguiOperazione(9, 3, mul));
console.log(eseguiOperazione(9, 3, div));

/*
Snack 4
-Crea un generatore di funzioni creaTimer
-Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!". */

function creaTimer(time){
  return function(){
    setTimeout(() => {
      console.log('Tempo scaduto!');
    }, time);
  }
}
creaTimer(1000)();

/* 
Snack 5
-Crea una funzione stampaOgniSecondo con setInterval.
-Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

-Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.*/

function stampaOgniSecondo(message, seconds){
  let count = 0; 
  const interval = setInterval(() => {
    console.log(message);
    count++;
    if ( count === seconds){
      clearInterval(interval);
      console.log('Timer scaduto');
    }
  }, 1000);

}
// stampaOgniSecondo('Passato un secondo',5);

/* 
Snack 6
-Crea un contatore automatico con setInterval
-Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.*/

function creaContatoreAutomatico(time,){
  let count = 0;

  /* non essendo definita la funzione setInterval all'interno di creaContatoreAutomatico ho bisogno poi successivamente di definire la funzione di creaContatore automatico per ogni intervallo di tempo per il quale la voglio utilizzare. Rivedere il concetto di CLOSURE*/
  return () =>
     setInterval(()=>{
      count++;
    console.log(count);
  }, time);
}
const contaOgniSecondo = creaContatoreAutomatico(1000);
// contaOgniSecondo();

/*  
Snack 7
-Crea una funzione che ferma un timer dopo un certo tempo
-Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
 */

function eseguiEferma(message, start, stop){
  let count = 0;
  const interval = setInterval (() => {
    console.log(message);
    count++;
    if (count === stop){
      clearInterval(interval);
      console.log('Timer scaduto');
    }                 
  }, start);
}
// console.log(eseguiEferma('Ciao Mondo', 1000, 5));


/* Alternativa*/

function eseguiEferma2(message, interval, duration){
  const intervalId = setInterval(() => {
    console.log(message);
  }, interval);

  setTimeout(() => {
    clearInterval(intervalId);
    console.log('Timer scaduto');
  }, duration); 
}

// eseguiEferma2('Ciao Mondo', 1000, 5000);


/*
Snack 8 (Bonus)
-Crea una funzione che simula un conto alla rovescia
-Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.
 */

function contoAllaRovescia(num){
  let count = num;
  const interval = setInterval(()=>{
    console.log(count);
    count--;
    if(count < 0){
      clearInterval(interval);
      console.log('Tempo scaduto');
    }
  }, 1000);
}

// console.log(contoAllaRovescia(5));

/*Snack 9 (Bonus)
-Creare una funzione che esegue una sequenza di operazioni con ritardi
-Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

-Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.
 */
const somma = (num1, num2) => num1 + num2;
const sottrazione = (num1, num2) => num1 - num2;
const moltiplicazione = (num1, num2) => num1 * num2;
const divisione = (num1, num2) => num1 / num2;

const operazioni = [somma, sottrazione, moltiplicazione, divisione];

function sequenzaOperazioni(num1,num2,operations, time){
  let count = 0;
  const interval = setInterval(() => {
    console.log(operations[count](num1, num2));
    count++;
    if (count === operations.length){
      clearInterval(interval);
      console.log('Operazioni terminate');
    }   
  }, time);
}
// console.log(sequenzaOperazioni(10,5,operazioni, 1000));

/* Alternativa */

function sequenzaOperazioni2(num1, num2, operations, time){
   operations.forEach((operation, index) => {
    setTimeout(() => {
      console.log(operation(num1, num2));
    }, time * index);

  });
}
// console.log(sequenzaOperazioni2(10, 5, operazioni, 1000));


/* Snack 10 (Bonus)
-Creare un throttler per limitare l’esecuzione di una funzione
-Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

-Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.*/

function creaThrottler(callback, limit){

  let lastCall = 0;

  return function(...args){
    const now = Date.now(); //date.now() restituisce il numero di millisecondi trascorsi dal 1 gennaio 1970

    if(now - lastCall >= limit){
      //now - lastCall è il tempo trascorso tra l'ultima chiamata e l'attuale chiamata
      callback(...args);
      //callback(...args) esegue la funzione passata come argomento
      lastCall = now;
      //lastCall viene aggiornato con il tempo attuale
    } else {
      console.log('Non posso eseguire la funzione');
    }
  }
}
const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);

throttledLog(); // ✅ "Eseguito!"
throttledLog(); // ❌ Ignorato (chiamato troppo presto)
setTimeout(throttledLog, 2500); // ✅ "Eseguito!" (dopo 2.5 secondi)

