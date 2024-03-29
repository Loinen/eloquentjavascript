// «Гольфом» в коде называют игру, где нужно выразить
// заданную программу минимальным количеством
// символов. Регулярный гольф – практическое упражнение
// по написанию наименьших возможных регулярок для
// поиска заданного шаблона, и только его.
// Для каждой из подстрочек напишите регулярку для
// проверки их нахождения в строке. Регулярка должна
// находить только эти указанные подстроки. Не волнуйтесь
// насчёт границ слов, если это не упомянуто особо. Когда у
// вас получится работающая регулярка, попробуйте её
// уменьшить.
// — car и cat — pop и prop — ferret, ferry, и ferrari — Любое
// слово, заканчивающееся на ious — Пробел, за которым
// идёт точка, запятая, двоеточие или точка с запятой. —
// Слово длинее шести букв — Слово без букв e

verify(/ca(r|t)/,
	["my car", "bad cats"],
	["camper", "high art"])
verify(/pr?op/,
	["pop culture", "mad props"],
	["plop"])
verify(/ferr(et|y|ari)/,
	["ferret", "ferry", "ferrari"],
	["ferrum", "transfer A"]);
verify(/ious\b/,
	["how delicious", "spacious room"],
	["ruinous", "consciousness"]);
verify(/\s[.,:;]/,
	["bad punctuation ."],
	["escape the dot"]);
verify(/[A-z]{7}/,
	["hottentottententen"],
	["no", "hotten totten tenten"]);
verify(/\b[^\se]+\b/,
	["red platypus", "wobbling nest"],
	["earth bed", "learning ape"]);

function verify(regexp, yes, no) {
	// Ignore unfinished exercises
	if (regexp.source == "...") return;

	yes.forEach(function(s) {
		if (!regexp.test(s)) console.log("Не нашлось '" + s + "'");
		//else console.log("all good!");
	});
	no.forEach(function(s) {
		if (regexp.test(s)) console.log("Неожиданное вхождение '" + s + "'");
		//else console.log("all good!");
	});
}