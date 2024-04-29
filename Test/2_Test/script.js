const data = "14,3,12,8,9,11,4,3,2,4";
const dataarray = data.split(",");


for (let i = 0; i < dataarray.length; i++) {
    if (dataarray[i] > 10) {
        console.log(dataarray[i]);
    }
}
