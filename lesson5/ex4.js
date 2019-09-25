console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false

function every(arr, func){
    for (key in arr){
        if (func(arr[key])==true) continue;
        else return false;
    }
    return true;
}

function some(arr, func){
    for (key in arr){
        if (func(arr[key])==true) return true;
        else return false;
    }
}