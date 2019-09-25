console.log(rec(9));
function rec(a){
	var a;
	if (a>0) {
		a-=2;
		return rec(a);
	}
	return a;
}