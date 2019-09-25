console.log("ex 2");
console.log(reverseArray(["A", "B", "C"]));
var arr = [1,2,3,4,5];
reverseArrayInPlace(arr);
console.log(arr);

function reverseArray(array){
	var rev = [];
	for (let value of array) {
	    rev.unshift(value);
	  }
	return rev;
}

function reverseArrayInPlace(array){
	let temp = [];
	for (var i = 0; i < array.length; i++) {
		temp.push(array[i]);
	  }
	for (i = temp.length-1, j = 0; i >= 0; i--, j++) {
		array[i] = temp[j];
	}
	return array;
}