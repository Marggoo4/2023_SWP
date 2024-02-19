// Erstelle mit Hilfe einer Schleife und Modulo das folgende Ausgabe liefert (Rechteckbeispiel adaptieren):  
// X X X X  
// O O O O  
// X X X X  
// O O O O  
// Größe des Rechtecks
let zeilen = 4;
let spalten = 4;

let output = " ";

for (let i = 0; i < zeilen; i++) {
    output = " ";
    for (let j = 0; j < spalten; j++) {
        if (i % 2 === 0) {
            
            output += "X"
        } else {
            
            output += "O";
        }
    }
    console.log(output); // Neue Zeile nach jeder Reihe
}

// 2. Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren (zwei Lösungswege ⇒ Zähler dahingehend verändern das er nur gerade Zahlen zählt und mit Modulo arbeiten.)  



// 3. Versuche mit einer for/while Schleife den Anfangsbuchstaben deines Namens auszugeben, z.B.:  
// XX X XX X  
// X    X X   X  
// X            X 
// X            X 