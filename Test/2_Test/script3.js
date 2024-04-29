const data = "4,9,10,2,1,14";
const dataarray = data.split(",");

function average(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += parseInt(array[i]);
    }
    return sum / array.length;
}

const mittelwert = average(dataarray);

console.log("Mittelwert ist:", mittelwert);


if (mittelwert > 20) {
    console.log("Huge");
} else if (10 < mittelwert && 20 > mittelwert) {
    console.log("Medium");
} else {
    console.log("ok");
}