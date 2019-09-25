var ancestry = JSON.parse(ANCESTRY_FILE);
var age = [], i = 0;
var byName = {};

ancestry.forEach(function(person) {
	byName[person.name] = person;
});

function average (array) {
	function plus(a, b) { 
		return a + b; }
	return array.reduce(plus) / array.length; 
}

for (var key in byName) {
	if (byName[key].mother != null && byName[byName[key].mother] != undefined) {
		age[i] = byName[key].born - byName[[byName[key].mother]].born; 
		i++;
	}
}
console.log(average(age));