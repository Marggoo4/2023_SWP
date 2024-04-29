// Gib jedes 3te Wort aus
// Output
// Hans schwimmen gut

const data = "Hans geht heute schwimmen! das ist gut";
const words = data.split(" ");
let result = "";

for (let i = 0; i < words.length; i += 3) {
    result += words[i] + " ";
}

console.log(result);

// Zähle alle Zahlen die zwischen 4 (inklusive und 8 exklusive) liegen
// Output: 3

const numbers = "8,2,1,4,6,1,8,7";
const numarray = numbers.split(",");
let count = 0;

for (let i = 0; i < numarray.length; i++) {
    if (parseInt(numarray[i]) >= 4 && parseInt(numarray[i]) < 8) {
        count++;
    }
}
console.log(count);

// Berechne den Mittelwert der Temperaturen der beiden Wochen
// Gib aus
// Mittelwert Woche 1 : xxx
// MIttelwert Woche 2 : xxx
// "Woche 1 war wärmer" oder "Woche 2 war wärmer" oder "Beide Wochen waren gleich warm"

const temperaturesWeek1 = "-1,5,1,-10,-11,2,30,-8,-14";
const temperaturesWeek2 = "-1,5,3,-10,-11,2,30,-8,-44";

const week1array = temperaturesWeek1.split(",");
const week2array = temperaturesWeek2.split(",");

function average(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += parseInt(array[i]);
    }
    return sum / array.length;
}

const week1average = average(week1array);
const week2average = average(week2array);

console.log("Mittelwert Woche 1:", week1average);
console.log("Mittelwert Woche 2:", week2average);

if (week1average > week2average) {
    console.log("Woche 1 war wärmer")
} else if (week1average < week2average) {
    console.log("Woche 2 war wärmer")
} else if (week1average == week2average) {
    console.log("Beide Wochen waren gleich warm")
}