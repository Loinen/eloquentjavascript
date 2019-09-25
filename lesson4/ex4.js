console.log("ex4");
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

function deepEqual(x, y){
	if (x === y) return true;
	if (x == null || typeof x != "object" || y == null || typeof y != "object") return false;
	var yk = [];
	var xk = [];
	if (xk.length==yk.length) {
			for (var key in x){
				for (var key in y){
					if (x[key]==y[key]) continue;
					if (!deepEqual(x[key],y[key])) return false;
				}
			}
			return true;
		}
	else return false;
}