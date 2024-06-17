// gib nur die Wörter aus, die kein e UND kein r enthalten
const data3 = "Hans ist ein netter Kerl!";
const words = data3.split(" ");

// Variable für gesammelte Wörter
let collectedWords = "";

// Jedes Wort überprüfen und zu collectedWords hinzufügen, wenn es kein 'e' und kein 'r' enthält
for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let foundEorR = false; // Flag, um zu verfolgen, ob 'e' oder 'r' gefunden wurde

    // Überprüfe jeden Buchstaben im Wort
    for (let j = 0; j < word.length; j++) {
        let char = word[j].toLowerCase(); // Ignoriert Groß-/Kleinschreibung
        if (char === 'e' || char === 'r') {
            foundEorR = true; // Setze das Flag, wenn 'e' oder 'r' gefunden wird
            break; // Beende die Schleife, da 'e' oder 'r' gefunden wurde
        }
    }

    // Wenn das Wort kein 'e' und kein 'r' enthält, füge es zu collectedWords hinzu
    if (!foundEorR) {
        if (collectedWords !== "") {
            collectedWords += " ";
        }
        collectedWords += word;
    }
}

// Ausgabe der gesammelten Wörter ohne 'e' und 'r'
console.log("Wörter ohne 'e' und 'r':", collectedWords);







/* // OHNE BREAK UND ANDERE AUSGABE (CONSOLE.LOG)

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let foundEorR = false; // Flag, um zu verfolgen, ob 'e' oder 'r' gefunden wurde

    // Überprüfe jeden Buchstaben im Wort
    for (let j = 0; j < word.length; j++) {
        let char = word[j].toLowerCase(); // Ignoriert Groß-/Kleinschreibung
        if (char === 'e' || char === 'r') {
            foundEorR = true; // Setze das Flag, wenn 'e' oder 'r' gefunden wird
        }
    }

    // Wenn das Wort kein 'e' und kein 'r' enthält, gebe es aus
    if (!foundEorR) {
        console.log("Wort ohne 'e' und 'r':", word);
    }
}
*/