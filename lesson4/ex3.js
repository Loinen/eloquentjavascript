console.log("       ex 3 - arrayToList               ");
console.log(arrayToList([10,20]));
console.log("       listToArray 10,20,30,40          ");
console.log(listToArray(arrayToList([10,20,30, 40])));
console.log("       prepend (10,prepend(20,null))    ");
console.log(prepend(10,prepend(20,null)));
console.log("       nth (arrayToList ([10,20,30]), 1)   ");
console.log(nth(arrayToList([10,20,30]),1));

function arrayToList(array){
	var list = null;
	for (var i = array.length - 1; i >= 0; i--){
		list = {
			value: array[i],
			rest: list
		};
	}
	return list;
}
function listToArray(list){
	var arr = [];
		arr = list.value;
	return arr;
}

function prepend(element, list) {
  return list = {value: element, rest: list};
}

function nth(list, num){
	if (list==null) return undefined;
	else if (num==0) return list;
	else return nth(list.rest, num-1);
}
