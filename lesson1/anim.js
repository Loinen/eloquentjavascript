var image = new Image(); // создание обьекта изображения
image.onload= function(){ //сохранение ссылки на изображение
	setInterval(move, 15); //создание интервала 100мсек для запуска move 
};
image.src = "1.jpg";
var x = 10; // координата изображения
var count1 = 0,
	count2 = 300;
function move(){ //функция вызываемая по таймеру
	if (count1 != 300) {
		count1 += 5;
		x=count1;
	}
	else {
		count2 -= 5;
		x=count2;
		if (count2 == 0) {
			count1 = 0;
			count2 = 300;
		}
	}
	ctx3.clearRect(0,0,canvas3.width,canvas3.height);	
	ctx3.drawImage(image, x, 10); //прорисовка изображения
}