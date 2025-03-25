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

function creaContatoreAutomatico(time, seconds){
  let count = 0;
  const interval = setInterval(()=>{
    console.log(count);
    count++;

    if (count === seconds){
      clearInterval(interval);
      console.log(`${count} secondi, fermato il timer`);
    }  
  }, time);
  return interval;
}
// creaContatoreAutomatico(1000, 5);

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
console.log(sequenzaOperazioni(10,5,operazioni, 1000));



