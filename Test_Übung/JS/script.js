let kleinergleich = 0;
let größerals = 0;


// Erstelle eine Schleife die von 152 auf -15 zählt 
for (let count = 152; count >= -15; count--) {
    console.log(count);
}

// Erstelle eine Schleife die von 4 auf 400 zählt. Gib jede 5te Zahl aus.
for (let count = 4; count <= 400; count += 5) {
    console.log(count);
}

// Erstelle eine Schleife die jeweils eine Zufallszahl zwischen 5 und 15  generiert.
for (let i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * 11) + 5;

    if (number > 12) {
        console.log("Generierte Zahl größer als 12:", number);
        größerals++;
    } else {
        console.log("Generierte Zahl kleiner-gleich 12:", number);
        kleinergleich++;
    }
}

console.log("Anzahl der Zahlen kleiner-gleich 12: " + kleinergleich);
console.log("Anzahl der Zahlen größer als 12: " + größerals);

// Wenn die Zufallszahl größer als 12 ist gib die Zahl aus. Gib am Ende aus wieviele Zahlen kleiner-gleich 12 waren und wieviele größer als 12 waren