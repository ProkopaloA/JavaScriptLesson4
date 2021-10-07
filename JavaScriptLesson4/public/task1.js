/**
 * 
 */
let array = [ -2, -558, -619, 70, 53, 26, 345, -730, -232, -98, 836,
		631, -223, -993, -19, -3, 58, 0, 186, 94 ];

function asc(number1, number2) {
	return number1 - number2;
}

array.sort(asc);
console.log(array);

array.sort(asc).reverse();
console.log(array);

function getPositive(number) {
	return number>=0;
}

function getNegative(number) {
	return number<0;
}

let positiveNumbersArray = array.filter(getPositive).sort(asc);
console.log(positiveNumbersArray);

let negativeNumbersArray = array.filter(getNegative).sort(asc);
console.log(negativeNumbersArray);