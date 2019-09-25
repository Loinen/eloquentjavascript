console.log(bob ('BBBffBB', 'B'));
function bob(str, chr){
	var count = 0;
	for (var i = 0; i < str.length; i++){
		if (str.charAt(i) == chr) count++;
	}
	return count;
}
