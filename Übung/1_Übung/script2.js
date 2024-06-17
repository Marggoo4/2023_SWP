//Zähle die negativen Zahlen, die positiven Zahlen und die Anzahl von 0
// Gib die prozentuelle Verteilung an
const data2 = "1,2,3,4,0,-2,0,-1,5,6,7,8,9,10,11,12";
const dataarray2 = data2.split(",");


let positiven = 0;
let negativen = 0;
let nullen = 0;
let allnum = 0;

for (let i = 0; i < dataarray2.length; i++) {
    if (parseInt(dataarray2[i]) > 0) {
        positiven++;
    } else if (parseInt(dataarray2[i]) < 0) {
        negativen++;
    } else if (parseInt(dataarray2[i]) == 0) {
        nullen++;
    }
    allnum++;
}

console.log("Positive Zahlen:", positiven);
console.log("Negative Zahlen:", negativen);
console.log("Nullen:", nullen);

/* 
function Percentage(array) {
    const value =  array / allnum * 100;
    return `${value} %`;
}

ODER

function Percentage(array) {
    return `${array / allnum * 100} %`;
}

*/

function Percentage(array) {
    return array / allnum * 100;
}



console.log("Prozent Positive Zahlen", Percentage(positiven), "%");
console.log("Prozent Negative Zahlen", Percentage(negativen), "%");
console.log("Prozent Nullen", Percentage(nullen), "%");