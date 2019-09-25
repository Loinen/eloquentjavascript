var avAge = groupBy(ancestry, cent);

function average(array){
	function plus(a, b){ 
		return a + b;
	} 
	return array.reduce(plus) / array.length;
}

function cent(person){
	return Math.ceil(person.died / 100);
}

function groupBy(arr, func){
    var byAge = {};
    arr.forEach(function(person){
        if (byAge[func(person)] === undefined) byAge[func(person)] = [];
        byAge[func(person)].push(person);
    });
    console.log(byAge);
    return byAge;

}

for (var key in avAge){
    avAge[key] = average(avAge[key].map(function(person){
    	return person.died - person.born; //map - применить функцию ко всем элементам
 	}));
    console.log(key + ": " + avAge[key]);
}
//   16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94