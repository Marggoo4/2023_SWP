// Erstelle zwei Zufallszahl zwischen 0 und 100
// Speichere diese jeweils in einer Variable 
let randomnumber = Math.random() * 100;
let number = Math.floor(randomnumber);

console.log(number);


let randomnumber2 = Math.random() * 100;
let number2= Math.floor(randomnumber2);

console.log(number2);


// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50 
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini" 
if (number<number2 && number<50) {
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini"); 
}

 
// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30 
// dann gib aus "Eine der beiden ist kleiner als 30" 
if (number<30 || number2<30) {
    console.log("Eine der beiden ist kleiner als 30");
}

 
// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist 
// dann gib aus "Erste Zahl klein, zweite kein 50iger" 
if (number<50 && number2!=50) {
    console.log("Erste Zahl klein, zweite kein 50iger")
}