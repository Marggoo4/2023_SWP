// Baue folgende Funktionen:

// add(a,b)
// subtract(a,b)
// multiply(a,b)
// supercalculation(a,b) -> Formel: (a+b)/2 * a
// printEasterDate(year) -> Diese Funktion bekommt das gewünschte Jahr und schreibt das Datum von Ostern.


// add(a,b)
function add(a, b) {
    return a + b;
}


// subtract(a,b)
function subtract(a, b) {
    return a - b;
}


// multiply(a,b)
function multiply(a, b) {
    return a * b;
}


// supercalculation(a,b) -> Formel: (a+b)/2 * a
function supercalculation(a, b) {
    return (a + b) / 2 * a;
}


// printEasterDate(year) -> Diese Funktion bekommt das gewünschte Jahr
// und schreibt das Datum von Ostern.
function printEasterDate(year) {
    let N = year - 1900;
    let A = N % 19;
    let B = Math.floor((7 * A + 1) / 19);
    let M = (11 * A + 4 - B) % 29;
    let Q = Math.floor(N / 4);
    let W = (N + Q + 31 - M) % 7;
    let P = 25 - M - W;

    let easterDay;

    if (P > 0) {
        easterDay = P + ". April";
    } else {
        easterDay = P + 31 + ". März";
    }

    console.log("Im Jahr " + year + " ist der Ostersonntag am " + easterDay);
}

let randomyear = Math.floor(Math.random() * 31) + 2000;
printEasterDate(randomyear);





let result = add(8, 4);
console.log(result);

/* 2 Möglichkeit */ console.log(add(8, 4));


let result2 = subtract(8, 4);
console.log(result2);


let result3 = multiply(8, 4);
console.log(result3);


let result4 = supercalculation(8, 4)
console.log(result4);