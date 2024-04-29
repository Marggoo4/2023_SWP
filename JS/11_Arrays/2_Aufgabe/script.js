/* The program:
Invertiere eine Bitfolge


EXAMPLE:
Input
000111000
Output
111000111 */


function inversion(bits) {
    let result = '';

    for (let i = 0; i < bits.length; i++) {
        if (bits[i] == 0) {
            result += '1';

        } else {
            result += '0';
        }
    }
    return result;

}

input = '000111000';
console.log(inversion(input));