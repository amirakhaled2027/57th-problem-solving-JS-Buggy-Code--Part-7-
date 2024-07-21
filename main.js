//Mubashir wants to swap two given numbers!
// It is not returning the right values. Can you help him fix it?


// function swap(a, b) {
// 	b = a
// 	a = b
// 	return [a, b]
// }


function swap(a, b) {
	let num2 = a;
    let num1 = b;
    
	return [num1, num2]
}
console.log(swap(100, 200));
console.log(swap(44, 33));
console.log(swap(21, 12));