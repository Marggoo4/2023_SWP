// Multipliziere jede 3te Zahl und dividiere durch die Anzahl der geraden Zahlen
//Berechne den Mittelwert, dann
// addiere jede 4te Zahl und dividiere die Summe durch den Mittelwert


/* 
Genau jede 3te Zahl

for (let i = 2; i < dataarray.length; i += 3) {
    console.log(parseInt(dataarray[i]) * 3);
} 
*/


// Multipliziere jede 3te Zahl
const data1 = "5,2,3,4,1,2,3,5,10,-11";
const dataarray = data1.split(",");

let product = 1;
let count = 0;

for (let i = 0; i < dataarray.length; i += 3) {
    product *= parseInt(dataarray[i]);
    count++;
}

console.log(product);
console.log(count);




// Anzahl der geraden Zahlen
let CountEvenNum = 0;

for (let i = 0; i < dataarray.length; i++) {
    if (dataarray[i] % 2 == 0) {
        CountEvenNum++;
    }

}
console.log(CountEvenNum);


// Division der Multiplizierten Zahlen durch die geraden Zahlen
console.log(product / CountEvenNum);



// Mittelwert Berechnen
let CountAllNum = 0;
let Summe = 0;
for (let i = 0; i < dataarray.length; i++) {
    Summe += parseInt(dataarray[i]);
    CountAllNum++;


}
let Mittelwert = Summe / CountAllNum;
console.log(Mittelwert);



// Addiere jede 4te Zahl
let fourth = 0;

for (let i = 0; i < dataarray.length; i += 4) {
    fourth += parseInt(dataarray[i]);
}

console.log(fourth);

// dividiere die Summe durch den Mittelwert
console.log(fourth / Mittelwert);

























