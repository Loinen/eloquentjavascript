var lat = "";
var size = prompt("Your size?");
if(!isNaN(size)){
	for (var i = 0 ; i < size; i++){
		for(var j = 0 ; j < size; j++){
			(i + j) % 2==0 ? lat += "#" : lat += " ";
		}
		lat+="\n";
	}
	console.log(lat);
}
else alert("Not a number");
