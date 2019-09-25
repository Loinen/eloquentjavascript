// Допустим, у вас есть функция primitiveMultiply, которая в
// 50% случаев перемножает 2 числа, а в остальных
// случаях выбрасывает исключение типа
// MultiplicatorUnitFailure. Напишите функцию,
// обёртывающую эту, и просто вызывающую её до тех пор,
// пока не будет получен успешный результат.
// Убедитесь, что вы обрабатываете только нужные вам исключения.

function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
	if (Math.random() < 0.5)return a * b;
	else throw new MultiplicatorUnitFailure();
}
function reliableMultiply(a, b) {
// Ваш код
	for (;;) { //бесконечный цикл до удачного try
	    try {
	      	return primitiveMultiply(a, b);
	    } catch (e) { // обработка ошибки
	      	if (!(e instanceof MultiplicatorUnitFailure)) throw e; 
	    }
	}
}
console.log(reliableMultiply(8, 8));
// → 64

