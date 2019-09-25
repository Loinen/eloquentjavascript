console.log(diapason(5,2,-1));
console.log(diapason(1,10,2));
console.log(sum(diapason(1,10,1)));

function diapason(a,b,c){
	let arr = [];
	if (c>0){
		for (a; a<=b;a+=c){
			arr.push(a);
		}
	}
	else
		for (a; a>=b;a+=c){
			arr.push(a);
		}
		return arr;
}

function sum(array){
	let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}




