/* Aufgabe 1

 Erstelle ein zahlen mit folgenden Werten:
 4,1,2,3

 Füge die Werte 17 und 199 dazu
*/


let zahlen = [4, 1, 2, 3];

zahlen.push(17, 199);

// a. Gib alle Werte in einer Schleife aus!
for (let i = 0; i < zahlen.length; i++) {
    console.log(zahlen[i]);
}


// b. Zähle alle Werte zusammen und gib das Ergebnis aus
let summe = 0;
for (let i = 0; i < zahlen.length; i++) {
    summe += zahlen[i];
}

console.log(summe);


// c. Berechne den Mittelwert der Zahlen und gib das Ergebnis aus
let mittelwert = summe / zahlen.length;

console.log(mittelwert);







/*
Aufgabe 2

Erstelle ein zahlen mit folgenden Strings:
"Susi", "Paula", "Hans"
*/

let kollegos = ["Susi", "Paula", "Hans"];


// Gib folgenden Satz aus:
// "Meine Freunde sind Susi, Paula und Hans
console.log("Meine Freunde sind", kollegos[0] + ",", kollegos[1], "und", kollegos[2] + ".");


// Füge "Sepp" dazu. Nun soll die ausgabe folgendermaßen lauten:
// "Meine Freunde sind Susi, Paula, Hans und Sepp"
kollegos.push("Sepp");

console.log("Meine Freunde sind", kollegos[0] + ",", kollegos[1] + ",", kollegos[2], "und", kollegos[3] + ".")
