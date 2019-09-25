﻿// Последовательности цифр можно найти простой
// регуляркой /\d+/.
// Напишите выражение, находящее только числа,
// записанные в стиле JavaScript. Оно должно
// поддерживать возможный минус или плюс перед числом,
// десятичную точку, и экспоненциальную запись 5e-3 или
// 1E10 – опять-таки с возможными плюсом или минусом.
// Также заметьте, что до или после точки не обязательно
// могут стоять цифры, но при этом число не может
// состоять из одной точки. То есть, .5 или 5. – допустимые
// числа, а одна точка сама по себе – нет.
//http://javascript.ru/basic/regular-expression+

// Впишите сюда регулярку.
var number = /^[-|+]?(\d+(\.?\d*)?|\.\d+)([eE][+|-]?\d*)?$/;
// Tests:
["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4", "1e+12"].forEach(function(s) {
    if (!number.test(s)) console.log("Не нашла '" + s + "'");
});
["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."].forEach(function(s) {
    if (number.test(s)) console.log("Неправильно принято '" + s + "'");
});