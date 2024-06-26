// Erstelle mit Hilfe einer Schleife und Modulo das folgende Ausgabe liefert (Rechteckbeispiel adaptieren):  
// X X X X  
// O O O O  
// X X X X  
// O O O O  
// Größe des Rechtecks
let zeilen = 4;
let spalten = 4;



for (let i = 0; i < zeilen; i++) {
    output = " ";
    for (let j = 0; j < spalten; j++) {
        if (i % 2 === 0) {

            output += " X"
        } else {

            output += " O";
        }
    }
    console.log(output); // Neue Zeile nach jeder Reihe
}

// 2. Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren (zwei Lösungswege ⇒ Zähler dahingehend verändern das er nur gerade Zahlen zählt und mit Modulo arbeiten.)

// 1. Lösungsweg
let result = 0;
for (let i = 2; i <= 100; i += 2) {
    result += i;
}
console.log("Alle gerade Zahlen addiert von 1-100:", result);

// 2. Lösungsweg
let result2 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        result2 += i;
    }
}
console.log("Alle gerade Zahlen addiert von 1-100:", result2);



// 3. Versuche mit einer for/while Schleife den Anfangsbuchstaben deines Namens auszugeben, z.B.:
// XX X XX X
// X    X X   X
// X            X
// X            X

let name = "Marco";
let muster = '';

for (let i = 0; i < name.length; i++) {
    for (let j = 0; j < name.length; j++) {
        if (i === 0 || j === 0) {
            muster += name[i];
        } else {
            muster += ' ';
        }
    }
}

console.log(muster);

// kapiere ich nicht ganz