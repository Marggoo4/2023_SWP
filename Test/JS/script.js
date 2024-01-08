let Größer = 0;
let Kleiner = 0;

for (let i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * 11) + 5;

    if (number > 12) {
        console.log("Die Zahl", number, "ist größer als 12");
        Größer++;

    } else {
        console.log("Die Zahl", number, "ist kleiner gleich 12");
        Kleiner++;
    }
}

console.log("Es waren", Größer , "größer als 12");
console.log("Es waren", Kleiner , "kleiner gleich 12");

//Erstelle eine Schleife die jeweils eine Zufallszahl zwischen 5 und 15  generiert.
//Wenn die Zufallszahl größer als 12 ist gib die Zahl aus.
//Gib am Ende aus wieviele Zahlen kleiner-gleich 12 waren und wieviele größer als 12 waren  